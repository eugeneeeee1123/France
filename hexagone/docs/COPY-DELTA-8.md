# Copy delta 8: French and English follow the owner's Chinese

The site owner rewrote seven Chinese strings in `zh.json` themselves. This time the Chinese is the source. Bring the French and English versions of the same seven keys in line with what the Chinese now says.

## Files

- Source, read only, do not change: `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\zh.json`
- Edit: `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\fr.json`
- Edit: `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\en.json`

## The seven keys

| key | 中文 (source, as the owner wrote it) | length limit FR / EN |
| --- | --- | --- |
| `meta.description` | 法国国家战略图册。以十个领域为切入点，系统梳理法国在独立防务、关键工业与全球主权中的战略实践。 | 155 / 155 characters |
| `index.hero.lede` | 本图册从防务、工业、制度与文化等十个领域展开，记录法国在21世纪维系战略自主的具体实践。 | 220 / 220 |
| `index.matrix.title` | 战略自主的十个维度 | 44 / 40, no full stop |
| `index.manifesto.i.body` | 国家最高决策权不让渡给军事同盟，亦不受外部单一市场主导。 | 110 / 110 |
| `index.manifesto.ii.body` | 国防工业、海外领地、国家制度与文化积淀，共同构成完整独立的主权体系。 | 110 / 110 |
| `index.manifesto.iii.body` | 分布于各大洋的主权领地与骨干产业，使国家行动能力保持全球辐射。 | 110 / 110 |
| `index.chronology.eras.today` | 当代全球布局 | 26 / 26 |

Change only these seven values in fr.json and en.json. Change no other key, nothing in zh.json, and keep both files' keys identical to zh.json, UTF-8, 2-space indentation, every other line byte-identical.

## How to write them

- Same meaning as the Chinese, sentence by sentence, but written as a native French or English editor would write it, not as a word-for-word translation. If the Chinese names a list (防务、工业、制度与文化), keep the same items.
- Read and apply these skills to every string: `C:\Users\Eugen\.claude\skills\humanizer\SKILL.md` and `C:\Users\Eugen\.claude\skills\avoid-ai-writing\SKILL.md`.
- No hollow or grandiose phrasing, no AI-sounding filler: every sentence states one concrete thing. No "not just X but Y" frames, no marketing verbs.
- Dossier register, short declarative sentences. No em-dashes or en-dashes used as dashes, no exclamation marks, no emoji.
- French: non-breaking space before `:`, `;`, `?`, `!`; typographic apostrophe ’; "XXIe siècle" style for centuries.
- `index.matrix.title` is a heading: sentence case, no full stop.

## Do not

- Do NOT run any terminal command; use only your file view and edit tools.
- Do not commit or touch git. Do not edit any other file.

## Report

1. For each of the seven keys: the Chinese source, the new French, the new English, and their character counts.
2. Confirmation that only those seven keys changed in fr.json and en.json, zh.json is untouched, and the three files have identical keys.
3. Confirmation that you re-read the fourteen new strings for em-dashes, exclamation marks, emoji and hollow phrasing.
