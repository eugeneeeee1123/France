"""Headless smoke test of the v1/v2 Eiffel builders under Blender 5.2.

Run:
  "C:/Program Files/Blender Foundation/Blender 5.2/blender.exe" -b --python smoke_old_builder.py

Prints:
  BEAM_OK        - MeshBuilder.beam still works (8 verts / 6 faces expected)
  PROFILE ...    - tower_half_width(z) and its slope: smoothstep gives slope 0 at every knot
  ROLL ...       - beam cross-section 'u' vector vs. beam inclination: flips at ~73.7 deg
  CHORD ...      - leg chord positions at z=0 and z=57.63 (shows the 45-degree 'diamond' plan)
  BLEND ...      - triangle / vertex counts of the saved .blend files (budget baseline)
  GLB ...        - file sizes of the exported GLBs
"""
import math
import os
import sys

BASE = r"C:/Users/Eugen/OneDrive/Desktop/Fundamentals of Web Programming2/France/blender_eiffel"
sys.path.insert(0, BASE)

import bpy  # noqa: E402
from mathutils import Vector  # noqa: E402

import generate_eiffel_tower as g  # noqa: E402

b = g.MeshBuilder()
b.beam((0, 0, 0), (0, 0, 10), 1)
print("BEAM_OK", len(b.vertices), len(b.faces))


def slope(z, h=0.01):
    return (g.tower_half_width(z + h) - g.tower_half_width(z - h)) / (2 * h)


for z in (0.01, 6, 12, 18, 23.99, 24.01, 40, 57.62, 57.64, 86, 115.72, 115.74,
          150, 190, 230, 276.12, 290, 299.9):
    print(f"PROFILE z={z:7.2f} half={g.tower_half_width(z):6.2f} "
          f"leg_section={g.leg_section(z):5.2f} dhalf/dz={slope(z):+.3f}")


def roll_u(angle_deg):
    axis = Vector((math.cos(math.radians(angle_deg)), 0.0, math.sin(math.radians(angle_deg))))
    ref = Vector((0.0, 0.0, 1.0))
    if abs(axis.dot(ref)) > 0.96:
        ref = Vector((1.0, 0.0, 0.0))
    return axis.cross(ref).normalized()


for a in (60, 70, 73, 74, 76, 85):
    print("ROLL", a, tuple(round(c, 3) for c in roll_u(a)))

for zz in (0.0, 57.63, 115.73):
    for corner in [(-1, -1), (1, -1), (1, 1), (-1, 1)]:
        p = g.leg_chord_position(1, 1, zz, *corner)
        print(f"CHORD z={zz:6.2f}", tuple(round(c, 2) for c in p))

for name in ("eiffel_tower_detailed.blend", "eiffel_tower_internal_v2.blend",
             "eiffel_tower_paris_mcp.blend"):
    path = os.path.join(BASE, name)
    if not os.path.exists(path):
        print("MISSING", name)
        continue
    bpy.ops.wm.open_mainfile(filepath=path)
    tot_tris = 0
    tot_verts = 0
    rows = []
    for ob in bpy.data.objects:
        if ob.type != "MESH":
            continue
        me = ob.data
        t = sum(max(0, len(p.vertices) - 2) for p in me.polygons)
        tot_tris += t
        tot_verts += len(me.vertices)
        rows.append((t, ob.name))
    rows.sort(reverse=True)
    print(f"BLEND {name}: objects={len(bpy.data.objects)} mesh_tris={tot_tris} "
          f"verts={tot_verts} collections={[c.name for c in bpy.data.collections]}")
    for t, n in rows[:14]:
        print(f"   {t:>9}  {n}")

for name in ("eiffel_tower_detailed.glb", "eiffel_tower_internal_v2.glb",
             "eiffel_tower_paris_mcp.glb"):
    p = os.path.join(BASE, name)
    print("GLB", name, os.path.getsize(p) if os.path.exists(p) else "missing")

print("SMOKE_DONE")
