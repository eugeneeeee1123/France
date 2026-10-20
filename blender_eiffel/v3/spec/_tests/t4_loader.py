"""T4 - the orchestrator's live-Blender loader snippet + EIF_-only cleanup, tested headless.
It fabricates a throwaway module tree in _out/fake_v3 so the real v3 package is not touched."""
import bpy, os, sys, textwrap

HERE = os.path.dirname(os.path.abspath(__file__))
FAKE_V3 = os.path.join(HERE, "_out", "fake_v3")
os.makedirs(FAKE_V3, exist_ok=True)
with open(os.path.join(FAKE_V3, "eif_common.py"), "w", encoding="utf-8") as f:
    f.write(textwrap.dedent('''
        import bpy
        PREFIX = "EIF_"
        def coll(name, parent=None):
            parent = parent or bpy.context.scene.collection
            c = bpy.data.collections.get(name) or bpy.data.collections.new(name)
            if c.name not in parent.children: parent.children.link(c)
            return c
        VERSION = 1
    '''))
with open(os.path.join(FAKE_V3, "eif_tower_legs.py"), "w", encoding="utf-8") as f:
    f.write(textwrap.dedent('''
        import bpy, eif_common
        def build():
            c = eif_common.coll("EIF_Tower", eif_common.coll("EIF_Root"))
            me = bpy.data.meshes.new("EIF_LegMesh"); me.from_pydata([(0,0,0),(1,0,0),(0,1,0)],[],[(0,1,2)]); me.update()
            ob = bpy.data.objects.new("EIF_Leg", me); c.objects.link(ob)
            return ob
    '''))
with open(os.path.join(FAKE_V3, "eif_broken.py"), "w", encoding="utf-8") as f:
    f.write("import bpy\ndef build():\n    return 1/0\n")

# user's own stuff that must survive
user_coll = bpy.data.collections.new("UserStuff"); bpy.context.scene.collection.children.link(user_coll)
ume = bpy.data.meshes.new("UserMesh"); ume.from_pydata([(0,0,0),(1,0,0),(0,1,0)],[],[(0,1,2)]); ume.update()
user_coll.objects.link(bpy.data.objects.new("UserObj", ume))

# ======================= SNIPPET A: loader (this is what goes into execute_blender_code) ==================
V3 = FAKE_V3   # real value: "C:/Users/Eugen/OneDrive/Desktop/Fundamentals of Web Programming2/France/blender_eiffel/v3"
import importlib, traceback, sys, time
if V3 not in sys.path:
    sys.path.insert(0, V3)
def eif_run(module_names, func="build", reload_first=("eif_common",)):
    """(Re)import each module and call module.<func>(); never raises - prints traceback and continues."""
    results = {}
    for name in tuple(reload_first) + tuple(module_names):
        try:
            mod = sys.modules.get(name)
            mod = importlib.reload(mod) if mod else importlib.import_module(name)
            if name in reload_first and name not in module_names:
                continue
            t0 = time.perf_counter()
            out = getattr(mod, func)()
            results[name] = ("OK", round(time.perf_counter() - t0, 3), str(out)[:60])
        except Exception:
            results[name] = ("FAIL", traceback.format_exc())
            print(f"--- {name}.{func}() FAILED ---\n{traceback.format_exc()}")
    for k, v in results.items():
        print(f"[eif_run] {k:28} {v[0]} {v[1:] if v[0]=='OK' else ''}")
    return results
# ===========================================================================================================
print("=== T4 run 1 (fresh import)")
eif_run(["eif_tower_legs", "eif_broken"])
# simulate an edit on disk, then reload
with open(os.path.join(FAKE_V3, "eif_common.py"), "a", encoding="utf-8") as f:
    f.write("\nVERSION = 2\n")
print("=== T4 run 2 (after editing eif_common.py on disk -> reload picks it up)")
eif_run(["eif_tower_legs"])
import eif_common
print("  eif_common.VERSION after reload =", eif_common.VERSION)
print("  objects now:", sorted(o.name for o in bpy.data.objects), "collections:", sorted(c.name for c in bpy.data.collections))

# ======================= SNIPPET B: clear only our EIF_ collections ==================
def eif_clear(prefix="EIF_", purge_data=True):
    """Remove every collection whose name starts with prefix (recursively), their objects,
    and the now-unused meshes/materials/node groups/images that also carry the prefix.
    Never touches collections/objects that do not carry the prefix."""
    import bpy
    victims = [c for c in bpy.data.collections if c.name.startswith(prefix)]
    objs = set()
    for c in victims:
        objs.update(c.all_objects)
    # also stray prefixed objects linked directly to the scene collection
    objs.update(o for o in bpy.data.objects if o.name.startswith(prefix))
    datas = {(type(o.data).__name__, o.data) for o in objs if o.data}
    for o in objs:
        bpy.data.objects.remove(o, do_unlink=True)
    for c in victims:
        if c.name in bpy.data.collections:
            bpy.data.collections.remove(c)
    n_data = 0
    if purge_data:
        for _, d in datas:
            if d.users == 0:
                coll = {"Mesh": bpy.data.meshes, "Curves": bpy.data.hair_curves, "Curve": bpy.data.curves,
                        "Camera": bpy.data.cameras, "Light": bpy.data.lights}.get(type(d).__name__)
                if coll is not None:
                    coll.remove(d); n_data += 1
        for store in (bpy.data.materials, bpy.data.node_groups, bpy.data.images, bpy.data.meshes):
            for d in [d for d in store if d.name.startswith(prefix) and d.users == 0]:
                store.remove(d); n_data += 1
    print(f"[eif_clear] removed {len(objs)} objects, {len(victims)} collections, {n_data} data-blocks")
# =====================================================================================
print("=== T4 clear")
bpy.data.materials.new("EIF_Iron")           # orphan prefixed material
bpy.data.node_groups.new("EIF_GN_X", "GeometryNodeTree")
eif_clear()
print("  objects after:", sorted(o.name for o in bpy.data.objects))
print("  collections after:", sorted(c.name for c in bpy.data.collections))
print("  meshes after:", sorted(m.name for m in bpy.data.meshes), "materials:", [m.name for m in bpy.data.materials], "node_groups:", [n.name for n in bpy.data.node_groups])
print("=== T4 DONE")
