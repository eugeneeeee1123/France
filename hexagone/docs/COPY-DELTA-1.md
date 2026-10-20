# Copy delta 1 (after the 4-agent review)

Edit the three files you already wrote:
`C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\fr.json`, `en.json`, `zh.json`.
Same rules as `COPY-BRIEF-INDEX.md` (humanizer, avoid-ai-writing, humanize-chinese for 中文, no em-dashes, no exclamation marks, no emoji, French non-breaking spaces and ’). Do NOT run any terminal command; use your file tools only. Change only what is listed. Keep the three files' keys identical.

## Fix

1. `index.stats.warheads` (all three): remove "opérationnelles" / "Operational" / "作战". The source says roughly 700 warheads spread across four components (land, sea, air, plus the Tonnerre-class quasi-nuclear layer). Write the label as warheads across four components. FR reference from the mockup: "Ogives, quatre composantes". ≤ 40 chars (中文 ≤ 14 字). The scenario marker is added by code.
2. 中文 stat labels `index.stats.eez|warheads|francophone|continents`: standalone noun phrases that read correctly under a large number. No leading measure words (no 枚、个). Example shape: "法语为官方语言的国家", not "个国家以法语为官方语言".
3. `index.manifesto.iii.body` (all three): the source says overseas territories and **world-class brands** carry France beyond Europe. You wrote industries / fleurons industriels / 国家级产业. Use brands.
4. FR `meta.description`: do not say France "refuse" anything; that adds intent the source does not state. Ask the source question plainly: why is France, in the 21st century, still not an ordinary European middle power. ≤ 155 chars. Check EN and 中文 say the same thing.
5. 中文 `scenario.notice`: remove the repetition (推演 twice, 现实事实). One clean sentence, ≤ 50 字.
6. 中文 `index.chronology.eras.gdn2040`: ≤ 10 字 including "R.I.F." if you keep it. It must still read as a scenario.
7. FR `index.stats.francophone`: ≤ 32 chars.

## Remove keys (all three files)

- `index.matrix.rowLabel` (each row's link text is now its own accessible name)
- `a11y.search` (no search in v1)
- `index.hero.collageAlt` (the collage image is replaced)

## Add keys (all three files)

- `index.hero.imageAlt`: alt text for the new hero image: a 3D render (made in Blender) of the Eiffel Tower in a three-quarter view from slightly above, its legs and platforms lit warm against a blue dusk sky. ≤ 100 chars. Do not call it a photograph.
- `nav.modulesMenu`: label of the collapsed module menu on medium screens. FR "MODULES", EN "MODULES", 中文 2–4 字. UPPERCASE in FR / EN.
- `nav.menu`: label of the mobile menu button. FR "MENU", EN "MENU", 中文 "菜单".
- `a11y.menuOpen`: aria label "open the menu". `a11y.menuClose`: aria label "close the menu".
- `a11y.homeCrest`: alt text of the navbar logo image, the crest of the Fédération Française de Football, used as the site's home link. ≤ 70 chars.
- `index.stats.eyebrow` exists already; keep it.
- `scenario.yearSuffix`: the short tag after the year 2040 on the timeline. FR "scénario", EN "scenario", 中文 "设定".

## Report back

The list of keys you changed, removed and added, per file, and a confirmation that the three files still have identical keys and that you re-read them for em-dashes, exclamation marks and emoji. Then print the three files between `===FILE <name>===` and `===END===` lines.
