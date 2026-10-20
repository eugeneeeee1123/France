# Copy delta 4: the hexagon matrix (wireframe 1d)

The ten-row module list on the INDEX becomes a hexagon: ten numbered points around a hexagon outline; pointing at (or keyboard-focusing) a point shows a summary panel for that module: "04 · TERRITOIRES", the module's Why line (the existing `modules.<id>.sub`, unchanged), then its How and What, then an "Explore" link.

Edit `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\fr.json`, `en.json`, `zh.json`. Same rules as every earlier delta: read and apply `C:\Users\Eugen\.claude\skills\humanizer\SKILL.md`, `C:\Users\Eugen\.claude\skills\avoid-ai-writing\SKILL.md`, and for 中文 `C:\Users\Eugen\.claude\skills\humanize-chinese\SKILL.md`; no em-dashes, no exclamation marks, no emoji; French non-breaking spaces before `: ; ? !` and inside « », typographic ’; dossier register; EN and 中文 are faithful translations of the French meaning. Do NOT run any terminal command; use only your file tools. Keep the three files' keys identical. Do not change any existing value.

## Source of facts

`C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone-content-plan-v2.md`, the table "Why → How → What 总览表" (lines 17 to 31): the How column (体系/机制) and the What column (具体成果) for each module. Canon rule: every figure uses the R.I.F. / GDN-2040 setting. Where the table gives both a real and an R.I.F. value (ARSENAL: about 290 vs about 700 warheads, 4 vs 8 SNLE), use only the R.I.F. value and never write the real one (the number 290 must not appear anywhere). Any R.I.F. scenario figure must be followed by the scenario marker in parentheses: FR "(scénario)", EN "(scenario)", 中文 "（设定）". Real, checkable facts (11M km² EEZ, Ariane 6, Cannes, Louvre, the 1966 NATO command exit, etc.) carry no marker.

## Add these keys (all three files)

For each of the ten modules (arsenal, statecraft, epochs, territories, arena, aesthetics, science, economy, francophonie, industry):

- `modules.<id>.how`: the module's mechanism (How column), one plain sentence. ≤ 110 characters (中文 ≤ 45 字).
- `modules.<id>.what`: the module's concrete results (What column), one sentence or a short list joined with commas. ≤ 120 characters (中文 ≤ 50 字). Keep proper names (Rafale, Suffren, EPR2, Ariane 6, Mistral AI, LVMH, OIF, CNRS, CNES, ESA, Cannes, Louvre, Paris+).

And under `index.matrix`:

- `index.matrix.hint`: the small invitation inside the hexagon telling desktop visitors to point at a numbered side to read a module. FR reference from the wireframe: "Survolez un côté". ≤ 28 characters.
- `index.matrix.whyLabel`, `index.matrix.howLabel`, `index.matrix.whatLabel`: short UPPERCASE labels for the three rows. FR: "POURQUOI", "COMMENT", "QUOI". EN: "WHY", "HOW", "WHAT". 中文 (design system): "为什么", "如何", "是什么".
- `index.matrix.explore`: the link that opens the selected module page. FR reference from the wireframe: "Explorer". UPPERCASE in FR and EN, no arrow (the interface draws it). ≤ 18 characters.
- `index.matrix.selectedLabel`: accessible label for the summary panel region, meaning "selected module". ≤ 30 characters, sentence case.

## Report

List every added key and value per file, confirm the three files still have identical keys, and confirm you re-read for em-dashes, exclamation marks, emoji and the number 290.
