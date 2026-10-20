import bpy
import math
import os
import sys
from mathutils import Vector


SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

import generate_eiffel_tower as base


BLEND_PATH = os.path.join(SCRIPT_DIR, "eiffel_tower_internal_v2.blend")
GLB_PATH = os.path.join(SCRIPT_DIR, "eiffel_tower_internal_v2.glb")
HERO_PATH = os.path.join(SCRIPT_DIR, "eiffel_tower_internal_v2_hero.png")
DETAIL_PATH = os.path.join(SCRIPT_DIR, "eiffel_tower_internal_v2_detail.png")
RIVET_PATH = os.path.join(SCRIPT_DIR, "eiffel_tower_internal_v2_rivets.png")


class DetailBuilder(base.MeshBuilder):
    def oriented_plate(self, center, normal, up, width, height, thickness):
        center = Vector(center)
        normal = Vector(normal).normalized()
        up = Vector(up).normalized()
        right = up.cross(normal).normalized()
        right *= width * 0.5
        up *= height * 0.5
        normal *= thickness * 0.5
        corners = [
            center - right - up - normal, center + right - up - normal,
            center + right + up - normal, center - right + up - normal,
            center - right - up + normal, center + right - up + normal,
            center + right + up + normal, center - right + up + normal,
        ]
        start = len(self.vertices)
        self.vertices.extend(tuple(point) for point in corners)
        self.faces.extend([
            (start, start + 3, start + 2, start + 1),
            (start + 4, start + 5, start + 6, start + 7),
            (start, start + 1, start + 5, start + 4),
            (start + 1, start + 2, start + 6, start + 5),
            (start + 2, start + 3, start + 7, start + 6),
            (start + 3, start, start + 4, start + 7),
        ])


class RivetBuilder(base.MeshBuilder):
    def rivet(self, center, normal, radius, height, segments=8):
        center = Vector(center)
        normal = Vector(normal).normalized()
        reference = Vector((0.0, 0.0, 1.0))
        if abs(normal.dot(reference)) > 0.92:
            reference = Vector((1.0, 0.0, 0.0))
        u = normal.cross(reference).normalized()
        v = normal.cross(u).normalized()
        start = len(self.vertices)
        rings = ((0.0, radius), (height * 0.52, radius), (height * 0.88, radius * 0.66))
        for offset, ring_radius in rings:
            ring_center = center + normal * offset
            for index in range(segments):
                angle = math.tau * index / segments
                point = ring_center + u * math.cos(angle) * ring_radius + v * math.sin(angle) * ring_radius
                self.vertices.append(tuple(point))
        tip_index = len(self.vertices)
        self.vertices.append(tuple(center + normal * height))
        self.faces.append(tuple(start + index for index in reversed(range(segments))))
        for ring in range(2):
            ring_start = start + ring * segments
            next_start = ring_start + segments
            for index in range(segments):
                following = (index + 1) % segments
                self.faces.append((ring_start + index, ring_start + following,
                                   next_start + following, next_start + index))
        last_ring = start + segments * 2
        for index in range(segments):
            following = (index + 1) % segments
            self.faces.append((last_ring + index, last_ring + following, tip_index))


def rivet_grid(rivets, center, normal, up, width, height, columns, rows, radius):
    center = Vector(center)
    normal = Vector(normal).normalized()
    up = Vector(up).normalized()
    right = up.cross(normal).normalized()
    for row in range(rows):
        vertical = 0.0 if rows == 1 else -height * 0.5 + height * row / (rows - 1)
        for column in range(columns):
            horizontal = 0.0 if columns == 1 else -width * 0.5 + width * column / (columns - 1)
            position = center + right * horizontal + up * vertical + normal * 0.095
            rivets.rivet(position, normal, radius, radius * 0.9)


def add_weathered_steel(material, dark=False):
    nodes = material.node_tree.nodes
    links = material.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    noise = nodes.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = 4.2
    noise.inputs["Detail"].default_value = 5.0
    noise.inputs["Roughness"].default_value = 0.72
    ramp = nodes.new("ShaderNodeValToRGB")
    if dark:
        ramp.color_ramp.elements[0].color = (0.018, 0.004, 0.0015, 1.0)
        ramp.color_ramp.elements[1].color = (0.17, 0.042, 0.008, 1.0)
    else:
        ramp.color_ramp.elements[0].color = (0.038, 0.008, 0.002, 1.0)
        ramp.color_ramp.elements[1].color = (0.34, 0.082, 0.014, 1.0)
    bump = nodes.new("ShaderNodeBump")
    bump.inputs["Strength"].default_value = 0.16
    bump.inputs["Distance"].default_value = 0.07
    links.new(noise.outputs["Fac"], ramp.inputs["Fac"])
    links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    links.new(noise.outputs["Fac"], bump.inputs["Height"])
    links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])


def build_gusset_plates(plates, rivets):
    up = Vector((0.0, 0.0, 1.0))
    levels = base.elevation_levels()
    selected = [z for index, z in enumerate(levels) if index % 4 == 2 and z < 190.0]
    for sx in (-1, 1):
        for sy in (-1, 1):
            radial = Vector((sx, sy, 0.0)).normalized()
            tangent = Vector((-sy, sx, 0.0)).normalized()
            for index, z in enumerate(selected):
                section = base.leg_section(z)
                center = Vector((sx * base.tower_half_width(z), sy * base.tower_half_width(z), z))
                normal = tangent if index % 2 == 0 else radial
                width = max(1.15, section * 0.57)
                height = max(1.3, section * 0.44)
                plate_center = center + normal * (section * 0.51)
                plates.oriented_plate(plate_center, normal, up, width, height, 0.18)
                rivet_grid(rivets, plate_center, normal, up,
                           width * 0.72, height * 0.66, 4, 3,
                           max(0.07, min(0.13, section * 0.022)))


def build_platform_rivet_bands(plates, rivets):
    up = Vector((0.0, 0.0, 1.0))
    for z, half_size, band_height, spacing in (
        (57.63, 35.5, 1.4, 1.75),
        (115.73, 20.7, 1.15, 1.45),
        (276.13, 8.8, 0.85, 1.1),
    ):
        for axis in (0, 1):
            for side in (-1, 1):
                normal = Vector((side, 0.0, 0.0)) if axis == 0 else Vector((0.0, side, 0.0))
                center = Vector((side * half_size, 0.0, z)) if axis == 0 else Vector((0.0, side * half_size, z))
                plates.oriented_plate(center, normal, up, half_size * 2.0, band_height, 0.22)
                count = max(4, int((half_size * 2.0) / spacing))
                right = up.cross(normal).normalized()
                for row_z in (-band_height * 0.27, band_height * 0.27):
                    for index in range(count + 1):
                        offset = -half_size + half_size * 2.0 * index / count
                        point = center + right * offset + up * row_z + normal * 0.13
                        rivets.rivet(point, normal, 0.095 if z < 200 else 0.07, 0.09)


def build_spiral_stair(stairs, handrails, z0, z1, outer_radius, turns):
    rise = z1 - z0
    step_count = max(24, int(rise / 0.34))
    inner_radius = max(0.72, outer_radius * 0.28)
    rail_points = []
    inner_rail_points = []
    for index in range(step_count):
        t = index / (step_count - 1)
        angle = math.tau * turns * t
        z = z0 + rise * t
        direction = Vector((math.cos(angle), math.sin(angle), 0.0))
        inner = direction * inner_radius + Vector((0.0, 0.0, z))
        outer = direction * outer_radius + Vector((0.0, 0.0, z))
        stairs.beam(inner, outer, 0.82, 0.15)
        rail_points.append(outer + Vector((0.0, 0.0, 1.05)))
        inner_rail_points.append(inner + Vector((0.0, 0.0, 0.88)))
        if index % 3 == 0:
            handrails.beam(outer, outer + Vector((0.0, 0.0, 1.05)), 0.095)
            handrails.beam(inner, inner + Vector((0.0, 0.0, 0.88)), 0.075)
        if index > 0:
            handrails.beam(rail_points[index - 1], rail_points[index], 0.11)
            handrails.beam(inner_rail_points[index - 1], inner_rail_points[index], 0.075)
    stairs.beam((0.0, 0.0, z0 - 0.3), (0.0, 0.0, z1 + 0.3), 0.72)


def build_stair_and_elevator_core(stairs, handrails, core, cabins):
    build_spiral_stair(stairs, handrails, 59.0, 114.2, 3.6, 4.6)
    build_spiral_stair(stairs, handrails, 117.0, 188.5, 3.05, 6.0)
    build_spiral_stair(stairs, handrails, 191.0, 274.5, 2.45, 7.2)

    rail_xy = [(-1.35, -1.35), (1.35, -1.35), (1.35, 1.35), (-1.35, 1.35)]
    for x, y in rail_xy:
        core.beam((x, y, 56.0), (x, y, 278.0), 0.24)

    frame_levels = [56.0 + index * 5.2 for index in range(43)]
    for level_index, z in enumerate(frame_levels):
        for index in range(4):
            x0, y0 = rail_xy[index]
            x1, y1 = rail_xy[(index + 1) % 4]
            core.beam((x0, y0, z), (x1, y1, z), 0.15)
        if level_index < len(frame_levels) - 1:
            next_z = frame_levels[level_index + 1]
            if level_index % 2 == 0:
                core.beam((-1.35, -1.35, z), (1.35, -1.35, next_z), 0.13)
                core.beam((1.35, 1.35, z), (-1.35, 1.35, next_z), 0.13)
            else:
                core.beam((1.35, -1.35, z), (-1.35, -1.35, next_z), 0.13)
                core.beam((-1.35, 1.35, z), (1.35, 1.35, next_z), 0.13)

    cabins.box((0.0, 0.0, 153.0), (2.35, 2.35, 4.1))
    cabins.box((0.0, 0.0, 246.0), (2.35, 2.35, 4.1))


def build_hydraulics_and_cables(hydraulics):
    for sx in (-1, 1):
        for sy in (-1, 1):
            radial = Vector((sx, sy, 0.0)).normalized()
            tangent = Vector((-sy, sx, 0.0)).normalized()
            p0 = Vector((sx * base.tower_half_width(5.0), sy * base.tower_half_width(5.0), 5.0)) - radial * 1.8
            p1 = Vector((sx * base.tower_half_width(55.0), sy * base.tower_half_width(55.0), 55.0)) - radial * 1.8
            hydraulics.beam(p0, p1, 0.82)
            hydraulics.beam(p0 + tangent * 1.05, p1 + tangent * 1.05, 0.21)
            hydraulics.beam(p0 - tangent * 1.05, p1 - tangent * 1.05, 0.21)

    for x, y in ((-0.55, -0.55), (0.55, -0.55), (0.55, 0.55), (-0.55, 0.55)):
        hydraulics.beam((x, y, 116.0), (x, y, 298.0), 0.075)


def build_decorative_arches(arches, rivets):
    samples = 30
    span = 50.0
    for fixed_axis in ("x", "y"):
        for side_sign in (-1, 1):
            outer_points = []
            inner_points = []
            normals = []
            for index in range(samples + 1):
                horizontal = -span + 2.0 * span * index / samples
                normalized = horizontal / span
                outer_z = 10.5 + 43.0 * (1.0 - normalized * normalized)
                inner_z = outer_z + 3.5
                fixed_outer = side_sign * base.tower_half_width(outer_z)
                fixed_inner = side_sign * (base.tower_half_width(inner_z) - 0.9)
                outer = Vector((fixed_outer, horizontal, outer_z) if fixed_axis == "x" else (horizontal, fixed_outer, outer_z))
                inner = Vector((fixed_inner, horizontal, inner_z) if fixed_axis == "x" else (horizontal, fixed_inner, inner_z))
                outer_points.append(outer)
                inner_points.append(inner)
                normals.append(Vector((side_sign, 0.0, 0.0)) if fixed_axis == "x" else Vector((0.0, side_sign, 0.0)))
            for index in range(samples):
                arches.beam(outer_points[index], outer_points[index + 1], 0.58, 0.42)
                arches.beam(inner_points[index], inner_points[index + 1], 0.48, 0.34)
                if index % 2 == 0:
                    arches.beam(outer_points[index], inner_points[index + 1], 0.19)
                    arches.beam(inner_points[index], outer_points[index + 1], 0.19)
                else:
                    arches.beam(outer_points[index], inner_points[index], 0.19)
                if index % 2 == 0:
                    rivets.rivet(outer_points[index] + normals[index] * 0.27,
                                 normals[index], 0.09, 0.085)


def build_floor_understructure(builder):
    for z, half_size, spacing in ((56.3, 35.5, 4.4), (114.65, 20.7, 3.45), (275.25, 8.8, 2.2)):
        count = int((half_size * 2.0) / spacing)
        for index in range(count + 1):
            offset = -half_size + half_size * 2.0 * index / count
            builder.beam((offset, -half_size, z), (offset, half_size, z), 0.31, 0.22)
            builder.beam((-half_size, offset, z - 0.28), (half_size, offset, z - 0.28), 0.31, 0.22)


def add_pulleys(collection, material):
    pulley_specs = [
        ((0.0, -2.1, 121.8), (math.radians(90), 0.0, 0.0), 1.05),
        ((0.0, 2.1, 121.8), (math.radians(90), 0.0, 0.0), 1.05),
        ((0.0, -1.7, 279.0), (math.radians(90), 0.0, 0.0), 0.72),
        ((0.0, 1.7, 279.0), (math.radians(90), 0.0, 0.0), 0.72),
    ]
    for index, (location, rotation, radius) in enumerate(pulley_specs):
        bpy.ops.mesh.primitive_torus_add(
            major_radius=radius, minor_radius=radius * 0.17,
            major_segments=20, minor_segments=8,
            location=location, rotation=rotation,
        )
        pulley = bpy.context.object
        pulley.name = f"Elevator_Pulley_{index + 1:02d}"
        for old_collection in list(pulley.users_collection):
            old_collection.objects.unlink(pulley)
        collection.objects.link(pulley)
        pulley.data.materials.append(material)


def add_detail_camera(collection):
    camera_data = bpy.data.cameras.new("Internal_Detail_Camera")
    camera = bpy.data.objects.new("Internal_Detail_Camera", camera_data)
    collection.objects.link(camera)
    camera.location = (13.0, -18.0, 70.0)
    target = Vector((0.0, 0.0, 80.0))
    camera.rotation_euler = (target - camera.location).to_track_quat("-Z", "Y").to_euler()
    camera.data.lens = 48.0
    camera.data.sensor_width = 36.0

    light_data = bpy.data.lights.new("Internal_Detail_Softbox", type="AREA")
    light_data.energy = 2100.0
    light_data.shape = "DISK"
    light_data.size = 14.0
    light = bpy.data.objects.new("Internal_Detail_Softbox", light_data)
    collection.objects.link(light)
    light.location = (9.0, -14.0, 74.0)
    light.rotation_euler = ((target - light.location).to_track_quat("-Z", "Y").to_euler())
    return camera


def add_rivet_camera(collection):
    camera_data = bpy.data.cameras.new("Rivet_Detail_Camera")
    camera = bpy.data.objects.new("Rivet_Detail_Camera", camera_data)
    collection.objects.link(camera)
    camera.location = (0.0, -49.0, 60.5)
    target = Vector((0.0, -35.5, 58.0))
    camera.rotation_euler = (target - camera.location).to_track_quat("-Z", "Y").to_euler()
    camera.data.lens = 66.0
    camera.data.sensor_width = 36.0

    light_data = bpy.data.lights.new("Rivet_Detail_Key", type="AREA")
    light_data.energy = 1600.0
    light_data.shape = "RECTANGLE"
    light_data.size = 8.0
    light = bpy.data.objects.new("Rivet_Detail_Key", light_data)
    collection.objects.link(light)
    light.location = (3.0, -46.0, 64.0)
    light.rotation_euler = ((target - light.location).to_track_quat("-Z", "Y").to_euler())
    return camera


def main():
    base.clear_scene()
    base.configure_scene()

    structural_collection = base.make_collection("01_Primary_Structure")
    lattice_collection = base.make_collection("02_Secondary_Lattice")
    platform_collection = base.make_collection("03_Observation_Decks")
    connection_collection = base.make_collection("04_Rivets_and_Gussets")
    transport_collection = base.make_collection("05_Stairs_and_Elevators")
    decorative_collection = base.make_collection("06_Decorative_Cast_Iron")
    site_collection = base.make_collection("07_Site_Cameras_Lighting")

    iron = base.make_material("Eiffel_Tower_Brown", (0.31, 0.115, 0.042), metallic=0.73, roughness=0.36)
    dark_iron = base.make_material("Secondary_Dark_Iron", (0.115, 0.038, 0.014), metallic=0.7, roughness=0.4)
    plate_material = base.make_material("Riveted_Plate_Steel", (0.235, 0.075, 0.026), metallic=0.78, roughness=0.33)
    rivet_material = base.make_material("Rivet_Heads", (0.095, 0.022, 0.009), metallic=0.83, roughness=0.27)
    deck_material = base.make_material("Deck_and_Stairs", (0.12, 0.105, 0.085), metallic=0.5, roughness=0.47)
    rail_material = base.make_material("Safety_Rail_Brass", (0.49, 0.285, 0.035), metallic=0.72, roughness=0.3)
    mechanical_material = base.make_material("Elevator_Mechanisms", (0.13, 0.15, 0.16), metallic=0.84, roughness=0.24)
    stone = base.make_material("Foundation_Stone_V2", (0.48, 0.43, 0.35), roughness=0.84)
    glass_material = base.make_material("Observation_Glass_V2", (0.055, 0.17, 0.21), metallic=0.1, roughness=0.18)
    glass_bsdf = glass_material.node_tree.nodes.get("Principled BSDF")
    glass_bsdf.inputs["Transmission Weight"].default_value = 0.62
    glass_bsdf.inputs["IOR"].default_value = 1.45
    ground_material = base.make_material("Champ_de_Mars_V2", (0.055, 0.095, 0.04), roughness=0.95)
    add_weathered_steel(iron)
    add_weathered_steel(dark_iron, dark=True)
    add_weathered_steel(plate_material)

    primary = base.MeshBuilder()
    secondary = base.MeshBuilder()
    platforms = base.MeshBuilder()
    foundations = base.MeshBuilder()
    glass = base.MeshBuilder()
    trim = base.MeshBuilder()
    original_rails = base.MeshBuilder()
    cabins = base.MeshBuilder()

    base.build_leg_lattice(primary, secondary)
    base.build_upper_side_webs(primary, secondary)
    base.build_arches(primary, secondary)
    base.build_platforms(platforms, secondary, glass, trim)
    base.build_foundations(foundations)
    base.build_elevator_system(original_rails, cabins, glass)
    base.build_top_mast(primary, secondary, platforms)

    plates = DetailBuilder()
    rivets = RivetBuilder()
    stairs = base.MeshBuilder()
    handrails = base.MeshBuilder()
    elevator_core = base.MeshBuilder()
    internal_cabins = base.MeshBuilder()
    hydraulics = base.MeshBuilder()
    decorative_arches = base.MeshBuilder()
    floor_structure = base.MeshBuilder()

    build_gusset_plates(plates, rivets)
    build_platform_rivet_bands(plates, rivets)
    build_stair_and_elevator_core(stairs, handrails, elevator_core, internal_cabins)
    build_hydraulics_and_cables(hydraulics)
    build_decorative_arches(decorative_arches, rivets)
    build_floor_understructure(floor_structure)

    primary_obj = primary.to_object("Primary_Lattice_Girders", structural_collection, iron)
    secondary.to_object("Secondary_Cross_Bracing", lattice_collection, dark_iron)
    original_rails.to_object("Inclined_Elevator_Guide_Rails", transport_collection, mechanical_material)
    platforms.to_object("Observation_Deck_Slabs", platform_collection, deck_material)
    foundations.to_object("Masonry_Foundations", platform_collection, stone)
    glass.to_object("Glazed_Pavilions", platform_collection, glass_material)
    trim.to_object("Deck_Architectural_Trim", platform_collection, rail_material)
    cabins.to_object("Inclined_Elevator_Cabins", transport_collection, mechanical_material)

    plates.to_object("Gusset_and_Rivet_Plates", connection_collection, plate_material)
    rivets_obj = rivets.to_object("Concentric_Rivet_Heads", connection_collection, rivet_material)
    stairs.to_object("Internal_Spiral_Stair_Treads", transport_collection, deck_material)
    handrails.to_object("Spiral_Stair_Handrails", transport_collection, rail_material)
    elevator_core.to_object("Central_Elevator_Shaft_and_Guides", transport_collection, mechanical_material)
    internal_cabins.to_object("Central_Elevator_Cabins", transport_collection, glass_material)
    hydraulics.to_object("Hydraulic_Pistons_Cables_and_Rails", transport_collection, mechanical_material)
    decorative_arches.to_object("Decorative_Cast_Iron_Arch_Webs", decorative_collection, iron)
    floor_structure.to_object("Observation_Deck_Floor_Beam_Grid", platform_collection, dark_iron)

    primary_obj["tower_height_m"] = 330.0
    primary_obj["reference_focus"] = "Internal architecture and construction details"
    rivets_obj["detail_type"] = "Procedural concentric rivet pattern"

    add_pulleys(transport_collection, mechanical_material)
    base.add_ground(site_collection, ground_material)
    base.add_camera_and_lighting(site_collection)
    detail_camera = add_detail_camera(site_collection)
    rivet_camera = add_rivet_camera(site_collection)

    scene = bpy.context.scene
    scene["model_title"] = "Eiffel Tower Internal Architecture V2"
    scene["reference_image"] = "Gemini_Generated_Image_hqjiqwhqjiqwhqji.png"
    scene["scale"] = "1 Blender unit = 1 metre"
    scene.render.resolution_percentage = 100

    hero_camera = bpy.data.objects.get("Hero_Camera")
    scene.camera = hero_camera
    scene.render.resolution_x = 720
    scene.render.resolution_y = 960
    scene.render.filepath = HERO_PATH

    bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)
    bpy.ops.export_scene.gltf(filepath=GLB_PATH, export_format="GLB", export_apply=True)
    bpy.ops.render.render(write_still=True)

    scene.camera = detail_camera
    scene.render.resolution_x = 1080
    scene.render.resolution_y = 760
    scene.render.filepath = DETAIL_PATH
    bpy.ops.render.render(write_still=True)

    scene.camera = rivet_camera
    scene.render.resolution_x = 1080
    scene.render.resolution_y = 760
    scene.render.filepath = RIVET_PATH
    bpy.ops.render.render(write_still=True)

    scene.camera = hero_camera
    scene.render.resolution_x = 720
    scene.render.resolution_y = 960
    scene.render.filepath = HERO_PATH
    bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)

    print("EIFFEL_V2_COMPLETE")
    print(BLEND_PATH)
    print(GLB_PATH)
    print(HERO_PATH)
    print(DETAIL_PATH)
    print(RIVET_PATH)


if __name__ == "__main__":
    main()
