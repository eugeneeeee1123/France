# Copy brief: INDEX page + site shell (FR / EN / 中文)

You are the copywriter for **La France en Profondeur**, a trilingual editorial atlas. Write the strings listed below, in three languages, into three JSON files. Nothing else.

## Before you write

1. Read and apply these two skills to every string, in every language:
   - `C:\Users\Eugen\.claude\skills\humanizer\SKILL.md`
   - `C:\Users\Eugen\.claude\skills\avoid-ai-writing\SKILL.md`
2. For Chinese, also read `C:\Users\Eugen\.claude\skills\humanize-chinese\SKILL.md` if it exists.
3. Facts come from `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone-content-plan-v2.md` (sections "00 · 全站叙事框架" lines 8–80 and "01 · INDEX.HTML 首页" lines 83–132). Do not invent facts, numbers, names or quotes.

## What the site is

One question runs through the whole site: why is France, in the 21st century, still not an ordinary European middle power? Ten modules answer it from ten angles, each with the same structure: why (the motive), how (the system), what (the results). The INDEX page is the entry: it states the question, shows four figures as evidence, lists the ten modules, states three principles, and closes with a timeline and a quote.

The site's figures follow a declared fictional scenario, **R.I.F. (La République Impériale de France), world GDN-2040**, a 2035–2040 projection. Speculative figures must always be marked as scenario. Never present them as present-day fact.

## Voice (hard rules)

- Register: state atlas or museum dossier. Short, declarative, third-person, institutional.
- No "you" except in navigation imperatives ("Explorez…", "Commencer l'exploration").
- No exclamation marks. No emoji. **No em-dashes (—) and no en-dashes used as em-dashes**, in any language. Use a colon, a comma or a full stop instead.
- French: a non-breaking space before `:`, `;`, `?`, `!` and inside « guillemets ». Use typographic apostrophes (’).
- No marketing verbs: elevate, unlock, seamless, unleash, discover the magic, immerse, journey, dive into, and their French and Chinese equivalents (沉浸、赋能、开启…之旅、一站式 etc.).
- EN and 中文 are full, dignified translations of the French meaning, never summaries, never a different idea.
- 中文用书面语，不用网络腔，不用"不仅…更是…"排比套话。中文标点用全角。
- Casing: nav labels and module names in UPPERCASE in FR and EN. Eyebrows in UPPERCASE. Body in sentence case.
- `GRANDEUR` is never translated and is not in these files (it is hard-coded).

## Fixed strings: do not rewrite

- Real quotes stay word for word in French in all three files. EN and 中文 files carry the French original in `text` and a faithful translation in `translation`.
  - `index.heroQuote.text`: « Toute ma vie, je me suis fait une certaine idée de la France. » (Charles de Gaulle, *Mémoires de guerre*, t. I, 1954)
  - `index.citation.text`: « La France ne peut être la France sans la grandeur. » (Charles de Gaulle, *Mémoires de guerre*, t. I, 1954)
- Brand name: **La France en Profondeur** stays in French in all three files (no English or Chinese brand name). In `meta.description` the EN and 中文 files may explain it in their own language.
- Figures (values are in code; you only write the labels): 11M km² EEZ · ~700 nuclear warheads (scenario) · 57 countries with French as an official language · 6 continents with French territory.

## Output

Write exactly three files, UTF-8, 2-space indentation, same keys in all three:

- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\fr.json`
- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\en.json`
- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\zh.json`

Use this key skeleton. Each comment says what the string must do, and its length limit. Do not add or remove keys. Remove the comments (JSON has no comments).

```jsonc
{
  "meta": {
    "title": "",          // <title>. "La France en Profondeur" + short descriptor. ≤ 60 chars.
    "description": ""     // meta description: the one question + ten modules. ≤ 155 chars (中文 ≤ 80 字).
  },
  "a11y": {
    "skipLink": "",       // "Skip to content" equivalent.
    "mainNav": "",        // aria-label of the main navigation.
    "home": "",           // aria-label of the logo link: brand + "home".
    "search": "",         // aria-label of the search button.
    "language": "",       // aria-label of the language switcher.
    "timeline": "",       // aria-label of the timeline button.
    "moreModules": ""     // aria-label of the "+3" overflow menu: "{count} more modules", keep the ICU placeholder {count}.
  },
  "nav": {
    "cta": ""             // Header button that starts the visit. FR reference: "COMMENCER L’EXPLORATION". ≤ 26 chars.
  },
  "scenario": {
    "badge": "",          // Short badge. FR reference: "SCÉNARIO · GDN-2040". Keep "GDN-2040".
    "notice": "",         // One sentence, ≤ 140 chars: the figures marked as scenario describe the R.I.F. projection 2035–2040, a fictional world, not the present day.
    "marker": ""          // The tag printed next to a speculative figure. FR "scénario", EN "scenario", 中文 "设定".
  },
  "modules": {
    // For each of the 10 modules: "name" = nav label, "sub" = one line under the name in the module list.
    // name: FR and EN UPPERCASE Latin label (FR: ARSENAL, STATECRAFT, ÉPOQUES, TERRITOIRES, ARENA, AESTHETICS, SCIENCE, ÉCONOMIE, FRANCOPHONIE, INDUSTRY; EN: ARSENAL, STATECRAFT, EPOCHS, TERRITORIES, ARENA, AESTHETICS, SCIENCE, ECONOMY, FRANCOPHONIE, INDUSTRY).
    //       中文: a 2–4 character label (e.g. 军工, 治国 …); you choose, keep them parallel in length.
    // sub:  the module's "Why" from the content-plan table (line 17–31), rewritten as one plain sentence. ≤ 70 chars (中文 ≤ 28 字). No figures.
    "arsenal":      { "name": "", "sub": "" },
    "statecraft":   { "name": "", "sub": "" },
    "epochs":       { "name": "", "sub": "" },
    "territories":  { "name": "", "sub": "" },
    "arena":        { "name": "", "sub": "" },
    "aesthetics":   { "name": "", "sub": "" },
    "science":      { "name": "", "sub": "" },
    "economy":      { "name": "", "sub": "" },
    "francophonie": { "name": "", "sub": "" },
    "industry":     { "name": "", "sub": "" }
  },
  "index": {
    "hero": {
      "eyebrow": "",      // UPPERCASE, ≤ 32 chars. FR reference: "LA FRANCE SOUS TOUS LES ANGLES".
      "subtitle": "",     // Brand line under GRANDEUR. Must be "LA FRANCE EN PROFONDEUR" in all three files.
      "tagline": "",      // Italic line, ≤ 50 chars. FR reference: "La France n’est pas un pays, c’est une idée." Keep this French line in FR; translate faithfully in EN / 中文.
      "lede": "",         // 1–2 sentences, ≤ 220 chars (中文 ≤ 90 字): ten modules, one question (why France still acts at world scale), the range from Gaul to space and from the ocean floor to ideas.
      "ctaPrimary": "",   // Same meaning as nav.cta, may add " →". ≤ 28 chars.
      "ctaSecondary": "", // Opens the timeline. FR reference: "OUVRIR LA CHRONOLOGIE". ≤ 26 chars.
      "collageAlt": ""    // alt text of the hero collage: Marianne, the Eiffel Tower, a Rafale fighter, a submarine. ≤ 110 chars.
    },
    "heroQuote": {
      "text": "",         // Fixed quote, see above.
      "translation": "",  // FR: empty string "". EN / 中文: faithful translation.
      "attribution": ""   // "Charles de Gaulle · Mémoires de guerre, 1954" (中文 uses 《战争回忆录》).
    },
    "stats": {
      "eyebrow": "",      // UPPERCASE section label. ≤ 24 chars.
      "eez": "",          // label under "11M km²": exclusive economic zone. ≤ 40 chars.
      "warheads": "",     // label under "~700": nuclear warheads. The scenario marker is added by code; do not write it here. ≤ 40 chars.
      "francophone": "",  // label under "57": countries with French as an official language. ≤ 48 chars.
      "continents": ""    // label under "6": continents where France has territory. ≤ 48 chars.
    },
    "matrix": {
      "eyebrow": "",      // FR reference: "LA MATRICE HEXAGONE".
      "title": "",        // FR reference: "Dix angles, une seule question". ≤ 40 chars.
      "intro": "",        // One sentence: every module answers with the same structure: why, how, what. ≤ 90 chars.
      "rowLabel": ""      // aria-label pattern for each module row: "Open module {name}". Keep the ICU placeholder {name}.
    },
    "manifesto": {
      "eyebrow": "",      // UPPERCASE label for the three principles. ≤ 32 chars.
      "i":   { "title": "", "body": "" },   // Decision autonomy: the ultimate state decision is not delegated to an alliance or to the market.
      "ii":  { "title": "", "body": "" },   // A complete system: industry, territories, institutions and culture support each other.
      "iii": { "title": "", "body": "" }    // Global projection: overseas territories and world-class brands carry France beyond Europe.
      // title ≤ 28 chars (中文 ≤ 8 字). body one sentence ≤ 110 chars (中文 ≤ 45 字).
    },
    "chronology": {
      "eyebrow": "",      // UPPERCASE, FR reference "CHRONOLOGIE".
      "open": "",         // Link that opens the full timeline, ends with " →". ≤ 30 chars.
      "eras": {
        // Caption under each year on the home timeline. ≤ 26 chars (中文 ≤ 10 字).
        "alesia": "",         // −52: Alésia
        "revolution": "",     // 1789: the Revolution
        "fifthRepublic": "",  // 1958: Fifth Republic
        "today": "",          // today: a France present worldwide
        "gdn2040": ""         // 2040: the R.I.F. scenario horizon (must read as scenario)
      },
      "today": ""         // The word used as a "year" for the present: FR "Aujourd’hui", EN "Today", 中文 "今天".
    },
    "citation": {
      "eyebrow": "",      // UPPERCASE, FR reference "CITATION".
      "text": "",         // Fixed quote, see above.
      "translation": "",  // FR: "". EN / 中文: faithful translation.
      "attribution": ""   // "Charles de Gaulle · Mémoires de guerre, t. I"
    }
  },
  "footer": {
    "rights": "",         // FR reference: "© Hexagone. Projet éditorial indépendant." Use "La France en Profondeur" instead of "Hexagone".
    "scenarioNote": "",   // One sentence: real-world content aims to be accurate and checkable; the R.I.F. / GDN-2040 scenario is a declared creative projection, marked wherever it appears. ≤ 150 chars.
    "links": {
      "about": "",        // About
      "sources": "",      // Sources
      "legal": "",        // Legal notice
      "credits": ""       // Image credits
    }
  }
}
```

## Report back

When done, reply with:
1. The three file paths you wrote.
2. A table of every key whose text you were unsure about, with the reason.
3. Confirmation that you ran a final pass for em-dashes, exclamation marks and emoji in all three files and found none.

Do not touch any other file. Do not run git commands. You will not commit; the orchestrator reviews and commits.
