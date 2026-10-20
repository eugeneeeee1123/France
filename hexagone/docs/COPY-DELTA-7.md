# Copy delta 7: the heading above the ten module cards

On the INDEX page, the ten module cards sit under a small uppercase label and a large heading:

- `index.matrix.eyebrow`: FR "LA MATRICE HEXAGONE", EN "THE HEXAGONE MATRIX", 中文 "六边形矩阵"
- `index.matrix.title`: FR "Dix angles, une seule question", EN "Ten angles, a single question", 中文 "十个维度，同一个问题"

The site owner wants both rewritten. Why they no longer work:

- The section used to be drawn as a hexagon with ten points. It is now a plain grid of ten numbered cards, so "matrice" and 中文 "六边形矩阵" describe a shape the reader no longer sees.
- The sentence that used to sit next to the heading (every module answers with the same structure: why, how, what) has been removed, so the heading now has to carry the idea alone.
- "Dix angles, une seule question" is generic and does not say which question.

## What the site is

A trilingual editorial atlas, **La France en Profondeur**. One question runs through the whole site: why is France, in the 21st century, still not an ordinary European middle power? Ten modules answer it from ten angles (Arsenal, Statecraft, Epochs, Territories, Arena, Aesthetics, Science, Economy, Francophonie, Industry). This section is where the reader picks a module. Note: "l’Hexagone" is the usual French nickname for metropolitan France, so the word may stay if it is used in that sense, never as a shape.

## Task

Rewrite only `index.matrix.eyebrow` and `index.matrix.title` in these three files. Change no other key and no other value; keep the three files' keys identical, UTF-8, 2-space indentation, and every other line byte-identical.

- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\fr.json`
- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\en.json`
- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\zh.json`

Write the French first; EN and 中文 are faithful translations of the French, never a different idea.

- `eyebrow`: a short UPPERCASE label in FR and EN naming what this section is (the ten modules, the way into the atlas). FR ≤ 24 characters, EN ≤ 24 characters, 中文 ≤ 6 字. It must not describe a hexagon or a matrix shape.
- `title`: one short line that tells the reader what the ten cards are for, tied to the site's question. FR ≤ 44 characters, EN ≤ 40 characters, 中文 ≤ 14 字. Sentence case in FR and EN. No full stop at the end.

## Before you write

Read and apply these skills to every string, in every language:

- `C:\Users\Eugen\.claude\skills\humanizer\SKILL.md`
- `C:\Users\Eugen\.claude\skills\avoid-ai-writing\SKILL.md`
- For 中文, also `C:\Users\Eugen\.claude\skills\humanize-chinese\SKILL.md` if it exists.

Rules as in every earlier delta: dossier register, short and plain; no em-dashes or en-dashes used as dashes, no exclamation marks, no emoji, no figures written as digits; no "not X but Y" frames, no marketing verbs (discover, unlock, journey, immerse, explore the magic and their French and Chinese equivalents such as 沉浸、开启…之旅、一站式); French non-breaking space before `:`, `;`, `?`, `!` and typographic ’; 中文用书面语和全角标点. Do not reuse the hero's wording ("GRANDEUR", "La France en Profondeur", the de Gaulle quote).

## Do not

- Do NOT run any terminal command; use only your file view and edit tools.
- Do not commit or touch git. Do not edit any other file.

## Report

1. Old and new values of the two keys in each file, with character counts.
2. Two alternative pairs you considered, in French only, and one line on why you chose the final pair.
3. Confirmation that only those two keys changed, the three files still have identical keys, and you re-read for em-dashes, exclamation marks, emoji and digits.
