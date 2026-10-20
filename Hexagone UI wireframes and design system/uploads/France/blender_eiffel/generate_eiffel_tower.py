import bpy
import math
import os
from mathutils import Vector


# Procedural Eiffel Tower study model.
# Scale: 1 Blender unit = 1 metre.
# Landmark levels: 57.63 m, 115.73 m, 276.13 m; total height: 330 m.


OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
BLEND_PATH = os.path.join(OUTPUT_DIR, "eiffel_tower_detailed.blend")
GLB_PATH = os.path.join(OUTPUT_DIR, "eiffel_tower_detailed.glb")
RENDER_PATH = os.path.join(OUTPUT_DIR, "eiffel_tower_preview.png")


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for datablocks in (bpy.data.meshes, bpy.data.curves, bpy.data.materials,
                       bpy.data.cameras, bpy.data.lights):
        for datablock in list(datablocks):
            if datablock.users == 0:
                datablocks.remove(datablock)


def make_collection(name):
    collection = bpy.data.collections.new(name)
    bpy.context.scene.collection.children.link(collection)
    return collection


def make_material(name, color, metallic=0.0, roughness=0.45, emission=None):
    material = bpy.data.materials.new(name)
    material.diffuse_color = (*color, 1.0)
    material.use_nodes = True
    bsdf = material.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Metallic"].default_value = metallic
    bsdf.inputs["Roughness"].default_value = roughness
    if emission:
        bsdf.inputs["Emission Color"].default_value = (*emission[0], 1.0)
        bsdf.inputs["Emission Strength"].default_value = emission[1]
    return material


class MeshBuilder:
    def __init__(self):
        self.vertices = []
        self.faces = []

    def beam(self, p1, p2, width, depth=None):
        p1 = Vector(p1)
        p2 = Vector(p2)
        axis = p2 - p1
        if axis.length < 0.0001:
            return
        axis.normalize()
        depth = width if depth is None else depth
        reference = Vector((0.0, 0.0, 1.0))
        if abs(axis.dot(reference)) > 0.96:
            reference = Vector((1.0, 0.0, 0.0))
        u = axis.cross(reference).normalized() * (width * 0.5)
        v = axis.cross(u).normalized() * (depth * 0.5)
        base = len(self.vertices)
        for endpoint in (p1, p2):
            self.vertices.extend([
                tuple(endpoint - u - v), tuple(endpoint + u - v),
                tuple(endpoint + u + v), tuple(endpoint - u + v),
            ])
        self.faces.extend([
            (base, base + 1, base + 2, base + 3),
            (base + 4, base + 7, base + 6, base + 5),
            (base, base + 4, base + 5, base + 1),
            (base + 1, base + 5, base + 6, base + 2),
            (base + 2, base + 6, base + 7, base + 3),
            (base + 3, base + 7, base + 4, base),
        ])

    def box(self, center, size):
        cx, cy, cz = center
        sx, sy, sz = (value * 0.5 for value in size)
        corners = [
            (cx - sx, cy - sy, cz - sz), (cx + sx, cy - sy, cz - sz),
            (cx + sx, cy + sy, cz - sz), (cx - sx, cy + sy, cz - sz),
            (cx - sx, cy - sy, cz + sz), (cx + sx, cy - sy, cz + sz),
            (cx + sx, cy + sy, cz + sz), (cx - sx, cy + sy, cz + sz),
        ]
        base = len(self.vertices)
        self.vertices.extend(corners)
        self.faces.extend([
            (base, base + 3, base + 2, base + 1),
            (base + 4, base + 5, base + 6, base + 7),
            (base, base + 1, base + 5, base + 4),
            (base + 1, base + 2, base + 6, base + 5),
            (base + 2, base + 3, base + 7, base + 6),
            (base + 3, base, base + 4, base + 7),
        ])

    def to_object(self, name, collection, material):
        mesh = bpy.data.meshes.new(name + "_Mesh")
        mesh.from_pydata(self.vertices, [], self.faces)
        mesh.update()
        obj = bpy.data.objects.new(name, mesh)
        collection.objects.link(obj)
        obj.data.materials.append(material)
        return obj


def smoothstep(value):
    return value * value * (3.0 - 2.0 * value)


def interpolated_profile(z, points):
    if z <= points[0][0]:
        return points[0][1]
    for (z0, value0), (z1, value1) in zip(points, points[1:]):
        if z <= z1:
            t = smoothstep((z - z0) / (z1 - z0))
            return value0 + (value1 - value0) * t
    return points[-1][1]


TOWER_PROFILE = [
    (0.0, 62.5), (24.0, 54.5), (57.63, 35.4),
    (115.73, 20.3), (190.0, 12.2), (276.13, 6.3), (300.0, 4.0),
]


def tower_half_width(z):
    return interpolated_profile(z, TOWER_PROFILE)


def leg_section(z):
    return interpolated_profile(z, [
        (0.0, 8.0), (57.63, 5.0), (115.73, 3.7),
        (190.0, 2.7), (276.13, 1.8), (300.0, 1.25),
    ])


def steel_width(z, primary=True):
    base = interpolated_profile(z, [
        (0.0, 1.25), (57.63, 0.92), (115.73, 0.68),
        (190.0, 0.48), (276.13, 0.34), (300.0, 0.28),
    ])
    return base if primary else base * 0.42


def elevation_levels():
    levels = []
    for start, end, segments in (
        (0.0, 57.63, 16), (57.63, 115.73, 14),
        (115.73, 190.0, 15), (190.0, 276.13, 17), (276.13, 300.0, 7),
    ):
        values = [start + (end - start) * i / segments for i in range(segments + 1)]
        levels.extend(values if not levels else values[1:])
    return levels


def leg_chord_position(sx, sy, z, radial_sign, tangent_sign):
    radial = Vector((sx, sy, 0.0)).normalized()
    tangent = Vector((-sy, sx, 0.0)).normalized()
    center = Vector((sx * tower_half_width(z), sy * tower_half_width(z), z))
    section = leg_section(z)
    return center + radial * radial_sign * section * 0.5 + tangent * tangent_sign * section * 0.5


def build_leg_lattice(primary, secondary):
    levels = elevation_levels()
    corners = [(-1, -1), (1, -1), (1, 1), (-1, 1)]
    for sx in (-1, 1):
        for sy in (-1, 1):
            for z0, z1 in zip(levels, levels[1:]):
                chord0 = [leg_chord_position(sx, sy, z0, *corner) for corner in corners]
                chord1 = [leg_chord_position(sx, sy, z1, *corner) for corner in corners]
                width = steel_width((z0 + z1) * 0.5, primary=True)
                brace_width = steel_width((z0 + z1) * 0.5, primary=False)

                for index in range(4):
                    primary.beam(chord0[index], chord1[index], width, width * 0.72)

                for index in range(4):
                    following = (index + 1) % 4
                    secondary.beam(chord0[index], chord0[following], brace_width * 1.15)
                    secondary.beam(chord0[index], chord1[following], brace_width)
                    secondary.beam(chord0[following], chord1[index], brace_width)

            top_z = levels[-1]
            top_chords = [leg_chord_position(sx, sy, top_z, *corner) for corner in corners]
            for index in range(4):
                secondary.beam(top_chords[index], top_chords[(index + 1) % 4], steel_width(top_z, False))


def corner_at(sx, sy, z, inset=0.0):
    width = max(0.0, tower_half_width(z) - inset)
    return Vector((sx * width, sy * width, z))


def build_upper_side_webs(primary, secondary):
    levels = [z for z in elevation_levels() if z >= 57.63]
    sides = [
        ((-1, -1), (1, -1)), ((1, -1), (1, 1)),
        ((1, 1), (-1, 1)), ((-1, 1), (-1, -1)),
    ]
    for z in levels:
        for (sx0, sy0), (sx1, sy1) in sides:
            secondary.beam(corner_at(sx0, sy0, z), corner_at(sx1, sy1, z), steel_width(z, False) * 1.25)

    for z0, z1 in zip(levels, levels[1:]):
        mid_z = (z0 + z1) * 0.5
        for (sx0, sy0), (sx1, sy1) in sides:
            secondary.beam(corner_at(sx0, sy0, z0), corner_at(sx1, sy1, z1), steel_width(mid_z, False))
            secondary.beam(corner_at(sx1, sy1, z0), corner_at(sx0, sy0, z1), steel_width(mid_z, False))
            if z0 >= 115.73:
                midpoint0 = (corner_at(sx0, sy0, z0) + corner_at(sx1, sy1, z0)) * 0.5
                midpoint1 = (corner_at(sx0, sy0, z1) + corner_at(sx1, sy1, z1)) * 0.5
                primary.beam(midpoint0, midpoint1, steel_width(mid_z, True) * 0.55)


def build_arches(primary, secondary):
    samples = 25
    span = 53.0
    for fixed_axis in ("x", "y"):
        for side_sign in (-1, 1):
            tracks = []
            for track_offset in (-1.35, 1.35):
                track = []
                for index in range(samples + 1):
                    horizontal = -span + 2.0 * span * index / samples
                    normalized = horizontal / span
                    z = 9.0 + 45.5 * (1.0 - normalized * normalized)
                    fixed = side_sign * (tower_half_width(z) + track_offset)
                    point = (fixed, horizontal, z) if fixed_axis == "x" else (horizontal, fixed, z)
                    track.append(Vector(point))
                tracks.append(track)
                for p0, p1 in zip(track, track[1:]):
                    primary.beam(p0, p1, 0.92, 0.72)

            for index in range(samples + 1):
                if index % 2 == 0:
                    secondary.beam(tracks[0][index], tracks[1][index], 0.34)
                if index < samples:
                    secondary.beam(tracks[0][index], tracks[1][index + 1], 0.28)
                    secondary.beam(tracks[1][index], tracks[0][index + 1], 0.28)


def add_perimeter_rail(builder, half_size, z, rail_height, spacing, width):
    z_top = z + rail_height
    corners = [
        (-half_size, -half_size, z_top), (half_size, -half_size, z_top),
        (half_size, half_size, z_top), (-half_size, half_size, z_top),
    ]
    for index in range(4):
        builder.beam(corners[index], corners[(index + 1) % 4], width)
    for fixed_axis in ("x", "y"):
        for side in (-1, 1):
            count = max(2, int((half_size * 2) / spacing))
            for index in range(count + 1):
                value = -half_size + half_size * 2 * index / count
                point0 = (side * half_size, value, z) if fixed_axis == "x" else (value, side * half_size, z)
                point1 = (side * half_size, value, z_top) if fixed_axis == "x" else (value, side * half_size, z_top)
                builder.beam(point0, point1, width * 0.68)


def build_platforms(platforms, secondary, glass, trim):
    platform_specs = [
        (57.63, 35.5, 2.2), (115.73, 20.7, 1.8), (276.13, 8.8, 1.35),
    ]
    for z, half_size, thickness in platform_specs:
        platforms.box((0.0, 0.0, z), (half_size * 2, half_size * 2, thickness))
        add_perimeter_rail(secondary, half_size, z + thickness * 0.55, 1.5, 3.0, 0.18)
        for x in (-half_size * 0.55, 0.0, half_size * 0.55):
            secondary.beam((x, -half_size, z - thickness), (x, half_size, z - thickness), 0.42)
        for y in (-half_size * 0.55, 0.0, half_size * 0.55):
            secondary.beam((-half_size, y, z - thickness), (half_size, y, z - thickness), 0.42)

    # First-floor pavilions and restaurant volumes.
    for x, y, sx, sy in (
        (0.0, -27.5, 30.0, 6.2), (0.0, 27.5, 30.0, 6.2),
        (-27.5, 0.0, 6.2, 30.0), (27.5, 0.0, 6.2, 30.0),
    ):
        glass.box((x, y, 61.8), (sx, sy, 6.1))
        trim.box((x, y, 65.0), (sx + 0.4, sy + 0.4, 0.38))

    # Second-floor enclosed observation gallery.
    glass.box((0.0, 0.0, 119.1), (31.0, 31.0, 5.1))
    trim.box((0.0, 0.0, 121.9), (32.0, 32.0, 0.42))

    # Third-floor two-tier observation enclosure.
    glass.box((0.0, 0.0, 279.2), (13.0, 13.0, 4.8))
    trim.box((0.0, 0.0, 281.9), (14.0, 14.0, 0.38))
    platforms.box((0.0, 0.0, 285.0), (11.0, 11.0, 0.8))
    add_perimeter_rail(secondary, 5.5, 285.45, 1.35, 1.8, 0.13)


def build_foundations(builder):
    for sx in (-1, 1):
        for sy in (-1, 1):
            builder.box((sx * 62.5, sy * 62.5, 1.4), (15.0, 15.0, 2.8))
            builder.box((sx * 62.5, sy * 62.5, 3.35), (11.8, 11.8, 1.1))


def build_elevator_system(rails, cabins, glass):
    for sx in (-1, 1):
        for sy in (-1, 1):
            radial = Vector((sx, sy, 0.0)).normalized()
            tangent = Vector((-sy, sx, 0.0)).normalized()
            for tangent_offset in (-1.0, 1.0):
                previous = None
                for z in [4.0 + i * (112.0 / 28) for i in range(29)]:
                    center = Vector((sx * tower_half_width(z), sy * tower_half_width(z), z))
                    point = center - radial * 1.1 + tangent * tangent_offset
                    if previous is not None:
                        rails.beam(previous, point, 0.24)
                    previous = point

    for sx, sy, z in ((1, 1, 34.0), (-1, -1, 86.0)):
        center = Vector((sx * tower_half_width(z), sy * tower_half_width(z), z))
        cabins.box(center, (3.0, 3.0, 4.2))
        glass.box(center + Vector((0.0, 0.0, 0.2)), (2.55, 2.55, 2.2))


def build_top_mast(primary, secondary, platforms):
    platforms.box((0.0, 0.0, 291.0), (7.8, 7.8, 8.5))
    platforms.box((0.0, 0.0, 297.0), (5.6, 5.6, 4.2))
    primary.beam((0.0, 0.0, 299.0), (0.0, 0.0, 323.0), 1.15, 1.15)
    primary.beam((0.0, 0.0, 323.0), (0.0, 0.0, 330.0), 0.52, 0.52)
    for z, radius in ((302.0, 3.6), (307.0, 3.0), (313.0, 2.35), (320.0, 1.65)):
        segments = 20
        ring = []
        for index in range(segments):
            angle = 2.0 * math.pi * index / segments
            ring.append(Vector((math.cos(angle) * radius, math.sin(angle) * radius, z)))
        for index in range(segments):
            secondary.beam(ring[index], ring[(index + 1) % segments], 0.18)
        for index in range(0, segments, 4):
            secondary.beam((0.0, 0.0, z), ring[index], 0.16)


def add_ground(collection, material):
    bpy.ops.mesh.primitive_plane_add(size=700.0, location=(0.0, 0.0, -0.05))
    ground = bpy.context.object
    ground.name = "Champ_de_Mars_Ground"
    for old_collection in list(ground.users_collection):
        old_collection.objects.unlink(ground)
    collection.objects.link(ground)
    ground.data.materials.append(material)


def add_camera_and_lighting(collection):
    camera_data = bpy.data.cameras.new("Hero_Camera")
    camera = bpy.data.objects.new("Hero_Camera", camera_data)
    collection.objects.link(camera)
    camera.location = (360.0, -500.0, 205.0)
    target = Vector((0.0, 0.0, 151.0))
    camera.rotation_euler = (target - camera.location).to_track_quat("-Z", "Y").to_euler()
    camera.data.lens = 61.0
    camera.data.sensor_width = 36.0
    bpy.context.scene.camera = camera

    sun_data = bpy.data.lights.new("Sunset_Key", type="SUN")
    sun_data.energy = 5.0
    sun_data.angle = math.radians(7.0)
    sun = bpy.data.objects.new("Sunset_Key", sun_data)
    collection.objects.link(sun)
    sun.rotation_euler = (math.radians(28.0), math.radians(-24.0), math.radians(-38.0))

    area_data = bpy.data.lights.new("Tower_Fill", type="AREA")
    area_data.energy = 8200.0
    area_data.shape = "DISK"
    area_data.size = 95.0
    area = bpy.data.objects.new("Tower_Fill", area_data)
    collection.objects.link(area)
    area.location = (-145.0, -160.0, 185.0)
    area.rotation_euler = ((Vector((0.0, 0.0, 150.0)) - area.location).to_track_quat("-Z", "Y").to_euler())

    for index, z in enumerate((58.8, 116.8, 277.6, 294.0)):
        radius = tower_half_width(min(z, 300.0)) + 2.0
        for side in range(4):
            angle = math.pi * 0.5 * side + math.pi * 0.25
            light_data = bpy.data.lights.new(f"Architectural_Light_{index}_{side}", type="POINT")
            light_data.energy = 650.0 if index < 2 else 280.0
            light_data.color = (1.0, 0.52, 0.22)
            light_data.shadow_soft_size = 5.0
            light = bpy.data.objects.new(f"Architectural_Light_{index}_{side}", light_data)
            collection.objects.link(light)
            light.location = (math.cos(angle) * radius, math.sin(angle) * radius, z)


def configure_scene():
    scene = bpy.context.scene
    scene.unit_settings.system = "METRIC"
    scene.unit_settings.length_unit = "METERS"
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 720
    scene.render.resolution_y = 960
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.filepath = RENDER_PATH
    scene.render.film_transparent = False
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.image_settings.color_depth = "8"
    scene.render.resolution_percentage = 100
    scene.view_settings.look = "AgX - Medium High Contrast"
    scene.view_settings.exposure = 1.25
    scene.world.color = (0.025, 0.035, 0.065)
    world = scene.world
    world.use_nodes = True
    background = world.node_tree.nodes.get("Background")
    background.inputs["Color"].default_value = (0.028, 0.045, 0.085, 1.0)
    background.inputs["Strength"].default_value = 0.48


def main():
    clear_scene()
    configure_scene()

    structural_collection = make_collection("01_Structural_Steel")
    detail_collection = make_collection("02_Lattice_and_Details")
    platform_collection = make_collection("03_Platforms_and_Pavilions")
    site_collection = make_collection("04_Site_and_Lighting")

    iron = make_material("Eiffel_Bronze_Iron", (0.29, 0.105, 0.038), metallic=0.72, roughness=0.34)
    dark_iron = make_material("Shadowed_Iron", (0.135, 0.046, 0.016), metallic=0.68, roughness=0.4)
    deck_material = make_material("Platform_Deck", (0.115, 0.105, 0.092), metallic=0.42, roughness=0.5)
    stone = make_material("Foundation_Stone", (0.48, 0.43, 0.35), metallic=0.0, roughness=0.82)
    glass_material = make_material("Observation_Glass", (0.07, 0.18, 0.23), metallic=0.12, roughness=0.2)
    glass_bsdf = glass_material.node_tree.nodes.get("Principled BSDF")
    glass_bsdf.inputs["Transmission Weight"].default_value = 0.55
    glass_bsdf.inputs["IOR"].default_value = 1.45
    trim_material = make_material("Golden_Trim", (0.42, 0.17, 0.035), metallic=0.72, roughness=0.29)
    ground_material = make_material("Champ_de_Mars", (0.055, 0.095, 0.04), metallic=0.0, roughness=0.95)

    primary = MeshBuilder()
    secondary = MeshBuilder()
    platforms = MeshBuilder()
    foundations = MeshBuilder()
    glass = MeshBuilder()
    trim = MeshBuilder()
    rails = MeshBuilder()
    cabins = MeshBuilder()

    build_leg_lattice(primary, secondary)
    build_upper_side_webs(primary, secondary)
    build_arches(primary, secondary)
    build_platforms(platforms, secondary, glass, trim)
    build_foundations(foundations)
    build_elevator_system(rails, cabins, glass)
    build_top_mast(primary, secondary, platforms)

    primary_obj = primary.to_object("Primary_Girders", structural_collection, iron)
    secondary_obj = secondary.to_object("Lattice_Bracing", detail_collection, dark_iron)
    rails.to_object("Elevator_Rails", detail_collection, trim_material)
    platforms.to_object("Observation_Platforms", platform_collection, deck_material)
    foundations.to_object("Stone_Foundations", platform_collection, stone)
    glass_obj = glass.to_object("Glazed_Enclosures", platform_collection, glass_material)
    trim.to_object("Architectural_Trim", platform_collection, trim_material)
    cabins.to_object("Elevator_Cabins", platform_collection, trim_material)

    for obj in (primary_obj, secondary_obj, glass_obj):
        obj["scale_note"] = "1 Blender unit = 1 metre"
    primary_obj["tower_height_m"] = 330.0
    primary_obj["first_floor_m"] = 57.63
    primary_obj["second_floor_m"] = 115.73
    primary_obj["third_floor_m"] = 276.13
    primary_obj["procedural_model"] = True

    add_ground(site_collection, ground_material)
    add_camera_and_lighting(site_collection)

    scene = bpy.context.scene
    scene["model_title"] = "Detailed Eiffel Tower Procedural Study"
    scene["scale"] = "1:1 metres"
    scene["generated_with"] = "Blender Python API"

    bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)
    bpy.ops.export_scene.gltf(filepath=GLB_PATH, export_format="GLB", export_apply=True)
    scene.render.filepath = RENDER_PATH
    bpy.ops.render.render(write_still=True)
    bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)

    print("EIFFEL_MODEL_COMPLETE")
    print(BLEND_PATH)
    print(GLB_PATH)
    print(RENDER_PATH)


if __name__ == "__main__":
    main()
