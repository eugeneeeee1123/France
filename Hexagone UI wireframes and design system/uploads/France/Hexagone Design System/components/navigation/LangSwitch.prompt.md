FR / EN / 中 language switch — footer uses inline, the nav bar uses menu.

```jsx
<LangSwitch value={lang} onChange={setLang} />
<LangSwitch variant="menu" value={lang} onChange={setLang} />
```

Chinese label is always the glyph 中, never "ZH". Menu closes on outside click and Escape.
