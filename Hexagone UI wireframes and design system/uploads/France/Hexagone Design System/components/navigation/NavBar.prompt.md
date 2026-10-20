The site's sticky top bar — one per page, holds HOME + 10 numbered modules (7 visible + "+3 ▾" overflow), search and FR/EN/中.

```jsx
<NavBar modules={MODULES} activeKey="arsenal" lang={lang} onLangChange={setLang} onNavigate={go} />
```

Items render "01 ARSENAL" — the two-digit numeral always travels with the name. Nav never animates beyond a 180ms color shift.
