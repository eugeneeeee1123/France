# 03 — Site props under the tower: lawn patch, Paris street lamp, Davioud bench

Lens: SITE PROPS. Scope: the ground immediately around the piers, one 1:1 lawn patch, one Parisian cast-iron lamp, one Paris park bench, grass/edging/material values. Units: metres, Z up, ground z = 0, tower axis at the origin.

Every number carries a source tag `[Sn]` (list at the end) or is marked **ESTIMATE** with the reasoning. Figures read from the official Paris open-data lighting inventory are tagged `[S13]`; distances derived from WGS84 coordinates are ESTIMATE ±10 m because the tower-centre coordinate itself is only known to ~10 m.

---

## 0. Local frame used in this file (shared with the tower lens)

| Item | Value | Source |
|---|---|---|
| Base square (outer edges of the four piers) | 124.90 m side (press: "125 m") | [S8] Wikipedia FR: "écartement extérieur 124,90 m"; [S9] |
| Inner span between facing pier edges | 74.24 m | [S8] |
| Pier footprint width at ground (derived) | (124.90 − 74.24) / 2 = **25.33 m** | derived from [S8] |
| Pier centre spacing (derived) | 74.24 + 25.33 = **99.57 m**, i.e. pier centres at **±49.78 m** | derived from [S8] |
| Pier outer face from axis | **±62.45 m** | derived from [S8] |
| Orientation | Each pier points to a cardinal point because the Champ-de-Mars axis runs SE–NW | [S8] |

Frame definition (my convention, matches the pier naming):

```python
# +Y = toward the Champ de Mars / Ecole Militaire (real-world bearing ~134 deg, SE)
# -Y = toward the Seine / Quai Branly / Trocadero (NW)
# +X = toward allee Jean-Paulhan / avenue de La Bourdonnais / musee du quai Branly (NE)
# -X = toward allee des Refuzniks / avenue de Suffren (SW)
PIER_HALF = 49.78          # m, pier centre offset on each axis
PIER_W    = 25.33          # m, pier footprint side at ground
PIER_FACE = 62.45          # m, outer face of a pier from the axis
PIERS = {                  # official names -> centre (x, y)
    "Nord":  (+PIER_HALF, -PIER_HALF),   # Seine side, allee Jean-Paulhan corner
    "Est":   (+PIER_HALF, +PIER_HALF),   # Champ de Mars side, Paulhan corner
    "Sud":   (-PIER_HALF, +PIER_HALF),   # Champ de Mars side, Refuzniks corner
    "Ouest": (-PIER_HALF, -PIER_HALF),   # Seine side, Refuzniks corner
}
```

Real-world geodetic anchor used for the distance checks below: tower axis ≈ 48.85826 N, 2.29450 E (mean of the Wikipedia EN infobox value 48°51′29.6″N 2°17′40.2″E and the commonly cited 48.8584/2.2945) — **ESTIMATE ±10 m**. 1° lat = 111.2 km, 1° lon = 73.2 km at this latitude.

---

## 1. The ground around the tower today

### 1.1 Layers from the piers outward (SE side, toward the Champ de Mars)

| Band (along +Y from the axis) | What is there | Source |
|---|---|---|
| 0 – 62.45 m | **Esplanade (parvis)** between the four piers: mineral surface. Historically a lawn continuing the Champ-de-Mars lawns, then sand ("le terre-plein sous la Tour Eiffel n'était pas bitumé mais sablé" until the 2000s); in May 2020 the side alleys went "du stabilisé traditionnel au béton"; the plot at the foot of the tower is now "presque intégralement minéralisée", only tree pits remain open soil. Lit by 9 m octagonal steel masts with Girardin "574" lanterns, 400 W HP-sodium 2000 K (two of them sit at ≈ (+35, +31) and (−37, +29) in the local frame — ESTIMATE from WGS84). | [S7], [S13] |
| ≈ 62.45 – 76 m | Strip inside the security perimeter (ticket pavilions, queues, trees). | [S1], [S2]; width **ESTIMATE**: the Corten fences along allée des Refuzniks / allée Jean-Paulhan are 151.2 m / 153.1 m long, so the enclosure extends ≈ (152 − 125)/2 ≈ 13.5 m beyond the pier faces on the ±Y sides. A 6 m "Gustave Eiffel" lamp is at ≈ (+24, +65) local, i.e. inside this strip. |
| ≈ 76 m | **Security perimeter, SE and NW sides = glass wall** (installed 2018, completed May 2019): 3.00 m high × 2.20 m wide panels, 450 panels, **6.5 cm** thick per SETE / **72 mm, six layers** per the architect, max 1.5 t each, extra-clear bullet-resistant glass; 226.6 m along avenue Gustave-Eiffel (+Y side) and 224.8 m along quai Branly (−Y side); 420 (SETE) / 380 (toureiffel.paris) / 428 (DETAIL) anti-ram bollards. ±X sides = **Corten steel fence 3.24 m high** (1/100 of 324 m), 2 m segments, with a stylised tower outline. Six glass entrance gates. Architect Dietmar Feichtinger, engineer sbp, landscape VOGT, site 41 290 m², budget €22.8 M. | [S1], [S2], [S3], [S4], [S36] |
| ≈ 78 – 92 m | **Avenue Gustave-Eiffel** (pedestrianised since 2018), lined with 6 m octagonal steel masts + Thorn Decostreet lanterns (SOHP 150 W, 2000 K). | [S2], [S13]; width ESTIMATE from lamp positions at 65–79 m |
| ≈ 95 – 100 m onward | **Champ-de-Mars lawns** ("pelouses de pleine terre"), 24 ha park; the three lawns on the tower side were fully re-laid "identical to the original" from late 2023; the lawns hosted the temporary Paris-2024 "Stade Tour Eiffel" (beach volleyball), dismantled after the Games. First row of park lamps: 7 m octagonal steel masts, Comatelec Citea NG LED 53 W 3000 K at ≈ (+24, +96) and (−25, +93) local (ESTIMATE from WGS84). | [S7], [S10], [S11], [S13] |
| ±X sides, 62 – 112 m | **Eiffel Tower gardens** (east/west flanks inside the perimeter): 1878 Alphand garden restored by VOGT 2017–2018, 20 000 m², two ponds, grotto, belvedere; 67 new trees (DETAIL), "over 60 varieties of trees, 20 000 shrubs, 2 000 perennials" (toureiffel.paris). | [S4], [S5], [S6] |
| NE of the tower, across quai Branly / avenue de La Bourdonnais | **Musée du quai Branly garden** by Gilles Clément: 18 000 m², 169 trees, ~30 species (oaks and maples north, magnolias and cherries south), 886 shrubs, 74 200 ferns/grasses. | [S12] |

Note on the task brief: the glass perimeter dates from **2018–2019**, not 2024. What changed in 2024 was the temporary Olympic stadium on the Champ de Mars and the start of the "OnE / Site Tour Eiffel" works (Gustafson Porter + Bowman), which excluded the northern Champ de Mars after a Council moratorium [S10], [S11].

### 1.2 Where to put the 8 m × 5 m lawn patch, the lamp and the bench

Recommendation A (faithful, hero-shot friendly) — at the Champ-de-Mars lawn edge on the +Y side, just east of the central axis so the tower is not hidden behind the lamp:

| Object | Centre (x, y, z) | Orientation | Rationale |
|---|---|---|---|
| Lawn patch 8 × 5 m | (6.0, 98.0, 0) | long side along X | front kerb at y = 95.5 ≈ 33 m from the SE pier face (62.45 m); matches the real lawn edge band 95–100 m (ESTIMATE from lamp positions) |
| Granite kerb | around the patch, outer edge 8.24 × 5.24 m | — | see §4.4 |
| Bench (double) | (6.0, 97.5, 0) | long axis along X; one seat faces −Y (the tower), the other +Y | 35.05 m from the pier face to the bench axis |
| Lamp (Vendôme I + Lyre GM) | (10.4, 97.5, 0) | — | base 0.4 m outside the kerb on the stabilised gravel, 3.3 m from the bench end, 4.4 m from the bench centre (the brief's "2.5 m beside it" would put the base inside the lawn at x = 9.6; both are given in the Python block) |
| Stabilised-gravel apron | polygon x ∈ [−30, 30], y ∈ [62.45, 95.5] (parvis strip + avenue) | — | §5 material "stabilisé" |

```python
LAWN_CENTER  = (6.0, 98.0);  LAWN_SIZE = (8.0, 5.0)
BENCH_CENTER = (6.0, 97.5);  BENCH_YAW_DEG = 0.0      # long axis = X
LAMP_BASE    = (10.4, 97.5)                           # recommended (on gravel)
LAMP_BASE_ALT = (9.6, 97.5)                           # literal "2.5 m beside the bench end"
```

Recommendation B (literal "under the tower", for the user's wording 下面) — a lawn patch did exist under the tower before the sanded era [S7], so a patch on the esplanade is defensible historically even if today's parvis is mineral:

```python
LAWN_CENTER_B  = (18.0, 30.0)   # inside the 125 m square, clear of the lift/ticket zones at the pier bases
BENCH_CENTER_B = (18.0, 29.5)
LAMP_BASE_B    = (22.4, 29.5)
```

Camera suggestions (ESTIMATE, 35 mm sensor):

| Shot | Camera position | Look-at | Lens | Notes |
|---|---|---|---|---|
| Hero (props in foreground, tower full height) | (14.0, 118.0, 1.7) | (0, 0, 150) | 20–24 mm | bench/lamp 20 m ahead, lower-right third; tower 330 m tall fills the frame at ~24 mm from 118 m with tilt |
| Ground close-up (bench + grass, tower behind) | (3.5, 102.0, 1.1) | (6.0, 97.5, 0.7) | 35 mm | tower rises behind the bench; lamp at frame right |
| Grass macro | (5.0, 96.0, 0.25) | (6.0, 97.0, 0.05) | 50–85 mm | needs the dense grass zone (§4.2) |

---

## 2. Paris street lamp

### 2.1 What actually stands on the Champ de Mars (official inventory)

Ville de Paris open-data "Éclairage public" (Cielis GMAO extract), records within 700 m of 48.8570 N / 2.2962 E [S13]:

| Model on the inventory | Count in radius | Height | Where |
|---|---|---|---|
| `FUT AC OCT NORMALISE 79 7M` (octagonal steel mast) + `COMATELEC-CITEA NG` LED | 182 masts; Citea NG 3000 K: 151 | 7.0 m | Champ de Mars lawns' first rows |
| `FUT AC OCT EL 60` + `THORN-DECOSTREET T2-ASY` (SOHP 2000 K) | 134 | 6.0 m | avenue Gustave-Eiffel, avenue Joseph-Bouvard |
| `CAND PIET VP95 H4m EMB D60mm` (pedestrian candelabra, Ø60 mm spigot) | 143 | 4.0 m | footways |
| `FONTES DE PARIS-LYRE GM PORT+bloc LED` (68 W, 3000 K) on "support à préciser" | 92 + 19 = 111 Lyre GM | — | Champ de Mars lateral alleys (JARDIN DU CHAMP DE MARS), from ≈ 100 m SE of the axis outward, at ≈ ±75–115 m in X |
| `CAND VENDOME I F 6,87m` cast iron, supplier GHM (Sommevoire) + `Lyre GM` 50 W 3000 K | 18 (12 listed on Champ de Mars) | 6.87 m | NE and SW flanks of the tower at ≈ 148 m from the axis (ESTIMATE from WGS84) |
| `CAND FTE PETIT "d1" 3,85M` / `CAND FTE GRAND "FR" 5,1M` / `CAND FTE "PARAPET PARIS" 3,04M` (classic cast-iron Paris candelabras) | 21 / 16 / 11 | 3.75 / 5.0 / 3.04 m | quays and streets around |

So: the lamps nearest the recommended bench spot are modern 7 m steel masts; the classic cast-iron model that the City itself uses in the Champ de Mars is the **GHM "Vendôme I" candelabra carrying a Fontes de Paris "Lyre GM" lantern**. That pair is recommended for the look, and it is documented 150 m from the tower, not invented.

### 2.2 Recommended model: GHM Vendôme I (6.87 m) + Fontes de Paris Lyre GM

Mast — GHM "Vendôme I", cast iron ("forme et textures obtenues par moulage") [S14]:

| Parameter | Value | Source |
|---|---|---|
| Luminaire fixing heights available (top mount) | 4.63 / 5.10 / 5.43 / **6.87 m** | [S14] FT sheet |
| Weights | 411.3 / 422.8 / 426.8 / **471.8 kg** | [S14] FT |
| Anchor bolts | 4 × Ø24 mm, 500 × 500 mm centres | [S14] FT |
| Luminaire fixing | Ø60 mm spigot (also Ø27 / Ø34 PG) | [S14] |
| Finish | metallised + polyester powder paint, any RAL | [S14] |
| Base width labels on the FT drawing | 800 / 835 / 885 mm (read as base widths for the taller variants — interpretation **ESTIMATE**) | [S14] FT |
| "Vendôme parapet" variant | fixing heights 3.38 / 3.85 / 4.18 m, 186–201.5 kg, 4 × Ø18 bolts on Ø380 mm | [S14] FT |

Geometry to type in (no public section drawing was readable; proportions **ESTIMATE** from the FT data above and classic Haussmann-era cast-iron columns, cf. Fontes de Paris "Oudry": bollard 1.02 m, fluted shaft 3.22/3.77 m [S18]; Loiselet n°3: 3.66 m total, cast foot 0.36 × 2.90 m [S19]):

```python
# Vendome I, 6.87 m fixing height. All radii in m, z from ground.
LAMP = dict(
    plinth      = dict(shape="octagon", width=0.84, z0=0.00, z1=0.22),   # 500x500 bolt pattern + margin -> ~0.8-0.9 m wide (FT labels 800/835/885)
    pedestal    = dict(r_bottom=0.30, r_top=0.22, z0=0.22, z1=1.10, ornament="acanthus/palmettes band at z 0.95-1.10"),
    shaft_fluted= dict(r_bottom=0.155, r_top=0.095, z0=1.10, z1=6.35, flutes=20),  # flutes 20-24 typical; 20 chosen
    capital     = dict(r_bottom=0.095, r_top=0.14, z0=6.35, z1=6.77),
    spigot      = dict(r=0.030, z0=6.77, z1=6.87),                      # GHM: O60 mm x 100 mm
    fixing_h    = 6.87,
)
LANTERN_LYRE_GM = dict(total_h=1.53, max_w=0.84, weight_kg=25)          # Fontes de Paris FT
TOTAL_HEIGHT = 6.87 + 1.53        # = 8.40 m (ESTIMATE: lantern stands fully above the spigot)
LIGHT_CENTRE_Z = 6.87 + 0.95      # ~7.8 m, centre of the bowl (ESTIMATE)
```

Lantern — Fontes de Paris "Lyre", post-top ("porté") [S15], [S16]:

| Size | Post-top H × W | Weight | Windage | Recommended height | LEDs / power |
|---|---|---|---|---|---|
| PM | 1040 × 600 mm | 16 kg | 0.35 m² | 3.00–5.00 m | 12–36 / 12–90 W |
| MM | 1450 × 705 mm | 21 kg | 0.42 m² | 4.00–7.00 m | 12–36 / 12–90 W |
| **GM** | **1530 × 840 mm** | 25 kg | 0.50 m² | 5.00–8.00 m | 16–60 / 17–199 W |

Material: painted aluminium, IP66, class 1 or 2 [S15]. Form (19th-century "lanterne de style à Lyre"): small top crown, chimney, rounded dome roof, a crown "en forme de lisières" at the roof foot, a slender bowl ("vasque élancée"), and a lyre-shaped foot as support [S16]. Stack to type in (heights sum to 1.53 m; split **ESTIMATE**):

```python
LYRE_GM_STACK = [  # (name, z0 above spigot top, z1, r_bottom, r_top, material)
    ("lyre_foot",  0.00, 0.45, 0.03, 0.25, "cast_paint"),   # two S-scroll arms, max half-width 0.25
    ("bowl",       0.45, 0.95, 0.15, 0.42, "lantern_glass"),# inverted cone, continuous translucent bowl (modern); add 8 thin ribs if a paneled look is wanted
    ("crown_ring", 0.95, 1.03, 0.42, 0.42, "cast_paint"),   # pierced "lisières" band
    ("dome",       1.03, 1.38, 0.42, 0.12, "cast_paint"),   # rounded dome roof
    ("chimney",    1.38, 1.48, 0.08, 0.08, "cast_paint"),
    ("top_crown",  1.48, 1.53, 0.10, 0.06, "cast_paint"),
]
```

Light source: on the Champ de Mars the Lyre GM carries a `XPG2R5 48 LED 450 mA` block, **68 W, 3000 K** (50 W on the Vendôme pairs) [S13]; Paris pilot schemes use 3000 K "blanc neutre" dimmable to 2200 K [S34]. Luminous flux is not in the inventory; 68 W of 2020-era LED ≈ 7 000–8 500 lm (**ESTIMATE**, ~110–125 lm/W). For a warm period look the older lamps around are HP-sodium 2000 K [S13].

Smaller alternative if 8.4 m feels too tall next to a bench: Vendôme I at the 4.63 m fixing height + Lyre MM (1.45 m) → 6.08 m total; or the four-sided classic "Opéra" lantern 710 × 400 mm, 2.5 kg aluminium / 6.5 kg bronze [S20b] on a 4 m "Champs-Élysées" mast (Fontes de Paris, cast aluminium, base + shaft + capital, 3 anchors Ø24 × 410 on Ø470) [S17b].

### 2.3 Colour

| Element | Recommendation | Source / status |
|---|---|---|
| Cast-iron lamp, cast-iron bench legs in parks, lantern metalwork | **RAL 6009 "Vert sapin / Fir green"** — the colour the City's own Manifeste gives for its cast-iron Wallace fountains ("Couleur : Vert foncé RAL 6009") | [S20]; applying it to candelabras is **ESTIMATE** (the lighting inventory has no colour field; GHM paints to any RAL [S14]) |
| Railings / lawn fences | RAL 6005 "Vert mousse" — "couleur référence historique parisienne (RAL vert 6005)" | [S24] |
| Bench legs on street pavements | grey ("Gris pour le piètement et vert pour les lattes dans l'espace public. Vert uni dans les parcs et jardins") | [S20] |
| sRGB approximations | RAL 6009 **#26392F**, RAL 6005 **#0F4336**, RAL 7016 anthracite #373F43, RAL 7021 black-grey #2E3234 | [S25] (page states these are sRGB approximations, not binding) |
| Light reflectance | RAL 6009 LRV 6.11; RAL 6005 LRV 7.09 | [S26] |

---

## 3. Paris park bench — banc Davioud (double)

### 3.1 Dimensions

| Parameter | Official Ville de Paris sheet | Modern replica (Urban Services VPD-20.CP) | Antique originals | Source |
|---|---|---|---|---|
| Overall length | **2.25 m** | 2.000 m | 2.00 / 2.25 / 2.33 m | [S20], [S22], [S23], [S21] |
| Overall depth (width) | **0.75 m** | 0.765 m | 0.765–0.81 m | [S20], [S22], [S23] |
| Overall height | **1.00 m** | 0.975 m | 0.98 m (1869 original); 1.23 m quoted by some dealers | [S20], [S22], [S23] |
| Seat height | — | **0.43 m** | 0.43 m | [S22], [S23] |
| Leg (end-frame) spacing | "entre-axe de bancs : 1,80 m" → legs at **1.80 m centres**, 0.225 m in from each end | — | — | [S20] |
| Weight | 120 kg | — | 124 kg | [S20], [S21] |
| Seat | 4 oak slats total (2 per side) | 4 × 2000 × **135 × 35 mm** oak | oak | [S21], [S22] |
| Back | 1 oak slat shared by both sides | 1 × 2000 × **135 × 45 mm** | — | [S21], [S22] |
| Slat fixing | — | round-head square-neck "Japy" bolts | — | [S22] |
| Legs | grey cast iron ("fonte grise"), both end supports bear the arms of Paris | cast feet with holes for ground screws | — | [S21] |
| Ground fixing | "Scellement profond : 0,235 m"; clearance 3.40 × 2 m | — | — | [S20] |
| Designer / date | Gabriel Davioud, 1853 (Manifeste) / 1860s (Wikipedia), under Alphand; 8 428 installed by 1869; seats six | | | [S20], [S21] |

Build values to use (official envelope with replica sections, slats lengthened to 2.25 m):

```python
BENCH = dict(
    length=2.25, depth=0.75, height=1.00, seat_h=0.43,
    leg_centres=1.80,                 # x = +-0.90 from bench centre
    seat_slats=[                      # (y_centre, width, thickness, z_top), 2 per side, 20 mm gaps
        (+0.1425, 0.135, 0.035, 0.43), (+0.2975, 0.135, 0.035, 0.43),
        (-0.1425, 0.135, 0.035, 0.43), (-0.2975, 0.135, 0.035, 0.43)],
    back_slat=dict(y_centre=0.0, width=0.135, thickness=0.045, z_bottom=0.80, z_top=0.935),  # vertical, bolted to the central uprights
    finial_z=1.00,
)
```

Slat spacing: seat slats 135 mm wide with ~20 mm gaps (ESTIMATE from 2 × 0.135 + gap fitting in a 0.375 m half-depth with a 0.075 m central gap for the upright); seat slats overhang the end frames by 0.225 m.

### 3.2 End-frame (leg) profile — one cast piece per end, symmetric about y = 0

Observed on the Paris example (avenue Henri-Martin photo, Wikipedia FR) [S21]: a tall pierced central upright carrying the single back slat, a baluster-like body under the seat, and two legs that splay outward and end in **inward-curling volutes** at the ground; the arms of Paris sit in the upright. The following polyline is an **ESTIMATE** reconstructed from that photo and the official envelope; it is a closed outline in the bench's YZ plane (y across the depth, z up), to be extruded ±0.025 m in X (section 50 mm) and mirrored.

```python
# Right half outline (y >= 0), closed by mirroring about y = 0. Metres. Extrude along X by 0.05 total.
DAVIOUD_LEG_HALF = [
    (0.000, 1.000),  # finial top on the centreline
    (0.030, 0.990), (0.045, 0.960),
    (0.040, 0.935),  # top of back-slat rebate (slat 0.80-0.935 sits between the two uprights)
    (0.055, 0.800),
    (0.060, 0.700), (0.080, 0.640), (0.080, 0.580), (0.060, 0.520),  # medallion with the arms of Paris, O ~0.12 at z 0.61
    (0.055, 0.460),
    (0.120, 0.445),  # seat bearer: horizontal bar z 0.395-0.445 carrying the slats
    (0.375, 0.445), (0.375, 0.395),
    (0.160, 0.395),
    (0.110, 0.370), (0.080, 0.330),  # waist under the seat
    (0.120, 0.270), (0.190, 0.200), (0.260, 0.130), (0.310, 0.080),  # leg splaying outward (S-curve)
    (0.345, 0.050), (0.360, 0.025), (0.355, 0.000),  # foot pad on the ground, outer extent y = 0.36
    # inward volute (approx. Archimedean spiral, centre (0.300, 0.045), from r = 0.045 to 0.012, 1.25 turns)
    (0.300, 0.000), (0.262, 0.030), (0.275, 0.070), (0.312, 0.078), (0.330, 0.050), (0.312, 0.028), (0.295, 0.040),
    # back up the inner face of the leg
    (0.290, 0.090), (0.240, 0.165), (0.170, 0.240), (0.110, 0.300), (0.070, 0.350),
    (0.045, 0.395),  # under the bearer
    (0.000, 0.395),  # to the centreline (hole in the casting between z 0.395 and 0.46 can be left solid)
]
# Helper for a nicer volute: r(t) = 0.045 - 0.028*t, theta(t) = 2*pi*1.25*t, t in [0,1], centre (0.300, 0.045), drawn clockwise.
```

Place one end frame at x = −0.90 and one at x = +0.90 (bench centre at x = 0). A third, plainer frame at x = 0 is **not** present on the double Davioud (two supports only) [S21].

---

## 4. Grass, flowers, edging

### 4.1 Blade geometry

| Parameter | Value | Source |
|---|---|---|
| Mowing height, utility lawn | 30–50 mm (UK guidance: 35–40 mm baseline, 50 mm in summer); US extension 25–64 mm | [S29] |
| Blade width, *Lolium perenne* (perennial ryegrass, the base of Paris amenity mixes) | **2–4 mm** (flat or loosely folded), (1–)2–4(–6) mm in Arctic flora key | [S28] |
| Blade length (unmown) | (5–)15–25 cm; mown lawn ⇒ 35–50 mm visible | [S28], [S29] |
| Shoot density, well-kept ryegrass turf | "often over 10 000 shoots per square foot" ≈ **107 000 shoots/m²**; dense cultivars 10 000 tillers/ft² vs ~5 000–6 000 for ordinary turf-type | [S27] |
| Sowing rate (irrelevant to the model, for completeness) | 25–30 g/m² | [S29] |

Blender-practical densities (**ESTIMATE**, driven by render budget, not botany):

```python
GRASS = dict(
    blade_len=(0.035, 0.050),      # m, uniform random; 10 % of blades 0.055-0.065 (missed by the mower)
    blade_w=(0.002, 0.004),        # m
    blade_bend=(10, 35),           # degrees of tip droop
    density_macro=6000,            # blades/m^2 within 1.5 m of the macro camera (real turf ~1e5, 6e3 reads as solid at 50-85 mm)
    density_near=2500,             # blades/m^2 for the rest of the 8x5 patch
    density_far=400,               # blades/m^2 beyond 30 m (or switch to a textured plane)
    clump_noise=0.35,              # multiply density by (1 +- 0.35) with 0.15 m noise to avoid a carpet look
)
```

### 4.2 Colour variation

Green-grass broadband albedo 0.25 (Markvart & Castañer via Wikipedia) [S31]; visible-band values below are **ESTIMATE** tuned to that luminance range:

```python
GRASS_COLORS_LINEAR = dict(   # Principled Base Color, linear RGB
    blade_base=(0.060, 0.140, 0.030),
    blade_tip =(0.160, 0.260, 0.060),   # blend along the blade length
    dry_blade =(0.300, 0.260, 0.100),   # 5-8 % of blades
    soil_below=(0.080, 0.060, 0.040),   # visible between blades in the macro zone
)
```

### 4.3 Clover and daisies (a few, in the macro zone only)

| Plant | Part | Value | Source |
|---|---|---|---|
| *Bellis perennis* (daisy) | flower head diameter | **2–3 cm** | [S30a] |
| | leafless stem | 2–10 cm (rarely 15 cm) | [S30a] |
| | rosette leaves | 2–5 cm long | [S30a] |
| | ray colour | white, often tipped red; yellow disc | [S30a] |
| *Trifolium repens* (white clover) | flower head | 1.5–2 cm wide (13–25 mm), 30–40 flowers; on peduncles ~7 cm | [S30b], [S30c] |
| | leaflets | 5–20 mm long × 5–14 mm wide, heart-shaped, pale V mark | [S30c] |
| | petioles | up to 15 cm; height 10–30 cm when uncut (mown lawn ⇒ leaves at 3–6 cm) | [S30c] |

Suggested counts for an 8 × 5 m patch (ESTIMATE): 25–40 daisies, 8–12 clover clumps of 0.2–0.4 m, all within 2 m of the close-up camera; ray-floret count 20–30 per daisy head (ESTIMATE, not in the source).

### 4.4 Edging between gravel and lawn

| Option | Section | Source |
|---|---|---|
| Standard French "bordure P1" (concrete or granite), the common lawn/path kerb | **8 × 20 cm**, 1.00 m units; granite 43.2 kg/m; norm NF EN 1340 | [S33] |
| Brief's "12 cm" kerb (granite garden kerb) | 12 × 25 cm, 1.00 m units — **ESTIMATE**, not a Paris standard; use if a heavier edge is wanted |
| Setting | top 3–5 cm above the gravel, flush with the lawn soil; 10 mm joints; sawn faces, bush-hammered top (Vosges granite listing: "dessus, un chant grenaillés, reste scié") | [S33] |

```python
KERB = dict(width=0.08, height=0.20, unit_len=1.00, reveal=0.04, joint=0.01)   # P1 granite
```

---

## 5. Materials (Principled BSDF values)

Values from physicallybased.info are linear RGB [S32]; RAL hex values are sRGB approximations [S25]; everything else is **ESTIMATE**.

| Material | Base colour | Metallic | Roughness | Other | Source |
|---|---|---|---|---|---|
| Painted cast iron, park green (lamp, bench legs) | RAL 6009 #26392F → linear (0.019, 0.041, 0.028) | 0.0 | 0.45 (fresh) – 0.60 (weathered) | coat: 0.15, chips/rust mask 2–4 % at edges with iron below | [S20], [S25]; roughness ESTIMATE |
| Painted cast iron, street grey (bench legs on pavements) | RAL 7016 #373F43 → linear (0.038, 0.050, 0.056) | 0.0 | 0.55 | | [S20], [S25] |
| Bare / rusted iron under chips | (0.53, 0.513, 0.494) | 1.0 | 0.35–0.6 | physicallybased "Iron" (ρ 7870 kg/m³) | [S32] |
| Oak slats, painted green (parks) | RAL 6009 as above | 0.0 | 0.5, worn to 0.7 along edges | wood grain bump through the paint | [S20] |
| Oak slats, natural lasured (replica) | linear (0.28, 0.22, 0.15), greying to (0.30, 0.29, 0.26) where weathered | 0.0 | 0.70 | | ESTIMATE; [S22] "finition chêne naturel" |
| Stabilised sand / gravel apron ("stabilisé") | physicallybased "Sand" (0.44, 0.386, 0.231); desert-sand albedo 0.40 | 0.0 | 0.90 | 2–6 mm aggregate displacement, 2 % darker fines | [S32], [S31]; Paris tone ESTIMATE (ochre-beige) |
| Concreted side alleys (2020) / new concrete | albedo 0.55 → linear ≈ (0.52, 0.51, 0.48) | 0.0 | 0.80 | | [S7], [S31] |
| Lawn soil | (0.08, 0.06, 0.04); bare soil albedo 0.17 | 0.0 | 0.95 | | [S31]; colour ESTIMATE |
| Grass blades | §4.2 | 0.0 | 0.60 | Subsurface 0.3, translucent backlighting | ESTIMATE |
| Granite kerb | (0.35, 0.35, 0.34) | 0.0 | 0.75 (sawn) / 0.9 (bush-hammered top) | | ESTIMATE |
| Lantern bowl (Lyre) | (1, 1, 1) | 0.0 | 0.25 | Transmission 1.0, IOR 1.52, slight frost; emission from the LED block, 3000 K | [S32] glass; frost ESTIMATE |
| Security glass wall | (1, 1, 1) | 0.0 | 0.0 | Transmission 1.0, IOR 1.52, extra-clear; thickness 0.065–0.072 m; 3.00 × 2.20 m panels with stainless joint profiles | [S1], [S3], [S32] |
| Corten fence | linear (0.23, 0.10, 0.05) | 0.0 | 0.85 | 3.24 m high, 2 m modules | [S2], [S3]; colour ESTIMATE |

---

## 6. Compact staging block (copy into the builder)

```python
SITE = dict(
    frame="X toward Jean-Paulhan/NE, Y toward Champ de Mars/SE, Z up, origin = tower axis at ground",
    pier_face=62.45, glass_wall_y=76.0, avenue_y=(78.0, 92.0), lawn_edge_y=95.5,
    lawn=dict(center=(6.0, 98.0), size=(8.0, 5.0), kerb=dict(w=0.08, h=0.20, reveal=0.04)),
    bench=dict(center=(6.0, 97.5), yaw_deg=0.0, length=2.25, depth=0.75, height=1.00, seat_h=0.43, leg_centres=1.80,
               color_legs="RAL6009", color_slats="RAL6009"),
    lamp=dict(base=(10.4, 97.5), model="GHM Vendome I 6.87 m + Fontes de Paris Lyre GM 1.53 m",
              fixing_h=6.87, total_h=8.40, light_z=7.8, cct_k=3000, lumen=7500, color="RAL6009"),
    cameras=dict(hero=((14.0, 118.0, 1.7), (0, 0, 150), 22), closeup=((3.5, 102.0, 1.1), (6.0, 97.5, 0.7), 35)),
)
```

---

## Sources

- [S1] SETE press release "The new-look Eiffel Tower" — https://sete.toureiffel.paris/en/press/press-releases/new-look-eiffel-tower (glass 6.5 cm, 3 m × 2.20 m, 450 units, 1.5 t; 226.6 m / 224.8 m glass; metal fence 3.24 m, 151.2 m / 153.1 m; 420 bollards)
- [S2] toureiffel.paris, "A protective barrier integrated into the historic site" — https://www.toureiffel.paris/en/news/works/protective-barrier-integrated-historic-site (3 m glass, 65 mm, 380 bollards, Corten 3.24 m, avenue Gustave-Eiffel pedestrianised, east–west access through the gardens)
- [S3] Dietmar Feichtinger Architectes, project #424 Paris Tour Eiffel — https://feichtingerarchitects.com/les-projets/424_paris_tour-eiffel/ (72 mm six-layer glass, Corten 324 cm in 2 m segments, six gates, site 41 290 m², €22.8 M, Sept 2017 – May 2019, sbp, VOGT)
- [S4] DETAIL, "A glass wall and landscape park: security around the Eiffel Tower" — https://www.detail.de/de_en/a-glass-wall-and-landscape-park-security-around-the-eiffel-tower-35548 (428 bollards, 67 new trees)
- [S5] VOGT Landscape, "The Gardens of the Eiffel Tower, Paris" — https://www.vogt-la.com/the_gardens_of_the_eiffel_tower (20 000 m², design 2016–17, built 2017–18, 1878 garden elements)
- [S6] toureiffel.paris, "The Gardens" — https://toureiffel.paris/en/explore/gardens and "Discover the new Eiffel Tower gardens" — https://www.toureiffel.paris/en/news/works/discover-new-eiffel-tower-gardens (60+ tree varieties, 20 000 shrubs, 2 000 perennials, 1889 ponds, entrances on allées Refuzniks/Paulhan)
- [S7] SOS Paris, "Le Champ-de-Mars et les pieds de la tour Eiffel engloutis sous le béton", 19 July 2020 — https://www.sosparis.org/2020/07/19/le-champ-de-mars-et-les-pieds-de-la-tour-eiffel-engloutis-sous-le-beton/ (stabilisé → béton May 2020; esplanade sanded until the 2000s, lawn before; 24 ha park; 3.5 ha perimeter)
- [S8] Wikipedia FR, "Tour Eiffel" — https://fr.wikipedia.org/wiki/Tour_Eiffel (écartement extérieur 124.90 m, intérieur 74.24 m, 125 m square, piers at the cardinal points because the Champ-de-Mars runs SE–NW, 57.63 m first floor, 330 m)
- [S9] Wikipedia EN, "Eiffel Tower" — https://en.wikipedia.org/wiki/Eiffel_Tower (125 m square base; infobox coordinates)
- [S10] Le JDD, "Voici le projet final pour les abords de la tour Eiffel" — https://www.lejdd.fr/Societe/exclusif-voici-le-projet-final-pour-les-abords-de-la-tour-eiffel-4137955 (three tower-side lawns re-laid identical to the original from late 2023; central lawn not narrowed)
- [S11] franceinfo, "Paris 2024 : feu vert pour le réaménagement du secteur de la Tour Eiffel, mais sans le Champ-de-Mars" — https://www.franceinfo.fr/culture/patrimoine/paris-2024-feu-vert-pour-le-reamenagement-du-secteur-de-la-tour-eiffel-mais-sans-le-champ-de-mars_4951464.html (OnE project, moratorium, works to 2026)
- [S12] musée du quai Branly – Jacques Chirac, "The garden" — https://m.quaibranly.fr/en/public-areas/the-garden (18 000 m², 169 trees, ~30 species); Label ÉcoJardin — https://www.label-ecojardin.fr/site/jardin-du-musee-du-quai-branly-jacques-chirac (886 shrubs, 74 200 ferns and grasses)
- [S13] Ville de Paris Open Data, dataset "Éclairage public" (Cielis GMAO extract) — https://opendata.paris.fr/explore/dataset/eclairage-public/ ; API queries used: records within 250 m of 2.2962 E / 48.8565 N, group-by `support_libelle/support_hauteur/support_materiau` and `luminaire_libelle/lampe_temperature_couleur` within 700 m of 2.2962 E / 48.8570 N, and `search(luminaire_libelle,"LYRE")` within 700 m (116 Lyre records; "CAND VENDOME I F 6,87m", FONTE, GHM Sommevoire, Lyre GM 50 W 3000 K; Lyre GM PORT+bloc LED 68 W 3000 K; Citea NG 53 W 3000 K on 7 m masts; Girardin 574 400 W 2000 K on 9 m masts)
- [S14] GHM, candélabre "Vendôme" — https://ghm.fr/catalog/vendome/ and technical sheet — https://ghm.fr/wp-content/uploads/2025/02/FT-vendome-pole.pdf (fixing heights 4.63/5.10/5.43/6.87 m, weights 411.3–471.8 kg, 4 × Ø24 bolts at 500 × 500 mm, Ø60 spigot, parapet variant)
- [S15] Fontes de Paris, "Lyre" — https://fontesdeparis.fr/product/lyre-2/ and technical sheet — https://fontesdeparis.fr/wp-content/fiche-technique/Fontes%20de%20Paris%20-%20Fiche%20technique%20-%20Luminaires%20classiques%20-%20Lyre.pdf (PM/MM/GM sizes, weights, windage, recommended heights, LED counts and wattages, IP66, painted aluminium)
- [S16] Phozagora, "FONTES DE PARIS Lyre" — http://phozagora.free.fr/?page=Lanterne_Fdplyre (19th-century "lanterne de style à Lyre" form: top crown, chimney, dome, lisières crown, slender bowl, lyre foot; GM 1530 × 840, MM 1450 × 705, PM 1040 × 600 mm)
- [S17] GHM, "Ile de France" cast-iron candelabra (fluted option, fixing 2.90/3.20 m, Ø60 mm, 4 × Ø18 bolts at 200 × 200) — https://ghm.fr/catalog/ile-de-france/ ; [S17b] Fontes de Paris "Champs Elysées" mast, 4.00 m, 3 anchors Ø24 × 410 on Ø470 — https://www.batiproduits.com/fiche/produits/mat-en-fonte-d-aluminium-pour-candelabre-champ-p69054633.html
- [S18] Fontes de Paris, "Oudry" cast-iron pole — https://fontesdeparis.fr/product/oudry-en/ (bollard 1.02 m; fluted shaft 3.22 / 3.77 m; 4 × Ø18 × 370 bolts at 200 × 200)
- [S19] Loiselet, lampadaire n°3 — https://www.loiselet.com/fr/lampadaire/3 (3 660 mm total, lantern 360 × 760 mm, cast foot 360 × 2 900 mm, 133 kg)
- [S20] Ville de Paris, "Manifeste pour une nouvelle esthétique parisienne — Livre 3, Mobilier urbain" (2021) — https://cdn.paris.fr/paris/filer/35052_VDP_Manifeste_esthetique_Livre_3_BD.pdf (Banc Davioud: Gabriel Davioud 1853, fonte + bois, L 2.25 m, l 0.75 m, H 1 m, entre-axe 1.80 m, 120 kg, scellement 0.235 m, grey legs + green slats on streets, all green in parks; Wallace fountain "Vert foncé RAL 6009"); [S20b] Fontes de Paris "Opéra" lantern 710 × 400 mm — https://fontesdeparis.fr/product/opera/
- [S21] Wikipedia FR, "Banc Davioud" — https://fr.wikipedia.org/wiki/Banc_Davioud (grey cast iron, oak, 4 seat slats + 1 back slat, 124 kg, 2.25 m, arms of Paris on both end supports, 8 428 benches in 1869, grey in streets / bottle green in parks; infobox photo avenue Henri-Martin used for the leg shape)
- [S22] Urban Services, "Banc type DAVIOUD Ville de Paris – Double", ref. VPD-20.CP — https://www.urban-services.fr/bancs-acier-bois/banc-type-davidoud-ville-de-paris---double (2000 × 765 × 430/975 mm; 4 seat slats 2000 × 135 × 35; back slat 2000 × 135 × 45, PEFC oak; Japy bolts)
- [S23] Selency, 1869 original Davioud bench — https://www.selency.fr/p/T3EWCKBX/banc-public-historique-davioud-paris-bois-et-fonte-xixeme-s-1869 (L 200, seat 43, H 98, W 76.5 cm); other dealers 123 × 225 × 77 cm — https://mes-decouvertes.com/produit/banc-public-parisien-davioud-en-fonte-noir-et-bois-vert-123-x-225-x-77cm/
- [S24] Ville de Paris, schéma directeur Canal Saint-Martin (2023), parties 3–4 — https://cdn.paris.fr/paris/2023/11/21/ma10_canal-saint-martin_web_parties3-4_patrimoine-biodiversite-proprete-AqGw.pdf ("Couleur référence historique parisienne (RAL vert 6005)" for railings)
- [S25] Wikipedia EN, "List of RAL colours" — https://en.wikipedia.org/wiki/List_of_RAL_colours (sRGB approximations: 6005 #0F4336, 6009 #26392F, 6020 #354733, 7016 #373F43, 7021 #2E3234, 7044 #BDBDB2)
- [S26] RALcolorchart.com, RAL 6009 (LRV 6.11) — https://www.ralcolorchart.com/ral-classic/ral-6009-fir-green ; RAL 6005 (LRV 7.09) — https://www.ralcolorchart.com/ral-classic/ral-6005-moss-green
- [S27] Michigan State University, "Lawngrass I.D. Check-up" (D. Gilstrap) — https://archive.lib.msu.edu/tic/msufd/article/199436.pdf (ryegrass stands "often over 10,000 shoots per square foot")
- [S28] Aiken, Dallwitz et al., "Festuca of North America" / DELTA, *Lolium perenne* — https://www.delta-intkey.com/festucna/www/lope.htm (blades 2–4 mm wide, 15–25 cm long); Flora of the Canadian Arctic Archipelago — https://nature.ca/aaflora/data/www/polo.htm ((1–)2–4(–6) mm)
- [S29] Perennial ryegrass care guide (UK mowing 30–50 mm) — https://lawnandmowers.com/perennial-ryegrass-complete-care-guide/ ; Ohio State Extension STR-1 (1–2.5 in) — https://ohioline.osu.edu/factsheet/str-1
- [S30a] Wikipedia EN, "Bellis perennis" — https://en.wikipedia.org/wiki/Bellis_perennis ; [S30b] Wikipedia EN, "Trifolium repens" — https://en.wikipedia.org/wiki/Trifolium_repens (heads 1.5–2 cm, peduncles 7 cm) ; [S30c] HerbiGuide, "White Clover" — https://www.herbiguide.com.au/Descriptions/hg_White_Clover.htm (leaflets 5–20 × 5–14 mm, petiole ≤ 150 mm, heads 13–25 mm, 30–40 flowers)
- [S31] Wikipedia EN, "Albedo" (sample albedos: worn asphalt 0.12, bare soil 0.17, green grass 0.25, desert sand 0.40, new concrete 0.55 — Markvart & Castañer 2003; Tetzlaff 1983) — https://en.wikipedia.org/wiki/Albedo
- [S32] physicallybased.info material database (Iron colour (0.53, 0.513, 0.494), metalness 1; Sand (0.44, 0.386, 0.231), roughness 0.9; Glass IOR 1.52) — https://physicallybased.info/ (API https://api.physicallybased.info/materials)
- [S33] Point.P, bordures béton P1/P2/T1/T2 (P1 = 8 × 20 cm, NF EN 1340) — https://www.pointp.fr/c/bordure-beton/x3snv3_dig_2035168 ; Noblema granite kerbs (P1 8 × 20 × 100 cm, 43.2 kg/m) — https://www.noblema.com/bordure-en-granit-prix/ ; Vosges Aménagement granite P1 finishes — https://www.vosges-amenagement.fr/produit/bordure-p1-granit/
- [S34] Light ZOOM Lumière, "Éclairage intelligent de la ville de Paris dans le 15e" (Evesa/Cielis, 3000 K base dimmable to 2200 K) — https://www.lightzoomlumiere.fr/realisation/eclairage-intelligent-ville-de-paris-15e-arrondissement-kawantech/
- [S36] sbp, "Protective structure for the forecourt of the Eiffel Tower" — https://www.sbp.de/en/project/protective-structure-for-the-forecourt-of-the-eiffel-tower/ (glass façade 600 m, metal fence 200 m, 3 m high)
- Not readable in this pass (over the fetch size limit) but relevant for a later check: Ville de Paris "Le Mobilier d'Éclairage Parisien – Catalogue des Luminaires" (2018) — https://cdn.paris.fr/paris/2019/07/24/d6986cb0f11da1cbc071afeed665a672.pdf ; Gustave Eiffel, *La Tour de trois cents mètres* (1900), Gallica text — https://gallica.bnf.fr/ark:/12148/bpt6k106381w (403 to automated fetch).
