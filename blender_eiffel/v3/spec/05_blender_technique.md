# 05 - Blender 5.2 technique for the EIF_ Eiffel build

Lens: **blender-tech**. Every snippet below was executed headless on this machine and the
output pasted verbatim (trimmed of the `BlenderMCP addon unregistered` / `Blender quit` lines).

```
Interpreter : "C:/Program Files/Blender Foundation/Blender 5.2/blender.exe" -b --python <file>   (or --python-expr "...")
Observed    : BLENDER 5.2.0 LTS  (hash fbe6228777e7 built 2026-07-14)   PY 3.13.13 (MSC v.1944 64 bit)
GPU backend : OPENGL   (bpy.context.preferences.system.gpu_backend)
```

Reproduction scripts live next to this file in `_tests/` (`t1_api.py`, `t2_gn.py`, `t3_gltf_props.py`,
`t3_export_decimate.py`, `t4_loader.py`, `t5_perf.py`, `t6_render.py`, `t7_materials.py`); proof renders are in `_tests/_out/`.
Conventions used everywhere: 1 BU = 1 m, Z up, tower axis at origin, ground z = 0, every datablock/collection we create
is prefixed `EIF_`.

---

## 0. Ten things that changed and will bite you in 5.2 (all observed)

| # | Fact (observed in 5.2.0) | Consequence |
|---|---|---|
| 1 | `scene.render.engine` enum **under-reports**: `enum_items` lists only `['BLENDER_EEVEE']`; assigning a bad value raises `TypeError ... not found in ('BLENDER_EEVEE', 'BLENDER_WORKBENCH', 'CYCLES')`. | Never introspect; assign inside `try/except TypeError`. `BLENDER_EEVEE_NEXT` is **gone** (TypeError). |
| 2 | `bpy.data.materials.new()` already returns `use_nodes=True` with a Principled BSDF + Material Output. Setting `Material.use_nodes` emits `DeprecationWarning: 'Material.use_nodes' is expected to be removed in Blender 6.0`. | Do not touch `use_nodes`; go straight to `mat.node_tree`. |
| 3 | GN `Resample Curve` mode is a **menu socket**, not a property: `resample.inputs["Mode"].default_value = "Length"`; the valid strings are the UI labels `('Evaluated', 'Count', 'Length')` (`"LENGTH"` raises TypeError). Same for `Triangulate` (`Quad Method`, `N-gon Method`). | Set menu sockets with label strings. `Curve to Points.mode`, `Mesh to Points.mode`, `Distribute.distribute_method` are still node properties. |
| 4 | `Random Value` exposes only the sockets of its current `data_type` (`Min`, `Max`, `ID`, `Seed`; one output `Value`). | Set `data_type` first, then address `inputs["Min"]`/`["Max"]`, `outputs["Value"]`. |
| 5 | `ShaderNodeMix` has many sockets named `A`/`B`/`Result` (identifiers `A_Float, A_Vector, A_Color, A_Rotation ...`). `inputs["A"]` resolves to the currently **enabled** one (`A_Color` when `data_type="RGBA"`); identifiers are **not** valid `[]` keys (`KeyError`). | Set `data_type` first, then use names; or search by `.identifier`. |
| 6 | The glTF exporter **silently drops un-realized GN instances** unless `export_gn_mesh=True`. With it on, every instance becomes a glTF node (4 800 blades -> 4 803 nodes). `export_gpu_instances=True` folds them into `EXT_mesh_gpu_instancing`. | Realize in the node tree for web assets (or use GPU instancing extension if the viewer supports it). |
| 7 | Passing `export_loglevel >= 0` to `export_scene.gltf` **crashes** (`KeyError: 'loglevel'`, `io_scene_gltf2/__init__.py:1142/1388`). | Leave it at `-1`; quiet the INFO spam with `bpy.app.debug_value = 2` (0=INFO 1=WARNING 2=ERROR 3=CRITICAL 4=DEBUG, from `set_debug_log`). |
| 8 | `export_format` valid values are `('GLB', 'GLTF_SEPARATE')`; `GLTF_EMBEDDED` is gone. Draco and MeshOptimizer bridges ship with 5.2 (`bf_intern_draco_bridge.dll`, `bf_intern_meshopt_bridge.dll`). | Always `export_format="GLB"`. |
| 9 | `bpy.ops.object.shade_smooth_by_angle(angle=...)` is now **destructive**: it sets `use_smooth=True` on all faces and writes the `sharp_edge` BOOLEAN edge attribute; it adds **no** modifier. `mesh.shade_smooth()` / `shade_flat()` exist on the datablock. | Prefer the data-level calls (no context override needed). |
| 10 | Hair `Curves` objects are exported as an **empty node** (no mesh). `diffuse_color` only drives Workbench/solid view (EEVEE renders such materials white - see `_out/t6_eevee_whole.png`). | Grass for web = instanced blade **meshes**, realized. Colour goes on Principled sockets. |

---

## 1. API facts for Blender 5.2

### 1.1 Render engine identifiers (read them, do not assume)

```python
import bpy
sc = bpy.context.scene
print("current:", sc.render.engine)
print("enum_items reported:", [i.identifier for i in bpy.types.RenderSettings.bl_rna.properties["engine"].enum_items])
for cand in ("CYCLES", "BLENDER_WORKBENCH", "BLENDER_EEVEE", "BLENDER_EEVEE_NEXT", "BOGUS_ENGINE"):
    try:
        sc.render.engine = cand
        print(f"  assign {cand!r:22} -> OK, now {sc.render.engine}")
    except TypeError as e:
        print(f"  assign {cand!r:22} -> TypeError: {e}")
```
Observed:
```
current: BLENDER_EEVEE
enum_items reported: ['BLENDER_EEVEE']
  assign 'CYCLES'               -> OK, now CYCLES
  assign 'BLENDER_WORKBENCH'    -> OK, now BLENDER_WORKBENCH
  assign 'BLENDER_EEVEE'        -> OK, now BLENDER_EEVEE
  assign 'BLENDER_EEVEE_NEXT'   -> TypeError: bpy_struct: item.attr = val: enum "BLENDER_EEVEE_NEXT" not found in ('BLENDER_EEVEE', 'BLENDER_WORKBENCH', 'CYCLES')
  assign 'BOGUS_ENGINE'         -> TypeError: bpy_struct: item.attr = val: enum "BOGUS_ENGINE" not found in ('BLENDER_EEVEE', 'BLENDER_WORKBENCH', 'CYCLES')
```
Robust setter:
```python
def set_engine(name):
    try:
        bpy.context.scene.render.engine = name
    except TypeError as e:          # message lists the valid identifiers
        raise RuntimeError(f"engine {name!r} unavailable: {e}")
```

### 1.2 Principled BSDF sockets (32 inputs, 1 output) and finding nodes by type

```python
mat = bpy.data.materials.new("T1_probe")           # 5.2: already node-based, do NOT set use_nodes
bsdf = next(n for n in mat.node_tree.nodes if n.type == "BSDF_PRINCIPLED")   # by TYPE, never by (localised) name
out  = next(n for n in mat.node_tree.nodes if n.type == "OUTPUT_MATERIAL")
for i, s in enumerate(bsdf.inputs): print(f"{i:2d}: {s.name!r:28} {s.type}")
```
Observed (`index: name type`):
```
 0: 'Base Color' RGBA        1: 'Metallic' VALUE         2: 'Roughness' VALUE        3: 'IOR' VALUE
 4: 'Alpha' VALUE            5: 'Thin Wall' BOOLEAN      6: 'Normal' VECTOR          7: 'Weight' VALUE
 8: 'Diffuse Roughness'      9: 'Subsurface Weight'     10: 'Subsurface Radius' VEC 11: 'Subsurface Scale'
12: 'Subsurface IOR'        13: 'Subsurface Anisotropy' 14: 'Specular IOR Level'    15: 'Specular Tint' RGBA
16: 'Anisotropic'           17: 'Anisotropic Rotation'  18: 'Tangent' VECTOR        19: 'Transmission Weight'
20: 'Coat Weight'           21: 'Coat Roughness'        22: 'Coat IOR'              23: 'Coat Tint' RGBA
24: 'Coat Normal' VECTOR    25: 'Sheen Weight'          26: 'Sheen Roughness'       27: 'Sheen Tint' RGBA
28: 'Emission Color' RGBA   29: 'Emission Strength'     30: 'Thin Film Thickness'   31: 'Thin Film IOR'
outputs: ['BSDF']
default tree: [('Principled BSDF','BSDF_PRINCIPLED','ShaderNodeBsdfPrincipled'), ('Material Output','OUTPUT_MATERIAL','ShaderNodeOutputMaterial')]
```
(All unlabeled types above are VALUE.) Use the **names** `bsdf.inputs["Base Color"]`, `["Roughness"]`, `["Transmission Weight"]`,
`["Coat Weight"]`, `["Emission Color"]`, `["Emission Strength"]`, `["Alpha"]`, `["Normal"]` - they are stable in 5.2.

### 1.3 `from_pydata` + `validate` + `update`, smooth shading

```python
verts = [(0,0,0),(1,0,0),(1,1,0),(0,1,0),(0.5,0.5,1)]
faces = [(0,1,2,3),(0,1,4),(1,2,4),(2,3,4),(3,0,4)]
me = bpy.data.meshes.new("EIF_Pyramid")
me.from_pydata(verts, [], faces)      # edges list may be empty; they are derived
bad = me.validate(verbose=True)       # returns True if it had to fix something
me.update()
ob = bpy.data.objects.new("EIF_Pyramid", me)

me.shade_smooth()                     # datablock-level, no operator / context needed
me.shade_flat()
me.polygons.foreach_set("use_smooth", [True]*len(me.polygons)); me.update()   # fast bulk form
```
Observed:
```
from_pydata: verts 5 edges 8 polys 5 validate_found_problems False
has Mesh.shade_smooth: True has shade_auto_smooth: False
after shade_smooth use_smooth: [True, True, True, True, True]
after shade_flat   use_smooth: [False, False, False, False, False]
after foreach_set  use_smooth: [True, True, True, True, True]
has ops.object.shade_auto_smooth: True   has ops.object.shade_smooth_by_angle: True
mesh.attributes names: ['.select_vert', 'position', '.corner_vert', '.corner_edge', '.select_poly', '.edge_verts', '.select_edge', 'sharp_face']
```
Smooth-by-angle without an operator (what `shade_smooth_by_angle` does internally in 5.2 - verified it adds no modifier
and writes `sharp_edge`):
```python
import bmesh, math
def smooth_by_angle(me, angle_deg=30):
    me.shade_smooth()
    bm = bmesh.new(); bm.from_mesh(me); bm.edges.ensure_lookup_table()
    sharp = [len(e.link_faces) == 2 and e.calc_face_angle() > math.radians(angle_deg) for e in bm.edges]
    bm.free()
    att = me.attributes.get("sharp_edge") or me.attributes.new("sharp_edge", "BOOLEAN", "EDGE")
    att.data.foreach_set("value", sharp); me.update()
```
Observed: `shade_smooth_by_angle -> {'FINISHED'} modifiers: [] use_smooth: [True x5]`, `sharp_edge attr present: True`.

### 1.4 Collections (idempotent, nested)

```python
def eif_coll(name, parent=None):
    parent = parent or bpy.context.scene.collection
    c = bpy.data.collections.get(name) or bpy.data.collections.new(name)
    if c.name not in parent.children:
        parent.children.link(c)
    return c
root  = eif_coll("EIF_Root")
tower = eif_coll("EIF_Tower", root)
tower.objects.link(ob)
```
Observed: `collections: ['Collection','EIF_Root','EIF_Tower'] scene children: ['Collection','EIF_Root'] EIF_Tower objs: ['T1_pyramid']`.

### 1.5 Unit scale

```python
us = bpy.context.scene.unit_settings
us.system = "METRIC"; us.scale_length = 1.0; us.length_unit = "METERS"
```
Observed: `unit system METRIC scale_length 1.0 length_unit METERS` - note `length_unit` enum_items also under-reports
(`['DEFAULT']`) but `"METERS"` assigns fine. 3D-view clipping is per editor: `space.clip_end = 5000` (for the 330 m tower
at 500 m camera distance; set in the live UI, not scene data). Camera: `cam.clip_end = 5000`.

---

## 2. Geometry Nodes recipes (built headless, tree contents printed)

Common group factory (interface API of 4.x/5.x):
```python
def new_gn_group(name):
    ng = bpy.data.node_groups.new(name, "GeometryNodeTree")
    ng.interface.new_socket("Geometry", in_out="INPUT",  socket_type="NodeSocketGeometry")
    ng.interface.new_socket("Geometry", in_out="OUTPUT", socket_type="NodeSocketGeometry")
    gi = ng.nodes.new("NodeGroupInput");  gi.location = (-600, 0)
    go = ng.nodes.new("NodeGroupOutput"); go.location = ( 600, 0)
    return ng, gi, go
```
Socket layouts observed in 5.2 (what you can link to):
```
GeometryNodeInstanceOnPoints   in: Points, Selection, Instance, Pick Instance, Instance Index, Rotation(ROTATION), Scale(VECTOR)  out: Instances
GeometryNodeCurveToPoints      prop mode   in: Curve, Count, Length   out: Points, Tangent, Normal, Rotation(ROTATION)
GeometryNodeMeshToPoints       prop mode ['VERTICES','EDGES','FACES','CORNERS']   in: Mesh, Selection, Position, Radius
GeometryNodeMeshToCurve        prop mode   in: Mesh, Selection   out: Curve
GeometryNodeResampleCurve      in: Curve, Selection, Mode(MENU: 'Evaluated'|'Count'|'Length'), Count, Length
GeometryNodeDistributePointsOnFaces prop distribute_method ['RANDOM','POISSON']  in: Mesh, Selection, Distance Min, Density Max, Density, Density Factor, Seed  out: Points, Normal, Rotation
GeometryNodeObjectInfo         prop transform_space  in: Object, As Instance  out: Transform, Location, Rotation, Scale, Geometry
GeometryNodeRealizeInstances   in: Geometry, Selection, Realize All, Depth
GeometryNodeInputNamedAttribute prop data_type  in: Name  out: Attribute, Exists
FunctionNodeRandomValue        prop data_type  in: Min, Max, ID, Seed  out: Value
FunctionNodeAlignRotationToVector prop axis, pivot_axis  in: Rotation, Factor, Vector  out: Rotation
GeometryNodeCollectionInfo     in: Collection, Separate Children, Reset Children  out: Instances
GeometryNodeSetMaterial        in: Geometry, Selection, Material
```

### 2(a) Rivet heads along selected edges at a fixed pitch  (`EIF_GN_RivetsOnEdges`)

Mark the edges that carry rivets with a BOOLEAN **edge** attribute from Python, then
Mesh to Curve (selection) -> Resample Curve (Length = pitch) -> Curve to Points (EVALUATED) -> Instance on Points -> Realize -> Join.

```python
import math
# --- rivet head asset: 8-sided dome r=0.015 m, h=0.012 m (ESTIMATE of a 24-28 mm head; 17 verts / 16 faces)
def rivet_mesh(r=0.015, h=0.012, n=8):
    verts = [(0, 0, h)]
    verts += [(0.75*r*math.cos(2*math.pi*i/n), 0.75*r*math.sin(2*math.pi*i/n), 0.7*h) for i in range(n)]
    verts += [(r*math.cos(2*math.pi*i/n), r*math.sin(2*math.pi*i/n), 0.0) for i in range(n)]
    faces = []
    for i in range(n):
        j = (i+1) % n
        faces += [(0, 1+i, 1+j), (1+i, 1+n+i, 1+n+j, 1+j)]
    return verts, faces
rv, rf = rivet_mesh()
rivet = mesh_obj("EIF_RivetHead", rv, rf); rivet.hide_render = True; rivet.hide_viewport = True

# --- host plate 2.0 x 0.3 m with a 'rivet_edge' edge attribute on the two long edges
plate = mesh_obj("EIF_Plate", [(0,0,0),(2,0,0),(2,0.3,0),(0,0.3,0)], [(0,1,2,3)])
me = plate.data
att = me.attributes.new("rivet_edge", "BOOLEAN", "EDGE")
sel = [abs(me.vertices[e.vertices[0]].co.y - me.vertices[e.vertices[1]].co.y) < 1e-6 for e in me.edges]
att.data.foreach_set("value", sel)

ng, gi, go = new_gn_group("EIF_GN_RivetsOnEdges"); nodes, links = ng.nodes, ng.links
named = nodes.new("GeometryNodeInputNamedAttribute"); named.data_type = "BOOLEAN"; named.inputs["Name"].default_value = "rivet_edge"
m2c  = nodes.new("GeometryNodeMeshToCurve")
rs   = nodes.new("GeometryNodeResampleCurve"); rs.inputs["Mode"].default_value = "Length"; rs.inputs["Length"].default_value = 0.10  # pitch (ESTIMATE)
c2p  = nodes.new("GeometryNodeCurveToPoints"); c2p.mode = "EVALUATED"
info = nodes.new("GeometryNodeObjectInfo"); info.inputs["Object"].default_value = rivet; info.transform_space = "ORIGINAL"
iop  = nodes.new("GeometryNodeInstanceOnPoints")
real = nodes.new("GeometryNodeRealizeInstances")
join = nodes.new("GeometryNodeJoinGeometry")
links.new(gi.outputs["Geometry"], m2c.inputs["Mesh"]);        links.new(named.outputs["Attribute"], m2c.inputs["Selection"])
links.new(m2c.outputs["Curve"], rs.inputs["Curve"]);          links.new(rs.outputs["Curve"], c2p.inputs["Curve"])
links.new(c2p.outputs["Points"], iop.inputs["Points"]);       links.new(c2p.outputs["Rotation"], iop.inputs["Rotation"])
links.new(info.outputs["Geometry"], iop.inputs["Instance"]);  links.new(iop.outputs["Instances"], real.inputs["Geometry"])
links.new(real.outputs["Geometry"], join.inputs["Geometry"]); links.new(gi.outputs["Geometry"], join.inputs["Geometry"])
links.new(join.outputs["Geometry"], go.inputs["Geometry"])
mod = plate.modifiers.new("Rivets", "NODES"); mod.node_group = ng
```
Observed:
```
rivet_edge attribute set on edges: [False, True, False, True]
Resample Mode menu rejects 'LENGTH': TypeError: ... enum "LENGTH" not found in ('Evaluated', 'Count', 'Length')
Resample Mode menu accepts 'Length' -> now 'Length'
node tree 'EIF_GN_RivetsOnEdges': 11 nodes, 11 links
  - Named Attribute  GeometryNodeInputNamedAttribute data_type=BOOLEAN
  - Mesh to Curve    GeometryNodeMeshToCurve mode=EDGES
  - Resample Curve   GeometryNodeResampleCurve
  - Curve to Points  GeometryNodeCurveToPoints mode=EVALUATED
  - Object Info      GeometryNodeObjectInfo transform_space=ORIGINAL
  - Instance on Points / Realize Instances / Join Geometry / Set Material
  link Group Input.Socket_0 -> Mesh to Curve.Mesh ... link Join Geometry.Geometry -> Group Output.Socket_1
evaluated (realized) mesh: verts=718 polys=673   expected 42 rivets x 17 verts = 714 (+4 plate verts)
realize MUTED: to_mesh verts=4  depsgraph instances from plate=42
```
Rotation note: `Curve to Points.Rotation` puts the instance's local **Z along the curve normal/tangent frame**; on a flat
flange the rivet dome stands on the plate when the rivet mesh is authored with +Z up and the host faces are +Z. For slanted
girder flanges use recipe 2(a2) (align to the face normal) or feed `Distribute Points on Faces.Rotation`.

Counting without realizing (instances are not in `to_mesh()`):
```python
dg = bpy.context.evaluated_depsgraph_get()
n = sum(1 for oi in dg.object_instances if oi.is_instance and oi.parent and oi.parent.original == plate)
```

### 2(a2) Rivets on selected vertices, oriented to the normal  (`EIF_GN_RivetsOnVerts`)
```python
ng2, gi2, go2 = new_gn_group("EIF_GN_RivetsOnVerts")
m2p   = ng2.nodes.new("GeometryNodeMeshToPoints"); m2p.mode = "VERTICES"      # add a 'rivet_vert' POINT bool attr -> Selection
iop2  = ng2.nodes.new("GeometryNodeInstanceOnPoints")
oi2   = ng2.nodes.new("GeometryNodeObjectInfo"); oi2.inputs["Object"].default_value = rivet
nrm   = ng2.nodes.new("GeometryNodeInputNormal")
align = ng2.nodes.new("FunctionNodeAlignRotationToVector"); align.axis = "Z"
join2 = ng2.nodes.new("GeometryNodeJoinGeometry")
L = ng2.links.new
L(gi2.outputs["Geometry"], m2p.inputs["Mesh"]); L(m2p.outputs["Points"], iop2.inputs["Points"])
L(oi2.outputs["Geometry"], iop2.inputs["Instance"]); L(nrm.outputs["Normal"], align.inputs["Vector"])
L(align.outputs["Rotation"], iop2.inputs["Rotation"]); L(iop2.outputs["Instances"], join2.inputs["Geometry"])
L(gi2.outputs["Geometry"], join2.inputs["Geometry"]); L(join2.outputs["Geometry"], go2.inputs["Geometry"])
```
Observed: `node tree 'EIF_GN_RivetsOnVerts': 8 nodes, 8 links`, `MeshToPoints mode enum: ['VERTICES','EDGES','FACES','CORNERS']`.

Budget rule of thumb (from the numbers above): one realized rivet = 17 verts / 16 faces (24 tris). 100 000 rivets = 2.4 M tris -
**far over the 150 k web budget**. Use rivets only on the close-up LOD / hero panels, or bake them to a normal map; for the web
GLB keep rivets as `EXT_mesh_gpu_instancing` (section 2c) or drop them.

### 2(b) Grass: instanced blade meshes with random rotation/scale  (`EIF_GN_GrassBlades`)
```python
blade = mesh_obj("EIF_GrassBlade", [(-0.004,0,0),(0.004,0,0),(0.003,0,0.05),(-0.003,0,0.05),(0.0,0.01,0.11)],
                 [(0,1,2,3),(3,2,4)])                      # 2 faces (3 tris), 0.11 m tall (ESTIMATE lawn blade)
blade.hide_render = True; blade.hide_viewport = True
lawn = mesh_obj("EIF_Lawn", [(-2,-2,0),(2,-2,0),(2,2,0),(-2,2,0)], [(0,1,2,3)])

ng3, gi3, go3 = new_gn_group("EIF_GN_GrassBlades"); N = ng3.nodes.new; L = ng3.links.new
dist = N("GeometryNodeDistributePointsOnFaces"); dist.distribute_method = "RANDOM"
dist.inputs["Density"].default_value = 300.0; dist.inputs["Seed"].default_value = 7     # blades per m2 (ESTIMATE)
oi3  = N("GeometryNodeObjectInfo"); oi3.inputs["Object"].default_value = blade
iop3 = N("GeometryNodeInstanceOnPoints")
rrot = N("FunctionNodeRandomValue"); rrot.data_type = "FLOAT_VECTOR"
rrot.inputs["Min"].default_value = (-0.15, -0.15, 0.0); rrot.inputs["Max"].default_value = (0.15, 0.15, 2*math.pi)
rsc  = N("FunctionNodeRandomValue"); rsc.data_type = "FLOAT"
rsc.inputs["Min"].default_value = 0.6; rsc.inputs["Max"].default_value = 1.4
join3 = N("GeometryNodeJoinGeometry")
L(gi3.outputs["Geometry"], dist.inputs["Mesh"]); L(dist.outputs["Points"], iop3.inputs["Points"])
L(oi3.outputs["Geometry"], iop3.inputs["Instance"])
L(rrot.outputs["Value"], iop3.inputs["Rotation"])   # vector (Euler) -> ROTATION implicit conversion works
L(rsc.outputs["Value"],  iop3.inputs["Scale"])      # float -> vector implicit
L(iop3.outputs["Instances"], join3.inputs["Geometry"]); L(gi3.outputs["Geometry"], join3.inputs["Geometry"])
L(join3.outputs["Geometry"], go3.inputs["Geometry"])
lawn.modifiers.new("Grass", "NODES").node_group = ng3
```
Observed:
```
node tree 'EIF_GN_GrassBlades': 8 nodes, 8 links
RandomValue sockets: [(0,'Min','VALUE'),(1,'Max','VALUE'),(2,'ID','INT'),(3,'Seed','INT')] outputs [('Value','VALUE')]
grass instances in depsgraph: 4800 (16 m^2 x 300/m^2 = 4800 expected)
```
Hair-curves alternative (Cycles/EEVEE only - **not exported to glTF**, verified: exporter writes an empty node, 0 meshes):
```python
hc = bpy.data.hair_curves.new("EIF_GrassHair"); hc.add_curves([3]*n_strands)
hc.points.foreach_set("position", flat_xyz_list)       # 3 points per strand
ob = bpy.data.objects.new("EIF_GrassHair", hc); scene.collection.objects.link(ob); hc.surface = lawn
```
Observed: `hair curves: Curves curves 50 points 150 attrs ['position']`.

### 2(c) What the glTF exporter does with GN instances (measured)

Scene: plate (rivets **realized** in tree) + lawn (4 800 blade instances, **not** realized). GLB inspected by parsing the JSON chunk.

| export call | bytes | nodes | meshes | tris | extensions | time |
|---|---:|---:|---:|---:|---|---:|
| `export_apply=False` | 1 396 | 3 | 2 | 4 | - | 0.18 s |
| `export_apply=True, export_gn_mesh=False` | 64 144 | 3 | 2 | 1 012 | - | 0.02 s |
| `export_apply=True, export_gn_mesh=True` | 1 283 572 | **4 803** | 3 | 1 015 | - | 1.61 s |
| `... export_gn_mesh=True, export_gpu_instances=True` | 257 444 | 4 | 3 | 1 015 | `EXT_mesh_gpu_instancing` | 1.43 s |
| `... export_gn_mesh=True, draco` | 1 226 240 | 4 803 | 3 | 1 015 | `KHR_draco_mesh_compression` | 2.34 s |
| grass **realized** in tree, `export_gn_mesh=False` | 957 084 | 3 | 2 | 15 412 | - | 0.05 s |

Reading: (1) without `export_apply` modifiers are ignored entirely (4 tris). (2) Un-realized instances vanish unless
`export_gn_mesh=True`. (3) `export_gn_mesh` makes one glTF node per instance (4 803 nodes - terrible for three.js scene graphs).
(4) `export_gpu_instances` is the compact form if the web viewer supports `EXT_mesh_gpu_instancing` (three.js GLTFLoader does;
Draco is pointless on it). (5) Realizing in the tree gives a plain mesh (15 412 tris for 4 800 blades) that Draco/meshopt then
compress well. **Recommendation for the web GLB: realize everything, then decimate/budget (section 3).**

---

## 3. glTF/GLB export in 5.2

### 3.1 Operator properties (`bpy.ops.export_scene.gltf`, 111 RNA props, dumped with `_tests/t3_gltf_props.py`)

```python
rna = bpy.ops.export_scene.gltf.get_rna_type()
for p in rna.properties: print(p.identifier, p.type, getattr(p, "default", None))
```
Full observed list (defaults in parentheses; ENUM items in brackets):
```
filepath STRING ''                    check_existing BOOL True
export_format ENUM (dynamic; valid: GLB, GLTF_SEPARATE)      export_copyright STRING ''
export_import_convert_lighting_mode ENUM 'SPEC' [SPEC,COMPAT,RAW]        gltf_export_id STRING ''
export_use_gltfpack False  export_gltfpack_tc True  export_gltfpack_tq 8  export_gltfpack_si 1.0  export_gltfpack_sa False
export_gltfpack_slb False  export_gltfpack_vp 14  export_gltfpack_vt 12  export_gltfpack_vn 8  export_gltfpack_vc 8
export_gltfpack_vpi ENUM 'Integer' [Integer,Normalized,Floating-point]  export_gltfpack_noq True  export_gltfpack_kn False
ui_tab ENUM 'GENERAL' [GENERAL,MESHES,OBJECTS,ANIMATION]
export_image_format ENUM 'AUTO' [AUTO,JPEG,WEBP,NONE]   export_image_add_webp False  export_image_webp_fallback False
export_texture_dir ''  export_jpeg_quality 75  export_image_quality 75  export_keep_originals False
export_texcoords True  export_normals True  export_gn_mesh False
export_meshopt_compression_enable False  export_meshopt_extension ENUM 'EXT_meshopt_compression' [EXT_meshopt_compression,KHR_meshopt_compression]
export_draco_mesh_compression_enable False  export_draco_mesh_compression_level 6
export_draco_position_quantization 14  export_draco_normal_quantization 10  export_draco_texcoord_quantization 12
export_draco_color_quantization 10  export_draco_generic_quantization 12
export_tangents False  export_materials ENUM 'EXPORT' [EXPORT,PLACEHOLDER,VIEWPORT,NONE]
export_unused_images False  export_unused_textures False
export_vertex_color ENUM 'MATERIAL' [MATERIAL,ACTIVE,NAME,NONE]  export_vertex_color_name 'Color'
export_all_vertex_colors True  export_active_vertex_color_when_no_material True  export_attributes False
use_mesh_edges False  use_mesh_vertices False  export_cameras False
use_selection False  use_visible False  use_renderable False
use_active_collection_with_nested True  use_active_collection False  use_active_scene False
collection STRING ''  at_collection_center False  export_extras False
export_yup True  export_apply False  export_shared_accessors False
export_animations True  export_frame_range False  export_frame_step 1  export_force_sampling True
export_sampling_interpolation_fallback ENUM 'LINEAR' [LINEAR,STEP]  export_pointer_animation False
export_animation_mode ENUM 'ACTIONS' [ACTIONS,ACTIVE_ACTIONS,BROADCAST,NLA_TRACKS,SCENE]
export_nla_strips_merged_animation_name 'Animation'  export_def_bones False  export_hierarchy_flatten_bones False
export_hierarchy_flatten_objs False  export_armature_object_remove False  export_leaf_bone False
export_optimize_animation_size True  export_optimize_animation_keep_anim_armature True
export_optimize_animation_keep_anim_object False  export_optimize_disable_viewport False
export_negative_frame ENUM 'SLIDE' [SLIDE,CROP]  export_anim_slide_to_zero False  export_bake_animation False
export_merge_animation ENUM 'ACTION' [NLA_TRACK,ACTION,NONE]  export_anim_single_armature True
export_reset_pose_bones True  export_current_frame False  export_rest_position_armature True
export_anim_scene_split_object True  export_skins True  export_influence_nb 4  export_all_influences False
export_morph True  export_morph_normal True  export_morph_tangent False  export_morph_animation True
export_morph_reset_sk_data True  export_lights False  export_try_sparse_sk True  export_try_omit_sparse_sk False
export_gpu_instances False  export_action_filter False  export_convert_animation_pointer False
export_nla_strips True  export_original_specular False  will_save_settings False
export_hierarchy_full_collections False  export_extra_animations False  export_loglevel INT -1  filter_glob '*.glb'
```
Observed error text: `export_format enum error text: Converting py args to operator properties: enum "GLTF_EMBEDDED" not found in ('GLB', 'GLTF_SEPARATE')`.

### 3.2 Recommended web export call (tested)

```python
import bpy, os
bpy.app.debug_value = 2            # ERROR-level exporter logging. NEVER pass export_loglevel>=0 (KeyError 'loglevel' bug)
WEB_GLTF = dict(
    export_format="GLB",
    export_apply=True,             # bake modifiers (Decimate, GN w/ Realize) - mandatory, otherwise raw base meshes export
    export_yup=True,               # glTF +Y up (Blender Z-up converted)
    export_cameras=False, export_lights=False,
    export_animations=False, export_skins=False, export_morph=False,
    export_materials="EXPORT", export_image_format="AUTO",
    export_texcoords=True, export_normals=True, export_tangents=False,
    export_draco_mesh_compression_enable=True, export_draco_mesh_compression_level=6,
    export_draco_position_quantization=14, export_draco_normal_quantization=10, export_draco_texcoord_quantization=12,
    use_selection=False, use_active_collection=False,
    collection="EIF_Root",         # export only our collection tree (children included) - leaves the user's scene out
    export_gn_mesh=False,          # we realize in-tree instead
)
bpy.ops.export_scene.gltf(filepath="C:/.../eiffel.glb", **WEB_GLTF)
```
Observed on the 149 997-tri test scene (3 meshes, 2 materials):
```
export result {'FINISHED'} in 6.63s -> {'kB': 335.2, 'nodes': 3, 'meshes': 3, 'materials': 2, 'tris': 149997, 'ext': ['KHR_draco_mesh_compression']}
same without Draco              in 5.16s -> {'kB': 2653.6, ... 'ext': []}
same with EXT_meshopt_compression in 5.18s -> {'kB': 1492.1, ... 'ext': ['EXT_meshopt_compression']}
DracoEncoder | Encoded 25205 vertices, 150000 indices, raw size: 904920, encoded size: 113799, compression ratio: 7.95
```
Draco: 2.65 MB -> 335 kB (7.9x). three.js needs `DRACOLoader` (decoder from `three/examples/jsm/libs/draco/`).
`use_selection`/`use_visible`/`use_renderable` are alternatives to `collection=`; selection needs `ob.select_set(True)` in a
view layer, which is fragile from MCP - prefer `collection="EIF_Root"`.

### 3.3 Decimate workflow to <= 150 000 triangles (tested, with face-count printout)

```python
def tri_count(objects, evaluated=True):
    dg = bpy.context.evaluated_depsgraph_get() if evaluated else None
    total = 0
    for ob in objects:
        if ob.type != "MESH": continue
        me = ob.evaluated_get(dg).to_mesh() if evaluated else ob.data
        total += sum(len(p.vertices) - 2 for p in me.polygons)
        if evaluated: ob.evaluated_get(dg).to_mesh_clear()
    return total

def decimate_to_budget(objects, budget=150_000, name="EIF_Decimate"):
    cur = tri_count(objects, True)
    ratio = min(1.0, budget / cur)
    for ob in objects:
        if ob.type != "MESH": continue
        m = ob.modifiers.get(name) or ob.modifiers.new(name, "DECIMATE")
        m.decimate_type = "COLLAPSE"; m.ratio = ratio; m.use_collapse_triangulate = True; m.use_symmetry = False
    print(f"decimate ratio={ratio:.4f}  before={cur:,}  after={tri_count(objects, True):,}")
    print("per-object face_count:", [(o.name, o.modifiers[name].face_count) for o in objects if o.type == "MESH"])
```
Observed:
```
before decimate   base-mesh tris= 715,806   evaluated tris= 715,806
decimate modifiers added (ratio=0.2096)
after decimate    base-mesh tris= 715,806   evaluated tris= 149,997
Decimate modifier.face_count: [('EIF_Legs', 62530), ('EIF_Arches', 50000), ('EIF_Glazing', 37467)]
decimate_type enum: ['COLLAPSE', 'UNSUBDIV', 'DISSOLVE']
```
Notes: a uniform ratio is the simplest; better quality = weight the ratio per role (e.g. keep `EIF_Glazing`/railings at 1.0,
decimate lattice fill harder). The exporter applies the modifier itself (`export_apply=True`), so the .blend keeps full detail.
To apply destructively (headless/MCP needs a context override):
```python
with bpy.context.temp_override(object=ob, active_object=ob, selected_objects=[ob]):
    bpy.ops.object.modifier_apply(modifier="EIF_Decimate")
```
Observed: `modifier_apply via temp_override -> {'FINISHED'}; EIF_Legs now polys=62530 modifiers=[]`.

GLB sanity checker (used for every table above):
```python
import json, struct, os
def glb_stats(path):
    with open(path, "rb") as f:
        f.read(12); clen, _ = struct.unpack("<I4s", f.read(8)); js = json.loads(f.read(clen))
    tris = 0
    for m in js.get("meshes", []):
        for p in m["primitives"]:
            acc = js["accessors"][p["indices"]] if "indices" in p else js["accessors"][p["attributes"]["POSITION"]]
            tris += acc["count"] // 3
    return dict(kB=round(os.path.getsize(path)/1024, 1), nodes=len(js.get("nodes", [])), meshes=len(js.get("meshes", [])),
                materials=len(js.get("materials", [])), tris=tris, ext=js.get("extensionsUsed", []))
```

---

## 4. Running module files inside the LIVE Blender via MCP `execute_blender_code`

Tested headless with a throwaway package (`_tests/t4_loader.py`): fresh import, a deliberately broken module, an on-disk edit
picked up by `importlib.reload`, then an `EIF_`-only clear that left the user's `UserStuff` collection / `Cube` / `Camera` alone.

### 4.1 Loader snippet (paste as the body of `execute_blender_code`)

```python
import bpy, sys, importlib, traceback, time
V3 = "C:/Users/Eugen/OneDrive/Desktop/Fundamentals of Web Programming2/France/blender_eiffel/v3"
if V3 not in sys.path:
    sys.path.insert(0, V3)

def eif_run(module_names, func="build", reload_first=("eif_common",)):
    """(Re)import each module and call module.<func>(). Never raises: prints the traceback and keeps going."""
    results = {}
    for name in tuple(reload_first) + tuple(module_names):
        try:
            mod = sys.modules.get(name)
            mod = importlib.reload(mod) if mod else importlib.import_module(name)   # reload picks up on-disk edits
            if name in reload_first and name not in module_names:
                continue                                                           # shared helpers: reload only
            t0 = time.perf_counter()
            out = getattr(mod, func)()
            results[name] = ("OK", round(time.perf_counter() - t0, 3), str(out)[:60])
        except Exception:
            results[name] = ("FAIL", traceback.format_exc())
            print(f"--- {name}.{func}() FAILED ---\n{traceback.format_exc()}")
    for k, v in results.items():
        print(f"[eif_run] {k:28} {v[0]} {v[1:] if v[0]=='OK' else ''}")
    return results

eif_run(["eif_tower_legs", "eif_platform1"])      # <- the modules to (re)build this round
```
Observed:
```
=== T4 run 1 (fresh import)
--- eif_broken.build() FAILED ---
Traceback (most recent call last):
  File ".../t4_loader.py", line 51, in eif_run
    out = getattr(mod, func)()
  File ".../_out/fake_v3/eif_broken.py", line 3, in build
    return 1/0
ZeroDivisionError: division by zero
[eif_run] eif_tower_legs               OK (0.0, '<bpy_struct, Object("EIF_Leg") at 0x...>')
[eif_run] eif_broken                   FAIL
=== T4 run 2 (after editing eif_common.py on disk -> reload picks it up)
[eif_run] eif_tower_legs               OK (0.0, '<bpy_struct, Object("EIF_Leg.001") ...>')
  eif_common.VERSION after reload = 2
```
Rules for module authors: every module exposes `build()`; it must be **idempotent** (call `eif_clear_collection("EIF_Legs")`
or reuse datablocks by name at the top - note the `.001` suffix above when a module is run twice without clearing);
return the root object/collection. Module-level constants go in `eif_common.py` (reloaded first). Reload order matters: a
module that did `from eif_common import X` keeps the stale `X` - always use `import eif_common` + `eif_common.X`.
MCP output is the printed stdout, so print a one-line summary (`verts/tris/time`) at the end of `build()`.

### 4.2 Clear only our own collections (prefix `EIF_`)

```python
def eif_clear(prefix="EIF_", purge_data=True):
    import bpy
    victims = [c for c in bpy.data.collections if c.name.startswith(prefix)]
    objs = set()
    for c in victims: objs.update(c.all_objects)                       # recursive
    objs.update(o for o in bpy.data.objects if o.name.startswith(prefix))   # strays linked elsewhere
    datas = {(type(o.data).__name__, o.data) for o in objs if o.data}
    for o in objs: bpy.data.objects.remove(o, do_unlink=True)
    for c in victims:
        if c.name in bpy.data.collections: bpy.data.collections.remove(c)
    n = 0
    if purge_data:
        for _, d in datas:
            if d.users == 0:
                store = {"Mesh": bpy.data.meshes, "Curves": bpy.data.hair_curves, "Curve": bpy.data.curves,
                         "Camera": bpy.data.cameras, "Light": bpy.data.lights}.get(type(d).__name__)
                if store is not None: store.remove(d); n += 1
        for store in (bpy.data.materials, bpy.data.node_groups, bpy.data.images, bpy.data.meshes):
            for d in [d for d in store if d.name.startswith(prefix) and d.users == 0]:
                store.remove(d); n += 1
    print(f"[eif_clear] removed {len(objs)} objects, {len(victims)} collections, {n} data-blocks")
```
Observed:
```
[eif_clear] removed 2 objects, 2 collections, 4 data-blocks
objects after: ['Camera', 'Cube', 'Light', 'UserObj']      collections after: ['Collection', 'UserStuff']
meshes after: ['Cube', 'UserMesh'] materials: ['Dots Stroke', 'Material'] node_groups: []
```
Do **not** use `bpy.data.orphans_purge()` - it would also delete the user's orphans. To clear a single module's output,
call `eif_clear("EIF_Legs")` (prefix match works per sub-collection as long as names nest: `EIF_Legs`, `EIF_Legs_Rivets`...).

---

## 5. Performance (measured, headless, this machine)

```python
# _tests/t5_perf.py - 600 x 500 grid = 300 000 verts / 298 901 quads (597 802 tris)
me = bpy.data.meshes.new("T5_grid"); me.from_pydata(verts, [], faces); me.validate(); me.update()
```
Observed:
```
=== T5 from_pydata  verts=300000 polys=298901 tris~=597802
  python build lists : 0.300s
  from_pydata        : 0.699s
  validate+update    : 0.115s  (problems=False)
  object new+link    : 0.000s
  TOTAL              : 1.115s
=== T5 foreach_set  verts=300000 polys=298901 edges=598900 time=0.317s
=== T5 2000 linked objects sharing 1 mesh + view_layer.update: 0.236s
```
Faster path when you already have flat arrays (2.2x faster than from_pydata):
```python
me = bpy.data.meshes.new(name)
me.vertices.add(nv);  me.vertices.foreach_set("co", flat_xyz)               # len 3*nv
me.loops.add(nl);     me.loops.foreach_set("vertex_index", flat_face_indices)
me.polygons.add(nf);  me.polygons.foreach_set("loop_start", loop_starts); me.polygons.foreach_set("loop_total", loop_totals)
me.update(calc_edges=True)
```
Batching rules that follow from the numbers:
* Building is cheap (~2.3 µs/vert); the cost that hurts is **object count** in the outliner/depsgraph and per-object draw
  calls. Target **one mesh object per material/role per module** (e.g. `EIF_Leg_NE_Lattice`, `EIF_Plat1_Deck`,
  `EIF_Plat1_Rail`), accumulate verts/faces in Python lists, emit once. 2 000 linked objects cost only 0.24 s to link, but each
  becomes a glTF node and a three.js draw call - avoid.
* Repeated small parts (rivets, balusters, lamp brackets) -> one source mesh + GN `Instance on Points` (+ Realize before export).
* Keep `validate()` on; it caught nothing here but it guards against degenerate faces from procedural code.
* Live-viewport tips (property names verified to exist in 5.2): `space.overlay.show_overlays = False`;
  `space.shading.type = 'SOLID'` (enum `WIREFRAME/SOLID/MATERIAL/RENDERED`); `scene.render.use_simplify = True` +
  `simplify_subdivision = 0` (also `simplify_child_particles`, `simplify_volumes`, `use_simplify_normals`); heavy helper
  objects `ob.display_type = 'BOUNDS'` (enum `BOUNDS/WIRE/SOLID/TEXTURED`); `space.clip_end = 5000` for the 330 m model.
  Keep EEVEE out of the viewport while building; use Workbench renders (section 6) for checks.

---

## 6. Rendering previews headless (tested)

Command line (900x1200 PNG, Workbench and EEVEE):
```
cd "<spec>/_tests" && "C:/Program Files/Blender Foundation/Blender 5.2/blender.exe" -b --python t6_render.py
```
Or against a saved file: `blender.exe -b scene.blend --python render_previews.py` (the helpers below are engine-agnostic).

```python
import bpy, math, os, time
from mathutils import Vector

def eif_camera(name, target, distance, azimuth_deg, elevation_deg, focal_mm=35, clip_end=5000):
    """Camera orbiting `target` (m). azimuth 0 = camera on +X looking toward -X; elevation above the horizon."""
    target = Vector(target); az, el = math.radians(azimuth_deg), math.radians(elevation_deg)
    pos = target + Vector((math.cos(az)*math.cos(el), math.sin(az)*math.cos(el), math.sin(el))) * distance
    cam_d = bpy.data.cameras.get(name) or bpy.data.cameras.new(name)
    cam_d.lens = focal_mm; cam_d.clip_start = 0.05; cam_d.clip_end = clip_end; cam_d.sensor_fit = "VERTICAL"
    cam = bpy.data.objects.get(name) or bpy.data.objects.new(name, cam_d)
    if cam.name not in bpy.context.scene.collection.objects: bpy.context.scene.collection.objects.link(cam)
    cam.location = pos
    cam.rotation_euler = (target - pos).to_track_quat("-Z", "Y").to_euler()
    return cam

def eif_render(path, cam, engine="BLENDER_WORKBENCH", w=900, h=1200, samples=16):
    sc = bpy.context.scene
    sc.camera = cam; sc.render.engine = engine
    sc.render.resolution_x, sc.render.resolution_y, sc.render.resolution_percentage = w, h, 100
    sc.render.image_settings.file_format = "PNG"; sc.render.image_settings.color_mode = "RGB"
    sc.render.filepath = path
    if engine == "BLENDER_WORKBENCH":
        sh = sc.display.shading
        sh.light = "STUDIO"; sh.color_type = "MATERIAL"; sh.show_cavity = True; sh.show_shadows = True
        sc.display.render_aa = "8"                      # enum: OFF, FXAA, 5, 8, 11, 16, 32
    elif engine == "BLENDER_EEVEE":
        sc.eevee.taa_render_samples = samples; sc.eevee.use_shadows = True
    t0 = time.perf_counter(); bpy.ops.render.render(write_still=True); dt = time.perf_counter() - t0
    print(f"[eif_render] {engine:17} {w}x{h} -> {path}  {os.path.getsize(path)/1024:.0f} kB in {dt:.2f}s")
    return dt

# whole tower: target mid-height, 520 m away, 12 deg up, 35 mm ; close-up: 9 m from the lamp at 50 mm
whole = eif_camera("EIF_Cam_Whole", (0, 0, 150), 520, -60, 12, focal_mm=35)
close = eif_camera("EIF_Cam_Lamp",  (40, -40, 2),   9, -120, 10, focal_mm=50)
eif_render(".../t6_workbench_whole.png", whole, "BLENDER_WORKBENCH")
eif_render(".../t6_workbench_lamp.png",  close, "BLENDER_WORKBENCH")
eif_render(".../t6_eevee_whole.png",     whole, "BLENDER_EEVEE", samples=16)
```
Observed (first ever run = cold shader cache; second run = warm):
```
render_aa enum: ['OFF','FXAA','5','8','11','16','32']   shading.light: ['STUDIO','MATCAP','FLAT']  color_type: ['MATERIAL','OBJECT','RANDOM','VERTEX','TEXTURE','SINGLE']
[eif_render] BLENDER_WORKBENCH 900x1200 -> t6_workbench_whole.png  717 kB in 3.78s     (warm run: 1.49s; re-render in-process: 0.12s)
[eif_render] BLENDER_WORKBENCH 900x1200 -> t6_workbench_lamp.png   802 kB in 0.20s     (warm: 0.14s)
[eif_render] BLENDER_EEVEE     900x1200 -> t6_eevee_whole.png      875 kB in 30.60s    (warm run: 0.49s; re-render 16 spl: 0.28s, 8 spl: 0.26s)
GPU backend: OPENGL
```
Whole-process wall time for `t6_render.py` (startup + build + 3 renders): about 7 s warm, about 40 s on the very first
EEVEE run (shader compilation, cached on disk afterwards). Workbench needs no lights/world; EEVEE needs a Sun + World
(set in the script) and node-based colours - the proof image `_out/t6_eevee_whole.png` is white because the stand-in
materials only had `diffuse_color`. For author checks use Workbench with `color_type="MATERIAL"` (reads `diffuse_color`,
so set it on every material - section 7 does).

Camera presets for the real model (ESTIMATES for framing): whole = target (0,0,160), distance 560, az -55, el 10, 35 mm;
1st floor underside = target (0,0,45), distance 120, az -30, el -20, 28 mm; lamp/bench vignette = target at the lamp base
+1.5 m, distance 8, 50 mm; summit = target (0,0,300), distance 90, el 15, 85 mm.

---

## 7. Materials (tested; node list printed after creation)

Helpers (5.2-safe: no `use_nodes`, nodes found by type, texture coordinates from `Object` so no UVs are needed):
```python
def _tree(name):
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    if mat.node_tree is None: mat.use_nodes = True        # never true in 5.2; kept for older files
    nt = mat.node_tree; nt.nodes.clear()
    out  = nt.nodes.new("ShaderNodeOutputMaterial"); out.location = (600, 0)
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled"); bsdf.location = (300, 0)
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat, nt.nodes, nt.links, bsdf, out

def _texcoord(nodes, links, scale=1.0):
    tc = nodes.new("ShaderNodeTexCoord"); mp = nodes.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (scale,)*3
    links.new(tc.outputs["Object"], mp.inputs["Vector"]); return mp

def _ramp(nodes, stops):                      # stops: [(pos, (r,g,b,a)), ...]
    r = nodes.new("ShaderNodeValToRGB"); el = r.color_ramp.elements
    while len(el) > 1: el.remove(el[-1])
    el[0].position, el[0].color = stops[0]
    for pos, col in stops[1:]: e = el.new(pos); e.color = col
    return r

def _mix_rgb(nodes, blend="MIX"):
    mx = nodes.new("ShaderNodeMix"); mx.data_type = "RGBA"; mx.blend_type = blend; return mx   # then inputs["A"/"B"], outputs["Result"]
```

### 7.1 Eiffel brown weathered iron - `mat_eiffel_iron()`
```python
def mat_eiffel_iron(name="EIF_Iron_Brown"):
    mat, nodes, links, bsdf, out = _tree(name)
    mp   = _texcoord(nodes, links, 1.0)
    big  = nodes.new("ShaderNodeTexNoise"); big.inputs["Scale"].default_value = 0.35;  big.inputs["Detail"].default_value = 3.0; big.inputs["Roughness"].default_value = 0.55
    fine = nodes.new("ShaderNodeTexNoise"); fine.inputs["Scale"].default_value = 60.0; fine.inputs["Detail"].default_value = 6.0; fine.inputs["Roughness"].default_value = 0.7
    links.new(mp.outputs["Vector"], big.inputs["Vector"]); links.new(mp.outputs["Vector"], fine.inputs["Vector"])
    # "Brun Tour Eiffel": three graded browns, darkest at the base (toureiffel.paris: the tower is painted in 3 shades,
    # lighter toward the top). Linear RGB values below are ESTIMATES eyeballed from official photos; no RGB is published.
    ramp = _ramp(nodes, [(0.0, (0.060, 0.034, 0.020, 1)), (0.5, (0.120, 0.072, 0.040, 1)), (1.0, (0.230, 0.150, 0.085, 1))])
    links.new(big.outputs["Fac"], ramp.inputs["Fac"])
    mix = _mix_rgb(nodes, "MULTIPLY"); mix.inputs["Factor"].default_value = 0.35
    links.new(ramp.outputs["Color"], mix.inputs["A"]); links.new(fine.outputs["Color"], mix.inputs["B"])
    links.new(mix.outputs["Result"], bsdf.inputs["Base Color"])
    rr = nodes.new("ShaderNodeMapRange"); rr.inputs["To Min"].default_value = 0.45; rr.inputs["To Max"].default_value = 0.75
    links.new(fine.outputs["Fac"], rr.inputs["Value"]); links.new(rr.outputs["Result"], bsdf.inputs["Roughness"])
    bsdf.inputs["Metallic"].default_value = 0.15
    bump = nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.25; bump.inputs["Distance"].default_value = 0.002
    links.new(fine.outputs["Fac"], bump.inputs["Height"]); links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    mat.diffuse_color = (0.12, 0.072, 0.04, 1)       # Workbench colour
    return mat
```
For the three official shades make three materials from this function and shift the ramp by tier (base / middle / top).

### 7.2-7.6 Glass, painted cast-iron green, wood slats, gravel, grass
```python
def mat_glass(name="EIF_Glass"):
    mat, nodes, links, bsdf, out = _tree(name)
    bsdf.inputs["Base Color"].default_value = (0.85, 0.92, 0.95, 1)
    bsdf.inputs["Transmission Weight"].default_value = 1.0; bsdf.inputs["Roughness"].default_value = 0.05
    bsdf.inputs["IOR"].default_value = 1.45; bsdf.inputs["Alpha"].default_value = 0.25   # glTF -> alphaMode BLEND
    mat.surface_render_method = "BLENDED"          # exists in 5.2 (EEVEE transparency); blend_method also still exists
    mat.diffuse_color = (0.8, 0.9, 0.95, 0.3); return mat

def mat_cast_iron_green(name="EIF_CastIron_Green"):   # Paris street-furniture green (ESTIMATE ~#2F4A35)
    mat, nodes, links, bsdf, out = _tree(name); mp = _texcoord(nodes, links)
    n = nodes.new("ShaderNodeTexNoise"); n.inputs["Scale"].default_value = 45.0; n.inputs["Detail"].default_value = 5.0
    links.new(mp.outputs["Vector"], n.inputs["Vector"])
    ramp = _ramp(nodes, [(0.0, (0.025, 0.060, 0.032, 1)), (1.0, (0.060, 0.110, 0.065, 1))])
    links.new(n.outputs["Fac"], ramp.inputs["Fac"]); links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.35; bsdf.inputs["Metallic"].default_value = 0.2; bsdf.inputs["Coat Weight"].default_value = 0.3
    bump = nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.15; bump.inputs["Distance"].default_value = 0.001
    links.new(n.outputs["Fac"], bump.inputs["Height"]); links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    mat.diffuse_color = (0.04, 0.09, 0.05, 1); return mat

def mat_wood_slats(name="EIF_Wood_Slats"):
    mat, nodes, links, bsdf, out = _tree(name); mp = _texcoord(nodes, links)
    wave = nodes.new("ShaderNodeTexWave"); wave.wave_type = "BANDS"; wave.bands_direction = "X"
    wave.inputs["Scale"].default_value = 18.0; wave.inputs["Distortion"].default_value = 6.0
    wave.inputs["Detail"].default_value = 3.0; wave.inputs["Detail Scale"].default_value = 2.0
    links.new(mp.outputs["Vector"], wave.inputs["Vector"])
    ramp = _ramp(nodes, [(0.0, (0.16, 0.085, 0.040, 1)), (0.55, (0.30, 0.17, 0.08, 1)), (1.0, (0.42, 0.26, 0.13, 1))])
    links.new(wave.outputs["Fac"], ramp.inputs["Fac"]); links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.6
    bump = nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.2; bump.inputs["Distance"].default_value = 0.001
    links.new(wave.outputs["Fac"], bump.inputs["Height"]); links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    mat.diffuse_color = (0.3, 0.17, 0.08, 1); return mat

def mat_gravel(name="EIF_Gravel"):
    mat, nodes, links, bsdf, out = _tree(name); mp = _texcoord(nodes, links)
    vor = nodes.new("ShaderNodeTexVoronoi"); vor.feature = "F1"; vor.distance = "EUCLIDEAN"; vor.inputs["Scale"].default_value = 120.0
    n = nodes.new("ShaderNodeTexNoise"); n.inputs["Scale"].default_value = 3.0
    links.new(mp.outputs["Vector"], vor.inputs["Vector"]); links.new(mp.outputs["Vector"], n.inputs["Vector"])
    ramp = _ramp(nodes, [(0.0, (0.35, 0.32, 0.27, 1)), (1.0, (0.62, 0.58, 0.50, 1))]); links.new(n.outputs["Fac"], ramp.inputs["Fac"])
    mix = _mix_rgb(nodes, "MULTIPLY"); mix.inputs["Factor"].default_value = 0.5
    links.new(ramp.outputs["Color"], mix.inputs["A"]); links.new(vor.outputs["Color"], mix.inputs["B"]); links.new(mix.outputs["Result"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.9
    bump = nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.6; bump.inputs["Distance"].default_value = 0.01
    links.new(vor.outputs["Distance"], bump.inputs["Height"]); links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    mat.diffuse_color = (0.5, 0.46, 0.4, 1); return mat

def mat_grass(name="EIF_Grass"):
    mat, nodes, links, bsdf, out = _tree(name); mp = _texcoord(nodes, links)
    n = nodes.new("ShaderNodeTexNoise"); n.inputs["Scale"].default_value = 2.5; n.inputs["Detail"].default_value = 4.0
    links.new(mp.outputs["Vector"], n.inputs["Vector"])
    ramp = _ramp(nodes, [(0.0, (0.030, 0.090, 0.015, 1)), (0.5, (0.060, 0.160, 0.025, 1)), (1.0, (0.120, 0.220, 0.040, 1))])
    links.new(n.outputs["Fac"], ramp.inputs["Fac"]); links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.8; bsdf.inputs["Subsurface Weight"].default_value = 0.15
    mat.diffuse_color = (0.06, 0.16, 0.03, 1); return mat
```
Observed (`_tests/t7_materials.py`):
```
=== T7.0 new material: use_nodes= True node_tree= <ShaderNodeTree("Shader Nodetree")> has surface_render_method: True has blend_method: True
  setting use_nodes=True warnings: ["'Material.use_nodes' is expected to be removed in Blender 6.0"]
=== T7 Mix node socket identifiers (RGBA mode): [('Factor_Float','Factor',VALUE,True), ('Factor_Vector',...,False), ('A_Float',...,False), ('B_Float',...,False),
    ('A_Vector',...,False), ('B_Vector',...,False), ('A_Color','A','RGBA',True), ('B_Color','B','RGBA',True), ('A_Rotation',...,False), ('B_Rotation',...,False)]
=== T7 EIF_Iron_Brown      nodes=10 links=12 | ['OutputMaterial','BsdfPrincipled','TexCoord','Mapping','TexNoise','TexNoise','ValToRGB','Mix','MapRange','Bump'] | BSDF linked inputs=['Base Color','Roughness','Normal']
=== T7 EIF_Glass           nodes= 2 links= 1 | ['OutputMaterial','BsdfPrincipled'] | BSDF linked inputs=[]
=== T7 EIF_CastIron_Green  nodes= 7 links= 7 | ['OutputMaterial','BsdfPrincipled','TexCoord','Mapping','TexNoise','ValToRGB','Bump'] | BSDF linked inputs=['Base Color','Normal']
=== T7 EIF_Wood_Slats      nodes= 7 links= 7 | ['OutputMaterial','BsdfPrincipled','TexCoord','Mapping','TexWave','ValToRGB','Bump'] | BSDF linked inputs=['Base Color','Normal']
=== T7 EIF_Gravel          nodes= 9 links=10 | ['OutputMaterial','BsdfPrincipled','TexCoord','Mapping','TexVoronoi','TexNoise','ValToRGB','Mix','Bump'] | BSDF linked inputs=['Base Color','Normal']
=== T7 EIF_Grass           nodes= 6 links= 5 | ['OutputMaterial','BsdfPrincipled','TexCoord','Mapping','TexNoise','ValToRGB'] | BSDF linked inputs=['Base Color']
Mix check: inputs['A'] resolves to identifier A_Color (enabled True); link to A_Color valid True
```
glTF caveat (**measured**): procedural nodes (Noise/Voronoi/Wave/Bump) are not exported, and worse, any Principled socket
that is *linked* to them is **omitted from the GLB altogether** (falls back to the glTF default: white base colour,
roughness 1.0). Exporting a mesh carrying `EIF_Iron_Brown` + `EIF_Glass`:
```
=== glTF materials: [{"doubleSided": true, "name": "EIF_Iron_Brown", "pbrMetallicRoughness": {"metallicFactor": 0.15}},
                     {"alphaMode": "BLEND", "doubleSided": true, "extensions": {"KHR_materials_transmission": {"transmissionFactor": 1},
                      "KHR_materials_ior": {"ior": 1.45}}, "name": "EIF_Glass",
                      "pbrMetallicRoughness": {"baseColorFactor": [0.85, 0.92, 0.95, 0.25], "metallicFactor": 0, "roughnessFactor": 0.05}}]
=== textures/images in GLB: 0 0 extensionsUsed: ['KHR_materials_transmission', 'KHR_materials_ior']
```
So glass (constants only) round-trips perfectly; iron loses colour and roughness. For the web build either
(a) run `eif_web_flatten()` below right before export (unlinks Base Color/Roughness/Normal and writes the ramp mid-tone as a
constant - fine at tower scale), or (b) bake Base Color/Roughness/Normal to 2k images (Cycles `bpy.ops.object.bake`, needs
UVs) and wire `ShaderNodeTexImage` nodes - plan that as a separate step.
```python
WEB_CONSTANTS = {   # linear RGB + roughness used when flattening for glTF (ESTIMATES matching the ramps above)
    "EIF_Iron_Brown": ((0.120, 0.072, 0.040, 1), 0.60), "EIF_CastIron_Green": ((0.040, 0.085, 0.048, 1), 0.35),
    "EIF_Wood_Slats": ((0.30, 0.17, 0.08, 1), 0.60),   "EIF_Gravel": ((0.48, 0.45, 0.38, 1), 0.90),
    "EIF_Grass": ((0.060, 0.160, 0.025, 1), 0.80),
}
def eif_web_flatten(prefix="EIF_"):
    """Unlink procedural inputs so the exporter writes constant PBR factors. Call on a COPY of the file or re-run the
    material builders afterwards (they rebuild the tree from scratch)."""
    for mat in bpy.data.materials:
        if not mat.name.startswith(prefix) or mat.node_tree is None: continue
        bsdf = next((n for n in mat.node_tree.nodes if n.type == "BSDF_PRINCIPLED"), None)
        if bsdf is None: continue
        col, rough = WEB_CONSTANTS.get(mat.name, (tuple(mat.diffuse_color), 0.6))
        for sock_name, value in (("Base Color", col), ("Roughness", rough), ("Normal", None)):
            s = bsdf.inputs[sock_name]
            for l in list(s.links): mat.node_tree.links.remove(l)
            if value is not None: s.default_value = value
```
Observed after `eif_web_flatten()` + export of the same iron mesh:
```
=== after eif_web_flatten: [{"doubleSided": true, "name": "EIF_Iron_Brown", "pbrMetallicRoughness": {"baseColorFactor": [0.12, 0.072, 0.04, 1], "metallicFactor": 0.15, "roughnessFactor": 0.6}}]
```

---

## 8. Open points for the orchestrator

1. Baking the procedural materials to textures for glTF is untested here (Cycles bake headless needs a UV layer per
   object; object-space coords used above have no UVs).
2. `EXT_mesh_gpu_instancing` export works (257 kB for 4 800 blades) but the website's loader must enable it - verify in
   the Next.js three.js setup before relying on it; otherwise realize.
3. Rivet LOD policy (realize vs instance vs normal map) depends on the final count from the geometry spec; at 24 tris per
   rivet the realized web budget allows at most ~2 000 rivets inside 150 k tris with nothing else.
4. The user's live Blender holds the MCP addon on the main thread: long builds (>10 s) block the UI; split modules so each
   `build()` stays under a few seconds, or build in headless Blender and `bpy.ops.wm.append` the collection into the live file.
