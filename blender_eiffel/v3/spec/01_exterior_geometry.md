# 01 — Eiffel Tower exterior geometry (generator-ready)

Lens: EXTERIOR GEOMETRY. Units: metres. Z up, Z = 0 at the Champ-de-Mars ground (altitude +33.50 m NGF, FR-wiki "Données techniques"). Tower axis = origin. Sides parallel to X and Y (the real tower's sides face roughly NE/SE/SW/NW; orientation is irrelevant for the model).

Tags used below:
- `[S]` sourced number (URL given in §11, short tag in brackets).
- `[E]` ESTIMATE — derived or interpolated by me; the reasoning / formula is stated.

Source short tags: `[WFR]` fr.wikipedia Tour Eiffel · `[WFR-DT]` fr.wikipedia "Données techniques de la tour Eiffel" · `[WEN]` en.wikipedia Eiffel Tower · `[EIF]` Eiffel, *La Tour de trois cents mètres* (1900) as transcribed on wonders-of-the-world.net / merveilles-du-monde.com (description, first-floor, second-floor, third-floor, foundations, construction pages) · `[GAL]` Eiffel, *Travaux scientifiques exécutés à la tour de 300 mètres* (Gallica OCR) · `[COS]` cosmovisions.com 1889 technical summary · `[CM1889]` *La Construction moderne*, 20 Apr 1889 (worldfairs.info) · `[SETE]` toureiffel.paris / sete.toureiffel.paris official pages · `[WP04]` Weidman & Pinelis 2004, *C. R. Mécanique* 332:571–584 (abstract + press material only; full table not retrievable) · `[BNF]` passerelles.bnf.fr · `[TDF]` tdf.fr 2022 press release · `[OFF-PAINT]` toureiffel.paris painting page · `[GAT]` gatier.fr / Académie des Beaux-Arts.

---

## 0. One-paragraph model summary (read this first)

Four square lattice piers (faces parallel to the tower's sides, NOT rotated 45°), 15.00 m axis-to-axis constant from the base to the 1st floor `[EIF]`, whose four corner box-columns ("arbalétriers") all lean toward the axis at a TRUE inclination of 54°35'26" measured in the diagonal vertical plane `[EIF]`. Pier centres form a 101.40 m square at the bearing plane on the masonry (z ≈ +2.5 m) `[GAL]`; extrapolated to z = 0 this gives 103.9 m between pier axes and 118.9 m between the outer edges of the iron `[COS]`, i.e. outer half-width ≈ 59.9 m at ground. At the 1st floor (57.63 m) the piers kink to a true inclination of ≈ 72°–75° `[EIF]`, reach the 2nd floor (115.73 m) with 31.70 m between the outer arbalétrier axes `[EIF]`, where the four piers have merged into one pylon; the pylon tapers (true inclination 82°25' → 87°12' `[EIF]`) to a 10.00 m square at the 3rd floor (276.13 m) `[EIF]`, then the campanile and lantern rise to the 300.00 m platform (1.70 m Ø) `[GAL]`; broadcast masts continue to 330 m `[SETE][TDF]`. All three visitor platforms overhang the structure by 3–4.7 m (1st: 70.69 m square on a 62.5 m structure; 2nd: 40.96 m on 31.70 m; 3rd: 18.65 m on 10.0 m).

> Important modelling decision (see §2.4): the published "side of the floor" figures (70.69 / 40.96 / 18.65 m) are PLATFORM EDGES, not the position of the structural corner columns. Treating 70.69 m as the arbalétrier spacing is geometrically incompatible with Eiffel's 101.40 m base square and his 54°35'26" inclination (it would require a 109–114 m base). The profile below therefore uses Eiffel's base square + inclinations as primary and the platform sides as overhangs.

---

## 1. Vertical datum (z above Champ-de-Mars ground)

| Level | z (m) | Altitude NGF | Source / note |
|---|---|---|---|
| Champ-de-Mars ground | 0.00 | +33.50 | `[WFR-DT]`, `[GAL]` ("sol dont l'altitude est +33,50") |
| Bearing plane of the iron on the masonry ("appuis") | **2.50** `[E]` | +36.00 | Eiffel gives the 3rd floor at "+309.63, soit 273.63 m au-dessus des appuis" `[EIF]` → appuis at +36.00 → z = 2.50. Masonry pedestals (soubassements) are 25 m square × 4 m high `[WFR]`, so the shoes are hidden ~1.5 m below the pedestal top. |
| Top of masonry pedestals | ≈ 4.0 `[E]` | +37.5 | 4 m high soubassements `[WFR]` |
| Arch intrados crown ("hauteur sous clef") | **39.40** | — | `[COS]` ("39,40 m de hauteur sous clef de voûte"); `[WFR]` "s'élèvent à 39 m" |
| Underside of 1st-floor face girders (= top of panel 4) | 46.5 `[E]` | — | 2.5 + 4 panels × 11.00 m `[EIF]` |
| Top of 1st-floor face girders (panel 5, 7.00 m vertical) | 53.5 `[E]` | — | `[EIF]` panel 5 = 7.00 m vertical / 7.53 m along the face |
| **1st floor (plancher)** | **57.63** | +91.13 | `[WFR-DT]`, `[GAL]`; gallery floor 1.20 m lower (+89.93) `[EIF]` |
| **2nd floor, lower level** | **115.73** | +149.23 | `[WFR-DT]`, `[GAL]` (some SETE pages round to 115.75 / 116) |
| 2nd floor, upper level (Jules Verne / upper gallery) | ≈ 120.5 `[E]` | — | official site: "2 niveaux" at the 2nd floor `[SETE]`; no published height; one storey ≈ 4.8 m assumed |
| Top of 2nd-floor block (roofs) | ≈ 125 `[E]` | — | assumed two storeys + roof |
| **Intermediate platform** (disused lift transfer, mid-height of panel 19) | **195.9** `[E]` (range 195.35–196.24) | — | Eiffel: the 2nd→3rd height "divided into two equal parts" `[EIF]` → (115.73+276.13)/2 = 195.93; wonders-of-the-world "Dimensions" page lists 195.35 m; orchestrator's 196.24 not found in any source |
| **3rd floor (enclosed room)** | **276.13** | +309.63 | `[WFR-DT]`, `[EIF]`, `[GAL]` |
| Upper open deck ("4e plate-forme") | **279.11** | +312.61 | `[WFR]` ("279,11 m, la plus haute plate-forme accessible"); Eiffel's 1900 value +312.21 (= 278.71) `[EIF]`; `[COS]` 278.95 |
| Top of the 4 corner arbalétriers / base of campanile | ≈ 283 `[E]` | — | "au-dessous du campanile la largeur des faces est de 10,00 m" `[EIF]`; height assumed = deck + central pavilion (2.27 m `[EIF]`) + cross beams |
| Lantern (phare) small platform | **300.00** (Ø 1.70 m) | +333.50 | `[GAL]` "exactement à la hauteur de 300 mètres"; `[CM1889]` gives Ø 1.40 m |
| Top of lantern / 1889 structure | **300.51** | +334.02 | `[GAL]` "plate-forme supérieure à 300,51 m"; `[COS]` 300.52 / 334.02 |
| 1889 flagpole tip | 312.27 | — | `[WFR-DT]` |
| 1957 TV mast tip | 320.75 | — | `[WFR]` |
| 2000 UHF (TNT) antenna tip | 324.00 | — | `[WFR-DT]`, `[SETE]` |
| **Current tip (DAB+ antenna, 15 Mar 2022)** | **330.00** | — | `[SETE]`, `[TDF]` (6 m, 350 kg antenna placed on top of the 324 m stack) |

---

## 2. Plan dimensions and half-width profile

### 2.1 Fixed plan anchors

| Item | Value | Source |
|---|---|---|
| Competition brief / "fits in a square of" | 125 × 125 m | `[WFR]`, `[WEN]` |
| Pier-centre square at the bearing plane (z ≈ 2.5) | **101.40 m** side → pier axis half-spacing 50.70 m | `[GAL]` |
| Pier axes at ground (z = 0), 1889 figure | 103.9 m → 51.95 m | `[COS]` (model gives 103.91 ✓) |
| Outer edges of the iron at ground | 118.90 m → 59.45 m | `[COS]` (model: 119.8 incl. box half-width ✓) |
| Outer sides of the masonry pedestals | 129.25 m | `[COS]` (25 m pedestal centred on pier axis → 128.9 ✓) |
| FR-wiki "écart extérieur / intérieur entre 2 piliers" | 124.90 m / 74.24 m | `[WFR-DT]` — NOT the iron: 74.24 m is the arch chord (`[COS]` "74,24 m de corde"); 124.90 m matches neither the iron (119.8) nor the pedestals (128.9); treat as the masonry footprint at some intermediate level. Do not use for the iron. |
| Pier face (axis-to-axis of a pier's 4 arbalétriers), base → 1st floor | **15.00 m constant** | `[EIF]`, `[COS]` |
| Pier face at top of panel 9 (z 100.83) | 11.32 m | `[EIF]` ("sous la ceinture du 2e étage") |
| Pier face at 2nd floor | 10.41 m (10.412) | `[EIF]` |
| Tower face between outer arbalétrier axes at 2nd floor | **31.70 m** (= 10.412 + 10.877 + 10.412) | `[EIF]` |
| 1st-floor platform side (axis of outer gallery posts / "côté extérieur") | **70.69 m**; 71.69 m outside the gutter | `[EIF]`, `[WFR-DT]` |
| 1st-floor central void | **29.00 m square**, chamfered corners, balcony bulges mid-side; 724 m² void, 5 140 m² gross, 4 416 m² net | `[EIF]` first-floor page |
| 2nd-floor platform side | **40.96 m** today `[WFR-DT]`; 37.90 m outside gutter in 1900 `[EIF]`; no central void `[EIF]` |
| 3rd-floor enclosed room | **16.50 m square** with cut corners (long sides 10.00 m, chamfers 3.15 m); central 10 m square; 3.25 m gallery | `[EIF]` third-floor page (16.56 m in the description page) |
| 3rd-floor exterior deck side | **18.65 m** | `[WFR-DT]`, `[COS]` |
| Square of the 4 corner columns at the 3rd floor | **10.00 m** | `[EIF]` ("le carré occupé par ces quatre montants a 10 m de largeur") |
| 4th platform (279.11) | 10.00 m square, cut corners (long 10.00, short 2.30), terrace 2.77 m wide, central pavilion 10.50 m square | `[EIF]` |

### 2.2 Inclinations (how to use Eiffel's three angles)

For a corner column of the pier in quadrant (+X,+Y), rising with direction (−s, −s, 1):

| Angle quoted by Eiffel | Meaning | Value | Resulting `s` (horizontal run per metre of rise, per axis) |
|---|---|---|---|
| **54°35'26"** "suivant la ligne de plus grande pente, c.-à-d. suivant la diagonale" | TRUE inclination of the column axis (in the diagonal vertical plane) | `[EIF]` | s = cot(54.5906°)/√2 = **0.50269** |
| 63°18'43" "dans le plan vertical" (OCR shows "03°18'43") | Apparent inclination in ELEVATION (projected onto a vertical plane parallel to a side) | derived: atan(1/s) = 63.312° ✓ matches | same s |
| 65°48'49" "dans le plan rabattu de la face" (OCR variant 65°18'48") | Angle between the column and the horizontal measured INSIDE the inclined face plane of the pier | derived: acos(s/√(2s²+1)) = 65.81° ✓ matches | same s |

All three are mutually consistent only for s = 0.50269, which confirms the reading. **Use s = 0.50269 for panels 1–4.** Other inclinations given by Eiffel (all TRUE, diagonal-plane): panel 5 bend "about 4°" (axes form 176°03'20") → 58°32'06" → s = 0.4327 `[E]` (direction of the bend inferred: steeper, because the 101.40 / 31.70 / 70.69 anchors require it); panels 6–9: 72°49'50" → 75°10' → s 0.2185 → 0.187; panels 12–29: 82°25'29" → 87°12'31" → s 0.0940 → 0.0345; the top four panels have constant inclination `[EIF]`.

### 2.3 Profile model (what the PROFILE table is computed from)

Notation: `xp` = pier axis half-spacing, `xo` = outer arbalétrier AXIS half-width, `xf = xo + b/2` = outer FACE half-width (b = box width, §3.4), `f` = pier face width.

- Segment A, panels 1–4, z 2.5 → 46.5: `xp = 50.70 − 0.50269·(z − 2.5)`; f = 15.00. `[GAL]`+`[EIF]`
- Segment B, panel 5 (face girders) + platform beams, z 46.5 → 57.63: `xp = 28.58 − 0.4327·(z − 46.5)` → xp(57.63) = 23.77. `[E]`
- Segment C, panels 6–11, z 57.63 → 115.73: `xp` linear 23.77 → 10.645 (s = 0.2258, true angle 72°17', vs Eiffel's 72°50'→75°10' — 0.5° discrepancy absorbed here `[E]`); f linear 15.00 → 11.32 (z 100.83) → 10.41 (z 115.73) `[EIF]`; `xo = xp + f/2`: 31.27 → 15.85.
- Segment D, panels 12–28, z 115.73 → 276.13 (single pylon): quadratic with Eiffel's start slope and the 10 m top square: `xo = 15.85 − 0.09404·t + 0.00016455·t²`, t = z − 115.73 → xo(276.13) = 5.00, end slope 0.0412 (true 86°40' vs Eiffel 87°12' ✓). `[E]` fit to `[EIF]` anchors
- Segment E, z 276.13 → 300: `xo = 5.00 − 0.03448·(z − 276.13)` (87°12'31" `[EIF]`) → xo(300) = 4.18 (8.35 m square at the lantern base) `[E]`.
- Intermediate (inner) arbalétriers of the merged pylon: `xm = xo − f`, with f = 10.41·xo/15.85 above the 2nd floor `[E]` (they frame the central lift shaft; ≈ 3.4 m square at the 3rd floor).
- Cross-checks: xp(0) = 51.96 → 103.9 m `[COS]` ✓; xf(0) = 59.9 → 119.8 m vs 118.90 `[COS]` ✓ (0.9 m); pedestal outer 128.9 vs 129.25 `[COS]` ✓; first-floor void 29.0 m fits inside the 2·xi(57.63) = 32.5 m gap between piers ✓; arch chord 74.24 m met at z = 14.6 m with crown 39.40 m gives R ≈ 40 m ≈ BNF's "arcs de 80 m d'ouverture" ✓.

Independent literature check: Weidman & Pinelis 2004 `[WP04]` show the skyline (29 panels, SNTE data) is two piecewise exponentials — a steeper-spreading lower one (safety factors) and an upper one; our segments A–C vs D reproduce that two-regime behaviour. Their numeric table could not be downloaded (publisher 403); hence `[E]` on the interpolated rows.

### 2.4 Half-width table (requested elevations) — all `[E]` except anchors marked `[S]`

| z (m) | xo axis | **xf outer face (half-width)** | xi inner column axis | pier face f / pylon side | note |
|---|---|---|---|---|---|
| 0 | 59.46 | **59.90** | 44.46 | 15.00 | extrapolated below bearing plane; inside pedestal `[S]`103.9/118.9 |
| 2.5 | 58.20 | 58.64 | 43.20 | 15.00 | bearing plane `[S]`101.40 |
| 10 | 54.43 | **54.87** | 39.43 | 15.00 | |
| 20 | 49.40 | **49.84** | 34.40 | 15.00 | |
| 30 | 44.38 | **44.81** | 29.38 | 15.00 | |
| 40 | 39.35 | **39.79** | 24.35 | 15.00 | |
| 46.5 | 36.08 | 36.52 | 21.08 | 15.00 | girder underside |
| 50 | 34.57 | **35.01** | 19.57 | 15.00 | |
| 57.63 | 31.27 | **31.70** | 16.27 | 15.00 `[S]` | 1st floor; platform edge at 35.35 `[S]` |
| 70 | 27.95 | **28.35** | 14.00 | 13.95 | |
| 90 | 22.58 | **22.94** | 10.33 | 12.24 | |
| 100.83 | 19.67 | 20.01 | 8.35 | 11.32 `[S]` | top of panel 9 |
| 115.73 | 15.85 `[S]` | **16.15** | 5.44 | 10.41 `[S]` | 2nd floor; platform edge at 20.48 `[S]` |
| 140 | 13.66 | **13.91** | (4.69) | pylon 27.33 | |
| 160 | 12.01 | **12.26** | (4.12) | pylon 24.02 | |
| 180 | 10.49 | **10.74** | (3.60) | pylon 20.97 | |
| 196 | 9.36 | **9.61** | (3.21) | pylon 18.72 | intermediate platform |
| 220 | 7.83 | **8.08** | (2.69) | pylon 15.67 | |
| 250 | 6.19 | **6.44** | (2.12) | pylon 12.38 | |
| 276.13 | 5.00 `[S]` | **5.25** | (1.72) | pylon 10.00 `[S]` | 3rd floor; deck edge at 9.33 `[S]` |
| 279.11 | 4.90 | 5.15 | | 9.79 | upper deck |
| 290 | 4.52 | **4.77** | | 9.04 | campanile zone |
| 300 | 4.18 | **4.43** | | 8.35 | lantern base; platform Ø 1.70 `[S]` |

(xi in parentheses above 115.73 = intermediate arbalétriers of the pylon, `[E]`.)

How the pier's own section shrinks: 15.00 m constant to the 1st floor `[S]`; 15.00 → 11.32 m over panels 6–9 `[S]`; 10.41 m at the 2nd floor `[S]`; above that there is no separate pier — the pylon side is 2·xo and the former inner columns sit at ±xm `[E]`.

---

## 3. Pier geometry (ground → 1st floor)

### 3.1 Orientation and composition
- Each pier is a square lattice box, 15.00 m axis-to-axis `[EIF]`, faces PARALLEL to the tower's sides (confirmed: Eiffel's "largeur des faces", the 101.40 m pier-centre square, and the arch chord all refer to faces parallel to the sides; the column's own line of greatest slope is the tower diagonal) `[EIF][GAL]`.
- 4 corner box-columns ("arbalétriers") per pier = 16 total, each on its own masonry massif (16 massifs) `[WFR]`; inclined to the horizontal at 54°35'26" true (§2.2). All four columns of a pier are parallel below the 1st floor (constant 15 m face).
- The pier is entirely enclosed in the 25 m × 4 m pedestal at the base `[WFR]`.

### 3.2 Panels between ground and 1st floor
- Panels 1–4: 11.00 m vertical each (12.31 m measured along the inclined face plane) → horizontal belts ("entretoises horizontales") at z = 2.5, 13.5, 24.5, 35.5, 46.5 `[EIF]` (`[COS]` rounds to "panneaux de 12,50 m").
- Panel 5: 7.00 m vertical / 7.53 m along the face = the 1st-floor belt girders (z 46.5–53.5) `[EIF]`.
- Each face panel = top and bottom horizontal belt + one croix de Saint-André (two crossing diagonals) `[WFR]`, `[EIF]` ("croix de Saint-André dans les panneaux 1 à 9 et 12 à 29"). Diagonals are themselves small lattice girders.
- Inside each belt level the 15 m square is braced by a horizontal diagonal lattice girder 21.21 m long (= 15√2), 0.715 m deep `[EIF]`.
- Arbalétrier plates are spliced every ≈ 4.50 m, diaphragms ("cadres") about every 2 m along the column `[EIF]`.

### 3.3 Belt and bracing member sizes
- Horizontal belt caissons at the lower piers: 0.80 m deep box lattice, built of 80×80×10 angles with 45×45×5 lattice bars (double lattice on vertical faces, single on horizontal) `[EIF]`.
- Above the 1st floor the belts are 0.60 m high × 0.52 m wide; X-brace members 0.50 m deep `[EIF]`.
- Typical angles on the main columns: 100×100×12 corner angles `[EIF]`.

### 3.4 Arbalétrier box section (use for `b`)
| Zone | Section | Source |
|---|---|---|
| Ground → 1st floor | square box, **0.80 m internal**, 0.877 m external (section XXVIII); plates 18.5 → 13.5 mm; 748 kg/m for the heaviest member, 2 856 kg/m for the whole 4-column group at the base | `[EIF]`, `[COS]` ("0,80 m de côté") |
| 1st → 2nd floor | ≈ 0.70–0.60 m `[E]` (interpolate) | — |
| Panels 12–17 and above | **0.50 m square**; faces 500 mm with angle + T profiles | `[EIF]` |
Modelling: b(z) = 0.877 (z ≤ 57.63) → 0.60 at 115.73 → 0.50 above. Secondary members: belts 0.80 m (low) / 0.60×0.52 m (high); X-diagonals 0.50 m deep lattice; typical bars 45×45×5 to 100×100×12 angles.

---

## 4. The four decorative arches

| Item | Value | Source |
|---|---|---|
| Nature | Purely decorative, non-structural (Sauvestre); "ont l'air de supporter le premier étage, mais sont au contraire supportés par lui" | `[CM1889]`, `[WFR]` ("rôle purement décoratif"), nonsite.org essay |
| Intrados crown height | **39.40 m** | `[COS]`, `[WFR]` |
| Chord (span between inner arbalétrier axes at the springing) | **74.24 m** | `[COS]` (FR-wiki repeats 74.24 as "écart intérieur") |
| Opening per BnF | "arcs de 80 m d'ouverture" | `[BNF]` |
| Springing (where chord 74.24 meets the inner columns in the model) | z ≈ **14.6 m** `[E]` | from §2.3 |
| Intrados circle | **R ≈ 40.2 m, centre on the face axis at z ≈ −0.8 m** (practically ground level) `[E]` — fits chord, crown and the BNF "80 m" | derived |
| Extrados / band depth at crown | extrados reaches the girder underside at z 46.5 → radial depth ≈ **7.1 m** at the crown `[E]`; model the band as the annulus R 40.2–47.3 clipped by the pier faces (at the springing the extrados is inside the pier width, so the band visually dies into the pier lattice) | derived |
| Band thickness (normal to the face) | ≈ 1.0 m `[E]` lattice (X pattern, same vocabulary as the piers) | — |
| Connection | top of the band riveted to the lower chord of the 1st-floor face girder (panel 5) between z 46.5 and 53.5; sides riveted to the inner arbalétriers from z ≈ 14.6 up to 46.5 | `[CM1889]` (hung from the first floor) |
| Decoration | 1889 ornaments/escutcheons largely removed; today plain lattice | `[WFR]` |

---

## 5. First-floor girder ring (z 46.5 – 57.63)

- Structural ring: inner and outer lattice girders in the inclined planes of the pier faces, **7.53 m deep along the face (7.00 m vertical)**, linking adjacent piers; connected at their top by transverse beams 4.00 m deep spaced 3.882 m `[EIF]`. Eiffel also quotes girder chord lengths 38.25 m (lower) and 32.70 m (upper) and `[CM1889]`/`[COS]` quote "4 poutres de 42–45 m de longueur et 7,50 m de hauteur".
- Platform structure above the girders: z 53.5 → 57.63 (floor), overhanging ≈ 4.5 m beyond the outer arbalétrier axes to the 70.69 m square `[E]` (platform 70.69 `[S]` vs structure 62.5 `[E]`); outer edge beams 3.387 m deep, 2.00 m on the inside `[EIF]`; consoles under the balcony `[SETE]`.
- **Frieze of 72 names**: "wide continuous beam punctuated by consoles supporting the balcony; in the intervals, names in gilded capitals **60 cm high**, 18 per face, ≤ 12 letters" `[SETE]`. Place the letters on the outer fascia just under the balcony, centre z ≈ 56.3 `[E]`. A second identical frieze with 72 women scientists is planned above it (2026) `[WFR]`.
- Gallery: perimeter promenade **2.60 m wide** `[EIF][WEN]`; 1889 arcaded balustrade: 9 arcades per side, openings 7.76 m (corner 7.96 m), 6.95 m to the keystone, cast-iron columns, 560 stoneware balusters `[EIF]` — **removed in 1937** (Granet modernisation) `[WFR]`. Today: plain steel railing ≈ 1.1 m `[E]` and three glazed pavilions ≈ 20–25 m long × 10 m wide × ≈ 10 m high (wonders-of-the-world first-floor page).
- **Ring with central void**: void **29.00 m square**, chamfered corners, semicircular balcony bulges mid-side `[EIF]`; 2014 Moatti-Rivière works: inclined glass balustrade **2.80 m** high around the void, **glass floor band 1.85 m wide** (64 slabs, 128 m², 32–36 mm laminated) `[batirama / Saint-Gobain]`.

---

## 6. Second floor (z 110.7 – ≈125)

- Panel 10 (z 100.83–110.83): lattice belt 3.00 m deep + 6.56 m lattice girders `[EIF]`. Panel 11 = 2nd-floor belt: girders A–D **5.03 m deep** double-wall lattice (z ≈ 110.7–115.73) `[EIF]`; secondary beams 2.00 / 1.50 / 1.30 / 0.75 m `[EIF]`.
- Platform: **40.96 m square today** `[WFR-DT]` (1900: 37.90 m outside the gutter; gallery 2.10 m then widened to 4.00 m; 1 430–1 652 m²) `[EIF][WFR-DT]`; **no central void** `[EIF]`. Structure beneath = 31.70 m between outer column axes → overhang ≈ 4.6 m per side `[E]`.
- Two levels: lower 115.73 `[S]`, upper ≈ 120.5 `[E]`; gallery "the widest of the tower, 4 m" (wonders second-floor page). Balustrade: lower gallery has a tall protective mesh/glass screen, upper level railings `[E]` (≈ 2.5 m mesh / 1.1 m rail).
- **Merger point**: at the 2nd floor the four piers' inner columns are only 10.88 m apart (31.70 − 2×10.41) `[EIF]`; from panel 12 upward the structure is one pylon with 4 corner + 4 intermediate arbalétriers `[EIF]`.

---

## 7. Pylon, 2nd → 3rd floor (z 115.73 – 276.13)

- Taper: xo 15.85 → 5.00 (§2.3), true inclination 82°25'29" → 87°12'31", top four panels constant `[EIF]`.
- Panels 12–28: heights decrease from 11.30 m to ≈ 5.8–6.3 m `[EIF]`; Eiffel's group total 140.40 m (OCR "12 à 17", most likely 12 à 27). Suggested ESTIMATE schedule (17 panels, linear 11.30 → 6.31, Σ = 149.7 m) → belt elevations: 127.0, 138.0, 148.7, 159.1, 169.1, 178.9, 188.3, 197.4, 206.2, 214.7, 222.9, 230.8, 238.3, 245.6, 252.5, 259.1, 265.4; panel 29 = 3rd-floor structure: lower belt 3.50 m + gallery consoles 7.207 m high (265.4 → 276.13) `[EIF]`.
- Each face panel: croix de Saint-André between the corner columns `[EIF]`; the intermediate arbalétriers (±xm) carry the lift guides (central guide posts 0.80 m, side 0.50 m `[EIF]`).
- Corner columns 0.50 m square; belts 0.60 × 0.52 m; X-members 0.50 m `[EIF]`.
- **Intermediate platform** at mid-height of panel 19, z ≈ 195.9 `[E]` (§1): four beams B, C, H, D **2.30 m deep** forming a square that connects the intermediate arbalétriers; secondary beams 1.20 / 0.70 / 0.18 m; original purpose: transfer between the two Edoux hydraulic lift stages (160 m climb impossible in one stage in 1889); disused since 1983, used for storage/emergency stop `[EIF]`, paristickets. Size ≈ the pylon interior at that level ≈ 18.7 m square `[E]`.
- Water tank at the 3rd floor: Ø 3.00 m × 3.80 m, 25 m³ `[EIF]`.

---

## 8. Summit (z 276.13 – 330)

- **3rd floor enclosed room**: 16.50 m square, cut corners (10.00 / 3.15 m), ceiling 2.50 m, 251 m²; central 10 m square holds the 4 corner columns + lift; 3.25 m gallery around; exterior deck 18.65 m square on 7.207 m consoles `[EIF][WFR-DT]`; gallery-promenade 3.00 m clear `[EIF]`; Eiffel's apartment on this level `[WFR]`.
- **Upper open deck** 279.11: 10.00 m square with cut corners (short sides 2.30 m), terrace 2.77 m wide, railing 1.20 m (1900) `[EIF]`; today a safety mesh 3.24 m high ("le centième de la tour") `[WFR]`; central pavilion 10.50 m square, 2.27 m high `[EIF]`.
- **Campanile**: "quatre grands arceaux à jour / à treillis" springing from the 4 corner columns (faces 10.00 m below the campanile `[EIF]`) and converging to carry the lantern (phare) `[GAL][CM1889]`; height from ≈ 283 to ≈ 298 `[E]`; access tube Ø 0.60 m `[CM1889]`.
- **Lantern / beacon**: cupola carrying the Ø 1.70 m platform at 300.00 m `[GAL]`; lantern top at 300.51 m `[GAL]`; lantern body ≈ Ø 3 m × 3 m `[E]`. Modern beacon (since 31 Dec 1999): 4 motorised marine projectors, 6 000 W xenon, forming 2 beams rotating 360°, range 80 km `[SETE]`.
- **Antennas**: mast from ≈ 300.5 to 330 m. Milestones: 1957 TV mast → 320.75 `[WFR]`; 2000 UHF/TNT antenna + support → 324.00 `[SETE]`; 2022 DAB+ antenna 6.00 m, 350 kg → 330.00 `[TDF][SETE]`. Diameters not published: ESTIMATE mast Ø 1.5 m at 300 m tapering to Ø 0.6 m at 324 m, DAB+ whip Ø 0.3–0.4 m; model UHF panel arrays as 4 flat panels ≈ 1.2 × 3 m around the mast at 305–318 m `[E]`.

---

## 9. Colour

| Period | Name | Notes | Source |
|---|---|---|---|
| 1887–88 | rouge de Venise | assembly primer | `[OFF-PAINT]` |
| 1889 | brun-rouge, 5 graded tones base→top | `[GAT]` |
| 1892 | ocre-brun | `[OFF-PAINT]` |
| 1907–1947 | **jaune-brun** (Eiffel's choice) | `[OFF-PAINT]` |
| 1954–61 | rouge-brun | `[OFF-PAINT]` |
| 1968–2019 | **"Brun Tour Eiffel"** — bronze-like, proprietary, 3 shades darkest at the base, lightest at the top | `[OFF-PAINT]`, `[BNF]` |
| 2019 → (20th campaign) | **jaune-brun** again, 3 shades (darkest base → lightest top); chosen by stratigraphic soundings (Gatier) | `[OFF-PAINT]`, `[GAT]` |
| 2024 status | Tower shown in the new jaune-brun for the Paris 2024 Games (outer/visible faces); campaign delayed by Covid + lead rules; "most of the structure repainted, only the interior face remains", completion planned **2026**; ≈ 60 t paint per campaign | `[SETE]`, franceinfo 29 Apr 2025 |

No official RAL/Pantone/hex exists (SETE calls the shades proprietary). ESTIMATE sRGB triplets for rendering (iron-oxide pigments; keep roughness ≈ 0.6, slight metallic 0):
- Jaune-brun 2024, base shade `#6F5236` (111,82,54); middle `#85663F` (133,102,63); top `#9C7F55` (156,127,85) `[E]`.
- Brun Tour Eiffel 1968–2019, base `#4E3E33`; middle `#5C4A3A`; top `#6B5A4A` `[E]`.
- Gold leaf of the 72 names: `#C9A648` `[E]`.
Band limits for the three shades (official: by level): base → 1st floor = darkest, 1st → 2nd = middle, 2nd → top = lightest `[OFF-PAINT]` (3 levels).

---

## 10. PROFILE (paste into Python)

Convention: `[z, half_width_outer, pier_section_side]` — `half_width_outer` = distance from the tower axis to the OUTER FACE of the corner column (xo + b/2), measured parallel to a side; `pier_section_side` = side of ONE pier's square (axis-to-axis) for z ≤ 115.73 (four separate piers), and the side of the single merged pylon (= 2·xo) for z > 115.73. Pier centres for z ≤ 115.73 are at (±(half_width_outer − b/2 − pier_section_side/2), ±same). Subtract b/2 (0.44 m low / 0.30 m at 2nd floor / 0.25 m above) to get the column axis.

```json
PROFILE = [
  [0.00,   59.90, 15.00],
  [10.00,  54.87, 15.00],
  [20.00,  49.84, 15.00],
  [30.00,  44.81, 15.00],
  [40.00,  39.79, 15.00],
  [50.00,  35.01, 15.00],
  [57.63,  31.70, 15.00],
  [70.00,  28.35, 13.95],
  [90.00,  22.94, 12.24],
  [115.73, 16.15, 10.41],
  [140.00, 13.91, 27.33],
  [160.00, 12.26, 24.02],
  [180.00, 10.74, 20.97],
  [196.00,  9.61, 18.72],
  [220.00,  8.08, 15.67],
  [250.00,  6.44, 12.38],
  [276.13,  5.25, 10.00],
  [290.00,  4.77,  9.04],
  [300.00,  4.43,  8.35]
]
```

Closed-form generator (same model, continuous in z):

```python
import math
def _cot(deg): return 1/math.tan(math.radians(deg))
S_A  = _cot(54+35/60+26/3600)/math.sqrt(2)   # 0.50269 panels 1-4   [EIF]
S_5  = _cot(58+32/60+ 6/3600)/math.sqrt(2)   # 0.43272 panel 5 bend [E]
S_D0 = _cot(82+25/60+29/3600)/math.sqrt(2)   # 0.09404 panel 12     [EIF]
S_E  = _cot(87+12/60+31/3600)/math.sqrt(2)   # 0.03448 top panels   [EIF]
Z0, Z4, Z1, Z9, Z2, Z3 = 2.5, 46.5, 57.63, 100.83, 115.73, 276.13
XP0 = 101.40/2                                # [GAL]
XP4 = XP0 - S_A*(Z4-Z0); XP1 = XP4 - S_5*(Z1-Z4); XP2 = 31.70/2 - 10.41/2
S_C = (XP1-XP2)/(Z2-Z1)
XO2, XO3 = 31.70/2, 5.0
C_D = (XO3 - (XO2 - S_D0*(Z3-Z2)))/(Z3-Z2)**2

def pier_face(z):            # axis-to-axis side of one pier
    if z <= Z1: return 15.0
    if z <= Z9: return 15.0 + (11.32-15.0)*(z-Z1)/(Z9-Z1)
    if z <= Z2: return 11.32 + (10.41-11.32)*(z-Z9)/(Z2-Z9)
    return 10.41*xo(z)/XO2    # spacing of the pylon's intermediate columns [E]

def pier_axis(z):            # half-spacing of pier centres, valid z <= Z2
    if z <= Z4: return XP0 - S_A*(z-Z0)
    if z <= Z1: return XP4 - S_5*(z-Z4)
    return XP1 - S_C*(z-Z1)

def xo(z):                   # outer corner-column AXIS half-width
    if z <= Z2: return pier_axis(z) + pier_face(z)/2
    if z <= Z3:
        t = z-Z2; return XO2 - S_D0*t + C_D*t*t
    return XO3 - S_E*(z-Z3)

def box(z):                  # arbalétrier box width
    if z <= Z1: return 0.877
    if z <= Z2: return 0.877 + (0.60-0.877)*(z-Z1)/(Z2-Z1)
    return 0.50

def half_width_outer_face(z): return xo(z) + box(z)/2
```

Arch (per face, in the vertical plane of that face, X along the face): intrados circle centre (0, z = −0.78), R = 40.18; extrados R = 47.28 (touches girder underside at z 46.5); clip the annulus to z ≥ 14.6 and |X| ≤ pier inner face line `pier_axis(z) − 7.5`; extrude ±0.5 m normal to the face `[E]`.

---

## 11. Sources

- `[WFR]` https://fr.wikipedia.org/wiki/Tour_Eiffel
- `[WFR-DT]` https://fr.wikipedia.org/wiki/Donn%C3%A9es_techniques_de_la_tour_Eiffel
- `[WEN]` https://en.wikipedia.org/wiki/Eiffel_Tower
- `[EIF]` Eiffel 1900 transcriptions: https://www.wonders-of-the-world.net/Eiffel-Tower/Description-of-the-Eiffel-tower.php ; https://www.merveilles-du-monde.com/Tour-Eiffel/Description-de-la-tour-Eiffel.php ; https://www.wonders-of-the-world.net/Eiffel-Tower/First-floor.php ; https://www.wonders-of-the-world.net/Eiffel-Tower/Second-floor.php ; https://www.wonders-of-the-world.net/Eiffel-Tower/Third-floor.php ; https://www.wonders-of-the-world.net/Eiffel-Tower/Foundations-of-the-Eiffel-tower.php ; https://www.wonders-of-the-world.net/Eiffel-Tower/Construction-of-pillars-of-the-Eiffel-tower.php ; https://www.wonders-of-the-world.net/Eiffel-Tower/Dimensions-of-the-Eiffel-tower.php ; https://www.wonders-of-the-world.net/Eiffel-Tower/Intermediate-floor.php
- `[GAL]` G. Eiffel, *Travaux scientifiques exécutés à la tour de 300 mètres* (1900), Gallica OCR: https://gallica.bnf.fr/ark:/12148/bpt6k65461081.texteBrut
- `[COS]` https://cosmovisions.com/monuEiffel.htm
- `[CM1889]` *La Construction moderne* 20 Apr 1889 via https://www.worldfairs.info/forum/viewtopic.php?t=608&start=10
- `[SETE]` https://www.toureiffel.paris/fr/actualites/130-ans/les-72-noms-inscrits-sur-la-tour-eiffel-qui-pourquoi ; https://www.toureiffel.paris/en/news/events/eiffel-tower-grows-330-meters-tall ; https://www.toureiffel.paris/fr/actualites/histoire-et-culture/de-300-330-metres-lhistoire-de-la-taille-de-la-tour ; https://sete.toureiffel.paris/fr/presse/communiques/le-phare-de-la-tour-eiffel-recommencera-balayer-le-ciel-de-paris-mardi ; https://www.toureiffel.paris/fr/decouvrir
- `[OFF-PAINT]` https://www.toureiffel.paris/en/the-monument/painting-eiffel-tower ; https://www.toureiffel.paris/fr/le-monument/peinture-tour-eiffel
- `[GAT]` https://www.gatier.fr/projets/tour-eiffel-paris/ ; https://www.academiedesbeauxarts.fr/la-tour-eiffel-une-histoire-de-couleur
- `[BNF]` https://passerelles.essentiels.bnf.fr/fr/article/acb5a625-1b1c-44a0-8f3b-44fae77d57fd-construction-la-tour-eiffel ; https://passerelles.essentiels.bnf.fr/fr/article/d6f9fb2b-66ab-4627-b21d-c458097683aa-peinture-la-tour
- `[TDF]` https://www.tdf.fr/en/la-tour-eiffel-prend-de-la-hauteur-le-groupe-tdf-installe-une-nouvelle-antenne/
- `[WP04]` Weidman & Pinelis, C. R. Mécanique 332 (2004) 571–584, doi:10.1016/j.crme.2004.02.021 (abstract via Semantic Scholar; https://imechanica.org/node/8117 ; https://www.colorado.edu/today/2005/01/04/elegant-shape-eiffel-tower-solved-mathematically-cu-boulder-prof)
- 2014 glass floor: https://www.batirama.com/article/9606-un-plancher-en-dalles-de-verre-sur-la-tour-eiffel.html ; https://www.saint-gobain-glass.fr/fr/projets/premier-etage-de-la-tour-eiffel
- 1937 arcade removal: https://nonsite.org/the-ornamented-eiffel-tower/ ; https://www.wikiwand.com/fr/articles/Tour_Eiffel
- Paint campaign status 2025: https://www.franceinfo.fr/culture/patrimoine/la-vaste-campagne-de-travaux-de-la-tour-eiffel-touche-a-sa-fin_7219974.html
- Frieze letters 60 cm: https://www.pariszigzag.fr/insolite/histoire-insolite-paris/savants-noms-tour-eiffel/

## 12. Open questions / residual uncertainty

1. Weidman–Pinelis Table 1 (29 SNTE panel heights, inclinations, half-widths) could not be downloaded (publisher/ResearchGate 403; mirror unreachable). Rows between anchors are interpolated (±0.5 m below the 2nd floor, ±0.8 m in the pylon).
2. Bearing plane z = 2.5 m rests on Eiffel's "+309.63 = 273.63 above the appuis"; the foundations page implies massif tops between +35.6 and +36.5, so ±1 m.
3. Panel-5 bend direction/size (3°56' steeper) is inferred; it changes xo by ≤ 0.9 m between z 46.5 and 57.63.
4. Height of the 2nd-floor upper level and the top-of-roof of the 2nd-floor block are estimates (≈120.5 / ≈125 m).
5. Intermediate platform: 195.35 (wonders-of-the-world) vs 195.93 (midpoint per Eiffel) vs 196.24 (orchestrator). Use 195.9 ± 0.5.
6. Arch band depth (7.1 m at crown) follows from crown 39.40 + girder underside 46.5; if the girder underside is lower (floor built into the girder), the band is shallower (≈3.5 m) and the girder occupies 50.6–57.63.
7. Campanile start (≈283 m), lantern size, antenna diameters and all colour hex values are estimates; no official RAL/hex exists.
