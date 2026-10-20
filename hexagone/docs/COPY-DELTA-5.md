# Copy delta 5: the ten module card lines (INDEX matrix)

The INDEX page shows ten module cards under the heading "Dix angles, une seule question". Each card shows the module name and one line of text: the value of `modules.<id>.sub`. The site owner finds these lines too wordy and stiff, above all in 中文, which has also drifted away from the French (example: the 中文 arsenal line adds "或听凭市场摆布", which the French line does not say). The hero above was just cut down for the same reason: too much text.

## Task

Rewrite only `modules.<id>.sub` for the ten modules (arsenal, statecraft, epochs, territories, arena, aesthetics, science, economy, francophonie, industry) in these three files:

- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\fr.json`
- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\en.json`
- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\zh.json`

Change no other key and no other value. Keep the three files' keys identical, UTF-8, 2-space indentation, and leave every other line byte-identical.

## Before you write

Read and apply these skills to every line, in every language:

- `C:\Users\Eugen\.claude\skills\humanizer\SKILL.md`
- `C:\Users\Eugen\.claude\skills\avoid-ai-writing\SKILL.md`
- For 中文, also `C:\Users\Eugen\.claude\skills\humanize-chinese\SKILL.md` if it exists.

## What each line must say

The module's Why, from the content plan table (`C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone-content-plan-v2.md`, lines 17 to 31, column "Why"):

| id | Why (content plan) |
| --- | --- |
| arsenal | 最终的国家安全不外包给盟友 |
| statecraft | 决策自主不受制于联盟多数意见 |
| epochs | 今天的能力都是历史断裂重构出来的 |
| territories | 领土纵深决定全球到达能力 |
| arena | 体育是国家认同与融合叙事的展示窗 |
| aesthetics | 文化输出转化为全球话语权 |
| science | 科研自主是长期国力的地基 |
| economy | 经济体量支撑军费与外交筹码 |
| francophonie | 语言与文化是软实力的长期投资 |
| industry | 军事与外交自主的前提，是工业链不被"卡脖子" |

Write the French first. EN and 中文 are faithful translations of the French line, never a different idea, never an addition.

## Rules

- Length: FR ≤ 55 characters, EN ≤ 50 characters, 中文 ≤ 16 字 (punctuation counts). Shorter is better.
- One idea per line, plain words, a short declarative sentence in the register of a state dossier.
- No figures. No em-dashes or en-dashes used as dashes, no exclamation marks, no emoji, in any language.
- No stacked abstractions and no stock phrasing. In 中文 avoid things like 核心叙事, 战略底牌, 直接转化为, 赋予, 命脉, 维系着, "不仅……更是……". In FR and EN avoid "not just X but Y" frames and marketing verbs.
- French typography: non-breaking space before `:`, `;`, `?`, `!`; typographic apostrophe ’.
- 中文用书面语，全角标点，句末用句号。

## Do not

- Do NOT run any terminal command; use only your file view and edit tools.
- Do not commit or touch git. Do not edit any other file.

## Report

1. A table per language: id, old line, new line, character count of the new line.
2. Confirmation that the three files still have identical keys and that only the thirty `sub` values changed.
3. Confirmation that you re-read the thirty new lines for em-dashes, exclamation marks, emoji and figures and found none.
