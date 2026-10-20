"""T6 - headless preview renders (Workbench + EEVEE) of a 330 m stand-in scene, 900x1200, plus close-up camera helper."""
import bpy, os, time, math
from mathutils import Vector

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "_out")
os.makedirs(OUT, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene

# --- stand-in scene: ground 200x200, a 330 m tapered 'tower' (4 legs + 3 platforms), a 1 m lamp post
def mesh_obj(name, verts, faces, coll=None, mat=None):
    me = bpy.data.meshes.new(name); me.from_pydata(verts, [], faces); me.validate(); me.update()
    if mat: me.materials.append(mat)
    ob = bpy.data.objects.new(name, me); (coll or sc.collection).objects.link(ob); return ob

def box(name, cx, cy, z0, z1, sx, sy, mat=None):
    hx, hy = sx / 2, sy / 2
    v = [(cx-hx,cy-hy,z0),(cx+hx,cy-hy,z0),(cx+hx,cy+hy,z0),(cx-hx,cy+hy,z0),(cx-hx,cy-hy,z1),(cx+hx,cy-hy,z1),(cx+hx,cy+hy,z1),(cx-hx,cy+hy,z1)]
    f = [(0,1,2,3),(4,5,6,7),(0,1,5,4),(1,2,6,5),(2,3,7,6),(3,0,4,7)]
    return mesh_obj(name, v, f, mat=mat)

iron = bpy.data.materials.new("EIF_IronStandIn"); iron.diffuse_color = (0.33, 0.20, 0.12, 1)   # viewport/workbench colour
grass = bpy.data.materials.new("EIF_GrassStandIn"); grass.diffuse_color = (0.15, 0.35, 0.10, 1)
mesh_obj("EIF_Ground", [(-100,-100,0),(100,-100,0),(100,100,0),(-100,100,0)], [(0,1,2,3)], mat=grass)
for sx, sy in ((1,1),(1,-1),(-1,1),(-1,-1)):
    # leg: 4 stacked boxes approximating the curve (ESTIMATE: 62 m half-span at ground -> 0 at 300 m)
    for z0, z1, off, w in ((0,57,52,15),(57,115,33,10),(115,200,15,6),(200,300,4,3)):
        box(f"EIF_Leg{sx}{sy}_{z0}", sx*off, sy*off, z0, z1, w, w, iron)
box("EIF_Plat1", 0, 0, 57, 61, 70, 70, iron); box("EIF_Plat2", 0, 0, 115, 118, 40, 40, iron); box("EIF_Plat3", 0, 0, 276, 279, 18, 18, iron)
box("EIF_Antenna", 0, 0, 300, 330, 2, 2, iron)
box("EIF_LampPost", 40, -40, 0, 4.0, 0.12, 0.12, iron)

# sun + world so EEVEE has light
sun_d = bpy.data.lights.new("EIF_Sun", "SUN"); sun_d.energy = 4.0
sun = bpy.data.objects.new("EIF_Sun", sun_d); sc.collection.objects.link(sun)
sun.rotation_euler = (math.radians(50), 0, math.radians(35))
w = bpy.data.worlds.new("EIF_World"); sc.world = w
w.node_tree.nodes["Background"].inputs[0].default_value = (0.55, 0.65, 0.8, 1) if False else (0.6, 0.7, 0.85, 1)
w.node_tree.nodes["Background"].inputs[1].default_value = 1.0

# --- camera helpers ---------------------------------------------------------------------------------
def eif_camera(name, target, distance, azimuth_deg, elevation_deg, focal_mm=35, clip_end=5000):
    """Camera orbiting 'target' (Vector, metres). azimuth 0 = looking from +X toward -X; elevation above horizon."""
    import bpy, math
    from mathutils import Vector
    target = Vector(target)
    az, el = math.radians(azimuth_deg), math.radians(elevation_deg)
    pos = target + Vector((math.cos(az) * math.cos(el), math.sin(az) * math.cos(el), math.sin(el))) * distance
    cam_d = bpy.data.cameras.get(name) or bpy.data.cameras.new(name)
    cam_d.lens = focal_mm; cam_d.clip_start = 0.05; cam_d.clip_end = clip_end; cam_d.sensor_fit = "VERTICAL"
    cam = bpy.data.objects.get(name) or bpy.data.objects.new(name, cam_d)
    if cam.name not in bpy.context.scene.collection.objects:
        bpy.context.scene.collection.objects.link(cam)
    cam.location = pos
    cam.rotation_euler = (target - pos).to_track_quat("-Z", "Y").to_euler()
    return cam

def eif_render(path, cam, engine="BLENDER_WORKBENCH", w=900, h=1200, samples=16):
    import bpy, time
    sc = bpy.context.scene
    sc.camera = cam
    sc.render.engine = engine
    sc.render.resolution_x, sc.render.resolution_y, sc.render.resolution_percentage = w, h, 100
    sc.render.image_settings.file_format = "PNG"; sc.render.image_settings.color_mode = "RGB"
    sc.render.filepath = path
    if engine == "BLENDER_WORKBENCH":
        sh = sc.display.shading
        sh.light = "STUDIO"; sh.color_type = "MATERIAL"; sh.show_cavity = True; sh.show_shadows = True
        sc.display.render_aa = "8"
    elif engine == "BLENDER_EEVEE":
        sc.eevee.taa_render_samples = samples
        sc.eevee.use_shadows = True
    t0 = time.perf_counter()
    bpy.ops.render.render(write_still=True)
    dt = time.perf_counter() - t0
    import os
    print(f"[eif_render] {engine:17} {w}x{h} -> {path}  {os.path.getsize(path)/1024:.0f} kB in {dt:.2f}s")
    return dt
# ----------------------------------------------------------------------------------------------------
print("=== T6 render")
print("  render_aa enum:", [i.identifier for i in bpy.types.View3DShading.bl_rna.properties["render_aa"].enum_items] if "render_aa" in bpy.types.View3DShading.bl_rna.properties else [i.identifier for i in bpy.types.SceneDisplay.bl_rna.properties["render_aa"].enum_items])
print("  shading.light enum:", [i.identifier for i in bpy.types.View3DShading.bl_rna.properties["light"].enum_items], "color_type:", [i.identifier for i in bpy.types.View3DShading.bl_rna.properties["color_type"].enum_items])
whole = eif_camera("EIF_Cam_Whole", (0, 0, 150), 520, -60, 12, focal_mm=35)
close = eif_camera("EIF_Cam_Lamp", (40, -40, 2), 9, -120, 10, focal_mm=50)
eif_render(os.path.join(OUT, "t6_workbench_whole.png"), whole, "BLENDER_WORKBENCH")
eif_render(os.path.join(OUT, "t6_workbench_lamp.png"), close, "BLENDER_WORKBENCH")
try:
    eif_render(os.path.join(OUT, "t6_eevee_whole.png"), whole, "BLENDER_EEVEE", samples=16)
except Exception as e:
    print("  EEVEE headless failed:", type(e).__name__, e)
print("  GPU backend:", bpy.context.preferences.system.gpu_backend if hasattr(bpy.context.preferences.system, "gpu_backend") else "n/a")
print("=== T6 DONE")
