"""T2 - Geometry Nodes recipes + glTF instancing behaviour (Blender 5.2 headless).
Run: blender.exe -b --python t2_gn.py
"""
import bpy, math, os, json, struct, time, tempfile

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_out")
os.makedirs(OUT, exist_ok=True)

# fresh scene
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene

def mesh_obj(name, verts, faces, coll=None):
    me = bpy.data.meshes.new(name)
    me.from_pydata(verts, [], faces)
    me.validate(); me.update()
    ob = bpy.data.objects.new(name, me)
    (coll or sc.collection).objects.link(ob)
    return ob

def dump_tree(ng):
    print(f"  node tree {ng.name!r}: {len(ng.nodes)} nodes, {len(ng.links)} links")
    for n in ng.nodes:
        extra = ""
        for attr in ("mode", "data_type", "domain", "distribute_method", "transform_space"):
            if hasattr(n, attr):
                extra += f" {attr}={getattr(n, attr)}"
        print(f"    - {n.name:24} {n.bl_idname:36}{extra}")
    for l in ng.links:
        print(f"    link {l.from_node.name}.{l.from_socket.identifier} -> {l.to_node.name}.{l.to_socket.identifier}")

def new_gn_group(name):
    ng = bpy.data.node_groups.new(name, "GeometryNodeTree")
    ng.interface.new_socket("Geometry", in_out="INPUT", socket_type="NodeSocketGeometry")
    ng.interface.new_socket("Geometry", in_out="OUTPUT", socket_type="NodeSocketGeometry")
    gi = ng.nodes.new("NodeGroupInput"); gi.location = (-600, 0)
    go = ng.nodes.new("NodeGroupOutput"); go.location = (600, 0)
    return ng, gi, go

# ---------------------------------------------------------------- rivet head
# low-poly rivet: 6-sided dome, radius 0.015 m (ESTIMATE of a 24-28 mm head), height 0.012
def rivet_mesh():
    r, h, n = 0.015, 0.012, 8
    verts = [(0, 0, h)]
    ring = [(r * math.cos(2 * math.pi * i / n), r * math.sin(2 * math.pi * i / n), 0.0) for i in range(n)]
    mid = [(0.75 * r * math.cos(2 * math.pi * i / n), 0.75 * r * math.sin(2 * math.pi * i / n), 0.7 * h) for i in range(n)]
    verts += mid + ring
    faces = []
    for i in range(n):
        j = (i + 1) % n
        faces.append((0, 1 + i, 1 + j))
        faces.append((1 + i, 1 + n + i, 1 + n + j, 1 + j))
    return verts, faces

rv, rf = rivet_mesh()
rivet = mesh_obj("EIF_RivetHead", rv, rf)
rivet.hide_render = True; rivet.hide_viewport = True   # source asset only

# ---------------------------------------------------------------- host mesh: a 2 m x 0.3 m "girder flange" plate
plate = mesh_obj("EIF_Plate", [(0, 0, 0), (2, 0, 0), (2, 0.3, 0), (0, 0.3, 0)], [(0, 1, 2, 3)])
# mark edges that should carry rivets with a boolean EDGE attribute (set from python)
me = plate.data
att = me.attributes.new("rivet_edge", "BOOLEAN", "EDGE")
sel = []
for e in me.edges:
    a, b = me.vertices[e.vertices[0]].co, me.vertices[e.vertices[1]].co
    sel.append(abs(a.y - b.y) < 1e-6)          # the two long edges (along X)
att.data.foreach_set("value", sel)
print("=== T2.a rivet_edge attribute set on edges:", sel)

# ---------------------------------------------------------------- (a) GN: rivets along selected edges at fixed pitch
ng, gi, go = new_gn_group("EIF_GN_RivetsOnEdges")
nodes, links = ng.nodes, ng.links
named = nodes.new("GeometryNodeInputNamedAttribute"); named.data_type = "BOOLEAN"
named.inputs["Name"].default_value = "rivet_edge"
m2c = nodes.new("GeometryNodeMeshToCurve")
resample = nodes.new("GeometryNodeResampleCurve")
# 5.2: 'mode' is a MENU socket, not a node property. Valid values are the UI labels.
for cand in ("LENGTH", "Length"):
    try:
        resample.inputs["Mode"].default_value = cand
        print(f"  Resample Mode menu accepts {cand!r} -> now {resample.inputs['Mode'].default_value!r}")
        break
    except Exception as e:
        print(f"  Resample Mode menu rejects {cand!r}: {type(e).__name__}: {str(e)[:120]}")
resample.inputs["Length"].default_value = 0.10       # rivet pitch 100 mm (ESTIMATE; Eiffel drawings show ~3-4 diameters)
c2p = nodes.new("GeometryNodeCurveToPoints"); c2p.mode = "EVALUATED"
objinfo = nodes.new("GeometryNodeObjectInfo"); objinfo.inputs["Object"].default_value = rivet
objinfo.transform_space = "ORIGINAL"
iop = nodes.new("GeometryNodeInstanceOnPoints")
# rivet local +Z must point along the surface normal. Curve-to-Points gives a rotation whose
# local Z = curve normal, local Y = tangent... we rotate the instance so its +Z = plate normal.
# Simplest robust approach for flat flanges: use Align Rotation to Vector with the mesh normal.
realize = nodes.new("GeometryNodeRealizeInstances")
join = nodes.new("GeometryNodeJoinGeometry")
setmat = nodes.new("GeometryNodeSetMaterial")
links.new(gi.outputs["Geometry"], m2c.inputs["Mesh"])
links.new(named.outputs["Attribute"], m2c.inputs["Selection"])
links.new(m2c.outputs["Curve"], resample.inputs["Curve"])
links.new(resample.outputs["Curve"], c2p.inputs["Curve"])
links.new(c2p.outputs["Points"], iop.inputs["Points"])
links.new(c2p.outputs["Rotation"], iop.inputs["Rotation"])
links.new(objinfo.outputs["Geometry"], iop.inputs["Instance"])
links.new(iop.outputs["Instances"], realize.inputs["Geometry"])
links.new(realize.outputs["Geometry"], join.inputs["Geometry"])
links.new(gi.outputs["Geometry"], join.inputs["Geometry"])
links.new(join.outputs["Geometry"], go.inputs["Geometry"])
mod = plate.modifiers.new("Rivets", "NODES"); mod.node_group = ng
print("=== T2.a GN rivets-on-edges built")
dump_tree(ng)

# evaluate and count
dg = bpy.context.evaluated_depsgraph_get()
ev = plate.evaluated_get(dg)
evme = ev.to_mesh()
print(f"  evaluated (realized) mesh: verts={len(evme.vertices)} polys={len(evme.polygons)}  "
      f"expected rivets = 2 edges x 2.0m / 0.10m ~= {2*int(2.0/0.10)+2} x 17 verts = {(2*int(2.0/0.10)+2)*17}")
ev.to_mesh_clear()
# without realize: instances are not in to_mesh(); count via depsgraph object_instances
realize.mute = True
dg = bpy.context.evaluated_depsgraph_get()
n_inst = sum(1 for oi in dg.object_instances if oi.is_instance and oi.parent and oi.parent.original == plate)
ev = plate.evaluated_get(dg); evme = ev.to_mesh()
print(f"  realize MUTED: to_mesh verts={len(evme.vertices)}  depsgraph instances from plate={n_inst}")
ev.to_mesh_clear()
realize.mute = False

# ---------------------------------------------------------------- (a2) Mesh to Points on vertices with selection
ng2, gi2, go2 = new_gn_group("EIF_GN_RivetsOnVerts")
m2p = ng2.nodes.new("GeometryNodeMeshToPoints"); m2p.mode = "VERTICES"
iop2 = ng2.nodes.new("GeometryNodeInstanceOnPoints")
oi2 = ng2.nodes.new("GeometryNodeObjectInfo"); oi2.inputs["Object"].default_value = rivet
nrm = ng2.nodes.new("GeometryNodeInputNormal")
align = ng2.nodes.new("FunctionNodeAlignRotationToVector"); align.axis = "Z"
join2 = ng2.nodes.new("GeometryNodeJoinGeometry")
ng2.links.new(gi2.outputs["Geometry"], m2p.inputs["Mesh"])
ng2.links.new(m2p.outputs["Points"], iop2.inputs["Points"])
ng2.links.new(oi2.outputs["Geometry"], iop2.inputs["Instance"])
ng2.links.new(nrm.outputs["Normal"], align.inputs["Vector"])
ng2.links.new(align.outputs["Rotation"], iop2.inputs["Rotation"])
ng2.links.new(iop2.outputs["Instances"], join2.inputs["Geometry"])
ng2.links.new(gi2.outputs["Geometry"], join2.inputs["Geometry"])
ng2.links.new(join2.outputs["Geometry"], go2.inputs["Geometry"])
print("=== T2.a2 Mesh-to-Points(VERTICES) + Align Rotation to Vector(normal) built")
dump_tree(ng2)
print("  MeshToPoints mode enum:", [i.identifier for i in m2p.bl_rna.properties["mode"].enum_items])
print("  DistributePoints method enum:", [i.identifier for i in bpy.types.GeometryNodeDistributePointsOnFaces.bl_rna.properties["distribute_method"].enum_items])
print("  InstanceOnPoints inputs:", [(s.name, s.type) for s in iop2.inputs])
print("  CurveToPoints outputs:", [(s.name, s.type) for s in c2p.outputs])

# ---------------------------------------------------------------- (b) grass: instanced blades with random rot/scale
blade = mesh_obj("EIF_GrassBlade",
                 [(-0.004, 0, 0), (0.004, 0, 0), (0.003, 0, 0.05), (-0.003, 0, 0.05), (0.0, 0.01, 0.11)],
                 [(0, 1, 2, 3), (3, 2, 4)])   # 2 faces, 0.11 m tall (ESTIMATE lawn blade)
blade.hide_render = True; blade.hide_viewport = True
lawn = mesh_obj("EIF_Lawn", [(-2, -2, 0), (2, -2, 0), (2, 2, 0), (-2, 2, 0)], [(0, 1, 2, 3)])
ng3, gi3, go3 = new_gn_group("EIF_GN_GrassBlades")
dist = ng3.nodes.new("GeometryNodeDistributePointsOnFaces"); dist.distribute_method = "RANDOM"
dist.inputs["Density"].default_value = 300.0      # blades per m^2 (ESTIMATE, tune for budget)
dist.inputs["Seed"].default_value = 7
oi3 = ng3.nodes.new("GeometryNodeObjectInfo"); oi3.inputs["Object"].default_value = blade
iop3 = ng3.nodes.new("GeometryNodeInstanceOnPoints")
rrot = ng3.nodes.new("FunctionNodeRandomValue"); rrot.data_type = "FLOAT_VECTOR"
rrot.inputs["Min"].default_value = (-0.15, -0.15, 0.0)
rrot.inputs["Max"].default_value = (0.15, 0.15, 2 * math.pi)
rscale = ng3.nodes.new("FunctionNodeRandomValue"); rscale.data_type = "FLOAT"
rscale.inputs["Min"].default_value = 0.6; rscale.inputs["Max"].default_value = 1.4   # sockets follow data_type (5.2 dynamic decl)
join3 = ng3.nodes.new("GeometryNodeJoinGeometry")
ng3.links.new(gi3.outputs["Geometry"], dist.inputs["Mesh"])
ng3.links.new(dist.outputs["Points"], iop3.inputs["Points"])
ng3.links.new(oi3.outputs["Geometry"], iop3.inputs["Instance"])
ng3.links.new(rrot.outputs["Value"], iop3.inputs["Rotation"])      # vector->rotation implicit conversion
ng3.links.new(rscale.outputs["Value"], iop3.inputs["Scale"])       # float->vector implicit
ng3.links.new(iop3.outputs["Instances"], join3.inputs["Geometry"])
ng3.links.new(gi3.outputs["Geometry"], join3.inputs["Geometry"])
ng3.links.new(join3.outputs["Geometry"], go3.inputs["Geometry"])
mod3 = lawn.modifiers.new("Grass", "NODES"); mod3.node_group = ng3
print("=== T2.b GN grass blades built")
dump_tree(ng3)
print("  RandomValue sockets:", [(i, s.identifier, s.type) for i, s in enumerate(rscale.inputs)], "outputs", [(s.identifier, s.type) for s in rscale.outputs])
dg = bpy.context.evaluated_depsgraph_get()
n_inst = sum(1 for oi in dg.object_instances if oi.is_instance and oi.parent and oi.parent.original == lawn)
print(f"  grass instances in depsgraph: {n_inst} (16 m^2 x 300/m^2 = 4800 expected)")

# (b2) hair curves data-block (Curves object) - works for Cycles/EEVEE hair, NOT exported by glTF
hc = bpy.data.hair_curves.new("EIF_GrassHair")
n_strands = 50
hc.add_curves([3] * n_strands)
import random
random.seed(1)
pos = []
for s in range(n_strands):
    x, y = random.uniform(-2, 2), random.uniform(-2, 2)
    pos += [x, y, 0.0, x + 0.01, y, 0.05, x + 0.02, y + 0.01, 0.10]
hc.points.foreach_set("position", pos)
hair_ob = bpy.data.objects.new("EIF_GrassHair", hc)
sc.collection.objects.link(hair_ob)
hc.surface = lawn
print("=== T2.b2 hair curves:", type(hc).__name__, "curves", len(hc.curves), "points", len(hc.points), "attrs", [a.name for a in hc.attributes])

# ---------------------------------------------------------------- (c) glTF export of GN instances
def glb_stats(path):
    with open(path, "rb") as f:
        magic, ver, length = struct.unpack("<4sII", f.read(12))
        clen, ctype = struct.unpack("<I4s", f.read(8))
        js = json.loads(f.read(clen))
    tris = 0
    for m in js.get("meshes", []):
        for p in m["primitives"]:
            if "indices" in p:
                tris += js["accessors"][p["indices"]]["count"] // 3
            else:
                tris += js["accessors"][p["attributes"]["POSITION"]]["count"] // 3
    return dict(bytes=os.path.getsize(path), nodes=len(js.get("nodes", [])), meshes=len(js.get("meshes", [])),
                tris=tris, ext=js.get("extensionsUsed", []))

print("=== T2.c glTF export of GN-instanced geometry")
print("  export_format enum probe:", end=" ")
for fmt in ("GLB", "GLTF_SEPARATE", "GLTF_EMBEDDED"):
    try:
        bpy.ops.export_scene.gltf(filepath=os.path.join(OUT, "probe.glb"), export_format=fmt, use_selection=True)  # nothing selected -> harmless
        print(fmt, "ok;", end=" ")
    except TypeError as e:
        print(fmt, "TypeError:", str(e)[:80], ";", end=" ")
    except Exception as e:
        print(fmt, type(e).__name__, str(e)[:60], ";", end=" ")
print()

# hide the source assets so they don't export (hide_render + we use use_renderable / use_visible)
for o in sc.objects: o.select_set(False)

def do_export(tag, **kw):
    p = os.path.join(OUT, f"gn_{tag}.glb")
    t0 = time.perf_counter()
    bpy.ops.export_scene.gltf(filepath=p, export_format="GLB", export_animations=False, export_cameras=False,
                              export_lights=False, export_yup=True, **kw)
    dt = time.perf_counter() - t0
    st = glb_stats(p); st["time_s"] = round(dt, 2)
    print(f"  {tag:34} -> {st}")

# plate: realize ON (geometry is a real mesh after modifier) ; lawn: instances only (no realize)
do_export("apply0_gn0", export_apply=False, export_gn_mesh=False, use_visible=True)
do_export("apply1_gn0", export_apply=True, export_gn_mesh=False, use_visible=True)
do_export("apply1_gn1", export_apply=True, export_gn_mesh=True, use_visible=True)
do_export("apply1_gn1_gpuinst", export_apply=True, export_gn_mesh=True, export_gpu_instances=True, use_visible=True)
do_export("apply1_gn1_draco", export_apply=True, export_gn_mesh=True, export_draco_mesh_compression_enable=True, use_visible=True)
# realize the grass too and export
realize3 = ng3.nodes.new("GeometryNodeRealizeInstances")
# re-wire: iop3 -> realize3 -> join3
for l in list(ng3.links):
    if l.from_node == iop3 and l.to_node == join3:
        ng3.links.remove(l)
ng3.links.new(iop3.outputs["Instances"], realize3.inputs["Geometry"])
ng3.links.new(realize3.outputs["Geometry"], join3.inputs["Geometry"])
do_export("apply1_realizedgrass", export_apply=True, export_gn_mesh=False, use_visible=True)
print("=== T2 DONE")
