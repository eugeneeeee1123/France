"""T3b - Decimate-to-budget workflow + recommended web glTF export (Blender 5.2 headless)."""
import bpy, os, json, struct, time, math

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_out")
os.makedirs(OUT, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene

def glb_stats(path):
    with open(path, "rb") as f:
        f.read(12); clen, _ = struct.unpack("<I4s", f.read(8)); js = json.loads(f.read(clen))
    tris = 0
    for m in js.get("meshes", []):
        for p in m["primitives"]:
            acc = js["accessors"][p["indices"]] if "indices" in p else js["accessors"][p["attributes"]["POSITION"]]
            tris += acc["count"] // 3
    return dict(kB=round(os.path.getsize(path) / 1024, 1), nodes=len(js.get("nodes", [])), meshes=len(js.get("meshes", [])),
                materials=len(js.get("materials", [])), tris=tris, ext=js.get("extensionsUsed", []))

# --- build a deliberately heavy scene: 3 dense lattice-like objects (~900k tris total) in EIF_ collections
root = bpy.data.collections.new("EIF_Root"); sc.collection.children.link(root)
tower = bpy.data.collections.new("EIF_Tower"); root.children.link(tower)
mat_iron = bpy.data.materials.new("EIF_Iron"); mat_glass = bpy.data.materials.new("EIF_Glass")

def dense_grid(name, nx, ny, zoff, mat):
    verts = [(x * 0.05, y * 0.05, zoff + 0.02 * math.sin(x * 0.3) * math.cos(y * 0.3)) for y in range(ny) for x in range(nx)]
    faces = [(y * nx + x, y * nx + x + 1, (y + 1) * nx + x + 1, (y + 1) * nx + x) for y in range(ny - 1) for x in range(nx - 1)]
    me = bpy.data.meshes.new(name); me.from_pydata(verts, [], faces); me.validate(); me.update()
    me.materials.append(mat); me.shade_smooth()
    ob = bpy.data.objects.new(name, me); tower.objects.link(ob); return ob

t0 = time.perf_counter()
objs = [dense_grid("EIF_Legs", 500, 300, 0, mat_iron), dense_grid("EIF_Arches", 400, 300, 5, mat_iron), dense_grid("EIF_Glazing", 300, 300, 10, mat_glass)]
print(f"=== T3b heavy scene built in {time.perf_counter()-t0:.2f}s")

def scene_tri_count(objects, evaluated=True):
    dg = bpy.context.evaluated_depsgraph_get() if evaluated else None
    total = 0
    for ob in objects:
        if ob.type != "MESH": continue
        me = ob.evaluated_get(dg).to_mesh() if evaluated else ob.data
        total += sum(len(p.vertices) - 2 for p in me.polygons)
        if evaluated: ob.evaluated_get(dg).to_mesh_clear()
    return total

def report(label):
    print(f"  {label:38} base-mesh tris={scene_tri_count(objs, False):>9,}   evaluated(with modifiers) tris={scene_tri_count(objs, True):>9,}")
report("before decimate")

# --- decimate to budget: ratio = budget / current, per object (COLLAPSE keeps UVs/materials; triangulates output)
BUDGET = 150_000
cur = scene_tri_count(objs, True)
ratio = min(1.0, BUDGET / cur)
t0 = time.perf_counter()
for ob in objs:
    m = ob.modifiers.new("EIF_Decimate", "DECIMATE")
    m.decimate_type = "COLLAPSE"
    m.ratio = ratio
    m.use_collapse_triangulate = True
    m.use_symmetry = False
print(f"  decimate modifiers added (ratio={ratio:.4f}), evaluated in {time.perf_counter()-t0:.2f}s")
report("after decimate (modifier, not applied)")
print("  Decimate modifier.face_count (read-only, evaluated):", [(o.name, o.modifiers['EIF_Decimate'].face_count) for o in objs])
print("  decimate_type enum:", [i.identifier for i in bpy.types.DecimateModifier.bl_rna.properties['decimate_type'].enum_items])

# --- recommended web export (modifiers applied by exporter; draco on; no cams/lights; +Y up; only our collection)
for o in sc.objects: o.select_set(False)
export_kwargs = dict(
    export_format="GLB",
    export_apply=True,                        # bake modifiers (decimate, GN w/ realize) into the export
    export_yup=True,                          # glTF convention: +Y up (Blender Z-up is converted)
    export_cameras=False, export_lights=False,
    export_animations=False, export_skins=False, export_morph=False,
    export_materials="EXPORT", export_image_format="AUTO",
    export_texcoords=True, export_normals=True, export_tangents=False,
    export_draco_mesh_compression_enable=True, export_draco_mesh_compression_level=6,
    export_draco_position_quantization=14, export_draco_normal_quantization=10, export_draco_texcoord_quantization=12,
    use_active_collection=False, use_selection=False,
    collection="EIF_Root",                    # export only this collection (nested children included)
    export_gn_mesh=False,                      # realize GN instances in the tree instead (see T2)
    # NOTE: do NOT pass export_loglevel>=0 - 5.2 addon bug -> KeyError 'loglevel' (io_scene_gltf2/__init__.py:1142/1388).
    # Quiet the INFO spam via bpy.app.debug_value instead (set_debug_log: 0=INFO 1=WARNING 2=ERROR 3=CRITICAL 4=DEBUG).
)
bpy.app.debug_value = 2
p = os.path.join(OUT, "t3_web.glb")
t0 = time.perf_counter()
res = bpy.ops.export_scene.gltf(filepath=p, **export_kwargs)
print(f"=== T3b export result {res} in {time.perf_counter()-t0:.2f}s -> {glb_stats(p)}")

p2 = os.path.join(OUT, "t3_web_nodraco.glb")
kw = dict(export_kwargs); kw["export_draco_mesh_compression_enable"] = False
t0 = time.perf_counter(); bpy.ops.export_scene.gltf(filepath=p2, **kw)
print(f"  same without Draco in {time.perf_counter()-t0:.2f}s -> {glb_stats(p2)}")

p3 = os.path.join(OUT, "t3_web_meshopt.glb")
kw = dict(export_kwargs); kw["export_draco_mesh_compression_enable"] = False; kw["export_meshopt_compression_enable"] = True
try:
    t0 = time.perf_counter(); bpy.ops.export_scene.gltf(filepath=p3, **kw)
    print(f"  same with EXT_meshopt_compression in {time.perf_counter()-t0:.2f}s -> {glb_stats(p3)}")
except Exception as e:
    print("  meshopt export failed:", e)

# full TypeError text for the export_format enum
try:
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT, "x.glb"), export_format="GLTF_EMBEDDED")
except TypeError as e:
    print("  export_format enum error text:", e)

# --- applying the decimate for real (destructive) with object.modifier_apply needs context override in headless
ob = objs[0]
with bpy.context.temp_override(object=ob, active_object=ob, selected_objects=[ob]):
    r = bpy.ops.object.modifier_apply(modifier="EIF_Decimate")
print(f"  modifier_apply via temp_override -> {r}; {ob.name} now polys={len(ob.data.polygons)} modifiers={[m.name for m in ob.modifiers]}")
print("=== T3b DONE")
