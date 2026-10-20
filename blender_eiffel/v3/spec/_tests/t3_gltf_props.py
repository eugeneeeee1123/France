"""T3a - dump bpy.ops.export_scene.gltf RNA properties in Blender 5.2."""
import bpy
op = bpy.ops.export_scene.gltf
rna = op.get_rna_type()
print("=== T3a export_scene.gltf idname:", rna.identifier, "num props:", len(rna.properties))
for p in rna.properties:
    if p.identifier in ("rna_type",):
        continue
    default = None
    try:
        if p.type == "ENUM":
            default = p.default if not p.is_enum_flag else sorted(p.default_flag)
            items = [i.identifier for i in p.enum_items]
            print(f"{p.identifier:40} ENUM    default={default!r:28} items={items}")
            continue
        elif p.type in ("BOOLEAN", "INT", "FLOAT", "STRING"):
            default = p.default
    except Exception as e:
        default = f"<{e}>"
    print(f"{p.identifier:40} {p.type:7} default={default!r}")
print("=== T3a DONE")
