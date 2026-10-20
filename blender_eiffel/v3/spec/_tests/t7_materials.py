"""T7 - procedural materials for the Eiffel build (Blender 5.2). Prints the node list of each after creation."""
import bpy

bpy.ops.wm.read_factory_settings(use_empty=True)

# --- probe: is use_nodes still needed in 5.2?
m0 = bpy.data.materials.new("probe")
print("=== T7.0 new material: use_nodes=", m0.use_nodes, "node_tree=", m0.node_tree,
      "has surface_render_method:", hasattr(m0, "surface_render_method"), "has blend_method:", hasattr(m0, "blend_method"))
import warnings
with warnings.catch_warnings(record=True) as wl:
    warnings.simplefilter("always")
    m0.use_nodes = True
    print("  setting use_nodes=True warnings:", [str(w.message) for w in wl])
print("  after: node_tree nodes:", [n.bl_idname for n in m0.node_tree.nodes])

# ---------------------------------------------------------------------------------------------------
def _tree(name):
    """Return (material, nodes, links, principled, output) with a clean node tree."""
    mat = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    if mat.node_tree is None:
        mat.use_nodes = True          # still required in 5.2 (deprecated warning, removal planned for 6.0)
    nt = mat.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial"); out.location = (600, 0)
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled"); bsdf.location = (300, 0)
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])
    return mat, nt.nodes, nt.links, bsdf, out

def _texcoord(nodes, links, scale=1.0):
    tc = nodes.new("ShaderNodeTexCoord"); tc.location = (-1200, 0)
    mp = nodes.new("ShaderNodeMapping"); mp.location = (-1000, 0)
    mp.inputs["Scale"].default_value = (scale, scale, scale)
    links.new(tc.outputs["Object"], mp.inputs["Vector"])   # Object coords: no UVs needed, stable across objects
    return mp

def _ramp(nodes, stops):
    """stops: list of (pos, (r,g,b,a))"""
    r = nodes.new("ShaderNodeValToRGB")
    el = r.color_ramp.elements
    while len(el) > 1: el.remove(el[-1])
    el[0].position, el[0].color = stops[0]
    for pos, col in stops[1:]:
        e = el.new(pos); e.color = col
    return r

def _mix_rgb(nodes):
    mx = nodes.new("ShaderNodeMix"); mx.data_type = "RGBA"; mx.blend_type = "MIX"
    return mx

def mat_eiffel_iron(name="EIF_Iron_Brown"):
    """Weathered 'Brun Tour Eiffel' painted iron: 3-tone brown (lighter at top is applied per object via
    a different base), large-scale noise colour variation, fine noise bump, slight metallic/roughness breakup."""
    mat, nodes, links, bsdf, out = _tree(name)
    mp = _texcoord(nodes, links, 1.0)
    big = nodes.new("ShaderNodeTexNoise"); big.location = (-700, 200)
    big.inputs["Scale"].default_value = 0.35; big.inputs["Detail"].default_value = 3.0; big.inputs["Roughness"].default_value = 0.55
    fine = nodes.new("ShaderNodeTexNoise"); fine.location = (-700, -250)
    fine.inputs["Scale"].default_value = 60.0; fine.inputs["Detail"].default_value = 6.0; fine.inputs["Roughness"].default_value = 0.7
    links.new(mp.outputs["Vector"], big.inputs["Vector"]); links.new(mp.outputs["Vector"], fine.inputs["Vector"])
    # Colour: 'Brun Tour Eiffel' - official 2019+ repaint uses a yellow-brown; base sRGB ~ #4F3A2A..#8A6B4D (ESTIMATE
    # from toureiffel.paris photos; the exact RAL-like reference is not published as RGB)
    ramp = _ramp(nodes, [(0.0, (0.060, 0.034, 0.020, 1)), (0.5, (0.120, 0.072, 0.040, 1)), (1.0, (0.230, 0.150, 0.085, 1))])
    ramp.location = (-400, 200)
    links.new(big.outputs["Fac"], ramp.inputs["Fac"])
    # fine dirt streaks darken
    mix = _mix_rgb(nodes); mix.location = (-100, 200)
    mix.inputs["Factor"].default_value = 0.35
    links.new(ramp.outputs["Color"], mix.inputs["A"])
    links.new(fine.outputs["Color"], mix.inputs["B"])
    mix.blend_type = "MULTIPLY"
    links.new(mix.outputs["Result"], bsdf.inputs["Base Color"])
    # roughness breakup 0.45..0.75
    rr = nodes.new("ShaderNodeMapRange"); rr.location = (-100, -100)
    rr.inputs["To Min"].default_value = 0.45; rr.inputs["To Max"].default_value = 0.75
    links.new(fine.outputs["Fac"], rr.inputs["Value"]); links.new(rr.outputs["Result"], bsdf.inputs["Roughness"])
    bsdf.inputs["Metallic"].default_value = 0.15      # painted metal, mostly dielectric paint film
    bump = nodes.new("ShaderNodeBump"); bump.location = (0, -300)
    bump.inputs["Strength"].default_value = 0.25; bump.inputs["Distance"].default_value = 0.002
    links.new(fine.outputs["Fac"], bump.inputs["Height"]); links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    mat.diffuse_color = (0.12, 0.072, 0.04, 1)    # workbench/solid-view colour
    return mat

def mat_glass(name="EIF_Glass"):
    mat, nodes, links, bsdf, out = _tree(name)
    bsdf.inputs["Base Color"].default_value = (0.85, 0.92, 0.95, 1)
    bsdf.inputs["Transmission Weight"].default_value = 1.0
    bsdf.inputs["Roughness"].default_value = 0.05
    bsdf.inputs["IOR"].default_value = 1.45
    bsdf.inputs["Alpha"].default_value = 0.25          # glTF exporter uses Alpha -> BLEND mode for web
    if hasattr(mat, "surface_render_method"):
        mat.surface_render_method = "BLENDED"          # EEVEE 4.2+/5.x transparency
    mat.diffuse_color = (0.8, 0.9, 0.95, 0.3)
    return mat

def mat_cast_iron_green(name="EIF_CastIron_Green"):
    """Paris street furniture 'vert bronze / vert wagon' painted cast iron (lamp post, bench frame).
    RGB ESTIMATE ~#2F4A35 for the classic Paris Hittorff/Davioud green."""
    mat, nodes, links, bsdf, out = _tree(name)
    mp = _texcoord(nodes, links, 1.0)
    n = nodes.new("ShaderNodeTexNoise"); n.inputs["Scale"].default_value = 45.0; n.inputs["Detail"].default_value = 5.0
    links.new(mp.outputs["Vector"], n.inputs["Vector"])
    ramp = _ramp(nodes, [(0.0, (0.025, 0.060, 0.032, 1)), (1.0, (0.060, 0.110, 0.065, 1))])
    links.new(n.outputs["Fac"], ramp.inputs["Fac"]); links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.35; bsdf.inputs["Metallic"].default_value = 0.2
    bsdf.inputs["Coat Weight"].default_value = 0.3     # glossy paint film
    bump = nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.15; bump.inputs["Distance"].default_value = 0.001
    links.new(n.outputs["Fac"], bump.inputs["Height"]); links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    mat.diffuse_color = (0.04, 0.09, 0.05, 1)
    return mat

def mat_wood_slats(name="EIF_Wood_Slats"):
    mat, nodes, links, bsdf, out = _tree(name)
    mp = _texcoord(nodes, links, 1.0)
    wave = nodes.new("ShaderNodeTexWave"); wave.wave_type = "BANDS"; wave.bands_direction = "X"
    wave.inputs["Scale"].default_value = 18.0; wave.inputs["Distortion"].default_value = 6.0
    wave.inputs["Detail"].default_value = 3.0; wave.inputs["Detail Scale"].default_value = 2.0
    links.new(mp.outputs["Vector"], wave.inputs["Vector"])
    ramp = _ramp(nodes, [(0.0, (0.16, 0.085, 0.040, 1)), (0.55, (0.30, 0.17, 0.08, 1)), (1.0, (0.42, 0.26, 0.13, 1))])
    links.new(wave.outputs["Fac"], ramp.inputs["Fac"]); links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.6
    bump = nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.2; bump.inputs["Distance"].default_value = 0.001
    links.new(wave.outputs["Fac"], bump.inputs["Height"]); links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    mat.diffuse_color = (0.3, 0.17, 0.08, 1)
    return mat

def mat_gravel(name="EIF_Gravel"):
    mat, nodes, links, bsdf, out = _tree(name)
    mp = _texcoord(nodes, links, 1.0)
    vor = nodes.new("ShaderNodeTexVoronoi"); vor.feature = "F1"; vor.distance = "EUCLIDEAN"
    vor.inputs["Scale"].default_value = 120.0           # ~1 cm stones
    links.new(mp.outputs["Vector"], vor.inputs["Vector"])
    n = nodes.new("ShaderNodeTexNoise"); n.inputs["Scale"].default_value = 3.0
    links.new(mp.outputs["Vector"], n.inputs["Vector"])
    ramp = _ramp(nodes, [(0.0, (0.35, 0.32, 0.27, 1)), (1.0, (0.62, 0.58, 0.50, 1))])
    links.new(n.outputs["Fac"], ramp.inputs["Fac"])
    mix = _mix_rgb(nodes); mix.blend_type = "MULTIPLY"; mix.inputs["Factor"].default_value = 0.5
    links.new(ramp.outputs["Color"], mix.inputs["A"]); links.new(vor.outputs["Color"], mix.inputs["B"])
    links.new(mix.outputs["Result"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.9
    bump = nodes.new("ShaderNodeBump"); bump.inputs["Strength"].default_value = 0.6; bump.inputs["Distance"].default_value = 0.01
    links.new(vor.outputs["Distance"], bump.inputs["Height"]); links.new(bump.outputs["Normal"], bsdf.inputs["Normal"])
    mat.diffuse_color = (0.5, 0.46, 0.4, 1)
    return mat

def mat_grass(name="EIF_Grass"):
    mat, nodes, links, bsdf, out = _tree(name)
    mp = _texcoord(nodes, links, 1.0)
    n = nodes.new("ShaderNodeTexNoise"); n.inputs["Scale"].default_value = 2.5; n.inputs["Detail"].default_value = 4.0
    links.new(mp.outputs["Vector"], n.inputs["Vector"])
    ramp = _ramp(nodes, [(0.0, (0.030, 0.090, 0.015, 1)), (0.5, (0.060, 0.160, 0.025, 1)), (1.0, (0.120, 0.220, 0.040, 1))])
    links.new(n.outputs["Fac"], ramp.inputs["Fac"]); links.new(ramp.outputs["Color"], bsdf.inputs["Base Color"])
    bsdf.inputs["Roughness"].default_value = 0.8
    bsdf.inputs["Subsurface Weight"].default_value = 0.15    # blade translucency hint (Cycles/EEVEE only)
    mat.diffuse_color = (0.06, 0.16, 0.03, 1)
    return mat

# ---------------------------------------------------------------------------------------------------
print("=== T7 Mix node socket identifiers (RGBA mode):", [(s.identifier, s.name, s.type, s.enabled) for s in _mix_rgb(bpy.data.materials.new("x").node_tree.nodes if False else bpy.data.node_groups.new("probe_sh", "ShaderNodeTree").nodes).inputs])
for fn in (mat_eiffel_iron, mat_glass, mat_cast_iron_green, mat_wood_slats, mat_gravel, mat_grass):
    m = fn()
    nt = m.node_tree
    bsdf = next(n for n in nt.nodes if n.type == "BSDF_PRINCIPLED")
    linked = [s.name for s in bsdf.inputs if s.is_linked]
    print(f"=== T7 {m.name:22} nodes={len(nt.nodes):2d} links={len(nt.links):2d} | {[n.bl_idname.replace('ShaderNode','') for n in nt.nodes]} | BSDF linked inputs={linked}")
print("  materials in file:", [m.name for m in bpy.data.materials if m.name.startswith("EIF_")])
print("=== T7 DONE")
