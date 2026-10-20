# 02 — Eiffel Tower: Interior, Vertical Transport and Level Programmes
Lens: interior-transport. Target: Blender 5.2 procedural model, 1 BU = 1 m, Z up, tower axis at origin, esplanade z = 0.

Every number carries a source tag. `[S##]` refers to the source list at the end. `ESTIMATE` marks a value I derived or guessed; the reasoning follows the tag. Where sources disagree, both values are given and the one to build from is stated.

---

## 0. Coordinate convention used in this document ("TOWER FRAME")

- Origin: tower axis at esplanade level. Z up. z = 0 is the esplanade (parvis).
- **+Y points at the NORTH pier, +X at the EAST pier.** The four piers therefore sit ON the axes (diamond orientation): N = (0,+R), E = (+R,0), S = (0,−R), W = (−R,0).
- The four FACES of the square consequently face the diagonals:
  - NW face (between N and W piers) → Seine / Pont d'Iéna / Trocadéro / Palais de Chaillot.
  - NE face (between N and E piers) → Quai Branly upstream / Paris centre (Invalides side).
  - SE face (between E and S piers) → Champ-de-Mars / École Militaire.
  - SW face (between S and W piers) → Avenue de Suffren / Grenelle.
- Justification: the Champ-de-Mars axis runs SE→NW and "each pillar faces a cardinal point" [S26]; the W and N legs are the ones nearest the Seine (they needed compressed-air caissons) [S30]; the official FAQ says lifts are in the EST/NORD/OUEST piers and stairs in the SUD pier [S24].
- If the structural spec uses a **side-aligned frame** (+Y' toward the Trocadéro = NW, +X' toward NE), convert with  `x' = (x + y)/√2`, `y' = (y − x)/√2`  (inverse: `x = (x' − y')/√2`, `y = (x' + y')/√2`).

Pier-centre radius R (distance from axis to the centre of a pier bundle) — ESTIMATE, cross-check against the structure spec:

| Level | z (m) | Square side (m) | R used here (m) | Basis |
|---|---|---|---|---|
| Ground | 0 | 125 outer / 100 pier-centre | **70.7** | Outer square 124.90 m, inner (between piers) 74.24 m [S26]; pier footprint 25 m × 25 m [S1] → pier-centre square ≈ 100 m → half-diagonal 70.7 m. ESTIMATE |
| 1st floor | 57.63 | 70.69 (outer column axes) [S31] | **~40** (pier bundle), 50.0 (outer corner) | Half-diagonal of 70.69 m = 50.0 m; bundle centre ~10 m inboard. ESTIMATE |
| 2nd floor | 115.73 | 37.80 [S32] | **~21** (lift lobbies), 26.7 (corner) | Half-diagonal 26.7 m; lobbies inboard. ESTIMATE |
| 3rd floor | 276.13 | 16.50 [S33] | 11.7 (corner); core 10 m square | [S33] |

---

## 1. Pier naming, orientation, what is in which pier

| Pier (FR) | Tower-frame centre at z=0 | Faces / nearest | Public function today | Source |
|---|---|---|---|---|
| **Nord** (North) | (0, +70.7) | Corner nearest the Seine & Pont d'Iéna, Trocadéro side | Visitor lift (electric, 1965, renovated 2019–24) ground→2nd. Historic 1921 "Radio Tour Eiffel" studios were in this pier. | [S3][S15][S18][S30] |
| **Est** (East) | (+70.7, 0) | Avenue de la Bourdonnais / Champ-de-Mars corner | Visitor lift (historic Fives-Lille hydraulic, 1899). Original 1899 hydraulic installation classified Monument Historique 1986. | [S3][S5][S59] |
| **Sud** (South) | (0, −70.7) | Champ-de-Mars / Avenue de Suffren corner, Avenue Gustave-Eiffel | **Public staircase** (ticket office for stairs + ascent) ; **Le Jules Verne private lift** (Otis 1983, electric) ; **4-t service/freight lift** (1989, updated 2007) ; 1889 steam engine room in its basement. Jules Verne restaurant entrance at the foot of this pier on Avenue Gustave-Eiffel. | [S3][S7][S8][S24][S28][S40] |
| **Ouest** (West) | (−70.7, 0) | Seine / Avenue de Suffren corner | Visitor lift (historic Fives-Lille hydraulic, 1899; fully rebuilt 2008–2014). 1889 12 m brick chimney of the steam plant stands in the gardens near this pier (SW of it). | [S3][S5][S26] |

Note on the task brief: the brief says "East pier public staircase". The official site (2024–26) sells stair tickets at and climbs from the **SOUTH** pier; in peak periods "another leg may be opened" for stair ascents [S7][S8][S24]. FR-Wikipedia still says stairs are "reached from the east pillar" [S26] — treat that as outdated. **Model the public staircase in the South pier**; all four piers have a staircase ground→1st (visitors may descend by any of the four stairs) [S35]; ground→2nd stairs exist at least in S (public) and E (overflow/descent) — ESTIMATE from [S7][S35].

Original 1889 layout (for the historical variant): Otis inclined lifts in N and S piers (ground→2nd, removed 1910) ; Roux-Combaluzier-Lepape chain lifts in E and W (ground→1st, replaced 1897/1899 by Fives-Lille) ; Edoux vertical lift 2nd→top [S3][S25][S27].

---

## 2. Ground level: inside and under the piers

### 2.1 Pier base geometry (all piers)
- Footprint of one pier at ground: **25 m × 25 m** [S1]; the four piers form a **125 m square** [S1] (124.90 m outer, 74.24 m between inner edges [S26]).
- Foundations **7 m below ground** under each pier; **each edge (arête) of each pier has its own masonry foundation 5 m × 10 m** [S5]. Ground pressure 3–4 kg/cm² [S5].
- Legs incline at **54°35′ from the horizontal at ground** (lower lift run follows the pier) [S25].
- Inside each pier base: a glazed entrance/queuing hall with ticket desks and security turnstiles; ticket counters "remain at the foot of the Tower, inside the protective perimeter" [S21]. Madame Brasserie ticket kiosk sits between the North and East piers; restaurant entrance (Jules Verne / Madame Brasserie reservations) at the foot of the South pier [S29][S22].
- ESTIMATE for modelling: entrance hall ≈ 18 m × 18 m × 4 m clear inside the 25 m footprint, lift lower landing at the pier centre, stair starting on the inboard side.

### 2.2 Perimeter (context only)
- 2018 security perimeter (Dietmar Feichtinger): **3.00 m high × 6.5 cm thick bullet-resistant glass wall**, 450 units of 3 m × 2.20 m, along quai Branly (224.8 m) and avenue Gustave-Eiffel (226.6 m) = the NW and SE faces; **3.24 m high Corten fences** on the other two sides (NE/SW), entrances on the E–W axis; 420 anti-ram bollards [S20][S21].

### 2.3 Machinery rooms under the EAST and WEST piers ("salles des machines", 1899 Fives-Lille)
Official description [S5][S6]: "Under the East and West piers hide the machinery of the historic hydraulic lifts, running from the ground to the 2nd floor. These vast rooms house the equipment allowing the cabins to travel at 2 m/s over the 115 m to the 2nd floor: the counterweights, the chariot and its pulley sets, the pumps, machinery and the control room." Not open to the public (exceptional Heritage Days visits, 15-person groups, "cramped") [S5].

Mechanism (to model as a diorama):
- Passenger cabin carried by a **chariot located underground, pushed by pistons**, themselves driven (since 1986) by **high-pressure oil hydraulic motors**; the cable reeving (mouflage) means the **chariot travels 16 m to move the cabin 128 m** (ratio 8:1) [S3][S61].
- Until 1986 the pistons were fed by **three large accumulators of ~200 tonnes each**, holding water at **40–60 bar** and doubling as counterweights; since 1986 two of the three only act as counterweights [S5]. These are the **3 big red-and-yellow tanks** visible when entering the E or W pier; they rise and fall with the cabin and **protrude ~3 m above ground when the cabin is at the 2nd floor**, sinking into the ground at the bottom station [S34][S5].
- Cabin cables: **6 cables of 28 mm, in 2 rows of 3** [S34]. Installed power ~300–320 kW [S34][S15].
- A small museum showing the original hydraulic mechanism exists at the base of the E and W legs [S27].
- Sizes — ESTIMATE (no published plan): chariot gallery ≈ 30 m long × 8 m wide × 6 m high, floor at z ≈ −7 m, running radially from the pier centre toward the tower axis; accumulator pits: 3 vertical cylinders Ø ≈ 2.5 m × 12 m tall standing in the pier footprint on the outboard side; pump/motor room ≈ 12 m × 8 m; control room ≈ 5 m × 4 m.

### 2.4 South pier basement
- 1889: **steam engine (power for all five lifts) installed in the South pier**; smoke evacuated by a **12 m brick chimney in the gardens near the West pier**, a **tunnel linked the engine to the chimney** for the flue pipes [S5][S6]. Vogel adds: two Girard pumps (Otis/Roux return water) and Worthington tandem compound steam pumps (Edoux) in the engine room at the base of the south leg; four tubular boilers producing 1,500 kg steam/h [S25][S34].
- Today: **machinery of the service lift** is under the South pier [S6]; Jules Verne private-lift lower station and a small reception (a few steps up to the lift) [S47 via S59].
- ESTIMATE: engine room ≈ 20 m × 10 m × 5 m, floor z ≈ −6 m under the pier footprint.

### 2.5 North pier basement
- Electric lift (1965) machine room: location not published. ESTIMATE basement/ground of the N pier, ≈ 10 m × 8 m; counterweight ~50 t runs on the inclined track [S48][S49].

### 2.6 The 1909 "bunker" (underground military radiotelegraph station)
- 1903: Capt. Gustave Ferrié set up in a **wooden hut next to the South pier**; 1904 the army installed a TSF station in wooden huts on the Champ-de-Mars; **1909 a permanent underground station was built under the Champ-de-Mars**; the strategic value saved the tower (concession renewed 1 Jan 1910) [S18][S19].
- Today: a technical space, access strictly reserved; entrance near the South pier; a "technical tunnel" toward the École Militaire is reported but unverified (rumour per [S57]; stated as "old technical tunnel" by [S56]).
- Geometry: not published. ESTIMATE: buried concrete rooms ≈ 30 m × 10 m, floor z ≈ −5 m, roughly 60–100 m from the South pier toward the Champ-de-Mars (tower frame ≈ (+40, −130)); entrance stair/kiosk at ≈ (+15, −95).

---

## 3. Pier lifts ground → 2nd floor

### 3.1 Common track geometry (all four piers; from the 1889 Otis in N/S, same pier curvature)
- Lower straight run at **54°35′ from horizontal** (ground → about the 1st floor); upper run at **78°9′ from horizontal** (1st → 2nd); the two straights are joined by a short curve ("radius 160 ft [48.8 m] for a distance of over 50 ft [15 m]") [S25]. Equivalent: 35.4° and 11.9° from vertical.
- Today's cabin travel **128 m along the track for a 116 m rise** [S3][S34]. Check: 57.6/tan 54.58° = 41.0 m horizontal + 58.1/tan 78.15° = 12.2 m → path ≈ 70.7 + 59.4 = 130 m ✓.
- **Polyline to type in (East pier, tower frame; mirror/rotate for N, W, S)** — ESTIMATE derived from the angles above and the pier-centre radii of §0:
  - lower landing (cabin floor) `(74.0, 0.0, 0.0)`
  - 1st-floor landing `(33.0, 0.0, 57.63)`
  - 2nd-floor landing `(21.0, 0.0, 115.73)`
  - Cabins run on rails inside the pier, between the pier's four box columns, with the stairs zig-zagging around/alongside the shaft [S25][S35]. Cabin leveling: the 1889 Otis used pivoting floor sections to stay level between the two inclinations [S25]; modern cabins are kept level and are level at landings [S60].

### 3.2 East & West piers — Fives-Lille hydraulic (1899)
- Installed **1899** (replacing Roux-Combaluzier chain lifts of 1889, which ran only to the 1st floor); modernised 1986–87 (oil hydraulics + automation), revised 1992/1995/2005; **West pier completely rebuilt Oct 2008 → 2014** keeping the 1899 principle [S3][S4][S27]. (One secondary source splits the installation 1897 West / 1899 East [S60].)
- **Double-deck cabins**: 1900 programme 2 × 50 persons [S51]; current East **2 × 46 persons** (92), load 22 t; **West after 2014: up to 110 passengers**, 300 kW, **2 m/s** [S15][S34]. Round trip 8 min 50 s, stop ≈ 1 min 15 s, ~100 trips/day [S34][S27].
- Cabin yellow [S5]. Dimensions — ESTIMATE from capacity (≈4 persons/m² per deck): each deck ≈ 4.5 m wide × 2.8 m deep × 2.3 m clear; overall cabin ≈ 4.8 × 3.0 × 5.6 m (two decks + floor/roof). Doors on the inboard (tower-axis) side at landings — ESTIMATE.
- Lower station: both decks board at ground; ESTIMATE lower deck at z = 0, upper deck served by a short mezzanine stair at z ≈ +2.8 m (same arrangement as the 1889 Otis, whose operator rode an exterior platform at the upper deck level [S40]).

### 3.3 North pier — electric (1964/65, rebuilt 2019–2024)
- Project early 1960s, in service **1965** (one official page says built 1964); electric traction, **double cabin, counterweight ≈ 50 t**, "variable gradient, neither vertical nor funicular" [S15][S16][S48][S49].
- Renovation 2019–2024 (Eiffage Métal structure, Baudin-Châteauneuf controls); guide rails, counterweight, cabin, drive all replaced; regenerative braking; the technical stop at the 1st floor on the way up was removed [S15][S48].
- Key figures after renovation: **110 m run, 2 m/s, 90 people in the two cabins (45 + 45), 7 min round trip, 110 trips/day, 3.5 M passengers/yr** [S15][S16]. Historic: 130 trips/day, ~12,000 people/day [S15]. Cabins red [S15].

### 3.4 South pier — Le Jules Verne private lift (Otis, 1983, electric)
- Reserved for restaurant guests (also used by maintenance staff) [S3][S58]; designed for the variable slope of the South pier using Alpine cable-car technique: **cab hangs from a bracket with auxiliary guides** suppressing lateral movement; **18 kW motor on the restaurant roof** [S39]. Arrives directly in the restaurant on the 2nd-floor upper level [S9].
- Capacity/size not published — ESTIMATE 10–15 persons, cab ≈ 2.0 × 1.6 × 2.3 m.

### 3.5 South pier — service / freight lift
- **4-tonne goods lift, built 1989, updated 2007**, staff only; its machinery is under the South pier [S3][S6][S40]. ESTIMATE cab 3.0 × 2.2 × 2.5 m.

### 3.6 Historic 1889 systems (for the "1889" variant or museum props)
- **Otis (N & S piers, ground→2nd)**: double-deck cabin 2 × 25 = 40–50 seated, **400 ft/min (2.03 m/s)**; inclined hydraulic ram **38 in (0.965 m) bore × 36 ft / 12.67 m long, stroke 10.83 m**, on ~40 m beams at 61°20′; 12:1 reeving (6 movable + 5/6 fixed sheaves, sheaves 1.52 m Ø); counterweight carriage 55,000 lb pig iron on a second rail set *beneath* the main track, 3:1 rope gear, travelling 125 ft for the cabin's 377 ft; water from an open reservoir on the 2nd platform; pumps at the S pier base [S25][S34][S40]. Removed 1910 (official) — the South one replaced by a **wide staircase to the 1st floor** (1900) [S3][S25][S35].
- **Roux-Combaluzier-Lepape (E & W piers, ground→1st)**: double-deck, ~100 persons, 200 ft/min (1.0 m/s), car pushed by two endless articulated chains in guide trunks, **bottom sprockets 3.9 m Ø**, two horizontal pushing cylinders (plunger travel 5 m, ratio 13:1), travel 218 ft (66.5 m); cabin 6,395 kg [S25][S40]. Replaced 1897–99.

---

## 4. Stairs

### 4.1 Counts (official)
- **1,665 steps** esplanade → summit; public may climb **674 to the 2nd floor = 327 (ground→1st) + 347 (1st→2nd)** [S7][S8]. (Other pages say 328/346; build 327/347.) 2nd→top therefore **991 steps** today (ESTIMATE by subtraction; the 1889 spiral had 1,062 steps [S7]).
- Historic 1889: ground→1st stairs of 360 steps with landings; 1st→2nd very steep spiral stairs of 380 steps; 2nd→top spiral of 1,062 steps with a single guardrail, not open to the public [S7]. Eiffel's 1900 book: ground→1st 14 revolutions of 24 steps (3.666 m per revolution) + 21 + 7 steps; 1st→2nd 15 × 24 + 14 + 7 = 381; **riser 152.7 mm, width 1.50 m**; straight flights of ~10 steps joined by landings that reverse direction; landings get shorter higher up [S35].

### 4.2 Geometry to model (South pier public stair; copy to other piers)
- Ground→1st: 327 steps over 57.63 m → **riser 0.176 m** (ESTIMATE by division); tread **0.28 m**, width **1.50 m** (ESTIMATE from 1900 width); flights of 10–12 steps zig-zagging in rectangular switchbacks around the lift shaft inside the pier's lattice, landings ≈ 1.5 × 1.5 m [S35].
- 1st→2nd: 347 steps over 58.10 m → **riser 0.167 m**; same width; because the pier narrows (~10 m at the top), switchbacks tighten — ESTIMATE.
- Where the E and W ground→1st stairs met the 1899 accumulators they were rerouted around them for ~6 m [S35].
- Enclosure: stair flights are enclosed in wire mesh on the open side (anti-fall) — ESTIMATE 2.0 m high mesh on 1.0 m handrails; handrail steel tube Ø 40–50 mm (ESTIMATE).
- 2nd→top: the 1889 helicoidal stair was **dismantled in 1983, cut into 24 sections of 2–9 m** (piece no.13: 2.60 m high, 14 steps) and replaced by **two emergency/service staircases** of conventional type inside the pylon [S7][S26][S27]. A **4.30 m piece is displayed on the 1st floor** [S7]. ESTIMATE for the service stair: two straight-flight switchback stairs, 0.9 m wide, riser 0.185 m, in the pylon corners beside the Duolift shafts.

---

## 5. 2nd floor → top: the central shaft

### 5.1 Duolift (Otis, 1982/83)
- **Two independent lifts DUO 1 and DUO 2, each made of two cabins that counterbalance each other** (one rises while the other descends) — 4 cabins total, **2 yellow + 2 red**, designed with Emilio Duhart; galvanised cables + anti-icing devices; **160 m run, "the longest open-air run ever covered by a lift"**; cars replaced 1993/1994–95, modernised 2001 and 2007, full renovation Jan 2022–Feb 2024 (summit closed each January for maintenance) [S3][S17][S39][S40].
- Capacity **~20 passengers per cabin, max 80 people moving simultaneously** [S17]; an ergonomics study gives cabin floor **≈ 3.2 m², up to 16 people** with a lift operator (liftier) [S54]. Build: cabin ≈ **2.2 × 1.6 m floor × 2.4 m high** (ESTIMATE between the two sources).
- Speed not published. ESTIMATE **≈ 1.5 m/s** (ride "under two minutes" [S27]; Otis says ≈ 3 min with stops [S39]).
- Layout: the four cabins run on the tower centreline inside the pylon in a 2 × 2 cluster; the 1889 Edoux already used "a central guide on the Tower's centre-line" [S25]. Build the shaft cluster as a **6.5 m × 6.5 m** square centred on the axis (ESTIMATE; fits inside the 10 m core of the 3rd floor [S33]); each cabin footprint 2.2 × 1.6 m, lobbies ("mesh cubes") on the 2nd-floor upper level [S32].

### 5.2 Intermediate platform (~196 m)
- The 1889 **Edoux** lift: total travel **160.40 m**, **an intermediate floor at 80.20 m above the 2nd floor** where passengers changed cabins (each cabin had an entry door and an exit door), speed **0.90 m/s**, 4 min up / 5 min round trip; two rams of **80–81 m** anchored at the 2nd platform under the upper car; the lower car acted as counterweight; the water tank sat at 896 ft (273 m) and suction at the cylinder tops at **643 ft (196 m)** [S25][S50][S3]. Cars 10 t / 65 persons [S27] (60–63 in design calcs [S25][S34]). Dismantled 1983 (frost stopped it every winter); its hydraulic pump is displayed on the 1st floor [S40].
- Height: 115.73 + 80.20 = **195.93 m** (build at **z = 195.9**); Eiffel's structural table gives 195.35 m for the platform steel [S37].
- Today: **a "ghost" technical platform, closed to the public, never a normal stop; the Duolifts can stop there if needed** (their two cabins pass each other at this mid-height) [S36]. ESTIMATE size: open grating platform ≈ 9 m × 9 m around the shafts (pylon width there ≈ 11 m), railing 1.1 m.

---

## 6. 1st floor (z = 57.63 m)

- Height **57.63 m** [S26] ("57 m" official); platform **70.69 m square on the outer column axes, 71.69 m outside the gutter; total 5,140 m², central void 724 m², net 4,416 m²** [S31]; official usable area **4,415 m²** [S1]; renovation worked on 4,586 of 5,420 m² [S45]. Holds ~2,500 people [S26].
- **Central void: 29.00 m square with cut (sloped) corners, 724 m²** [S31].
- **Outer gallery 2.60 m wide, its floor 1.20 m below the platform** (z = 56.43) [S31]; historic arcades: 9 per side, openings 7.76 m (7.96 m at corners), **6.95 m high** to the keystone [S31]; flag poles 8.00 m on the arcade bases [S31].
- 2014 Moatti-Rivière programme (delivered Aug 2014, 4,260 m², €25 M) [S42]: two new pavilions **facing each other across the void, slanted to mirror the pier angle, each on two staggered levels fitted under the stairs to the 2nd floor**, façade area 860 m² [S41]; third building (restaurant) re-clad; waiting areas for the lifts; open-air museum trail on the peripheral gallery [S42].
  - **Pavillon Ferrié — SW face (officially "between the South and West pillars")** [S14]: large shop, buffet (ground level), toilets, immersive 7-projector room (successor of the old **Cinéiffel**, the pre-2014 screening room "covered with screens" inside the former Ferrié pavilion), rest/contemplation spaces upstairs, 200-seat/300-standing conference space [S11][S14][S46]. Room with "a pleasant view côté sud" [S11].
  - **Pavillon Eiffel / Salle (Salon) Gustave Eiffel — NE face** (rebuilt "côté Nord/Est", facing the Ferrié) [S45][S46]: event room **200 m², ceiling height 6.20 m**, glazed black-out façades, 100 seated / 190 conference / 180–220 cocktail [S13].
  - **Madame Brasserie (ex "58 Tour Eiffel", renamed 2022; chef Thierry Marx) — NW face**, view "sur la Seine et le Trocadéro / Palais de Chaillot", **two levels** [S22][S26][S29]; ESTIMATE footprint 25 × 12 m, 2 × 3.2 m storeys. (In 1889 the "Flemish" bar also stood on the Trocadéro side [S29].)
  - **SE face (Champ-de-Mars / École Militaire)**: open terrace with bar/snack ("rooftop" terrace) [S11][S46]; the 4.30 m spiral-stair relic and the Edoux pump are museum props on this floor (ESTIMATE on this face).
  - Pavilion envelope size: ≈ 20–25 m long × 10 m wide × ~10 m high, dark red metal, fully glazed long façades [S31].
- **Glass floor (2014)**: **128 m²** skid-resistant triple-laminated low-iron glass, 64 tiles, path **1.85 m wide**, typical panel 1.85 × 0.70 m, along the edge of the void; total glass works (floor + balustrades) 920 m² [S43][S44]. **Glass balustrade around the void ≈ 2.50 m high, inclined outward**, two-ply heat-strengthened laminated glass [S31][S43]. Build: an annular walk 1.85 m wide hugging the void on all four sides (ESTIMATE: not continuous — 8 panels: 4 at the void corners, 4 at mid-sides [S31]).
- Historic (1889–1900) for the period variant: four restaurants (Flemish NW, Russian NE, French SE, Anglo-American bar SW), each **23.295 m × 15.00 m incl. a 3.35 m annex, basements 11.03 × 3.80 × 3.66 m**; Flemish later a 280-seat theatre with a 7.705 × 4.40 m stage raised 0.83 m [S31].
- Floor-to-ceiling: pavilion lower level ≈ 3.2 m, Salon 6.20 m [S13]; outer gallery open to sky under the 1st-floor truss (truss depth → structure spec).
- Pier lifts arrive at the four corners (landing R ≈ 33 m); stairs land beside them [§3.1].

---

## 7. 2nd floor (z = 115.73 m lower level)

- Height **115.73 m** [S26] ("115 m"/"116 m" official); **37.80 m square, 1,430 m²** [S1][S32] (1900: 1,433 m² = 326 m² gallery + 722 m² platform + 385 m² shelters/bars/gutter) [S32]; holds ~1,600 people [S26]. **Two levels** [S1][S9].
- **Lower level (z = 115.73)**: fully accessible ring: interior enclosed part with shops, take-away point, **Comptoir Gustave buffet (renovated 2024)**, **Pierre Hermé macaron bar (≈10 m², almost fully glazed) next to the buffet**, champagne/drinks kiosk, souvenir machines, **free toilets at the centre of the platform**, immersive "Gustave" animation on the **Champ-de-Mars (SE) side**; **outer walkway 4 m wide** with railings/mesh [S9][S14][S22][S32]. Pier-lift arrival lobbies at the four corners. Centre also houses the lower boarding of the Duolift shafts? — No: Duolift boarding is on the upper level (see below); the lower-level centre carries the shaft enclosure + toilets [S9][S14].
- **Upper level ("2e étage supérieur")**: smaller platform, **reached only by stairs**, mainly the **access to the lifts to the summit** (4 Duolift lobbies as mesh cages in the centre), the **"La Verrière" shop** (meeting point of visitors arriving from the ground and those coming down from the top), and **Le Jules Verne** [S9][S14][S32]. Height not published — **build at z = 120.7 (ESTIMATE +5.0 m; plausible range +3 to +7.3 m, the latter from an old FR-Wikipedia text placing the Jules Verne platform "at exactly 123 m" [S58])**. Note the Duolift's "160 m run" [S39] equals the 1889 Edoux run from the lower level; it is nominal.
- **Le Jules Verne** (opened 1983; Slavik → Patrick Jouin 2007 → Aline Asmar d'Amman 2019; chef Frédéric Anton, 2 Michelin stars 2024): **≈ 500 m², 95 covers**, "perché à 125 m", **three dining rooms facing the Champ-de-Mars, the Quai Branly and the Trocadéro + "L'Alcôve" (2 tables of 4) looking into the ironwork** [S9][S26][S47]; private lift from the South pier [S3]. Placement — ESTIMATE/open question: an annular suite on the upper level about 8 m deep wrapping the SE, NE and NW faces (rooms centred on those faces), kitchens/back-of-house on the SW face next to the private-lift arrival at the S corner; glazed façades floor-to-ceiling, ceiling ≈ 3.0 m.
- Historic 1889 layout for the period variant: Otis lift arrival structures and queues, large cylindrical water tanks (feed for the Otis cylinders), the Edoux lift in the centre, four spiral stairs, a wooden *Le Figaro* print-shop pavilion, a Viennese bakery bar, a ticket/WC building; water tanks 9 m above the 2nd-floor level: 2 m³ at E and W piers, 1 m³ at N and S [S31][S32].

---

## 8. 3rd floor / summit (z = 276.13 m enclosed, 279.11 m open deck)

- **Enclosed level at 276.13 m, open upper deck at 279.11 m** [S26]; official "276 m, 250 m²" [S1] (FR-Wiki 350 m² for both levels [S26]); holds ~400 people [S26]; lift-only access [S10].
- **Enclosed level**: square **16.50 m per side with slightly truncated corners, 251 m²**; **central core ≈ 10 m square (≈100 m²) holding the four pylon columns and the lift arrivals**; **perimeter walkway ≈ 3.25 m wide**; **perimeter railing 1.20 m with movable windows (1900) → fully glazed today, heated**; **ceiling height 2.50 m**; panoramic tables/indicators, photo panels and a geographic frieze above the windows, 1:50 model of the 1889 summit (≈0.8 m tall) behind a stair; in 1900 six small shops sat between the columns and the lift shaft [S33]. 8 small lightning rods around the 3rd floor [S33].
- **Two glass-protected staircases** link the enclosed level to the upper deck [S33]. ESTIMATE: 1.0 m wide, 16 risers of 0.186 m, in two diagonally opposite corners.
- **Upper open deck (279.11 m)**: gallery **≈ 1.5 m wide today (2.77 m in 1900)** around a central block; **normal railing topped by a wide-mesh wire screen anchored to the tower walls** (build total 2.5 m, ESTIMATE); telescopes, 1889 summit model, air-pressure-gauge display, Liberation plaque, radio-history panel, **the champagne bar (a counter "nestled in the structure", white/rosé, no tables) — on the UPPER level** [S10][S33].
- **Gustave Eiffel's office — UPPER level**: reconstruction seen **through windows (3 small windows)** with Musée Grévin wax figures of **Gustave Eiffel, his daughter Claire and Thomas Edison** (visit of Sept 1889) and the Class M phonograph Edison gave him; floral wallpaper, upholstered seats, wooden furniture [S10][S12][S33][S55]. Historic: Eiffel kept the upper platform "just below the campanile"; the **apartment with open balcony occupied ≈ 100 m²** but a large part was taken by the lift cab, the stair arrival and technical rooms; it has since been reduced for technical rooms; the 1900 **wooden pavilion was 10.50 m square × 2.27 m high with a lead roof** and held a reception room, bathroom, kitchen, WC and four small laboratories (electricity, meteorology, physics, physiology) [S12][S33]. The 1903–1908 Ferrié wireless experiments used this level [S26]. A restaurant operated on the 3rd floor 1937–1981 (removed for structural reasons) [S27].
- Build the central block of the upper deck as **≈ 13 m square** (16.5 − 2 × 1.5 − walls; ESTIMATE) containing: office reconstruction ≈ 5 × 4 m on the NW side (ESTIMATE), champagne-bar counter 3 m long let into the SE side (ESTIMATE), technical/antenna rooms, the two stair heads, lift overrun.
- **Campanile / lantern above**: inaccessible room above the top gallery houses antenna equipment; **4 main lightning rods at the top**; tower height 300 m architectural (1889 top of lantern ≈ 300.65 m; "301 m without flag" [S37]), **312.27 m with the 1889 flagpole, 324 m 2000–2022, 330 m since 15 March 2022** [S27][S1]; ~120 antennas on the tower [S33]; the 1889 lighthouse (Mangin projectors moved on a Decauville track on the gallery) and gas lamps in frosted globes [S33]; today's beacon = two rotating xenon beams at the top (post-2000, [S33] mentions modern lighthouses as tribute). Geometry — ESTIMATE: campanile base ≈ 8 m square at z = 282, tapering to ≈ 4 m at z = 296, lantern/beacon housing z = 296–300.6, then a lattice/tubular antenna mast Ø ≈ 1.5 m from 300.6 to 330 m.

---

## 9. Historical interior features worth modelling (props)

| Item | Where | Numbers | Source |
|---|---|---|---|
| Edoux 1889 ram pair | On the tower centreline from the 2nd platform up to ~196 m; upper car on top of the rams, lower car hung from cables over sheaves at the 3rd floor; cars counterbalance each other | rams 80–81 m, plunger area 124 in² at 227.5 psi, 4 cables 15.5 in² total; cars 10 t / 65 pax; 0.90 m/s | [S25][S27][S50] |
| Edoux hydraulic pump (relic) | Displayed on the 1st floor | — | [S40] |
| Otis 1889 inclined cylinder | Lower part of the N and S piers, inclined ~54–61°, on 40 m beams | Ø 0.965 m × 12.67 m, stroke 10.83 m | [S25][S34] |
| Otis 1889 counterweight carriage | Rails *under* the main track, lower third of the pier | 55,000 lb pig iron, 38 m travel | [S25] |
| Otis water reservoir | Open tank on the 2nd platform (1889) | — | [S25] |
| 1889 engine room | Basement of the South pier | steam plant, 4 tubular boilers 1,500 kg/h, Girard + Worthington pumps; 12 m brick chimney near W pier + flue tunnel | [S5][S25][S34] |
| Fives-Lille accumulators | Pier base E & W, visible as 3 red/yellow tanks | ~200 t each, 40–60 bar; protrude 3 m when cabin at 2nd floor | [S5][S34] |
| 1899 chariot & sheave sets | Underground gallery under E & W piers | chariot stroke 16 m for 128 m cabin travel | [S3][S5] |
| Spiral stair relic | 1st floor | 4.30 m piece; sections of 2–9 m sold 1983 | [S7][S26] |
| Meteorological / radio rooms | 3rd floor upper pavilion (1889–1900 labs), later Ferrié TSF (1903) | pavilion 10.50 m sq × 2.27 m | [S33][S26] |
| Eiffel's apartment | 3rd floor upper level under the campanile | ≈ 100 m² (1889) → small office today | [S12][S33] |
| Radio Tour Eiffel studios (1921) | North pier | — | [S18] |
| 1889 restaurants ×4 | 1st floor, one per face | 23.295 × 15.00 m each | [S31] |

---

## 10. Railings, balustrades, mesh (heights to build)

| Location | Historic / documented | Build height | Source |
|---|---|---|---|
| 1st-floor outer gallery edge | Wrought-iron balustrade; salvaged original section **1.143 m high × 2.21 m wide** (secondary) ; 560 varnished stoneware balusters on a rail with wooden handrail (1900 inner balconies) | railing **1.15 m**, surmounted by wire mesh to **2.5–3.0 m** total (ESTIMATE; the 1960s anti-suicide fence was 5½ ft then raised to 10 ft = 3.0 m [S52]) | [S53][S31][S52] |
| 1st-floor void edge (2014) | **Glass balustrade ≈ 2.50 m, inclined outward**, 2-ply heat-strengthened laminated | 2.50 m, lean 10° outward (ESTIMATE lean) | [S31][S43] |
| 2nd-floor lower outer walkway (4 m wide) | Railing + mesh | railing 1.1 m + mesh to 2.5–3.0 m (ESTIMATE as above) | [S32][S52] |
| 2nd-floor upper level | Open platform with railings; Duolift lobbies as "mesh cubes" | 1.1 m railing + 2.5 m mesh cages (ESTIMATE) | [S32] |
| 3rd floor enclosed | **1.20 m railing with movable windows (1900)** → glazed to ceiling (2.50 m) today | glazing 1.0–2.5 m band in steel frames | [S33] |
| 3rd floor upper deck | Railing topped by **wide-mesh wire screen anchored to the tower walls** | 1.1 m railing + mesh to 2.5 m (ESTIMATE), mesh opening ≈ 80 mm | [S33] |
| Stairs | 1889 spiral had "a thin, relatively low railing"; modern stairs 1.50 m wide | handrail 1.0 m, outer mesh 2.0 m (ESTIMATE) | [S35] |
| Intermediate 196 m platform | — | 1.1 m railing (ESTIMATE) | — |

Mesh type: welded/woven steel wire, dark bronze-painted like the ironwork (ESTIMATE; the 2018 ground fence has "dense metal mesh" in its lower part [S52-adjacent, sbp]).

---

## 11. ROOM TABLE (tower frame: +Y = North pier, +X = East pier; centre (x, y, z) in m; size L × W × H in m)

Legend: `z` is the finished floor of the item. Sizes/positions tagged E are ESTIMATE; others follow the cited dimensions. Rotations: items "on a face" are oriented along that face (NW face direction vector = (−1,+1)/√2, NE = (+1,+1)/√2, SE = (+1,−1)/√2, SW = (−1,−1)/√2).

| # | Level | Item | Centre (x, y, z) | Size L×W×H | Notes / source |
|---|---|---|---|---|---|
| G1 | Ground | North pier entrance hall (lift N) | (0, 70.7, 0) | 18×18×4 E | inside 25×25 pier footprint [S1]; lift lower landing at pier centre |
| G2 | Ground | East pier entrance hall (lift E, historic) | (70.7, 0, 0) | 18×18×4 E | 3 accumulator tanks visible here [S5] |
| G3 | Ground | West pier entrance hall (lift W, historic) | (−70.7, 0, 0) | 18×18×4 E | idem |
| G4 | Ground | South pier hall: stair ticket office + stair start + Jules Verne reception + freight lift | (0, −70.7, 0) | 18×18×4 E | stairs public [S7][S24]; JV entrance Av. Gustave-Eiffel [S28] |
| G5 | Ground | Madame Brasserie ticket kiosk | (35, 35, 0) E | 4×3×3 E | "between N and E pillars" [S29] |
| G6 | Ground | Fives-Lille accumulators ×3 (E pier) | (76, 0, −9) E, pitch 3.5 m along +X | each Ø2.5×12 E | tops at z = −1…+3 depending on cabin [S34] |
| G7 | Ground | Fives-Lille accumulators ×3 (W pier) | (−76, 0, −9) E | idem | |
| G8 | Underground | E machinery gallery (chariot 16 m stroke, sheaves, pumps, control room) | (58, 0, −7) E, long axis radial | 30×8×6 E | [S3][S5] |
| G9 | Underground | W machinery gallery | (−58, 0, −7) E | 30×8×6 E | [S5] |
| G10 | Underground | S pier 1889 engine room / today service-lift machinery | (0, −70, −6) E | 20×10×5 E | [S5][S6][S25] |
| G11 | Underground | Flue tunnel S pier → chimney near W pier | from (−8,−64,−3) to (−68,−12,−3) E | Ø1.5 E | [S5] |
| G12 | Ground | 1889 brick chimney (gardens, SW of W pier) | (−80, −14, 0) E | Ø2.5×12 | 12 m [S5] |
| G13 | Underground | 1909 TSF "bunker" | (40, −130, −5) E | 30×10×3.5 E | under Champ-de-Mars, entrance near S pier [S18][S56] |
| G14 | Ground | Bunker entrance kiosk | (15, −95, 0) E | 3×3×2.5 E | |
| G15 | Ground | Foundations (each pier edge) | pier corners ±12.5 m from pier centre, z = −7 | 10×5×(masonry) | [S5] |
| L1 | Lift | E pier lift track polyline (cabin floor) | (74,0,0)→(33,0,57.63)→(21,0,115.73) E | cabin 4.8×3.0×5.6 E | 54°35′ then 78°9′ [S25]; 128 m path [S3] |
| L2 | Lift | W pier lift track | mirror of L1 in −X | idem | 110 pax [S15] |
| L3 | Lift | N pier lift track | (0,74,0)→(0,33,57.63)→(0,21,115.73) E | 2 cabins 45 pax | 110 m run [S15] |
| L4 | Lift | S pier Jules Verne lift track | (0,−74,0)→(0,−33,57.63)→(0,−21,120.7) E | cab 2.0×1.6×2.3 E | arrives in restaurant (upper level) [S9][S39] |
| L5 | Lift | S pier freight lift (parallel, outboard of L4) | offset +3 m in X from L4, to 115.73 | cab 3.0×2.2×2.5 E | 4 t [S3] |
| L6 | Lift | Duolift shaft cluster (4 cabins, 2×2) | (0, 0, 120.7 → 276.13) | 6.5×6.5 footprint E; cabin 2.2×1.6×2.4 E | 160 m nominal [S39]; ~20 pax [S17] |
| L7 | Platform | Intermediate (ghost) platform | (0, 0, 195.9) | 9×9×0.3 grating E | 80.20 m above 2nd floor [S50]; unused [S36] |
| S1 | Stairs | S pier public stair ground→1st | zig-zag around L4 from (0,−68,0) to (0,−36,57.63) E | width 1.5, 327 risers 0.176, tread 0.28 | [S7][S35] |
| S2 | Stairs | S pier stair 1st→2nd | (0,−36,57.63)→(0,−22,115.73) E | width 1.5, 347 risers 0.167 | [S7] |
| S3 | Stairs | Ground→1st stairs in N, E, W piers (descent) | rotate S1 | same | [S35] |
| S4 | Stairs | Service stairs 2nd→top ×2 | pylon corners at (±3.8, ∓3.8) E, 120.7→276.13 | width 0.9, 991 risers 0.157 E | replaced 1983 spiral [S27] |
| S5 | Stairs | 2nd lower→upper level stairs ×2 | (±14, ±14, 115.73→120.7) E | width 2.0, 27 risers 0.185 E | upper level stairs-only [S14] |
| S6 | Stairs | 3rd enclosed→upper deck ×2 (glass-protected) | (±6.5, ∓6.5, 276.13→279.11) E | width 1.0, 16 risers | [S33] |
| F1 | 1st | Platform slab | (0,0,57.63) | 70.69×70.69, void 29×29 (cut corners) | [S31] |
| F2 | 1st | Outer gallery (1.20 m lower) | ring r = 35.3…37.9 (side-aligned), z = 56.43 | width 2.60 | [S31] |
| F3 | 1st | Glass floor walk (8 panels at void edge) | void edge, inner 14.5–16.35 m from axis (side-aligned) | path 1.85 wide, 128 m² total | [S43][S44] |
| F4 | 1st | Glass balustrade at void | void edge | h 2.50, leans out | [S31][S43] |
| F5 | 1st | Pavillon Ferrié (shop/buffet/immersive/toilets) | SW face: (−16.3, −16.3, 57.63) E | 24×10×10, 2 staggered levels | between S and W pillars [S14] |
| F6 | 1st | Pavillon Eiffel / Salon Gustave Eiffel | NE face: (16.3, 16.3, 57.63) E | 24×10×10; room 200 m², ceiling 6.20 | côté N/E [S46]; [S13] |
| F7 | 1st | Madame Brasserie (2 levels) | NW face: (−16.3, 16.3, 57.63) E | 25×12×9 E | view Seine/Trocadéro [S22][S29] |
| F8 | 1st | SE terrace + bar kiosk | SE face: (16.3, −16.3, 57.63) E | 25×8 open; kiosk 6×3×3 E | [S11][S46] |
| F9 | 1st | Spiral-stair relic (4.30 m) | (20, −10, 57.63) E | Ø2.2×4.30 | [S7] |
| F10 | 1st | Edoux pump relic | (10, −20, 57.63) E | 3×1.5×2 E | [S40] |
| F11 | 1st | Pier-lift landings ×4 | (±33, 0) and (0, ±33), z 57.63 | lobby 8×6 E | §3.1 |
| F12 | 1st | 1889 restaurants ×4 (period variant) | face centres at r ≈ 22 m (side-aligned) | 23.295×15.00×~6 | [S31] |
| T1 | 2nd | Lower platform slab | (0,0,115.73) | 37.80×37.80 | [S32] |
| T2 | 2nd | Outer walkway | ring 14.9…18.9 m (side-aligned) | width 4.0 | [S32] |
| T3 | 2nd | Enclosed shop/buffet ring (Comptoir Gustave, shops, take-away) | ring 7…14.9 m, z 115.73 | h 3.0 E | [S9] |
| T4 | 2nd | Pierre Hermé macaron bar | (−10, 10, 115.73) E next to buffet | ≈3.3×3×2.6 (≈10 m²) | [S9][S32] |
| T5 | 2nd | Toilets (centre) | (4, −4, 115.73) E | 6×4×2.6 E | "au centre" [S14] |
| T6 | 2nd | Immersive "Gustave" corner | SE face (10,−10,115.73) E | 4×3 | côté Champ-de-Mars [S9] |
| T7 | 2nd | Pier-lift arrival lobbies ×4 | (±21,0),(0,±21), z 115.73 | 6×5 E | §3.1 |
| T8 | 2nd upper | Upper platform slab | (0,0,120.7) E | ≈30×30 E with central 6.5 m shaft opening | height ESTIMATE, see §7 |
| T9 | 2nd upper | Duolift lobbies ("mesh cubes") ×4 | (±2.5, ±2.5, 120.7) around shaft | 3×3×3 E | [S32] |
| T10 | 2nd upper | La Verrière shop | (8, 8, 120.7) E | 8×5×3 E | [S9] |
| T11 | 2nd upper | Le Jules Verne (3 rooms + Alcôve + kitchens) | annulus r 5…14 m over SE, NE, NW faces; kitchens on SW; z 120.7 E | ≈500 m², h 3.0 E | rooms face Champ-de-Mars / Quai Branly / Trocadéro [S9][S47]; 95 covers [S26] |
| T12 | 2nd upper | Jules Verne lift arrival + motor room on roof | (0,−12,120.7); motor (0,−12,124) E | 3×3; motor 2×1.5×1.5 | 18 kW motor on restaurant roof [S39] |
| U1 | 3rd | Enclosed room | (0,0,276.13) | 16.50×16.50 (cut corners) ×2.50 | [S33] |
| U2 | 3rd | Central core (4 columns + 4 lift arrivals) | (0,0,276.13) | 10×10 | [S33] |
| U3 | 3rd | Perimeter walkway + panoramic tables | ring 5…8.25 m | width 3.25 | [S33] |
| U4 | 3rd | 1:50 summit model | (6.5, 6.5, 276.13) E | 0.8 tall | [S33] |
| U5 | Top | Open deck slab | (0,0,279.11) | 16.5×16.5 outer; gallery 1.5 wide | [S26][S33] |
| U6 | Top | Central block (office, tech rooms, stair heads) | (0,0,279.11) | 13×13×3 E | |
| U7 | Top | Gustave Eiffel office reconstruction (3 windows) | (−3.5, 3.5, 279.11) E (NW side of block) | 5×4×2.6 E | wax figures Eiffel, Claire, Edison [S10][S12] |
| U8 | Top | Champagne bar counter | (3.5, −3.5, 279.11) E (SE side of block) | 3×0.8×1.1 | upper level [S10] |
| U9 | Top | Deck railing + mesh | ring r = 8.25 | 1.1 + mesh to 2.5 E | [S33] |
| U10 | Top | 8 small lightning rods | deck corners/mid-sides | h 2 E | [S33] |
| U11 | Campanile | Antenna room / lantern | (0,0,282 → 300.6) E | 8→4 m square | [S33][S37] |
| U12 | Campanile | Beacon housing + 4 main lightning rods | (0,0,298–300.6) E | Ø3 | [S33] |
| U13 | Mast | Antenna mast | (0,0,300.6 → 330) | Ø1.5 E | 330 m since 2022 [S1][S27] |

Python-ready excerpt (tower frame):
```python
PIER_R_GROUND = 70.7          # ESTIMATE from 124.90/74.24 m, pier 25 m
PIERS = {"N": (0, 1), "E": (1, 0), "S": (0, -1), "W": (-1, 0)}   # unit dirs
LEVELS = {"L1": 57.63, "L2": 115.73, "L2_UP": 120.7, "MID": 195.9,
          "L3": 276.13, "L3_UP": 279.11, "CAMPANILE_TOP": 300.6, "MAST_TOP": 330.0}
LIFT_TRACK_R = [(74.0, 0.0), (33.0, 57.63), (21.0, 115.73)]      # (radius, z) ESTIMATE
LIFT_ANGLES_DEG_FROM_HORIZ = (54 + 35/60, 78 + 9/60)             # Vogel 1961
STAIRS = {"g_to_1": (327, 0.176, 0.28, 1.50), "1_to_2": (347, 0.167, 0.28, 1.50)}  # steps, riser, tread, width
PLATFORM_SIDE = {"L1": 70.69, "L2": 37.80, "L3": 16.50}
VOID_L1 = 29.00
GALLERY_L1 = (2.60, -1.20)    # width, drop
DUOLIFT = {"cabins": 4, "footprint": (2.2, 1.6), "height": 2.4, "shaft_cluster": 6.5, "pax": 20}
```

---

## 12. Open questions / lowest-confidence items
1. Height of the 2nd-floor upper level (built at +5.0 m; could be +3 to +7.3 m).
2. Exact footprint/side of Le Jules Verne on the upper level (three-room orientation suggests it wraps SE–NE–NW; lift is in the S pier).
3. Fives-Lille cabin dimensions and lower-station boarding arrangement (double deck): all ESTIMATE.
4. Duolift rated speed (≈1.5 m/s estimate) and exact cabin size (3.2 m² vs ~20 pax).
5. Sizes/positions of the underground machinery rooms and the 1909 bunker (official texts describe contents, not plans).
6. Mesh heights on the 1st/2nd floor walkways (1960s 3.0 m figure is the only documented one).
7. Campanile dimensions (only the top heights 300.6/312.27/324/330 m are documented).
8. Whether the East pier still has a complete ground→2nd public stair (official: South is the stair pier; "another leg may be opened").

---

## Sources
- [S1] toureiffel.paris — La Tour en chiffres (FR): https://www.toureiffel.paris/fr/le-monument/chiffres-cle  (1er 57 m / 4,415 m²; 2e 115 m / 1,430 m²; 3e 276 m / 250 m²; pier 25 m; 125 m square; 5 lifts + 2×2 duolifts)
- [S2] toureiffel.paris — Key figures (EN): https://www.toureiffel.paris/en/the-monument/key-figures
- [S3] toureiffel.paris — Les ascenseurs (FR): https://www.toureiffel.paris/fr/le-monument/ascenceurs
- [S4] toureiffel.paris — Lifts (EN): https://www.toureiffel.paris/en/the-monument/lifts
- [S5] toureiffel.paris — Les sous-sols et fondations: https://www.toureiffel.paris/fr/actualites/histoire-et-culture/les-sous-sols-et-fondations-de-la-tour-eiffel
- [S6] toureiffel.paris — Foundations and basements (EN): https://www.toureiffel.paris/en/news/history-and-culture/foundations-and-basements-eiffel-tower
- [S7] toureiffel.paris — Les escaliers: https://www.toureiffel.paris/fr/actualites/visite/les-escaliers-decouvrez-la-tour-eiffel-autrement
- [S8] toureiffel.paris — FAQ monter à pied: https://www.toureiffel.paris/fr/faq/sur-place/comment-monter-pied-la-tour-eiffel
- [S9] toureiffel.paris — Découvrir le 2e étage: https://www.toureiffel.paris/fr/decouvrir/2-eme-etage
- [S10] toureiffel.paris — Découvrir le sommet: https://www.toureiffel.paris/fr/decouvrir/sommet
- [S11] toureiffel.paris — Découvrir le 1er étage: https://www.toureiffel.paris/fr/decouvrir/1-er-etage
- [S12] toureiffel.paris — Gustave Eiffel a-t-il habité la Tour: https://www.toureiffel.paris/fr/actualites/130-ans/gustave-eiffel-t-il-habite-la-tour
- [S13] toureiffel.paris — Salon Gustave Eiffel (200 m², 6.20 m): https://www.toureiffel.paris/fr/entreprise/salon-gustave-eiffel
- [S14] toureiffel.paris — Registre d'accessibilité (mars 2026 PDF): https://www.toureiffel.paris/sites/default/files/2026-03/registre_accessibilite_mars2026.pdf
- [S15] toureiffel.paris — L'ascenseur du pilier Nord est de retour: https://www.toureiffel.paris/fr/actualites/chantiers/lascenseur-du-pilier-nord-de-la-tour-eiffel-est-de-retour
- [S16] SETE press — Ascenseur Nord renaissance: https://sete.toureiffel.paris/fr/presse/communiques/ascenseur-nord-de-la-tour-eiffel-une-renaissance-technologique-et
- [S17] toureiffel.paris — De grands chantiers (Duolift 1982, ~20 pax/cabin, 80 simultaneous, 160 m): https://www.toureiffel.paris/fr/actualites/chantiers/de-grands-chantiers-pour-entretenir-et-perenniser-la-tour
- [S18] toureiffel.paris — Comment la radio sauve la tour: https://www.toureiffel.paris/fr/actualites/130-ans/comment-la-radio-sauve-la-tour-eiffel
- [S19] toureiffel.paris — Gustave Ferrié: https://www.toureiffel.paris/fr/actualites/histoire-et-culture/gustave-ferrie-general-au-service-de-la-science
- [S20] toureiffel.paris — Enceinte protectrice: https://www.toureiffel.paris/fr/actualites/chantiers/une-enceinte-protectrice-integree-au-site-historique
- [S21] SETE press — New-look Eiffel Tower (glass wall stats): https://sete.toureiffel.paris/en/press/press-releases/new-look-eiffel-tower
- [S22] toureiffel.paris — Restaurants, bars et boutiques: https://www.toureiffel.paris/fr/restaurants-boutiques
- [S23] toureiffel.paris — Que trouve-t-on à chaque niveau: https://www.toureiffel.paris/fr/actualites/visite/que-trouve-t-chaque-niveau-de-la-tour-eiffel
- [S24] toureiffel.paris — FAQ sur place (piliers EST/NORD/OUEST ascenseurs, SUD escalier): https://www.toureiffel.paris/fr/faq/sur-place
- [S25] Robert M. Vogel, *Elevator Systems of the Eiffel Tower, 1889* (Smithsonian 1961), Project Gutenberg: https://www.gutenberg.org/files/32282/32282-h/32282-h.htm
- [S26] Wikipédia FR — Tour Eiffel (table: 57.63 / 115.73 / 276.13 / 279.11 m; 124.90 / 74.24 m; areas; Jules Verne 500 m²/95 covers): https://fr.wikipedia.org/wiki/Tour_Eiffel
- [S27] Wikipedia EN — Eiffel Tower: https://en.wikipedia.org/wiki/Eiffel_Tower
- [S28] Wikipedia EN — Le Jules Verne: https://en.wikipedia.org/wiki/Le_Jules_Verne
- [S29] Wikipédia FR — Madame Brasserie: https://fr.wikipedia.org/wiki/Madame_Brasserie
- [S30] Structurae — Eiffel Tower (W and N legs nearest the Seine): https://structurae.net/en/structures/eiffel-tower
- [S31] wonders-of-the-world.net — First floor (quotes Eiffel 1900): https://www.wonders-of-the-world.net/Eiffel-Tower/First-floor.php
- [S32] wonders-of-the-world.net — Second floor: https://www.wonders-of-the-world.net/Eiffel-Tower/Second-floor.php
- [S33] wonders-of-the-world.net — Third floor: https://www.wonders-of-the-world.net/Eiffel-Tower/Third-floor.php
- [S34] wonders-of-the-world.net — Elevators: https://www.wonders-of-the-world.net/Eiffel-Tower/Elevators-of-the-Eiffel-tower.php
- [S35] wonders-of-the-world.net — Stairs: https://www.wonders-of-the-world.net/Eiffel-Tower/Stairs-of-the-Eiffel-tower.php
- [S36] wonders-of-the-world.net — Intermediate floor: https://www.wonders-of-the-world.net/Eiffel-Tower/Intermediate-floor.php
- [S37] wonders-of-the-world.net — Dimensions (structural table 56.05 / 114.13 / 195.35 / 273.63 / 276.21 / 301 m): https://www.wonders-of-the-world.net/Eiffel-Tower/Dimensions-of-the-Eiffel-tower.php
- [S38] G. Eiffel, *La Tour de trois cents mètres* (1900), Gallica — Texte: https://gallica.bnf.fr/ark:/12148/bpt6k106381w ; Planches: https://gallica.bnf.fr/ark:/12148/bpt6k6542854f  (primary for the 1900 figures relayed by S31–S35)
- [S39] Otis — Eiffel Tower project page (duolift 525 ft, Duhart, JV lift bracket + 18 kW motor): https://www.otis.com/en/us/our-company/global-projects/project-showcase/eiffel-tower
- [S40] eutouring — Elevators at the Eiffel Tower (dates, 4-t lift 1989/2007, Edoux pump on 1st floor): https://www.eutouring.com/elevators_at_the_eiffel_tower.html
- [S41] RFR — First floor renovation (pavilions face each other, 2 staggered levels, 860 m² façade): https://www.rfr.fr/en/projets/eiffel-towers-first-floor-renovation
- [S42] Moatti & Rivière — project page (programme, 4,260 m², Aug 2014): https://www.moatti-riviere.com/en/projects/equipment/tour-eiffel-paris
- [S43] Bellapart — Tour Eiffel glass floor & balustrades (920 m², 1.85 × 0.70 m panels): https://www.bellapart.com/project/tour-eiffel/
- [S44] Saint-Gobain — skid-resistant glass floor (128 m², 64 tiles, 1.85 m): https://www.saint-gobain.com/en/news/saint-gobain-supplies-eiffel-tower-skid-resistant-glass-floor
- [S45] Le Moniteur — Moatti-Rivière first-floor plan (Ferrié and Gustave-Eiffel face each other; 5,420 / 4,586 m²): https://www.lemoniteur.fr/photo/projet-de-reamenagement-du-premier-etage-de-la-tour-eiffel-a-paris-7e-par-l-agence-moatti-riviere.934269/pavillon-ferrie-apres-reconstruction.17
- [S46] visites-guidees.net — Réaménagement du premier étage (Gustave Eiffel N/E, Ferrié S/W): https://visites-guidees.net/la-tour-eiffel-reamenagement-du-premier-etage/
- [S47] restaurants-toureiffel.com — Le Jules Verne, the venue (3 rooms + Alcôve): https://www.restaurants-toureiffel.com/en/jules-verne-restaurant/the-venue.html
- [S48] Eiffage — North pillar elevator renovation: https://www.eiffage.com/en/media/news/elevator-renovation-of-the-north-pillar-of-the-eiffel-tower
- [S49] Batinfo — Renovation of the North elevator (double cabin, 50 t counterweight): https://batinfo.com/en/actuality/renovation-of-the-north-elevator-of-the-eiffel-tower-a-technological-and-architectural-renaissance_31173
- [S50] worldfairs.info forum — Les ascenseurs de la Tour Eiffel 1889 (period text: 160.40 m, 80.20 m, 0.90 m/s, two doors): https://www.worldfairs.info/forum/viewtopic.php?t=480
- [S51] Google Arts & Culture — The Eiffel Tower in 1900 (Fives-Lille 2 cabins × 50): https://artsandculture.google.com/story/sQWBwIgquQAA8A
- [S52] TIME archive — "France: Jumping-Off Place" (5½ ft fence raised to 10 ft): https://time.com/archive/6630150/france-jumping-off-place/
- [S53] 1stDibs listing of an original balcony railing section 114.3 cm high (secondary): https://www.1stdibs.com/fr/meubles/accessoires-de-maison-et-de-jardin/éléments-architecturaux/exceptionnel-balcon-de-la-tour-eiffel-authentique/id-f_4124433
- [S54] Gérard Bouché — Les liftiers des Duolifts (cabin ≈3.2 m², up to 16): http://www.gerard-bouche.fr/tour-eiffel/
- [S55] Paris Perfect — Eiffel Tower apartment (~100 m², Edison 1889): https://www.parisperfect.com/blog/2015/05/eiffel-tower-apartment/
- [S56] Sortiraparis — Engine rooms, bunker, Eiffel's apartment: https://www.sortiraparis.com/en/what-to-visit-in-paris/history-heritage/articles/349495-machine-rooms-a-bunker-and-the-eiffel-apartment-can-you-tour-the-eiffel-tower-s-backstage-areas
- [S57] Messy Nessy Chic — the bunker (1909, tunnel rumour): https://www.messynessychic.com/2021/10/06/what-happened-to-the-secret-bunker-beneath-the-eiffel-tower/
- [S58] fr-academic (old FR-Wikipedia text: private lift to a ~500 m² platform "at exactly 123 m"): https://fr-academic.com/dic.nsf/frwiki/1648659
- [S59] Headout — Eiffel Tower entrances (pier/landmark table): https://www.headout.com/blog/eiffel-tower-entrances/
- [S60] Flickr "Eiffel Tower guts" caption (1897 W / 1899 E split; 3 × 200 t counterweights; cabs level at landings) — secondary: https://www.flickr.com/photos/troye/4922702639
- [S61] toureiffel.paris — Comment étaient les ascenseurs aux débuts (chariot 16 m / cabin 128 m): https://www.toureiffel.paris/fr/actualites/130-ans/comment-etaient-les-ascenseurs-aux-debuts-de-la-tour-eiffel
