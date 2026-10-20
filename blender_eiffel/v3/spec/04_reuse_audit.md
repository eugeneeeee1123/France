# 04 — Reuse audit of `blender_eiffel/generate_eiffel_tower.py` (v1) and `generate_eiffel_tower_v2.py` (v2)

Lens: **reuse-audit**. Date: 2026-10-18. Scale convention for everything below: 1 BU = 1 m, Z up, tower axis at the origin, ground z = 0.

Files read in full: `blender_eiffel/generate_eiffel_tower.py` (491 lines), `blender_eiffel/generate_eiffel_tower_v2.py` (470 lines). Renders judged visually: `eiffel_tower_internal_v2_hero.png`, `eiffel_tower_internal_v2_detail.png`, `eiffel_tower_hero_render_v3.png`, `eiffel_tower_daylight_pure_v5.png`. Reference drawings/photos used as evidence: `blender_eiffel/refs/R02b_eiffel_sizes.png`, `R02c_skizze_technische_daten.png`, `R03d_plate07_metal_structure.jpg` (Eiffel 1900, Pl. VII "Ossature métallique en rabattement"), `R03g_plate18_ground_and_first_platform_plan.jpg` (Pl. XVIII), `R03h_plate20_diagonal_vertical_section.jpg` (Pl. XX), `R06a_leg_lattice_from_below.jpg`, `R06d_arch_from_champ_de_mars.jpg`.

Every number below carries a source tag. `[S#]` refers to the source list at the end; `DERIVED` = arithmetic from sourced values (formula shown); `ESTIMATE` = my reading of a drawing/photo or an engineering guess, with reasoning; `OLD` = value read from the old code or measured by the smoke script.

---

## 0. Headless smoke test (Blender 5.2.0 LTS, hash fbe6228777e7)

Command requested by the orchestrator:

```
"C:/Program Files/Blender Foundation/Blender 5.2/blender.exe" -b --python-expr "import sys; sys.path.insert(0, r'C:/Users/Eugen/OneDrive/Desktop/Fundamentals of Web Programming2/France/blender_eiffel'); import generate_eiffel_tower as g; b=g.MeshBuilder(); b.beam((0,0,0),(0,0,10),1); print('OK', len(b.vertices), len(b.faces))"
```

Result: **`OK 8 6`** (one beam = 8 vertices, 6 quads = 12 triangles). The old module imports and runs unchanged under Blender 5.2 / Python 3.13. The BlenderMCP addon registers/unregisters around it without side effects.

A longer numeric probe is checked in as `v3/spec/smoke_old_builder.py` (run with `-b --python`). Its output is quoted throughout section 2 as `OLD`. Headline numbers:

| File | objects | mesh triangles | vertices | GLB size |
|---|---|---|---|---|
| `eiffel_tower_detailed.blend` (v1) | 28 | 75,290 | 50,196 | 4,400,604 B |
| `eiffel_tower_internal_v2.blend` (v2) | 45 | 172,714 | 107,656 | 10,163,876 B |
| `eiffel_tower_paris_mcp.blend` (MCP session, Sept) | 42 | 49,696 | 32,464 | 2,654,540 B |

Biggest spenders (v2): `Concentric_Rivet_Heads` 59,064 tris, `Secondary_Cross_Bracing` 54,696, `Spiral_Stair_Handrails` 19,680, `Primary_Lattice_Girders` 17,544. So 34 % of the v2 budget is rivet meshes and 32 % is bracing laid out at the wrong rhythm (see 2h).

---

## 1. What the old scripts do well — keep these (exact names)

| Keep | Where | Why / how to port |
|---|---|---|
| **Batching pattern**: one `MeshBuilder` per material group, `from_pydata`, one `to_object(name, collection, material)` per group. No `bpy.ops` inside loops. | v1 `class MeshBuilder`, `MeshBuilder.to_object` | Fast (75k tris builds in < 2 s). Port verbatim as the base of `core.MeshBuilder`; add `lod` / `source` custom properties in `to_object`. |
| `MeshBuilder.beam(p1, p2, width, depth=None)` — 8-vertex box between two points with a reference-vector frame. | v1 L53–79 | Keep the API shape; **add** `up=` (roll control, see 2i-1), `mode="box"|"quad"` (2-tri flat member for the web LOD), and return the vertex base index so joints can be welded. |
| `MeshBuilder.box(center, size)` | v1 L81–99 | Keep; add `rotation_z`. |
| `DetailBuilder.oriented_plate(center, normal, up, width, height, thickness)` | v2 L23–46 | Keep as `MeshBuilder.plate`. Correct frame construction (`right = up × normal`). |
| `RivetBuilder.rivet(center, normal, radius, height, segments=8)` (3 rings + tip = 32 tris) and `rivet_grid(...)` | v2 L49–92 | Keep the rivet **as the single instance source mesh** and `rivet_grid` as a *point generator*. Never emit rivets as mesh again (59k tris in v2 for a fraction of the tower); instance via Geometry Nodes (section 3). |
| `interpolated_profile(z, points)` table-driven profile | v1 L115–122 | Keep the table idea; **drop `smoothstep`** (2b). Linear below the 2nd floor, monotone cubic (PCHIP) or the Weidman–Pinelis two-exponential above. |
| `elevation_levels()` segment list concept | v1 L150–158 | Keep the concept, but drive it from the real 29-panel table (2h, section 5). |
| Numbered collections `01_Primary_Structure` … `07_Site_Cameras_Lighting` | v2 `main()` L338–344 | Keep the scheme (sorts well in the outliner and in glTF). Add `08_Site_Park` (grass/lamp/bench), `90_REF` (image empties, excluded from export). |
| `make_material(name, color, metallic, roughness, emission)` + `add_weathered_steel(material, dark)` noise → ColorRamp → Bump chain | v1 L34–45, v2 L95–116 | Keep; fix two things: look nodes up **by type** (`n.type == "BSDF_PRINCIPLED"`, names are localised — v1 uses `nodes.get("Principled BSDF")`), and make painted iron **dielectric** (metallic 0.72 is why v2 renders look coppery). Keep the naming style `Eiffel_*`, `Riveted_Plate_Steel`, `Safety_Rail_Brass`, `Observation_Glass*`. |
| `clear_scene()`, `make_collection()`, `configure_scene()` (METRIC/METERS, AgX look, EEVEE, PNG RGBA) | v1 L18–31, L391–412 | Keep. Wrap `scene.render.engine = …` in `try/except TypeError` (5.2 enum names differ per build). |
| Custom properties (`scale_note`, `tower_height_m`, `first_floor_m` …, scene `model_title`) | v1 L461–475 | Keep; add per-object `source` (which spec table/plate) and `lod`. |
| `add_camera_and_lighting()`: hero camera at (360, −500, 205) → target (0,0,151), 61 mm; sun + disk fill + warm point lights at the floors | v1 L351–388 | Keep as a render preset; the framing in `eiffel_tower_hero_render_v3.png` is good. |
| `build_spiral_stair(stairs, handrails, z0, z1, outer_radius, turns)` generator (tread beams, posts every 3rd tread, rail polyline) | v2 L161–183 | Keep the algorithm as `stair_spiral`; relocate (2f). Use step rise 0.17 m, not 0.34 m. |
| `build_floor_understructure()` beam-grid under decks | v2 L262–268 | Keep the grid idea for the ring decks; drive spacing from the Pl. XVIII beam lines. |
| Export: `bpy.ops.export_scene.gltf(filepath, export_format="GLB", export_apply=True)` then save | v1 L477–481 | Keep; v3 adds an LOD filter before export and `gltf-transform` meshopt afterwards (REFERENCE-PLAN §2.6). |

Replace, do not port: `add_pulleys()` (bpy.ops torus in a loop → `MeshBuilder.tube`/ring), all `build_*` geometry functions (every one encodes the wrong frame/profile, section 2), the `smoothstep` helper, `build_elevator_system`, `build_stair_and_elevator_core`, `build_hydraulics_and_cables`, `build_top_mast`.

---

## 2. Concrete geometric errors versus the real tower

### 2a. Pier cross-section is a diamond (rotated 45°); real pier faces are parallel to the base square

**Old code.** `leg_chord_position(sx, sy, z, radial_sign, tangent_sign)` (v1 L161–166) builds the four chords from `radial = (sx, sy)/√2` and `tangent = (−sy, sx)/√2`. Smoke output for the (+,+) pier:

```
CHORD z=0.00   (62.5, 56.84)  (68.16, 62.5)  (62.5, 68.16)  (56.84, 62.5)
CHORD z=57.63  (35.4, 31.86)  (38.94, 35.4)  (35.4, 38.94)  (31.86, 35.4)
CHORD z=115.73 (20.3, 17.68)  (22.92, 20.3)  (20.3, 22.92)  (17.68, 20.3)
```

That is a square of side 8.0 m (`leg_section(0)` = 8.0 OLD) whose **corners** point along ±x and ±y: in plan it is a diamond, the faces sit at 45° to the tower faces, and the outermost point is at x = 68.16 m, i.e. an effective base square of 136.3 m instead of 124.90 m [S1][S2] (+9 %). From the Champ de Mars you would look at a pier *edge*, not a lattice face.

**Real tower.** Each pile is "une grande ossature de section carrée de 15 m de côté" from the ground to the 1st floor [S6][S7]; its four arbalétriers sit "at the corners of a 13.00 m square" [S6]; inclination is given "dans le plan des faces" (65°48′49″) and in the diagonal plane (54°35′26″) [S6] — a *face plane* only exists if the pier faces are planar and parallel to the tower faces. Pl. XVIII Figs 1, 2, 4, 5 (R03g) draw every ground-floor pile section as a square aligned with the sheet/base square, with the Otis track crossing it **diagonally**. Photo R06d shows the near pier's outer lattice face frontally, its big X's lying in one plane parallel to the façade.

Consistency check that resolves the two published angles (content-plan values 65°48′49″ / 54°35′26″ looked incompatible with √2): if the pier axis moves inward by *a* metres per metre of rise **along each axis**, the true inclination in the vertical diagonal plane is θ_d with tan θ_d = 1/(a√2), and the angle of the arbalétrier measured *within the inclined face plane* ("en rabattement", the title of Pl. VII) is φ with cos φ = a/√(2a²+1). θ_d = 54°35′26″ ⇒ a = 0.5026 ⇒ φ = 65.81° = 65°48′ ✓. So: **a = 0.5026 m/m per axis (DERIVED)**; the elevation-view slope is atan(1/0.5026) = 63.3°, not 65.8°.

**Fix.** Pier frame = world axes, not radial/tangent:
`corner(q, z) = (sx·(A(z) ± w(z)/2), sy·(A(z) ± w(z)/2), z)` with `A(z)` = pier-axis distance (51.95 m at z = 0 [S7]; 51.95 − 0.5026·z below the 1st floor, DERIVED) and `w(z)` = 15.0 m (0–57.63 m) tapering to 10.412 m at 115.73 m [S6]. All four chords of a pier are then parallel lines below the 1st floor (the pile is a prism [S7]).

### 2b. `TOWER_PROFILE` values and the smoothstep silhouette

**Old table** (v1 L125–128, leg-centre half-widths): (0, 62.5), (24, 54.5), (57.63, 35.4), (115.73, 20.3), (190, 12.2), (276.13, 6.3), (300, 4.0); legs add ±`leg_section/2`.

| z (m) | OLD leg centre | OLD outermost chord | Real structural outer half-width | Real platform half-side | Source |
|---|---|---|---|---|---|
| 0 | 62.5 | 68.16 | 59.45 (118.90/2, outer arêtes) or 62.45 (124.90/2, official base) — see OQ-1; pier **axis** 51.95 (103.9/2) | — (pedestals to 64.6 = 129.25/2) | [S7][S1][S2] |
| 57.63 | 35.4 | 38.94 | ≈ 33.5 (DERIVED: 62.45 − 0.5026·57.63 = 33.48; or 59.45 − 0.449·57.63 = 33.6) | 35.345 (70.69/2) | [S1] |
| 115.73 | 20.3 | 22.92 | 15.85 (face width 31.701 m) | 20.48 (40.96/2) | [S6][S1] |
| 190–196 | 12.2 | 13.55 | ≈ 6.1 (ESTIMATE: JHU idealisation "40 ft wide at 644 ft") | — | [S9] |
| 276.13 | 6.3 | 7.2 | 5.0 ("10 m below the campanile") | 9.325 (18.65/2) | [S6][S1] |
| 300 | 4.0 | 4.6 | summit platform ø1.70 m on the dome at 300 m | — | [S6] |

So the old tower is ~10 m too wide at the ground, +8 % at the 1st floor, **+45 % at the 2nd floor and ~2× too fat around 190 m**, while the piers themselves are far too slender: `leg_section` = 8.0 / 5.0 / 3.7 / 1.8 m (OLD) versus 15 / 15 / 10.41 / ≈5 m real [S6]. The renders show exactly this: wire-thin legs under a wide upper body (`internal_v2_hero.png`), and a heavy upper shaft (`hero_render_v3.png`).

**Smoothstep makes the silhouette wavy.** `interpolated_profile` applies `smoothstep` per segment, so the derivative is zero at *every* knot. Smoke output: `dhalf/dz` = −0.001 at z = 0, −0.500 at 12, −0.001 at 24, −0.850 at 40, 0.000 at 57.63, −0.390 at 86, 0.000 at 115.73 … The legs are therefore **vertical at the foot, vertical again at 24 m and at each floor**, and flattest in between (−0.85 = 49.6° from horizontal under the 1st floor). The real arbalétriers are straight at a constant slope from the ground to the 1st-floor belt [S6][S7] (slope −0.50 per axis, DERIVED above), kink at the floor belts, and above the 2nd floor follow a smooth curve that Weidman & Pinelis fitted as two piecewise exponentials [S12]. The "knees" are visible at the feet in `hero_render_v3.png` / `daylight_pure_v5.png` (legs flare vertical into the pedestals) and as an S-bend between the 1st and 2nd floor.

**Fix.** Piecewise **linear** below 115.73 m (two straight runs, kink at 57.63), monotone cubic through the anchors above (or the two-exponential fit once Table 1 of [S12] is in hand, OQ-3). Never `smoothstep`.

### 2c. Arch span, rise, springing, curve family

**Old.** v1 `build_arches` (L221–245): half-span 53 m, parabola `z = 9 + 45.5·(1 − n²)` ⇒ springing 9 m, crown **54.5 m**, placed at `±(tower_half_width(z) + 1.35)` so it follows the leg curve *outside* the face plane (this is why the arches read as four extra legs sweeping to the ground in `internal_v2_hero.png`). v2 `build_decorative_arches` (L229–259): half-span 50, parabola crown 53.5 m, inner ring +3.5 m.

**Real.** Chord **74.24 m**, height under the keystone **39.40 m** [S7] (FR Wikipedia rounds to 74 m / 39 m [S1]). A circular arc with that chord and intrados crown is a semicircle of **R = 37.12 m centred at z = 39.40 − 37.12 = 2.28 m** (DERIVED), i.e. the feet land on small bases at the inner corners of the pier pedestals (visible in R06d, R06c). Between the arch extrados (≈ 42–43 m, ESTIMATE band depth 2.5–3 m from R06d) and the underside of the 1st-floor belt at 57.63 − 7.00 = **50.63 m** (panel 5 is a 7.00 m belt [S6]; DERIVED) sits the lattice spandrel with the 72-name frieze and the arcaded "poutre de l'arc" (Pl. VII Fig. 1). The arch lies **in the face plane** between the inner faces of the two piers.

Old arch is 43 % too wide, 12–15 m too tall, the wrong curve family, and would collide with the real belt.

### 2d. Floors modelled as solid slabs

**Old.** `build_platforms` (v1 L266–294): `platforms.box((0,0,z), (2·half, 2·half, t))` ⇒ solid 71 × 71 × 2.2 m and 41.4 × 41.4 × 1.8 m slabs; plus a solid 31 × 31 × 5.1 m glass box over almost the whole 2nd floor and a 13 × 13 m box at the 3rd.

**Real.** The 1st floor is a **ring**: Pl. XVIII Fig. 3 (R03g) shows a large central void with concave sides ("Sol du Champ de Mars" is drawn through it), restaurants/galleries on the four sides and the piles passing through the corners. ESTIMATE from the plate proportions: void ≈ 26 m across at the pinch, ≈ 35 m at the corners, outer side 70.69 m [S1], outer promenade 2.6 m wide [S4]. The 2nd floor is also a ring around a central void where the summit lifts rise (ESTIMATE void ≈ 12–14 m square; Pl. XX shows the Edoux shaft on the axis). The 3rd floor is a 16.56 m square with cut corners inside an 18.65 m outer gallery, walkway 3.00 m [S6][S1]. The old 13 m glass box is 5.6 m too small and the old slabs block the view through the tower that every photograph shows.

### 2e. Missing intermediate platform (~196 m)

**Old.** `TOWER_PROFILE` has a knot at 190 m but nothing is built there; v2 spiral stairs stop at 188.5 m and restart at 191 m with no landing.

**Real.** The Edoux transfer landing sits at **196 m** [S7] = mid-height of panel 19 [S6]; Vogel puts it 262 ft (79.9 m) above the 2nd platform ⇒ 195.6 m [S8]; the JHU idealisation uses 644 ft = 196.3 m [S9]. Main beams 2.30 m deep [S6]. It still exists (lift emergency stop, storage) [S10]. It is also where the 2nd → top stair lands and where the upper shaft's lattice visibly changes rhythm (Pl. VII Fig. 3 vs Fig. 4). Model it as a square lattice deck with the two duolift shafts passing through.

### 2f. Elevators and stairs vs the real North/East/South/West scheme

**Old.** v1 `build_elevator_system` (L304–321): two inclined rails in **all four** piers from z = 4 to 116 m at `center − radial·1.1 ± tangent`, cabins at (+,+,34 m) and (−,−,86 m). v2 `build_stair_and_elevator_core` (L186–211): a **central** shaft from **56 m** to 278 m with spiral stairs 59→114 m, 117→188.5 m, 191→274.5 m wound around the tower axis, cabins at 153 and 246 m; `build_hydraulics_and_cables` adds pistons in every pier.

Below 115.73 m the tower axis is **open air** (the 1st floor is a ring, 2d). The v2 core and the 59–114 m stair therefore hang in the void between the piers — confirmed by `internal_v2_detail.png`, where the grey column and yellow-railed stair stand in empty space with only distant bracing behind them.

**Real scheme** (1889 → today):
- **East & West piers**: 1889 Roux-Combaluzier-Lepape chain lifts to the 1st floor [S8][S4]; replaced 1899 by Fives-Lille hydraulic lifts to the 2nd floor, still the ones running (modernised 1986) [S4]. Cabins run on inclined tracks **in the pier's diagonal plane** (Pl. XVIII: track drawn across each pile plan from the outer to the inner corner; Pl. XX is the "coupe suivant la diagonale").
- **North pier**: 1889 Otis to the 2nd floor [S8]; removed 1900, new lift 1965 [S4]; public lift today [S11].
- **South pier**: 1889 Otis [S8]; today the **public stairs** (328 + 346 = **674 steps** to the 2nd floor, South pillar only [S11]), the private Jules-Verne restaurant lift (Otis, 1983) and a service lift (1989) [S4].
- **2nd floor → top**: on the **tower centre-line** — 1889 Edoux, two 10-t cars each covering half the 160 m run with a transfer at 196 m [S8][S7]; since 1983 two counterbalanced double-cabin electric lifts in one stage [S4]. Stairs 2nd → top inside the shaft: 1889 helical, 0.60 m wide, 1062 steps [S7]; today 1665 total steps to the top [S1] ⇒ 991 above the 2nd floor (DERIVED), closed to the public [S11].
- 1889 Otis track geometry worth copying for the inclined-lift generator: lower run 54°35′ (= the pier slope), upper run 78°9′, 160 ft (48.8 m) radius transition curve [S8].

So the lift geometry must be per-pier (E/W/N inclined, S stairs) below the 2nd floor and central only above it; stairs ground→1st are zig-zag flights 1 m wide (1889: 360 steps [S7]; today 328 [S11]) inside the pier, not a spiral around the axis. Riser check for the stair generator: 57.63/328 = 0.176 m, 58.10/346 = 0.168 m, 160.4/991 = 0.162 m (DERIVED).

### 2g. Top mast vs the real campanile and antenna

**Old.** `build_top_mast` (v1 L324–338): boxes 7.8 m at z = 291 and 5.6 m at 297, square mast 1.15 m 299→323 m and 0.52 m 323→330 m, four decorative rings. The 3rd floor is a 13 × 13 m glass box at 279.2 m with a 11 m deck at 285 m.

**Real.** 3rd floor (enclosed) at 276.13 m, upper open terrace at 279.11 m ("4th platform": terrace 2.77 m wide around a 10.50 m central building) [S1][S6]. Above it the **campanile**: four lattice caissons/arches **set on the diagonals** of the square section converging to the lighthouse dome [S13][S7]; ø0.90 m projectors at 290 m [S13]; a ø1.70 m (1.40 m per [S13]) railed summit platform at **300 m** reached through a ø0.80 m tube stair [S6][S13]; 1889 flagpole to 312.27 m [S1]. Antennas: 1957 TV mast; 324 m in 2000; **330 m since 15 March 2022** (DAB+ antenna) [S1][S4] — a lattice mast carrying cylindrical UHF/VHF panel arrays, not a bare square pole. None of the diagonal arches, the dome, the 279 m terrace or the antenna arrays exist in the old model; the old 285 m deck and 291/297 m boxes have no real counterpart.

### 2h. Lattice density (panel heights)

**Old.** `elevation_levels()` (v1 L150–158): 16 segments over 0–57.63 m (3.60 m each), 14 over 57.63–115.73 (4.15 m), 15 over 115.73–190 (4.95 m), 17 over 190–276.13 (5.07 m), 7 over 276.13–300 (3.41 m); every segment gets one X on each of the four faces of each leg plus a horizontal (`build_leg_lattice` L169–192), and `build_upper_side_webs` adds another X + horizontal between the piers at every level ≥ 57.63 m.

**Real.** 29 panels numbered from the ground [S6][S7]. Panels 1–4 ≈ 11.0–12.5 m tall (11.00 m in vertical projection / 12.31 m along the face per [S6]'s source; 12.50 m per [S7]); panel 5 = the 7.00 m 1st-floor belt; panels 6–9 = 11.00 m (last 10.20); panel 10 = 10.00 m; above the 2nd floor the panels shrink from 11.30 m to 5.83 m; panel 29 = the 3.50 m campanile belt [S6]. One **St-Andrew's cross per panel per face**, whose members are themselves lattice girders (treillis), with intermediate horizontal lattice entretoises (R06a, Pl. VII). Old density is therefore **3× too fine below the 1st floor, 2.5× between floors 1–2, 1.2–2× above**, which produces the "chicken-wire" look of `internal_v2_hero.png` and spends 54,696 tris (`Lattice_Bracing`) on the wrong rhythm. Between the 1st and 2nd floor the real piers are **independent** (no members between them except the floor belts: R02c, R06d); `build_upper_side_webs` invents horizontal rungs and X's between them (the "ladder" visible in `hero_render_v3.png`).

### 2i. Other issues seen in code and renders

1. **Beam roll discontinuity.** `beam()` switches its reference vector when `|axis·Z| > 0.96` (73.74°). Smoke: `ROLL 73 → (0,−1,0)`, `ROLL 74 → (0,+1,0)`. Any chord whose inclination crosses 73.7° flips its cross-section between consecutive segments, and nothing aligns the section with the pier faces. v3 needs an explicit `up=` vector (roll control).
2. **Materials.** `Eiffel_Bronze_Iron` (0.29, 0.105, 0.038), metallic 0.72, roughness 0.34 renders copper-orange (`internal_v2_hero.png`). Painted iron is a dielectric; the real paint is applied in **three shades, lighter at the top** [S4]. The daylight renders (v3/v5) went the other way: flat beige, no tone split, no weathering. Recommend a dielectric 3-tone ramp keyed on z (exact RGB = design decision, see OQ-8).
3. **Foundations.** 15 m boxes centred on (±62.5, ±62.5) — the real pedestals are 25 m square, 4 m high [S1], centred on the pier axis (51.95 m; outer-to-outer 129.25 m [S7] ⇒ 52.1 m centre, consistent).
4. **2nd-floor pavilion** is a 31 m solid glass cube; the real floor has pavilions along the four edges and an open centre (R06e, Pl. XVIII logic).
5. **Fictional members**: v2 `build_hydraulics_and_cables` puts a 0.82 m piston in every pier and four cables up the axis from 116 to 298 m; v1 `build_elevator_system` puts guide rails in all four piers. Pl. XX shows the hydraulic machinery in the pier *sous-sol* and only in the piers that had lifts.
6. **Silhouette in renders**: `internal_v2_hero.png` is bottom-heavy with knees, the 1st floor reads as a thin wide plate on wires, the arches read as extra legs; `hero_render_v3.png`/`daylight_pure_v5.png` have good framing and light but bare "stick" piers with rungs between floors 1–2, no belt girders under the floors, a toothpick top, and small black foot blocks instead of 25 m stone pedestals.
7. **Lookups by node name** (`nodes.get("Principled BSDF")`, `nodes.get("Background")`) break in a localised Blender; use `n.type == "BSDF_PRINCIPLED"` / `"BACKGROUND"`.
8. **Output targets**: v2 GLB is 10.2 MB for a model that is wrong everywhere; REFERENCE-PLAN §0 wants ≤ 1 MB compressed for the hero and `hexagone/public/models/eiffel.glb` is already a 525 KB meshopt file — so the web pipeline exists and the budget below is realistic.

---

## 3. Verdict and v3 architecture

**Verdict: rebuild from scratch as a new module set; port only the plumbing listed in section 1 (≈150 lines).** Every `build_*` function encodes the wrong pier frame (2a), the wrong profile (2b), the wrong arch (2c), solid floors (2d), a transport system in the void (2f) and the wrong panel rhythm (2h); the v2 "internal" layer is glued onto that wrong frame, so extending means rewriting all of it anyway. The batching builder, materials, collections and scene plumbing are good and carry over.

### 3.1 Module list (`blender_eiffel/v3/`)

| Module | Owns | Reads |
|---|---|---|
| `core.py` | `MeshBuilder` + primitives, materials, collections, LOD tagging, GN rivet instancing, budget check, export. **Single source of the anchor constants** (section 5). | — |
| `profile.py` | `pier_axis(z)`, `pier_face_width(z)`, `face_half_width(z)`, `panel_bounds()`, `arbaletrier_corners(q, z)`; the 29-panel table. | core |
| `pedestals.py` | 4 masonry pedestals 25 m × 4 m, cast-iron shoes (1.80 m base [S6]), the 8 entrance steps [S7]. | core, profile |
| `piers.py` | Four piles ground → 2nd floor: 4 arbalétriers each (0.877 m box), one X-panel per panel per face with treillis sub-lattice (hero only), horizontal entretoises, the 1st-floor belt (panel 5) and the 2nd-floor belt. | core, profile |
| `arches.py` | Four decorative arches (R 37.12, centre z 2.28), spandrel lattice, arcaded frieze, name band. | core, profile |
| `floors.py` | 1st-floor ring deck + pavilions + 2.6 m promenade + railings; 2nd-floor ring deck + edge pavilions; intermediate platform (196 m); 3rd floor (16.56 m box, 18.65 m gallery) + 279.11 m terrace. | core, profile |
| `upper.py` | Upper shaft panels 11–28: four corner montants (10.41 → ~5 m) + full-face X's; panel 29 belt. | core, profile |
| `campanile.py` | Four diagonal lattice arches, lighthouse dome, 300 m summit platform, antenna mast 300 → 330 m with panel arrays. | core, profile |
| `transport.py` | E/W/N inclined lifts (tracks in the diagonal plane, 54°35′ → 78°9′ with a 48.8 m curve, double-deck cabins); S-pier zig-zag stairs (328 + 346 steps); central duolift pair 115.73 → 276.13 with the 196 m landing; upper stair (991 steps). | core, profile |
| `details.py` | Rivet point clouds along chord seams and plate edges, gusset plates, lamps on the belts (hero only). | core, profile |
| `site.py` | Grass patch, Paris "lyre" lamp post (3.9 m, REFERENCE-PLAN R14–R16), Davioud-type bench, paths. | core |
| `materials.py` | Three-tone painted iron (dielectric), stone, glass, brass rails, grass, lamp. | core |
| `build_all.py` | CLI/MCP entry: `--lod hero|web`, `--parts piers,arches,…`, `--blend`, `--glb`; prints the budget table. | all |
| `tests/smoke_v3.py` | Headless asserts: bounding box ≈ (124.9, 124.9, 330) (or 118.9 per OQ-1), pier corner at (±59.45, ±44.45, 0), floors at 57.63/115.73/276.13, no geometry on the axis below 115 m except lifts, triangle budget per LOD. | all |

### 3.2 Builder primitives required in `core.MeshBuilder`

- `beam(p1, p2, width, depth=None, *, up=None, roll=0.0, mode="box"|"quad")` — explicit roll via `up`; `quad` emits a single two-sided quad (2 tris) for the web LOD.
- `beam_chain(points, …)` — continuous member with shared/mitred joints (arch rings, rails, antenna mast).
- `box(center, size, *, rotation_z=0)`, `plate(center, normal, up, w, h, t)`, `tube(p1, p2, radius, *, segments, radius2, cap)`.
- `lattice_panel(quad, *, pattern="X"|"K"|"N"|"XX", sub=1, member_w, member_d, chords, horizontals, treillis=None, mode)` — fills an **arbitrary planar quad** (the pier faces are sheared parallelograms) with chords, diagonals and optional sub-lattice; returns the joint points for rivet seeding.
- `arch_lattice(center, radius, band_depth, plane, side, a0, a1, *, segments, rings=2, spokes, mode)` — circular double-ring arch with radial/diagonal web, in a face plane.
- `ring_deck(z, outer_half, inner_half, thickness, *, corner_cut=0, inner="square"|"concave")` — floor with central void.
- `stair_flight(start, run_dir, rise, n_steps, width, *, riser, stringers)` and `stair_spiral(center, z0, z1, r_out, r_in, turns, *, step_rise=0.17)`.
- `railing(polyline, *, height=1.1, post_spacing, rails=2, closed)`.
- `points(name, pts, normals, *, scale)` → point-cloud object; `instance_on_points(points_obj, source_obj, align_to_normal=True)` → Geometry Nodes modifier (Instance on Points → Align Rotation to Vector → Realize off). Rivets: one 32-tri source mesh, ~2.5 M real rivets [S4] → cap at ≈ 300k seeded instances along visible seams in the hero file; **zero** in the web GLB.
- `to_object(name, collection, material, *, lod="both", source="")`, `tri_estimate()`.

### 3.3 Polygon budget

**Hero `.blend`** — no hard cap, must stay interactive: target ≤ 6 M mesh triangles total, ≤ 1 M per object, rivets only as instances (never realised; 300k × 32 = 9.6 M if realised).

| Part | Hero (mesh tris) | Web GLB (tris) |
|---|---|---|
| Pedestals + shoes | 60k | 2k |
| Piers (4) incl. belts | 1,600k | 48k |
| Arches + spandrels | 400k | 12k |
| Floors 1/2/3 + pavilions + railings | 900k | 28k |
| Upper shaft (panels 11–28) | 1,000k | 30k |
| Intermediate platform | 100k | 3k |
| Campanile + antenna | 200k | 6k |
| Transport (lifts, cabins, stairs) | 800k | 6k (cabins + shafts only, no interior stairs) |
| Site (grass, lamp ≤ 600, bench ≤ 300, paths) | 300k | 6k |
| Rivets / gussets | instances + 150k | 0 |
| Reserve | — | 9k |
| **Total** | **≈ 5.5 M** | **≤ 150k**, file ≤ 20 MB raw (target ≤ 6 MB raw, ≤ 1.5 MB after `gltf-transform` meshopt; REFERENCE-PLAN asks ≤ 1 MB for the hero slot) |

Web LOD rules: `mode="quad"` for all diagonals/treillis (2 tris instead of 12), no sub-lattice, panels 1–29 only (no secondary horizontals), single-shade material per height band, no rivets, no interior transport.

---

## 4. Proposed public API for `core.py`

Signatures the other modules import; keep names stable so parallel authors do not diverge. Docstrings state units and frames.

```python
"""core.py — shared primitives for blender_eiffel/v3.

Conventions: 1 Blender unit = 1 metre, Z up, tower axis at the origin, ground z = 0.
A pier is addressed by its quadrant q = (sx, sy) with sx, sy in {-1, +1}.  Pl. XVIII numbers
the piles 1 Nord, 2 Est, 3 Sud, 4 Ouest and the Champ-de-Mars axis is at 45 deg to the
meridian, so each pier sits on one +-x/+-y diagonal of the model (faces parallel to the axes).
Mapping used by every module (OQ-9): PIER = {"N": (-1, +1), "E": (+1, +1), "S": (+1, -1), "W": (-1, -1)}
with +y toward the Seine/Trocadero; the orchestrator may rotate the whole model later.
"""
from __future__ import annotations
from dataclasses import dataclass, field
from typing import Iterable, Literal, Sequence
import bpy
from mathutils import Vector

Vec3 = Sequence[float] | Vector
LOD = Literal["hero", "web", "both"]
PIER: dict[str, tuple[int, int]]          # see module docstring
Z_FLOOR1, Z_FLOOR2, Z_INTER, Z_FLOOR3, Z_TERRACE, Z_SUMMIT, Z_TIP = 57.63, 115.73, 196.0, 276.13, 279.11, 300.0, 330.0


# ---------- geometry of the tower outline (implemented in profile.py, re-exported here) ----------
def pier_axis(z: float) -> float:
    """Distance (m) from the tower axis to a pier centre, measured along x (== along y),
    for 0 <= z <= Z_FLOOR2.  51.95 at z=0 (103.9 m between axes), straight at -0.5026 m/m to the
    1st-floor belt, then straight to 10.65 at Z_FLOOR2 (31.701 m face - 2*10.412/2).  Raises above Z_FLOOR2."""

def pier_face_width(z: float) -> float:
    """Side (m) of the axis-aligned square section of one pier: 15.0 for z <= 57.63,
    linear to 10.412 at 115.73."""

def face_half_width(z: float) -> float:
    """Outer structural half-width (m) of the whole tower face at height z (NOT the platform
    overhang): outer chord axis of the piers below Z_FLOOR2, outer corner of the shaft above.
    Linear below Z_FLOOR2, monotone cubic through the anchors above (never smoothstep)."""

def platform_half(level: Literal[1, 2, 3]) -> float:
    """35.345 / 20.48 / 9.325 (70.69, 40.96, 18.65 m outer sides)."""

def arbaletrier_corners(q: tuple[int, int], z: float) -> list[Vector]:
    """The four chord-axis points of pier q at height z, order: outer-outer, outer-inner,
    inner-inner, inner-outer (counter-clockwise seen from +z).  Chord spacing = pier_face_width(z)
    - 0.877 (13.0 m at the base).  Always axis-aligned (section 2a)."""

def panel_bounds() -> list[tuple[int, float, float]]:
    """(panel_no, z_bottom, z_top) for panels 1..29, from the table in 01_geometry.md / section 5."""


# ---------- mesh building ----------
@dataclass
class MeshBuilder:
    """Accumulates vertices/faces for ONE material group; call to_object() once.
    All methods append geometry and return the index of the first vertex they added."""
    vertices: list[tuple[float, float, float]] = field(default_factory=list)
    faces: list[tuple[int, ...]] = field(default_factory=list)

    def beam(self, p1: Vec3, p2: Vec3, width: float, depth: float | None = None, *,
             up: Vec3 | None = None, roll: float = 0.0,
             mode: Literal["box", "quad"] = "box") -> int:
        """Prismatic member from p1 to p2.  `width` is measured along the beam's local X
        (= axis x up, normalised) and `depth` along local Y (= up projected).  `up` defaults to
        world Z, or world X for near-vertical beams, but every caller that lies in a known plane
        MUST pass the plane normal as `up` to avoid the 73.7 deg roll flip.  `roll` rotates the
        section about the axis (radians).  mode="quad" emits one double-sided quad of `width`
        in the plane spanned by axis and `up` (2 tris; web LOD)."""

    def beam_chain(self, points: Sequence[Vec3], width: float, depth: float | None = None, *,
                   up: Vec3 | None = None, closed: bool = False,
                   mode: Literal["box", "quad"] = "box") -> int:
        """Continuous member through `points` with mitred joints (no overlapping end caps)."""

    def box(self, center: Vec3, size: Vec3, *, rotation_z: float = 0.0) -> int:
        """Axis-aligned box (optionally rotated about Z) — pedestals, cabins, pavilions."""

    def plate(self, center: Vec3, normal: Vec3, up: Vec3, width: float, height: float,
              thickness: float) -> int:
        """Rectangular plate; `width` along up x normal, `height` along up."""

    def tube(self, p1: Vec3, p2: Vec3, radius: float, *, segments: int = 12,
             radius2: float | None = None, cap: bool = True) -> int:
        """Cylinder/cone between p1 and p2 — pistons, antenna sections, lamp post."""

    def ring_deck(self, z: float, outer_half: float, inner_half: float, thickness: float, *,
                  corner_cut: float = 0.0,
                  inner: Literal["square", "concave"] = "square") -> int:
        """Square floor plate with a central void (inner_half = 0 gives a solid plate).
        `concave` bows the void sides inward as on Pl. XVIII."""

    def lattice_panel(self, quad: Sequence[Vec3], *, pattern: str = "X", sub: int = 1,
                      member_w: float, member_d: float | None = None, chords: bool = False,
                      horizontals: bool = True, treillis: dict | None = None,
                      mode: Literal["box", "quad"] = "box") -> list[Vector]:
        """Fill the planar quad (p0 p1 p2 p3, p0->p1 = bottom edge, p1->p2 = rising edge) with a
        bracing pattern: "X" (one St-Andrew cross), "XX" (two stacked), "K", "N".  `sub` splits
        the panel vertically first.  `treillis={"pitch":0.9,"w":0.08}` replaces each diagonal by a
        small lattice girder (hero only).  Returns the joint points (for rivet seeding)."""

    def arch_lattice(self, center: Vec3, radius: float, band_depth: float, *,
                     plane: Literal["x", "y"], side: int, a0: float, a1: float,
                     segments: int = 48, rings: int = 2, spokes: int = 24,
                     member_w: float = 0.35, mode: Literal["box", "quad"] = "box") -> int:
        """Circular lattice arch lying in the vertical plane x = +-center.x (plane="x") or
        y = +-center.y, from angle a0 to a1 (radians from +horizontal).  Two concentric rings
        `band_depth` apart with radial spokes and alternating diagonals."""

    def stair_flight(self, start: Vec3, run_dir: Vec3, rise: float, n_steps: int,
                     width: float, *, riser: bool = True, stringers: bool = True) -> Vector:
        """Straight flight; run_dir is horizontal (normalised inside).  Returns the top landing
        point so flights can be chained in zig-zag."""

    def stair_spiral(self, center: Vec3, z0: float, z1: float, r_out: float, r_in: float,
                     turns: float, *, step_rise: float = 0.17, rail: bool = True) -> int:
        """Helical stair about a vertical axis through `center` (port of v2 build_spiral_stair)."""

    def railing(self, polyline: Sequence[Vec3], *, height: float = 1.1,
                post_spacing: float = 1.5, rails: int = 2, post_w: float = 0.05,
                closed: bool = False) -> int:
        """Posts + horizontal rails along a 3-D polyline (deck edges, stair strings)."""

    def tri_estimate(self) -> int:
        """sum(len(face) - 2) — use before to_object() to enforce the budget."""

    def to_object(self, name: str, collection: bpy.types.Collection,
                  material: bpy.types.Material, *, lod: LOD = "both",
                  source: str = "") -> bpy.types.Object:
        """from_pydata -> object, link, assign material, set obj["lod"], obj["source"],
        obj["scale_note"] = "1 Blender unit = 1 metre"."""


# ---------- scene plumbing ----------
def clear_scene() -> None: ...
def configure_scene(*, engine_preference: Sequence[str] = ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE", "CYCLES")) -> None:
    """Metric/metres, AgX view transform, first engine that the running build accepts (try/except TypeError)."""
def collection(name: str) -> bpy.types.Collection:
    """Get-or-create a top-level collection; names are numbered '01_Pedestals' ... '90_REF'."""
def material(name: str, color: tuple[float, float, float], *, metallic: float = 0.0,
             roughness: float = 0.55, emission: tuple[tuple[float, float, float], float] | None = None,
             weathering: dict | None = None) -> bpy.types.Material:
    """Principled material found by node TYPE (not name).  weathering={"scale":4.2,"dark":(..),"light":(..),"bump":0.16}
    adds the v2 noise->ramp->bump chain."""
def paint_three_tone(z_bands: tuple[float, float] = (57.63, 115.73)) -> bpy.types.Material:
    """The dielectric 'Eiffel brown' with three shades keyed on object-space z (lighter at the top)."""


# ---------- instancing, LOD, budget, export ----------
def points_object(name: str, points: Sequence[Vec3], normals: Sequence[Vec3],
                  collection: bpy.types.Collection, *, scale: float = 1.0) -> bpy.types.Object:
    """Point cloud mesh with 'normal' and 'scale' attributes for Geometry Nodes."""
def instance_on_points(points_obj: bpy.types.Object, source_obj: bpy.types.Object, *,
                       align_to_normal: bool = True, realize: bool = False) -> bpy.types.Object:
    """Adds a GN modifier (Instance on Points -> Align Rotation to Vector).  realize=False keeps
    rivets as instances (hero); the web export filters these objects out."""
def set_lod(obj: bpy.types.Object, lod: LOD) -> None: ...
def objects_for_lod(lod: Literal["hero", "web"]) -> list[bpy.types.Object]:
    """Objects whose obj['lod'] is `lod` or 'both', excluding collection '90_REF'."""
def tri_count(objs: Iterable[bpy.types.Object]) -> int: ...
def assert_budget(lod: Literal["hero", "web"], max_tris: int) -> None:
    """Raise with a per-object table if objects_for_lod(lod) exceeds max_tris."""
def save_blend(path: str) -> None: ...
def export_glb(path: str, *, lod: Literal["hero", "web"] = "web", apply: bool = True) -> None:
    """Select objects_for_lod(lod), export GLB (export_apply=True, no cameras/lights), restore selection."""
def add_reference_images(images: dict[str, dict]) -> None:
    """Image empties in '90_REF' per REFERENCE-PLAN §2.2 (front elevation on -Y, plan at z=0, etc.)."""
```

---

## 5. Numbers ready to type (anchor table for every module)

```python
# metres; see source tags.  OQ-n = open question in section 6.
BASE_OUTER_OFFICIAL   = 124.90   # [S1][S2]  outer square (official / Commons drawing)
BASE_OUTER_ARETES     = 118.90   # [S7]      between outer arêtes of the iron (Eiffel)  -> OQ-1
BASE_PIER_AXES        = 103.90   # [S7]      between pier axes  -> pier axis at 51.95
BASE_PEDESTAL_OUTER   = 129.25   # [S7]      between outer faces of the masonry pedestals
PEDESTAL              = dict(side=25.0, height=4.0, centre=51.95)        # [S1] side/height, [S7] centre check 129.25/2-12.5=52.1
PIER_FACE             = [(0.0, 15.0), (57.63, 15.0), (115.73, 10.412)]   # [S6][S7]
ARBALETRIER           = dict(spacing=13.0, section_ext=0.877, section_int=0.80)  # [S6][S7]
PIER_SLOPE_PER_AXIS   = 0.5026   # DERIVED from 54°35'26" true diagonal inclination [S6]; 65°48'49" is the in-face angle
FACE_HALF_WIDTH = [   # outer structural half-width of the tower face (not platforms)
    (0.00,   59.45),  # [S7] (62.45 if OQ-1 resolves to the official 124.90)
    (57.63,  33.5),   # DERIVED 62.45-0.5026*57.63 = 33.48 (or 59.45-0.449*57.63 = 33.6); +-1.5 m, OQ-1
    (115.73, 15.85),  # [S6] 31.701 m face width
    (196.0,   6.1),   # ESTIMATE [S9] (40 ft) -> refine with OQ-3
    (276.13,  5.0),   # [S6] 10 m shaft below the campanile
]
PLATFORM_OUTER_SIDE   = {57.63: 70.69, 115.73: 40.96, 276.13: 18.65}   # [S1]
FLOOR1_BELT_DEPTH     = 7.00     # [S6] panel 5  -> underside at 50.63 (DERIVED)
FLOOR1_PROMENADE_W    = 2.6      # [S4]
FLOOR1_VOID           = dict(pinch=26.0, corner=35.0)   # ESTIMATE from Pl. XVIII proportions (0.37-0.5 of 70.69)
FLOOR3_BOX            = dict(side=16.56, walkway=3.0)   # [S6]
TERRACE4              = dict(z=279.11, width=2.77, building=10.50)   # [S1] z, [S6] sizes (cosmovisions gives 278.95 [S7])
ARCH                  = dict(chord=74.24, crown_intrados=39.40, radius=37.12, centre_z=2.28, band=2.75)  # [S7]; radius/centre DERIVED; band ESTIMATE
INTERMEDIATE          = dict(z=196.0, beam_depth=2.30)   # [S7] z (Vogel 195.6 [S8], JHU 196.3 [S9]); [S6] beams
CAMPANILE             = dict(summit_platform_z=300.0, summit_platform_d=1.70, projector_z=290.0, tube_stair_d=0.80)  # [S6][S13]
ANTENNA_TIP           = 330.0    # [S1][S4] since 2022-03-15 (324 m in 2000, 312.27 m flag in 1889)
PANELS = {            # vertical heights, [S6] unless noted; fill the rest from OQ-3
    5: 7.00, 6: 11.00, 7: 11.00, 8: 11.00, 9: 10.20, 10: 10.00, 29: 3.50,
    "1-4": "11.0-12.5 each (11.00 vertical / 12.31 along the face [S6]; 12.50 [S7])",
    "11-28": "11.30 shrinking to 5.832 [S6]; intermediate platform at mid-height of panel 19",
}
STEPS   = dict(ground_to_1=328, floor1_to_2=346, total_to_top=1665)   # [S11][S1]  -> risers 0.176 / 0.168 / 0.162 (DERIVED)
LIFTS   = dict(E="Fives-Lille 1899 ground->2nd", W="Fives-Lille 1899 ground->2nd", N="1965 lift ground->2nd",
               S="public stairs + Jules Verne lift (1983) + service lift (1989)",
               centre="2 double-cabin lifts 2nd->top since 1983 (Edoux 1889, transfer at 196 m)")  # [S4][S8][S11]
OTIS_1889_TRACK = dict(lower_deg=54.583, upper_deg=78.15, curve_radius=48.8)   # [S8] 54°35', 78°9', 160 ft
PAINT   = "three shades, lighter at the top; dielectric"   # [S4]  RGB = OQ-8
```

---

## 6. Open questions for the orchestrator / geometry lens

- **OQ-1 Base line.** Is the official 124.90 m the outer arête line, or is Eiffel's 118.90 m (arêtes) the structure with 124.90 m measured at the shoes/pedestal tops? The two differ by 3 m per side at the ground and decide the 1st-floor overhang (1.9 m vs 4.9 m; R06d suggests ≈ 3 m). Needs Pl. V (`R03c`) read at full resolution.
- **OQ-2 Arch band depth and spandrel.** Centre/radius are solid (74.24 / 39.40 [S7]); the band depth (2.5–3 m) and the arcade/frieze layout are estimates from R06d. Pl. VII Fig. 1 carries "Rayon" annotations — read at 4600 px.
- **OQ-3 Per-panel table.** Weidman & Pinelis 2004, *C. R. Mécanique* 332(7) 571–584, doi:10.1016/j.crme.2004.02.021, Table 1 lists heights, inclinations and profile coordinates for all 29 panels; the PDF mirrors were unreachable from this session (ECONNREFUSED / 403). Without it, panels 1–4 and 11–28 are interpolated from the partial list in [S6] and Pl. VII.
- **OQ-4 Floor voids.** 1st-floor void (26/35 m) and 2nd-floor void (~12–14 m) are read from Pl. XVIII proportions; measure on the 4590 px scan.
- **OQ-5 Intermediate platform** z: 195.6 / 196.0 / 196.3 m across sources — use 196.0 unless the panel table says otherwise.
- **OQ-6 Upper corner montants.** Width of the four corner columns above the 2nd floor (10.412 m at 115.73 [S6], merging into the 10 m shaft by ~276 m); the 5.00 m figure in [S6] for "panels 12–17" needs confirming.
- **OQ-7 Which antenna state** is "1:1 today": 330 m (2022) assumed.
- **OQ-8 Colour.** Hero = site gold-700 per `hexagone/docs/ARCHITECTURE-INDEX.md` vs realistic three-tone brown for the internal model (REFERENCE-PLAN §1E note). Decide per export, not in `core`.
- **OQ-9 Pier compass mapping.** `core.PIER` proposes N=(−1,+1), E=(+1,+1), S=(+1,−1), W=(−1,−1); the orchestrator should fix this once so `transport.py` (stairs in S, lifts in E/W/N) and `site.py` agree.

---

## Sources

- [S1] Wikipédia FR, *Tour Eiffel*, section « Données techniques » (floors 57.63 / 115.73 / 276.13 / 279.11 m; outer sides 70.69 / 40.96 / 18.65 m; inner 74.24 m, outer 124.90 m; arch 39 m / 74 m; pedestals 25 m × 4 m; 1,665 steps; 330 m since 2022) — https://fr.wikipedia.org/wiki/Tour_Eiffel
- [S2] Wikimedia Commons, *Eiffel_sizes.png* and *Skizze Eiffelturm – technische Daten.png* (124.90 / 74.24 / 57.63 / 115.73 / 276.13 / 309.63 / 324) — local copies `refs/R02b`, `refs/R02c`; https://commons.wikimedia.org/wiki/File:Eiffel_sizes.png
- [S3] G. Eiffel, *La Tour de trois cents mètres* (1900), plates VII, XVIII, XX — local scans `refs/R03d`, `refs/R03g`, `refs/R03h` (Commons *Eiffel_Tower_plans_07/20/22.jpg*)
- [S4] Wikipedia EN, *Eiffel Tower* (lifts by pier 1889–1989; Fives-Lille 1899; North 1965; South 1983/1989; paired summit lifts; 2.6 m promenade; three paint shades; 2.5 M rivets; 7,300 t) — https://en.wikipedia.org/wiki/Eiffel_Tower
- [S5] Hexagone content plan, `hexagone-content-plan-v2.md` §« 埃菲尔铁塔 BlenderMCP 程序化建模详细规格 » (125 m, 65°48′49″ / 54°35′26″, 15 m faces) — project file
- [S6] wonders-of-the-world.net, *Description of the Eiffel Tower* (reproduces Eiffel's description: 15 m faces, 10.412 m at 2nd floor, 31.701 m face width, 13.00 m arbalétrier square, 0.80/0.877 m section, inclinations, panel heights, 16.56 m 3rd floor, 10.50 m building, 1.70 m summit platform, intermediate platform at panel 19 with 2.30 m beams) — https://www.wonders-of-the-world.net/Eiffel-Tower/Description-of-the-Eiffel-tower.php
- [S7] cosmovisions.com, *Tour Eiffel* (19th-c. technical description: 103.9 / 118.90 / 129.25 m; 15 m prism; arch chord 74.24 m, 39.40 m under keystone; 1889 stair counts; Edoux landing at 196 m; upper terrace 278.95 m, summit 300.52 m) — https://cosmovisions.com/monuEiffel.htm
- [S8] R. M. Vogel, *Elevator Systems of the Eiffel Tower, 1889* (Smithsonian, Project Gutenberg #32282): piers per system, Edoux on the centre-line, 262 ft half-runs, Otis track 54°35′ / 78°9′ with 160 ft curve — https://www.gutenberg.org/files/32282/32282-h/32282-h.htm
- [S9] Johns Hopkins CE, *Eiffel Tower – Geometry and Materials* (idealised width table incl. intermediate platform 644 ft / 40 ft) — https://www.ce.jhu.edu/perspectives/studies/Eiffel%20Tower%20Files/ET_Geometry.htm
- [S10] wonders-of-the-world.net, *Intermediate floor of the Eiffel tower* (platform retained, closed to public, lift emergency stop) — https://www.wonders-of-the-world.net/Eiffel-Tower/Intermediate-floor.php
- [S11] toureiffel.paris, *Ticket to the Top via the Stairs + Lift* (ascent from the South pillar, 674 steps to the 2nd floor) — https://toureiffel.paris/en/rates-offers/ticket-top-stairs-lift (page returns 403 to automated fetch; figures quoted via search snippet)
- [S12] P. Weidman, I. Pinelis, *Model equations for the Eiffel Tower profile: historical perspective and new results*, C. R. Mécanique 332 (2004) 571–584, doi:10.1016/j.crme.2004.02.021 (two piecewise exponentials; Table 1 = 29 panel heights/coordinates) — https://digitalcommons.mtu.edu/michigantech-p/6271/
- [S13] worldfairs.info, *Campanile – Expo Paris 1889* (four lattice caissons on the diagonals, 0.90 m projectors at 290 m, 1.40 m terrace above the dome, 0.80 m tube stair) — https://en.worldfairs.info/expopavillondetails.php?expo_id=6&pavillon_id=1411
- Photos: `refs/R06a` (Commons *Eiffel_tower_support_detail_(27264705599).jpg*, CC BY 2.0), `refs/R06d` (Commons *Paris 75007 Champ-de-Mars lawn 20170526 Eiffel Tower (6).jpg*, CC BY 2.0).
