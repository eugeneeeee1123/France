"""T5 - from_pydata performance: ~300k verts, and foreach_set alternative."""
import bpy, time, math

def grid_mesh(nx, ny):
    verts = [(x * 0.01, y * 0.01, math.sin(x * 0.1) * 0.01) for y in range(ny) for x in range(nx)]
    faces = []
    for y in range(ny - 1):
        row = y * nx
        for x in range(nx - 1):
            i = row + x
            faces.append((i, i + 1, i + nx + 1, i + nx))
    return verts, faces

nx, ny = 600, 500   # 300,000 verts, 299,101 quads
t0 = time.perf_counter()
verts, faces = grid_mesh(nx, ny)
t1 = time.perf_counter()
me = bpy.data.meshes.new("T5_grid")
me.from_pydata(verts, [], faces)
t2 = time.perf_counter()
problems = me.validate()
me.update()
t3 = time.perf_counter()
ob = bpy.data.objects.new("T5_grid", me)
bpy.context.scene.collection.objects.link(ob)
t4 = time.perf_counter()
print(f"=== T5 from_pydata  verts={len(me.vertices)} polys={len(me.polygons)} tris~={sum(len(p.vertices)-2 for p in me.polygons)}")
print(f"  python build lists : {t1-t0:7.3f}s")
print(f"  from_pydata        : {t2-t1:7.3f}s")
print(f"  validate+update    : {t3-t2:7.3f}s  (problems={problems})")
print(f"  object new+link    : {t4-t3:7.3f}s")
print(f"  TOTAL              : {t4-t0:7.3f}s")

# Alternative: foreach_set path (flat arrays) - typically faster for large meshes
import itertools
t0 = time.perf_counter()
flat_v = list(itertools.chain.from_iterable(verts))
loop_total = len(faces) * 4
me2 = bpy.data.meshes.new("T5_grid_fast")
me2.vertices.add(len(verts))
me2.vertices.foreach_set("co", flat_v)
me2.loops.add(loop_total)
me2.loops.foreach_set("vertex_index", list(itertools.chain.from_iterable(faces)))
me2.polygons.add(len(faces))
me2.polygons.foreach_set("loop_start", list(range(0, loop_total, 4)))
me2.polygons.foreach_set("loop_total", [4] * len(faces))
me2.update(calc_edges=True)
t1 = time.perf_counter()
print(f"=== T5 foreach_set  verts={len(me2.vertices)} polys={len(me2.polygons)} edges={len(me2.edges)} time={t1-t0:7.3f}s")

# Many small objects vs one: link cost of 2000 objects
t0 = time.perf_counter()
small = bpy.data.meshes.new("T5_small")
small.from_pydata([(0,0,0),(1,0,0),(0,1,0)], [], [(0,1,2)])
coll = bpy.data.collections.new("T5_many"); bpy.context.scene.collection.children.link(coll)
for i in range(2000):
    o = bpy.data.objects.new(f"T5_s{i}", small)
    coll.objects.link(o)
bpy.context.view_layer.update()
t1 = time.perf_counter()
print(f"=== T5 2000 linked objects sharing 1 mesh + view_layer.update: {t1-t0:7.3f}s")
print("=== T5 DONE")
