Boxed button — use when a CTA must read as a control (nav "Commencer l'exploration", hero secondary "Voir la vidéo"); otherwise prefer CtaLink.

```jsx
<Button icon="arrowRight">Commencer l'exploration</Button>
<Button variant="ghost" icon="play" iconPosition="start">Voir la vidéo</Button>
<Button disabled>Indisponible</Button>
```

States: hover = 8% gold wash (outline only), press = scale .98 at 100ms, disabled = ink-700 border/text. Never filled gold, never rounded.
