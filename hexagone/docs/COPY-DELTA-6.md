# Copy delta 6: the closing quote becomes Napoléon

The INDEX page opens with a de Gaulle quote in the hero (`index.heroQuote`, « Toute ma vie, je me suis fait une certaine idée de la France. ») and closes with a second de Gaulle quote from the same book (`index.citation`, « La France ne peut être la France sans la grandeur. »). Same author, same book, twice on one page. The site owner chose to replace the closing quote with Napoléon.

## Task

Change only these keys under `index.citation`, in all three files. Change no other key and no other value; keep the three files' keys identical, UTF-8, 2-space indentation, and every other line byte-identical.

- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\fr.json`
- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\en.json`
- `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\zh.json`

### `index.citation.text` (identical in all three files, fixed, do not rewrite)

The French original, word for word, with a non-breaking space (U+00A0) after « and before », written the same way the current value writes them:

« La politique de toutes les puissances est dans leur géographie. »

Source: Napoléon Ier, letter to the King of Prussia (Frédéric-Guillaume III), Saint-Cloud, 10 November 1804. In the letter the words close a longer sentence about Russia; the site quotes this closing clause on its own, capitalised.

### `index.citation.translation`

- FR: empty string "" (as today).
- EN and 中文: a faithful translation of the French sentence. Plain, exact, no embellishment, no added idea.

### `index.citation.attribution`

Follow the current format "Author · Work, detail" and give the source above. The facts are fixed: Napoléon Ier, letter to the King of Prussia, 10 November 1804.

- FR reference: "Napoléon Ier · Lettre au roi de Prusse, 10 novembre 1804"
- EN and 中文: the same facts in that language (中文 uses 拿破仑一世 and full-width punctuation).

### Leave alone

`index.citation.eyebrow`, `index.heroQuote` and everything else.

## Before you write

Read and apply these skills to every string you write, in every language:

- `C:\Users\Eugen\.claude\skills\humanizer\SKILL.md`
- `C:\Users\Eugen\.claude\skills\avoid-ai-writing\SKILL.md`
- For 中文, also `C:\Users\Eugen\.claude\skills\humanize-chinese\SKILL.md` if it exists.

Rules as in every earlier delta: no em-dashes or en-dashes used as dashes, no exclamation marks, no emoji; French non-breaking spaces before `:`, `;`, `?`, `!` and inside « »; typographic ’; dossier register; 中文用书面语和全角标点.

## Do not

- Do NOT run any terminal command; use only your file view and edit tools.
- Do not commit or touch git. Do not edit any other file.

## Report

1. The new values of `index.citation.text`, `translation` and `attribution` in each file.
2. Confirmation that only those keys changed and the three files still have identical keys.
3. Confirmation that you re-read them for em-dashes, exclamation marks and emoji and found none.
