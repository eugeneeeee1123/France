"""T1 - Blender 5.2 API facts. Run:
"C:/Program Files/Blender Foundation/Blender 5.2/blender.exe" -b --python t1_api.py
"""
import bpy, bmesh

print("=== T1.0 version", bpy.app.version_string, "build", bpy.app.build_hash.decode())

# --- T1.1 render engine identifiers -------------------------------------
sc = bpy.context.scene
print("=== T1.1 engine current:", sc.render.engine)
print("enum_items reported:", [i.identifier for i in bpy.types.RenderSettings.bl_rna.properties["engine"].enum_items])
for cand in ("CYCLES", "BLENDER_WORKBENCH", "BLENDER_EEVEE", "BLENDER_EEVEE_NEXT", "BOGUS_ENGINE"):
    try:
        sc.render.engine = cand
        print(f"  assign {cand!r:22} -> OK, now {sc.render.engine}")
    except TypeError as e:
        print(f"  assign {cand!r:22} -> TypeError: {e}")

# --- T1.2 Principled BSDF socket names ----------------------------------
mat = bpy.data.materials.new("T1_probe")
mat.use_nodes = True
bsdf = next(n for n in mat.node_tree.nodes if n.type == "BSDF_PRINCIPLED")
print("=== T1.2 Principled BSDF inputs (index: name [type]):")
for i, s in enumerate(bsdf.inputs):
    print(f"  {i:2d}: {s.name!r:28} {s.type}")
print("outputs:", [s.name for s in bsdf.outputs])
print("node types in default tree:", [(n.name, n.type, n.bl_idname) for n in mat.node_tree.nodes])

# --- T1.3 from_pydata + validate + update + smooth -----------------------
verts = [(0, 0, 0), (1, 0, 0), (1, 1, 0), (0, 1, 0), (0.5, 0.5, 1)]
faces = [(0, 1, 2, 3), (0, 1, 4), (1, 2, 4), (2, 3, 4), (3, 0, 4)]
me = bpy.data.meshes.new("T1_pyramid")
me.from_pydata(verts, [], faces)
bad = me.validate(verbose=True)
me.update()
print("=== T1.3 from_pydata: verts", len(me.vertices), "edges", len(me.edges), "polys", len(me.polygons), "validate_found_problems", bad)
ob = bpy.data.objects.new("T1_pyramid", me)
# smooth shading (5.x: Mesh.shade_smooth() / shade_flat() exist; polygons.use_smooth also works)
print("has Mesh.shade_smooth:", hasattr(me, "shade_smooth"), "has shade_auto_smooth:", hasattr(me, "shade_auto_smooth"))
me.shade_smooth()
print("after shade_smooth use_smooth:", [p.use_smooth for p in me.polygons])
me.shade_flat()
print("after shade_flat use_smooth:", [p.use_smooth for p in me.polygons])
me.polygons.foreach_set("use_smooth", [True] * len(me.polygons))
me.update()
print("after foreach_set use_smooth:", [p.use_smooth for p in me.polygons])
# auto smooth by angle in 4.1+/5.x is a modifier (Smooth by Angle node group) - check operator exists
print("has ops.object.shade_auto_smooth:", hasattr(bpy.ops.object, "shade_auto_smooth"))
print("has ops.object.shade_smooth_by_angle:", hasattr(bpy.ops.object, "shade_smooth_by_angle"))
print("mesh.attributes names:", [a.name for a in me.attributes])

# --- T1.4 collections ----------------------------------------------------
def get_or_make_coll(name, parent=None):
    parent = parent or bpy.context.scene.collection
    c = bpy.data.collections.get(name)
    if c is None:
        c = bpy.data.collections.new(name)
    if c.name not in parent.children:
        parent.children.link(c)
    return c
root = get_or_make_coll("EIF_Root")
sub = get_or_make_coll("EIF_Tower", root)
sub.objects.link(ob)
print("=== T1.4 collections:", [c.name for c in bpy.data.collections], "scene children:", [c.name for c in sc.collection.children], "EIF_Tower objs:", [o.name for o in sub.objects])

# --- T1.5 unit scale -----------------------------------------------------
us = sc.unit_settings
us.system = "METRIC"
us.scale_length = 1.0
us.length_unit = "METERS"
print("=== T1.5 unit system", us.system, "scale_length", us.scale_length, "length_unit", us.length_unit)
print("length_unit enum:", [i.identifier for i in bpy.types.UnitSettings.bl_rna.properties["length_unit"].enum_items])
print("clip_end default:", [a for a in []] or "n/a headless (3D view clip is per-SpaceView3D; set space.clip_end=5000 in UI)")
print("=== T1 DONE")
