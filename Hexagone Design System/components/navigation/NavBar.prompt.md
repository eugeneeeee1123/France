Fixed top navigation - logo lockup left, section links center (underline on active), search glyph + language switch + a bordered CTA button right. No spring/bounce here - nav must feel instant per the motion guidelines.

```jsx
<NavBar logoSrc="assets/logo-lockup.png" links={["Accueil","Arsenal","Statecraft","Époques","Territoires","Arena","Aesthétics"]} activeLink="Accueil" ctaLabel="Commencer l'exploration" onNavigate={(id)=>router.push('/'+id)} onCtaClick={()=>{}} />
```
