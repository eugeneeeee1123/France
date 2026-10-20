# Copy delta 3 (after the 4-agent code review)

Edit the three files `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\messages\fr.json`, `en.json`, `zh.json`. Same rules as before (humanizer, avoid-ai-writing, humanize-chinese for 中文; no em-dashes, no exclamation marks, no emoji; French non-breaking spaces and ’). Do NOT run any terminal command; use only your file tools. Keep the three files' keys identical. Change only what is listed.

1. Remove the trailing arrow "→" (and the space before it) from `index.hero.ctaPrimary` and `index.chronology.open` in all three files. The arrow is now drawn by the interface as a decorative icon; screen readers were reading it aloud as "right arrow". Nothing else in those strings changes.
2. Add `footer.navLabel` in all three files: the accessible name of the footer navigation (the list About / Sources / Legal notice / Image credits). Short, 1 to 3 words, sentence case. It must differ from `a11y.mainNav` so screen-reader users can tell the two navigations apart.
3. EN only, `index.manifesto.iii.body`: "world-class" is flagged as a marketing buzzword. Rewrite the sentence without it, keeping the meaning (overseas territories and brands known around the world carry France beyond Europe). ≤ 110 chars. FR and 中文 stay as they are.

Report the changed and added values per file, and confirm the three files still have identical keys.
