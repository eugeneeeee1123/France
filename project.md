# Project Source Code

## css\arena-v2.css

```css
.legacy-arena[hidden] {
  display: none !important;
}

.arena-v2 {
  --arena-blue: #1f4ed8;
  --arena-navy: #071638;
  --arena-ink: #121a2c;
  --arena-muted: #5f6b83;
  --arena-line: #d8deea;
  --arena-paper: #f4f6fa;
  --arena-white: #ffffff;
  background: var(--arena-paper);
  color: var(--arena-ink);
  overflow: hidden;
}

.arena-v2 h1,
.arena-v2 h2,
.arena-v2 h3 {
  color: inherit;
}

.arena-v2 .wrap {
  max-width: 1440px;
}

.arena-masthead {
  padding: 144px 0 0;
  background: var(--arena-white);
}

.arena-masthead-grid {
  min-height: 650px;
  display: grid;
  grid-template-columns: minmax(350px, 0.72fr) minmax(580px, 1.28fr);
  align-items: center;
  gap: 54px;
}

.arena-label {
  margin-bottom: 20px;
  color: var(--arena-blue);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
}

.arena-masthead h1 {
  max-width: 600px;
  font-size: clamp(4.4rem, 7.6vw, 8.2rem);
  line-height: 0.92;
  letter-spacing: -0.075em;
}

.arena-intro {
  max-width: 520px;
  margin: 30px 0;
  color: var(--arena-muted);
  font-size: 1.06rem;
  line-height: 1.75;
}

.arena-primary-link,
.arena-return {
  display: inline-flex;
  align-items: center;
  gap: 26px;
  padding: 15px 0;
  border-bottom: 2px solid var(--arena-blue);
  color: var(--arena-navy);
  font-size: 0.78rem;
  font-weight: 800;
}

.arena-primary-link span,
.arena-return span {
  color: var(--arena-blue);
  font-size: 1.2rem;
  transition: transform 180ms ease;
}

.arena-primary-link:hover span {
  transform: translateX(4px);
}

.arena-masthead-art {
  position: relative;
  min-height: 570px;
}

.arena-masthead-art::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 15px;
  height: 100%;
  background: var(--arena-blue);
}

.arena-masthead-art img {
  width: 100%;
  height: 570px;
  object-fit: cover;
  object-position: center;
}

.arena-snapshot {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--arena-line);
  border-bottom: 1px solid var(--arena-line);
}

.arena-snapshot div {
  min-height: 120px;
  padding: 26px 28px;
  border-right: 1px solid var(--arena-line);
}

.arena-snapshot div:last-child {
  border-right: 0;
}

.arena-snapshot strong,
.arena-snapshot span {
  display: block;
}

.arena-snapshot strong {
  color: var(--arena-blue);
  font-size: 2rem;
  line-height: 1;
}

.arena-snapshot span {
  margin-top: 10px;
  color: var(--arena-muted);
  font-size: 0.72rem;
}

.arena-local-nav {
  position: sticky;
  top: 76px;
  z-index: 30;
  background: rgba(244, 246, 250, 0.94);
  border-bottom: 1px solid var(--arena-line);
  backdrop-filter: blur(14px);
}

.arena-local-nav .wrap {
  display: flex;
  gap: 34px;
  overflow-x: auto;
}

.arena-local-nav a {
  flex: 0 0 auto;
  padding: 16px 0 13px;
  border-bottom: 3px solid transparent;
  color: var(--arena-muted);
  font-size: 0.72rem;
  font-weight: 800;
}

.arena-local-nav a:hover {
  color: var(--arena-blue);
  border-bottom-color: var(--arena-blue);
}

.arena-section {
  padding: 124px 0;
  border-bottom: 1px solid var(--arena-line);
}

.arena-section-heading {
  max-width: 860px;
  margin-bottom: 70px;
}

.arena-section-heading.compact {
  max-width: 700px;
}

.arena-section-heading h2,
.influence-statement h2 {
  margin-bottom: 26px;
  font-size: clamp(3rem, 5.6vw, 6.2rem);
  line-height: 0.98;
  letter-spacing: -0.065em;
}

.arena-section-heading > p:last-child,
.influence-statement > p:last-child {
  max-width: 680px;
  color: var(--arena-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.arena-world-cup {
  background: var(--arena-paper);
}

.world-cup-layout {
  display: grid;
  grid-template-columns: minmax(310px, 0.62fr) minmax(0, 1.38fr);
  gap: 0;
  border: 1px solid var(--arena-line);
  background: var(--arena-white);
}

.france-shirt {
  min-height: 650px;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(145deg, transparent 0 42%, rgba(255, 255, 255, 0.06) 42% 44%, transparent 44%),
    var(--arena-blue);
  color: #fff;
}

.shirt-crest {
  width: 58px;
  height: 68px;
  display: grid;
  place-items: center;
  border: 2px solid #fff;
  font-size: 1rem;
  font-weight: 900;
}

.shirt-stars {
  margin-top: 12px;
  font-size: 0.75rem;
  letter-spacing: 0.35em;
}

.france-shirt strong {
  margin: 48px 0 20px;
  font-size: clamp(8rem, 14vw, 14rem);
  line-height: 0.72;
  letter-spacing: -0.12em;
}

.shirt-name {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
}

.world-cup-dossier {
  padding: 48px;
}

.dossier-topline {
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--arena-line);
  color: var(--arena-blue);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.fixtures-list li {
  display: grid;
  grid-template-columns: 90px minmax(220px, 1fr) 210px;
  align-items: center;
  gap: 26px;
  padding: 28px 0;
  border-bottom: 1px solid var(--arena-line);
}

.fixtures-list time {
  color: var(--arena-blue);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
}

.fixtures-list li > div {
  display: flex;
  align-items: center;
  gap: 18px;
}

.fixtures-list b,
.fixtures-list li > div span {
  font-size: clamp(1.3rem, 2.2vw, 2rem);
  letter-spacing: -0.04em;
}

.fixtures-list li > div span::before {
  content: "/";
  margin-right: 18px;
  color: #aab3c5;
}

.fixtures-list small {
  color: var(--arena-muted);
  font-size: 0.66rem;
  text-align: right;
}

.fixtures-list .is-current {
  box-shadow: inset 5px 0 0 var(--arena-blue);
  padding-left: 24px;
}

.tactical-notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  padding-top: 42px;
}

.tactical-notes span {
  display: block;
  margin-bottom: 10px;
  color: var(--arena-blue);
  font-size: 0.76rem;
  font-weight: 800;
}

.tactical-notes p {
  color: var(--arena-muted);
  font-size: 0.78rem;
  line-height: 1.65;
}

.arena-data-note {
  margin-top: 18px;
  color: #7c879b;
  font-size: 0.68rem;
}

.arena-icons {
  background: var(--arena-white);
}

.icon-pair {
  display: grid;
  gap: 100px;
}

.icon-profile {
  display: grid;
  grid-template-columns: minmax(350px, 0.88fr) minmax(0, 1.12fr);
  gap: clamp(48px, 8vw, 120px);
  align-items: center;
}

.icon-profile-reverse .icon-photo {
  grid-column: 2;
}

.icon-profile-reverse .icon-profile-copy {
  grid-column: 1;
  grid-row: 1;
}

.icon-photo {
  position: relative;
  height: 600px;
  overflow: hidden;
  background: #dce3f1;
}

.icon-photo::after {
  content: "";
  position: absolute;
  inset: auto 0 0;
  height: 9px;
  background: var(--arena-blue);
}

.icon-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
  filter: saturate(0.72) contrast(1.04);
  transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

.icon-photo:hover img {
  transform: scale(1.025);
}

.icon-profile-copy > span {
  color: var(--arena-blue);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.icon-profile-copy h3 {
  margin: 18px 0 28px;
  font-size: clamp(3.5rem, 6.4vw, 7rem);
  line-height: 0.88;
  letter-spacing: -0.075em;
}

.icon-profile-copy > p {
  max-width: 610px;
  color: var(--arena-muted);
  line-height: 1.8;
}

.icon-profile-copy dl {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 34px;
  border-top: 1px solid var(--arena-line);
}

.icon-profile-copy dl div {
  padding: 22px 16px 0 0;
}

.icon-profile-copy dt {
  color: var(--arena-blue);
  font-size: 1.7rem;
  font-weight: 800;
}

.icon-profile-copy dd {
  margin-top: 4px;
  color: var(--arena-muted);
  font-size: 0.68rem;
}

.arena-territories {
  background: var(--arena-paper);
}

.territory-board {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid var(--arena-line);
  background: var(--arena-white);
}

.territory-tab {
  min-height: 70px;
  border: 0;
  border-right: 1px solid var(--arena-line);
  border-bottom: 1px solid var(--arena-line);
  background: transparent;
  color: var(--arena-muted);
  font-family: var(--font-display);
  font-size: 0.76rem;
  font-weight: 800;
  cursor: pointer;
}

.territory-tab:last-of-type {
  border-right: 0;
}

.territory-tab:hover,
.territory-tab.is-active {
  background: var(--arena-blue);
  color: #fff;
}

.territory-display {
  grid-column: 1 / -1;
  min-height: 390px;
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr) minmax(240px, 0.55fr);
  gap: 54px;
  align-items: center;
  padding: 56px;
}

.territory-number {
  color: #dce3f1;
  font-size: clamp(7rem, 12vw, 12rem);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.1em;
}

.territory-display span {
  color: var(--arena-blue);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.territory-display h3 {
  margin: 14px 0 18px;
  font-size: clamp(2rem, 3.6vw, 3.8rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.territory-display p {
  max-width: 650px;
  color: var(--arena-muted);
  line-height: 1.75;
}

.territory-display ul {
  border-top: 1px solid var(--arena-line);
}

.territory-display li {
  padding: 15px 0;
  border-bottom: 1px solid var(--arena-line);
  color: var(--arena-navy);
  font-size: 0.74rem;
  font-weight: 800;
}

.arena-institutions {
  background: var(--arena-white);
}

.institutions-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(420px, 1.22fr);
  gap: 10vw;
}

.institution-lines article {
  display: grid;
  grid-template-columns: 54px 200px 1fr;
  gap: 22px;
  align-items: baseline;
  padding: 30px 0;
  border-top: 1px solid var(--arena-line);
}

.institution-lines span {
  color: var(--arena-blue);
  font-family: var(--font-mono);
  font-size: 0.68rem;
}

.institution-lines h3 {
  font-size: 1.35rem;
}

.institution-lines p {
  color: var(--arena-muted);
  font-size: 0.82rem;
  line-height: 1.7;
}

.arena-influence {
  background: var(--arena-paper);
}

.influence-statement {
  max-width: 920px;
}

.influence-index {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 70px 0 54px;
  border-top: 1px solid var(--arena-line);
  border-bottom: 1px solid var(--arena-line);
}

.influence-index article {
  min-height: 190px;
  padding: 30px;
  border-right: 1px solid var(--arena-line);
}

.influence-index article:last-child {
  border-right: 0;
}

.influence-index strong,
.influence-index span {
  display: block;
}

.influence-index strong {
  margin-bottom: 46px;
  color: var(--arena-blue);
  font-size: 1.15rem;
}

.influence-index span {
  color: var(--arena-muted);
  font-size: 0.8rem;
  line-height: 1.65;
}

.arena-v2 + .site-footer {
  margin-top: 0;
  border-top: 0;
  background: var(--arena-white);
  color: var(--arena-ink);
}

.arena-v2 + .site-footer .footer-bottom {
  border-top-color: var(--arena-line);
  color: var(--arena-muted);
}

@media (max-width: 1050px) {
  .arena-masthead-grid,
  .world-cup-layout,
  .icon-profile,
  .institutions-layout {
    grid-template-columns: 1fr;
  }

  .arena-masthead-grid {
    gap: 46px;
  }

  .arena-masthead-art {
    min-height: auto;
  }

  .arena-masthead-art img {
    height: auto;
    min-height: 430px;
  }

  .icon-profile-reverse .icon-photo,
  .icon-profile-reverse .icon-profile-copy {
    grid-column: auto;
    grid-row: auto;
  }

  .territory-display {
    grid-template-columns: 130px 1fr;
  }

  .territory-display ul {
    grid-column: 2;
  }
}

@media (max-width: 760px) {
  .arena-body .brand-text {
    display: none;
  }

  .arena-body .site-header .wrap {
    padding-right: 14px;
    padding-left: 14px;
  }

  .arena-body .nav-utility {
    gap: 10px;
  }

  .arena-masthead {
    padding-top: 116px;
  }

  .arena-masthead-grid {
    min-height: 0;
  }

  .arena-masthead h1 {
    font-size: clamp(4rem, 20vw, 6rem);
  }

  .arena-masthead-art {
    margin-right: -24px;
    margin-left: -24px;
  }

  .arena-masthead-art::before {
    width: 8px;
  }

  .arena-masthead-art img {
    min-height: 300px;
    object-position: 66% center;
  }

  .arena-snapshot {
    grid-template-columns: 1fr 1fr;
    margin-top: 42px;
  }

  .arena-snapshot div {
    min-height: 105px;
    border-bottom: 1px solid var(--arena-line);
  }

  .arena-snapshot div:nth-child(2) {
    border-right: 0;
  }

  .arena-local-nav {
    top: 76px;
  }

  .arena-section {
    padding: 84px 0;
  }

  .arena-section-heading {
    margin-bottom: 46px;
  }

  .arena-section-heading h2,
  .influence-statement h2 {
    font-size: clamp(3rem, 14vw, 4.7rem);
  }

  .france-shirt {
    min-height: 460px;
  }

  .world-cup-dossier {
    padding: 24px;
  }

  .dossier-topline,
  .fixtures-list li > div {
    align-items: flex-start;
    flex-direction: column;
  }

  .fixtures-list li {
    grid-template-columns: 72px 1fr;
    gap: 16px;
  }

  .fixtures-list small {
    grid-column: 2;
    text-align: left;
  }

  .fixtures-list li > div {
    gap: 2px;
  }

  .fixtures-list li > div span::before {
    content: "";
    margin: 0;
  }

  .tactical-notes,
  .icon-profile-copy dl,
  .influence-index {
    grid-template-columns: 1fr;
  }

  .icon-pair {
    gap: 76px;
  }

  .icon-photo {
    height: 480px;
  }

  .territory-board {
    grid-template-columns: 1fr 1fr;
  }

  .territory-tab {
    min-height: 58px;
  }

  .territory-tab:nth-child(even) {
    border-right: 0;
  }

  .territory-display {
    grid-template-columns: 1fr;
    gap: 26px;
    padding: 32px 24px;
  }

  .territory-number {
    font-size: 7rem;
  }

  .territory-display ul {
    grid-column: auto;
  }

  .institution-lines article {
    grid-template-columns: 42px 1fr;
  }

  .institution-lines p {
    grid-column: 2;
  }

  .influence-index article {
    min-height: auto;
    border-right: 0;
    border-bottom: 1px solid var(--arena-line);
  }

  .influence-index article:last-child {
    border-bottom: 0;
  }

  .influence-index strong {
    margin-bottom: 18px;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .arena-v2 .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 620ms ease, transform 620ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .arena-v2 .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## css\arena.css

```css
.legacy-arena[hidden] {
  display: none !important;
}

.arena-page {
  --arena-blue: #1747e8;
  --arena-blue-dark: #071b55;
  --arena-red: #f04455;
  --arena-ink: #071126;
  --arena-white: #f5f7ff;
  --arena-muted: #aab6d7;
  background: var(--arena-ink);
  color: var(--arena-white);
  overflow: hidden;
}

.arena-page h1,
.arena-page h2,
.arena-page h3 {
  color: inherit;
}

.arena-hero {
  min-height: 100dvh;
  position: relative;
  display: flex;
  align-items: flex-end;
  isolation: isolate;
}

.arena-hero-photo,
.arena-hero-shade {
  position: absolute;
  inset: 0;
}

.arena-hero-photo {
  background:
    linear-gradient(90deg, rgba(7, 17, 38, 0.2), rgba(7, 17, 38, 0.08)),
    url("../assets/images/arena/mbappe.jpg") 73% 22% / min(48vw, 650px) auto no-repeat,
    linear-gradient(112deg, #071126 0 52%, #1539ae 52% 76%, #f04455 76%);
  filter: saturate(0.92) contrast(1.05);
}

.arena-hero-shade {
  background:
    linear-gradient(180deg, rgba(7, 17, 38, 0.06) 34%, rgba(7, 17, 38, 0.94) 100%),
    linear-gradient(90deg, rgba(7, 17, 38, 0.98) 0 38%, transparent 68%);
  z-index: 1;
}

.arena-hero-grid {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.55fr);
  gap: 8vw;
  align-items: end;
  padding-top: 148px;
  padding-bottom: 70px;
  z-index: 2;
}

.arena-kicker {
  margin-bottom: 22px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #86a4ff;
}

.arena-hero h1 {
  max-width: 760px;
  font-size: clamp(4.3rem, 8.8vw, 9.2rem);
  line-height: 0.82;
  letter-spacing: -0.075em;
  text-transform: uppercase;
}

.arena-hero h1 em,
.athlete-story h2 em,
.wemby-copy h2 em {
  display: inline-block;
  color: transparent;
  font-style: italic;
  line-height: 1.1;
  padding-bottom: 0.06em;
  -webkit-text-stroke: 1.5px rgba(245, 247, 255, 0.86);
}

.arena-hero-lede {
  max-width: 610px;
  margin-top: 28px;
  color: #d7def4;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.6;
}

.arena-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.arena-btn {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  padding: 0 22px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  transition: transform 180ms ease, background 180ms ease, color 180ms ease;
}

.arena-btn:hover {
  transform: translateY(-2px);
}

.arena-btn:active {
  transform: translateY(1px);
}

.arena-btn-primary {
  border-color: var(--arena-white);
  background: var(--arena-white);
  color: var(--arena-ink);
}

.arena-btn-quiet:hover {
  background: rgba(255, 255, 255, 0.1);
}

.arena-hero-score {
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(4, 13, 39, 0.72);
  backdrop-filter: blur(18px);
}

.score-status {
  font-family: var(--font-mono);
  font-size: 0.64rem;
  color: #9eb4f6;
  letter-spacing: 0.12em;
}

.arena-hero-score > strong {
  display: block;
  margin: 24px 0 30px;
  font-size: clamp(3rem, 5.2vw, 5.4rem);
  line-height: 0.82;
  letter-spacing: -0.08em;
}

.arena-hero-score dl div {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.arena-hero-score dt {
  color: var(--arena-muted);
  font-size: 0.72rem;
}

.arena-hero-score dd {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-align: right;
}

.arena-index {
  position: sticky;
  top: 76px;
  z-index: 20;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(7, 17, 38, 0.9);
  backdrop-filter: blur(16px);
}

.arena-index .wrap {
  display: flex;
  gap: 34px;
  overflow-x: auto;
}

.arena-index a {
  flex: 0 0 auto;
  padding: 17px 0 14px;
  border-bottom: 3px solid transparent;
  color: #aab6d7;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.arena-index a:hover {
  color: #fff;
  border-bottom-color: var(--arena-red);
}

.arena-section {
  position: relative;
  padding: 120px 0;
}

.arena-title-stack {
  max-width: 820px;
  margin-bottom: 64px;
}

.arena-title-stack > span,
.legacy-statement > span {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #6e8df0;
}

.arena-title-stack h2,
.legacy-statement h2 {
  margin: 16px 0 20px;
  font-size: clamp(2.8rem, 6vw, 6.6rem);
  line-height: 0.94;
  letter-spacing: -0.065em;
}

.arena-title-stack p {
  max-width: 680px;
  color: #aebbdc;
  font-size: 1rem;
  line-height: 1.75;
}

.world-cup-section {
  background:
    linear-gradient(135deg, rgba(23, 71, 232, 0.14), transparent 45%),
    #071126;
}

.fixture-board {
  display: grid;
  grid-template-columns: 1.25fr 1fr 1fr;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.fixture {
  min-height: 290px;
  padding: 32px;
  border-right: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
}

.fixture:last-child {
  border-right: 0;
}

.fixture-featured {
  background: var(--arena-blue);
}

.fixture-date {
  color: #b8c5e8;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
}

.fixture-featured .fixture-date {
  color: #d9e0ff;
}

.fixture-match {
  display: flex;
  flex-direction: column;
  margin: 34px 0 28px;
  font-size: clamp(1.5rem, 2.6vw, 2.7rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.fixture-match span {
  margin: 8px 0;
  color: var(--arena-red);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
}

.fixture-featured .fixture-match span {
  color: #fff;
}

.fixture p {
  margin-top: auto;
  color: #aebbdc;
  font-size: 0.82rem;
  line-height: 1.6;
}

.fixture-featured p {
  color: #e7ebff;
}

.squad-strip {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px 28px;
  margin-top: 42px;
  align-items: baseline;
}

.squad-strip > span {
  color: #6e8df0;
  font-size: 0.72rem;
  font-weight: 800;
}

.squad-strip > div {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
}

.squad-strip b {
  font-size: clamp(1rem, 1.6vw, 1.35rem);
}

.squad-strip p {
  grid-column: 2;
  color: #7483aa;
  font-size: 0.72rem;
}

.mbappe-section {
  background: #f5f7ff;
  color: #071126;
}

.mbappe-layout {
  display: grid;
  grid-template-columns: minmax(320px, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(40px, 8vw, 120px);
  align-items: center;
}

.athlete-image {
  position: relative;
  min-height: 690px;
  overflow: hidden;
  background: #dce4ff;
}

.athlete-image img {
  width: 100%;
  height: 100%;
  min-height: 690px;
  object-fit: cover;
  object-position: 52% 18%;
  filter: grayscale(100%) contrast(1.08);
}

.athlete-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 54%, rgba(23, 71, 232, 0.8));
  mix-blend-mode: multiply;
}

.athlete-number {
  position: absolute;
  right: -2px;
  bottom: -42px;
  z-index: 2;
  color: #fff;
  font-size: clamp(9rem, 18vw, 18rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.12em;
}

.athlete-story .arena-kicker {
  color: var(--arena-blue);
}

.athlete-story h2,
.wemby-copy h2 {
  font-size: clamp(4rem, 8vw, 8.6rem);
  line-height: 0.82;
  letter-spacing: -0.08em;
}

.athlete-story h2 em {
  -webkit-text-stroke-color: var(--arena-blue);
}

.athlete-intro {
  max-width: 590px;
  margin: 32px 0;
  color: #384664;
  font-size: 1.1rem;
  line-height: 1.75;
}

.athlete-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #bdc6dc;
  border-bottom: 1px solid #bdc6dc;
}

.athlete-facts div {
  padding: 24px 18px 22px 0;
}

.athlete-facts strong,
.athlete-facts span {
  display: block;
}

.athlete-facts strong {
  color: var(--arena-blue);
  font-size: clamp(2rem, 3.6vw, 3.4rem);
  line-height: 1;
}

.athlete-facts span {
  margin-top: 7px;
  color: #65708b;
  font-size: 0.68rem;
}

.athlete-story blockquote {
  max-width: 530px;
  margin-top: 34px;
  padding-left: 20px;
  border-left: 4px solid var(--arena-red);
  color: #15203a;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.7;
}

.wemby-section {
  min-height: 920px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 76% 50%, rgba(23, 71, 232, 0.42), transparent 33%),
    #030919;
}

.wemby-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(360px, 1.15fr);
  align-items: center;
  gap: 30px;
}

.wemby-copy {
  position: relative;
  z-index: 2;
}

.wemby-copy h2 em {
  font-size: 0.78em;
  -webkit-text-stroke-color: #8ea8ff;
}

.wemby-copy > p:not(.arena-kicker) {
  max-width: 590px;
  margin: 32px 0;
  color: #b4c0df;
  line-height: 1.8;
}

.wemby-data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 590px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.wemby-data div {
  padding: 18px 14px 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.wemby-data dt {
  color: #6e8df0;
  font-family: var(--font-mono);
  font-size: 0.63rem;
}

.wemby-data dd {
  margin-top: 5px;
  font-weight: 800;
}

.wemby-visual {
  position: relative;
  min-height: 680px;
}

.wemby-visual img {
  position: absolute;
  right: 0;
  bottom: -120px;
  z-index: 1;
  width: min(100%, 610px);
  max-height: 850px;
  object-fit: cover;
  object-position: top;
  filter: grayscale(100%) contrast(1.12);
  -webkit-mask-image: linear-gradient(to bottom, #000 75%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 75%, transparent 100%);
}

.wemby-word {
  position: absolute;
  top: 80px;
  right: -4vw;
  color: rgba(255, 255, 255, 0.05);
  font-size: clamp(7rem, 14vw, 13rem);
  font-weight: 900;
  letter-spacing: -0.1em;
  writing-mode: vertical-rl;
}

.sports-map-section {
  background: #f5f7ff;
  color: #071126;
}

.sports-map-section .arena-title-stack > span {
  color: var(--arena-blue);
}

.sports-map-section .arena-title-stack p {
  color: #4d5b77;
}

.sports-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.9fr 0.9fr;
  grid-template-rows: 330px 300px;
  gap: 1px;
  background: #aeb9d1;
  border: 1px solid #aeb9d1;
}

.sport-cell {
  position: relative;
  padding: 34px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  background: #fff;
}

.sport-cell::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.12;
  background: repeating-linear-gradient(135deg, var(--arena-blue) 0 2px, transparent 2px 22px);
}

.sport-cell > * {
  position: relative;
}

.sport-cell span {
  margin-bottom: auto;
  color: var(--arena-blue);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.sport-cell h3 {
  font-size: clamp(1.5rem, 2.7vw, 2.8rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.sport-cell p {
  max-width: 420px;
  margin-top: 14px;
  color: #50607e;
  font-size: 0.82rem;
  line-height: 1.6;
}

.sport-rugby {
  grid-row: span 2;
  color: #fff;
  background: var(--arena-blue);
}

.sport-rugby::before {
  opacity: 0.2;
  background:
    radial-gradient(circle at 75% 18%, transparent 0 70px, rgba(255,255,255,.7) 72px 74px, transparent 76px),
    repeating-linear-gradient(45deg, rgba(255,255,255,.2) 0 1px, transparent 1px 28px);
}

.sport-rugby span,
.sport-rugby p {
  color: #dfe5ff;
}

.sport-cycling {
  grid-column: span 2;
  background: #071126;
  color: #fff;
}

.sport-cycling::before {
  opacity: 0.36;
  background: linear-gradient(112deg, transparent 0 48%, var(--arena-red) 48% 52%, transparent 52%);
}

.sport-cycling p {
  color: #b7c2dd;
}

.legacy-section {
  background:
    linear-gradient(135deg, rgba(240, 68, 85, 0.1), transparent 36%),
    #071126;
}

.legacy-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.75fr);
  gap: 9vw;
}

.legacy-statement {
  position: sticky;
  top: 170px;
  align-self: start;
}

.legacy-statement h2 {
  max-width: 760px;
}

.legacy-points article {
  position: relative;
  padding: 38px 0 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.legacy-points b {
  color: var(--arena-red);
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

.legacy-points h3 {
  margin: 14px 0 12px;
  font-size: 2rem;
}

.legacy-points p {
  color: #aebbdc;
  line-height: 1.7;
}

.arena-closing {
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  background: var(--arena-blue);
}

.arena-closing .wrap {
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.arena-closing p {
  font-size: clamp(3.6rem, 9vw, 9rem);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.08em;
}

.arena-closing a {
  flex: 0 0 auto;
  font-size: 0.76rem;
  font-weight: 800;
}

.arena-page + .site-footer {
  margin-top: 0;
  background: #030919;
}

@media (max-width: 980px) {
  .arena-hero-grid,
  .mbappe-layout,
  .wemby-layout,
  .legacy-layout {
    grid-template-columns: 1fr;
  }

  .arena-hero-photo {
    background:
      linear-gradient(180deg, rgba(7, 17, 38, 0.04), rgba(7, 17, 38, 0.94)),
      url("../assets/images/arena/mbappe.jpg") 75% 12% / auto 78% no-repeat,
      linear-gradient(112deg, #071126 0 42%, #1539ae 42% 76%, #f04455 76%);
  }

  .arena-hero-grid {
    gap: 42px;
  }

  .arena-hero-score {
    max-width: 520px;
  }

  .fixture-board {
    grid-template-columns: 1fr;
  }

  .fixture {
    min-height: 240px;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  .fixture:last-child {
    border-bottom: 0;
  }

  .athlete-image,
  .athlete-image img {
    min-height: 620px;
  }

  .wemby-section {
    padding-bottom: 0;
  }

  .wemby-visual {
    min-height: 760px;
  }

  .wemby-visual img {
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }

  .sports-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, minmax(280px, auto));
  }

  .sport-rugby {
    grid-row: span 2;
  }

  .sport-cycling {
    grid-column: span 1;
  }

  .legacy-statement {
    position: static;
  }
}

@media (max-width: 640px) {
  .arena-body .brand-text {
    display: none;
  }

  .arena-body .site-header .wrap {
    padding-right: 14px;
    padding-left: 14px;
  }

  .arena-body .nav-utility {
    gap: 10px;
  }

  .arena-hero-grid {
    padding-top: 120px;
    padding-bottom: 40px;
  }

  .arena-hero h1 {
    font-size: clamp(3.7rem, 18vw, 5.8rem);
  }

  .arena-hero-photo {
    background:
      linear-gradient(180deg, rgba(7, 17, 38, 0.08), rgba(7, 17, 38, 0.96)),
      url("../assets/images/arena/mbappe.jpg") 74% 8% / auto 62% no-repeat,
      linear-gradient(112deg, #071126 0 34%, #1539ae 34% 74%, #f04455 74%);
  }

  .arena-hero-actions,
  .arena-btn {
    width: 100%;
  }

  .arena-index {
    top: 76px;
  }

  .arena-section {
    padding: 86px 0;
  }

  .arena-title-stack {
    margin-bottom: 42px;
  }

  .arena-title-stack h2,
  .legacy-statement h2 {
    font-size: clamp(2.8rem, 14vw, 4.6rem);
  }

  .fixture {
    padding: 26px 22px;
  }

  .squad-strip {
    grid-template-columns: 1fr;
  }

  .squad-strip p {
    grid-column: 1;
  }

  .athlete-image,
  .athlete-image img {
    min-height: 520px;
  }

  .athlete-story h2,
  .wemby-copy h2 {
    font-size: clamp(3.6rem, 18vw, 5.5rem);
  }

  .athlete-facts {
    grid-template-columns: 1fr;
  }

  .athlete-facts div {
    border-bottom: 1px solid #bdc6dc;
  }

  .athlete-facts div:last-child {
    border-bottom: 0;
  }

  .wemby-data,
  .sports-grid {
    grid-template-columns: 1fr;
  }

  .wemby-visual {
    min-height: 620px;
  }

  .wemby-visual img {
    width: 120%;
    max-width: none;
    bottom: -80px;
  }

  .sports-grid {
    grid-template-rows: none;
  }

  .sport-cell,
  .sport-rugby,
  .sport-cycling {
    grid-column: auto;
    grid-row: auto;
    min-height: 300px;
  }

  .arena-closing .wrap {
    min-height: 230px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .arena-page .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 700ms ease, transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .arena-page .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .athlete-image img,
  .wemby-visual img {
    transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 500ms ease;
  }

  .athlete-image:hover img {
    transform: scale(1.025);
    filter: grayscale(60%) contrast(1.08);
  }
}
```

## css\core.css

```css
/* ==========================================================================
   PROJECT HEXAGONE — CORE DESIGN SYSTEM
   L'Empire Républicain Français — Digital Archive
   ========================================================================== */

@font-face {
  font-family: 'Marianne';
  src: local('Arial');
}

:root {
  /* === 色彩矩阵 / Color Matrix === */
  --c-navy-950: #050b14;
  --c-navy-900: #0a1626;
  --c-navy-850: #0e1c30;
  --c-navy-800: #122340;
  --c-navy-700: #1a3155;
  --c-navy-600: #244270;
  --c-navy-500: #335a94;

  --c-gold-100: #f5ecd4;
  --c-gold-200: #e8d4a0;
  --c-gold-300: #d4af6a;
  --c-gold-400: #c79a4b;
  --c-gold-500: #b08838;
  --c-gold-600: #8c6c28;

  --c-bone-50: #f7f4ec;
  --c-bone-100: #efe9d8;
  --c-bone-200: #ddd3b8;

  --c-coral-500: #b8442f;
  --c-coral-600: #8f3322;

  --c-ink: #0a1626;
  --c-ink-soft: #4a5568;
  --c-paper: #f7f4ec;

  /* === 语义映射 / Semantic === */
  --bg-primary: var(--c-navy-950);
  --bg-surface: var(--c-navy-900);
  --bg-surface-raised: var(--c-navy-850);
  --bg-paper: var(--c-bone-50);

  --text-primary: var(--c-bone-50);
  --text-secondary: rgba(247, 244, 236, 0.62);
  --text-tertiary: rgba(247, 244, 236, 0.38);
  --text-on-paper: var(--c-ink);
  --text-on-paper-soft: var(--c-ink-soft);

  --accent-gold: var(--c-gold-300);
  --accent-gold-bright: var(--c-gold-200);
  --accent-coral: var(--c-coral-500);

  --border-hairline: rgba(212, 175, 106, 0.18);
  --border-hairline-strong: rgba(212, 175, 106, 0.36);

  /* === 字体 / Typography === */
  --font-display: 'Marianne', 'Helvetica Neue', Arial, sans-serif;
  --font-body: 'Georgia', 'Noto Serif SC', 'Songti SC', serif;
  --font-mono: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace;
  --font-cjk: 'Noto Serif SC', 'Songti SC', 'PingFang SC', serif;

  /* === 间距与尺度 / Scale === */
  --hex-unit: 1px;
  --radius-sm: 2px;
  --radius-md: 4px;
  --max-width: 1320px;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-display);
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
}

/* 背景纹理：极细的等高线网格，呼应军用地图 */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(212, 175, 106, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 106, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  opacity: 0.6;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
ul, ol { list-style: none; }

::selection {
  background: var(--accent-gold);
  color: var(--c-ink);
}

/* === 排版尺度 === */
h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-primary);
}

.lang-zh, [lang="zh"] {
  font-family: var(--font-cjk);
}

.eyebrow {
  font-family: var(--font-display);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent-gold);
  display: flex;
  align-items: center;
  gap: 10px;
}

.eyebrow::before {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--accent-gold);
}

.trilingual {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.trilingual .zh {
  font-family: var(--font-cjk);
  font-size: 1em;
}

.trilingual .fr {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.58em;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.trilingual .en {
  font-family: var(--font-display);
  font-size: 0.42em;
  color: var(--text-tertiary);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

/* === 容器 === */
.wrap {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 48px;
  position: relative;
  z-index: 1;
}

@media (max-width: 900px) {
  .wrap { padding: 0 24px; }
}

/* === 通用按钮 === */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 28px;
  border: 1px solid var(--border-hairline-strong);
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-primary);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s var(--ease-out);
  position: relative;
}

.btn:hover {
  border-color: var(--accent-gold);
  background: rgba(212, 175, 106, 0.08);
}

.btn-solid {
  background: var(--accent-gold);
  color: var(--c-ink);
  border-color: var(--accent-gold);
}

.btn-solid:hover {
  background: var(--accent-gold-bright);
  box-shadow: 0 0 24px rgba(212, 175, 106, 0.25);
}

/* === 滚动条 === */
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--c-navy-700); border: 2px solid var(--bg-primary); }
::-webkit-scrollbar-thumb:hover { background: var(--c-gold-600); }

/* === 焦点可见性 === */
:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 3px;
}

/* === 减少动效偏好 === */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* === 分割线/勋章风格 === */
.medal-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 0 32px;
}

.medal-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border-hairline-strong), transparent);
}

/* === 数据标签风格（用于参数表） === */
.data-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 11px 0;
  border-bottom: 1px solid var(--border-hairline);
  font-size: 0.88rem;
}

.data-row dt {
  color: var(--text-secondary);
  font-size: 0.74rem;
  letter-spacing: 0.04em;
}

.data-row dd {
  font-family: var(--font-mono);
  color: var(--accent-gold-bright);
  font-weight: 600;
  text-align: right;
}
```

## css\inner.css

```css
/* ==========================================================================
   内页通用模块样式 / INNER PAGE GENERICS
   ========================================================================== */

.breadcrumb {
  padding: 110px 0 0;
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  color: var(--text-tertiary);
}

.breadcrumb a { color: var(--accent-gold); }
.breadcrumb a:hover { color: var(--accent-gold-bright); }

.page-hero {
  padding: 36px 0 72px;
  border-bottom: 1px solid var(--border-hairline);
  margin-bottom: 80px;
  position: relative;
}

.page-hero-num {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-tertiary);
  letter-spacing: 0.1em;
  margin-bottom: 18px;
}

.page-hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  margin-bottom: 14px;
}

.page-hero h1 .zh { font-family: var(--font-cjk); display: block; }

.page-hero .fr-sub {
  font-size: 1.1rem;
  font-style: italic;
  color: var(--accent-gold-bright);
  margin-bottom: 22px;
}

.page-hero .lede {
  max-width: 680px;
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.75;
}

.page-hero-accent {
  position: absolute;
  top: 0; left: 0;
  width: 56px;
  height: 4px;
}

/* === 子导航条（页内锚点） === */
.subnav {
  position: sticky;
  top: 76px;
  z-index: 50;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-hairline);
  padding: 14px 0;
  margin-bottom: 64px;
}

.subnav-list {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
}

.subnav-list::-webkit-scrollbar { display: none; }

.subnav-list a {
  white-space: nowrap;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 8px 16px;
  color: var(--text-secondary);
  border: 1px solid var(--border-hairline);
  transition: all 0.2s;
}

.subnav-list a:hover, .subnav-list a.active {
  color: var(--accent-gold-bright);
  border-color: var(--border-hairline-strong);
  background: var(--bg-surface);
}

/* === 装备 / 数据规格卡片 === */
.spec-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-hairline);
  padding: 32px;
  transition: border-color 0.3s;
}

.spec-card:hover { border-color: var(--border-hairline-strong); }

.spec-card .spec-tag {
  display: inline-block;
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border: 1px solid var(--border-hairline-strong);
  color: var(--accent-gold);
  margin-bottom: 16px;
}

.spec-card h3 {
  font-size: 1.3rem;
  margin-bottom: 4px;
}

.spec-card .spec-sub {
  font-size: 0.82rem;
  font-style: italic;
  color: var(--text-tertiary);
  margin-bottom: 20px;
}

.spec-card .spec-desc {
  font-size: 0.86rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 22px;
}

.spec-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

@media (max-width: 900px) {
  .spec-grid-2 { grid-template-columns: 1fr; }
}

.spec-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border-hairline);
  border: 1px solid var(--border-hairline);
}

@media (max-width: 900px) {
  .spec-grid-3 { grid-template-columns: 1fr; }
}

/* === 时间轴（外籍兵团 / 历史事件通用） === */
.timeline {
  position: relative;
  padding-left: 32px;
  border-left: 1px solid var(--border-hairline-strong);
}

.timeline-item {
  position: relative;
  padding-bottom: 48px;
}

.timeline-item:last-child { padding-bottom: 0; }

.timeline-item::before {
  content: '';
  position: absolute;
  left: -37.5px;
  top: 4px;
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 2px solid var(--accent-gold);
}

.timeline-item .tl-year {
  font-family: var(--font-mono);
  font-size: 0.84rem;
  color: var(--accent-gold-bright);
  font-weight: 700;
  margin-bottom: 6px;
}

.timeline-item h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.timeline-item p {
  font-size: 0.86rem;
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: 600px;
}

.timeline-item .tl-loc {
  display: inline-block;
  margin-top: 10px;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

/* === 统计条 / Stat strip === */
.stat-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border-hairline);
  border: 1px solid var(--border-hairline);
  margin-bottom: 80px;
}

@media (max-width: 800px) {
  .stat-strip { grid-template-columns: repeat(2, 1fr); }
}

.stat-strip .stat-cell {
  background: var(--bg-surface);
  padding: 28px 24px;
}

.stat-strip .stat-cell .num {
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-gold-bright);
  display: block;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-strip .stat-cell .label {
  font-size: 0.7rem;
  color: var(--text-tertiary);
  letter-spacing: 0.04em;
}

/* === 表格风格（参数对比） === */
.compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.86rem;
}

.compare-table th, .compare-table td {
  padding: 14px 18px;
  text-align: left;
  border-bottom: 1px solid var(--border-hairline);
}

.compare-table th {
  font-size: 0.66rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent-gold);
  font-weight: 700;
}

.compare-table td.num-cell {
  font-family: var(--font-mono);
  color: var(--accent-gold-bright);
}

.compare-table tbody tr:hover {
  background: var(--bg-surface);
}

/* === 进度条（用于战力对比可视化） === */
.bar-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.bar-row .bar-label {
  width: 140px;
  flex-shrink: 0;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.bar-row .bar-track {
  flex: 1;
  height: 6px;
  background: var(--bg-surface-raised);
  position: relative;
  overflow: hidden;
}

.bar-row .bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--c-gold-600), var(--accent-gold));
  width: 0;
  transition: width 1.1s var(--ease-out);
}

.bar-row.is-visible .bar-fill { width: var(--bar-pct, 50%); }

.bar-row .bar-val {
  width: 46px;
  text-align: right;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--accent-gold-bright);
}

/* === 装备图鉴标签云 === */
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.tag-row span {
  font-size: 0.68rem;
  padding: 5px 11px;
  border: 1px solid var(--border-hairline);
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

/* === 双栏图文 === */
.split-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

@media (max-width: 900px) {
  .split-block { grid-template-columns: 1fr; gap: 32px; }
}

.split-block.reverse { direction: rtl; }
.split-block.reverse > * { direction: ltr; }

.split-visual {
  aspect-ratio: 4/3;
  background: var(--bg-surface);
  border: 1px solid var(--border-hairline);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

/* === 三语内容块系统 / TRILINGUAL CONTENT BLOCKS === */
[data-lang-block] { display: none; }
html[data-lang="zh"] [data-lang-block="zh"],
html:not([data-lang]) [data-lang-block="zh"] { display: block; }
html[data-lang="fr"] [data-lang-block="fr"] { display: block; }
html[data-lang="en"] [data-lang-block="en"] { display: block; }

.lang-block-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  color: var(--text-tertiary);
  border: 1px solid var(--border-hairline);
  padding: 2px 7px;
  margin-bottom: 10px;
  text-transform: uppercase;
}
.entity-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-hairline);
  padding: 26px;
}

.entity-card .entity-flag-bar {
  height: 3px;
  width: 40px;
  margin-bottom: 18px;
}

.entity-card h4 {
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.entity-card .entity-role {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-gold);
  margin-bottom: 14px;
}

.entity-card p {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

## css\nav.css

```css
/* ==========================================================================
   NAVIGATION — 顶部导航 + 六边形矩阵枢纽
   ========================================================================== */

.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(5, 11, 20, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-hairline);
  transition: border-color 0.4s var(--ease-out);
}

.site-header .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.brand-text .fr-name {
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-text .sub-name {
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  color: var(--accent-gold);
  text-transform: uppercase;
  margin-top: 2px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.main-nav a {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 10px 16px;
  color: var(--text-secondary);
  border-bottom: 2px solid transparent;
  transition: color 0.25s, border-color 0.25s;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--accent-gold-bright);
  border-bottom-color: var(--accent-gold);
}

.nav-utility {
  display: flex;
  align-items: center;
  gap: 18px;
}

.lang-toggle {
  display: flex;
  border: 1px solid var(--border-hairline-strong);
  border-radius: 2px;
  overflow: hidden;
}

.lang-toggle button {
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  font-family: var(--font-display);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 7px 11px;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-toggle button.active {
  background: var(--accent-gold);
  color: var(--c-ink);
}

.lang-toggle button:not(.active):hover {
  color: var(--accent-gold-bright);
  background: rgba(212,175,106,0.08);
}

.nav-burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav-burger span {
  width: 22px;
  height: 1.5px;
  background: var(--text-primary);
}

@media (max-width: 1080px) {
  .main-nav { display: none; }
  .nav-burger { display: flex; }
  .main-nav.nav-open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 76px;
    left: 0; right: 0;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-hairline-strong);
    padding: 8px 24px 20px;
    gap: 0;
  }
  .main-nav.nav-open a {
    padding: 14px 0;
    border-bottom: 1px solid var(--border-hairline);
    width: 100%;
  }
}

/* ==========================================================================
   六边形矩阵枢纽 / THE HEXAGONE MATRIX HUB
   ========================================================================== */

.hexgrid-section {
  position: relative;
  padding: 140px 0 120px;
  z-index: 1;
}

.hexgrid-wrap {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1px;
  background: var(--border-hairline);
  border: 1px solid var(--border-hairline);
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 980px) {
  .hexgrid-wrap { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 600px) {
  .hexgrid-wrap { grid-template-columns: repeat(2, 1fr); }
}

.hex-tile {
  background: var(--bg-surface);
  position: relative;
  aspect-ratio: 1 / 1.12;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 26px;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.4s var(--ease-out);
}

.hex-tile::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(212,175,106,0.1), transparent 60%);
  opacity: 0;
  transition: opacity 0.4s var(--ease-out);
}

.hex-tile:hover {
  background: var(--bg-surface-raised);
}

.hex-tile:hover::before {
  opacity: 1;
}

.hex-tile .hex-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-tertiary);
  letter-spacing: 0.06em;
}

.hex-tile .hex-icon {
  width: 36px;
  height: 36px;
  color: var(--accent-gold);
  opacity: 0.9;
  transition: transform 0.4s var(--ease-out);
}

.hex-tile:hover .hex-icon {
  transform: translateY(-3px);
}

.hex-tile .hex-titles {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.hex-tile .hex-zh {
  font-family: var(--font-cjk);
  font-size: 1.28rem;
  font-weight: 700;
  color: var(--text-primary);
}

.hex-tile .hex-fr {
  font-size: 0.74rem;
  font-style: italic;
  color: var(--accent-gold-bright);
}

.hex-tile .hex-en {
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}

.hex-tile .hex-desc {
  font-size: 0.76rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-top: 10px;
}

.hex-tile .hex-arrow {
  position: absolute;
  bottom: 24px;
  right: 26px;
  font-size: 1.1rem;
  color: var(--accent-gold);
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.3s var(--ease-out);
}

.hex-tile:hover .hex-arrow {
  opacity: 1;
  transform: translateX(0);
}

.hex-tile { border-top: 2px solid transparent; }
.hex-tile[data-mod="arsenal"] { border-top-color: var(--c-coral-500); }
.hex-tile[data-mod="statecraft"] { border-top-color: var(--c-gold-300); }
.hex-tile[data-mod="territories"] { border-top-color: #3b7a9e; }
.hex-tile[data-mod="arena"] { border-top-color: #5a8f5a; }
.hex-tile[data-mod="epochs"] { border-top-color: #9a7a4f; }
.hex-tile[data-mod="aesthetics"] { border-top-color: #a05a8c; }

/* === 页脚 === */
.site-footer {
  border-top: 1px solid var(--border-hairline);
  padding: 56px 0 40px;
  margin-top: 80px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

@media (max-width: 800px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

.footer-col h4 {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 16px;
}

.footer-col a, .footer-col p {
  display: block;
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: 9px;
  line-height: 1.5;
}

.footer-col a:hover { color: var(--accent-gold-bright); }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid var(--border-hairline);
  font-size: 0.7rem;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
}

@media (max-width: 700px) {
  .footer-bottom { flex-direction: column; gap: 10px; text-align: center; }
}
```

## css\sections.css

```css
/* ==========================================================================
   REVEAL ANIMATIONS + HOMEPAGE / SECTION GENERIC STYLES
   ========================================================================== */

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.reveal-stagger.is-visible > *:nth-child(1) { transition-delay: 0.02s; }
.reveal-stagger.is-visible > *:nth-child(2) { transition-delay: 0.08s; }
.reveal-stagger.is-visible > *:nth-child(3) { transition-delay: 0.14s; }
.reveal-stagger.is-visible > *:nth-child(4) { transition-delay: 0.2s; }
.reveal-stagger.is-visible > *:nth-child(5) { transition-delay: 0.26s; }
.reveal-stagger.is-visible > *:nth-child(6) { transition-delay: 0.32s; }
.reveal-stagger.is-visible > * { opacity: 1; transform: translateY(0); }

/* ==========================================================================
   HERO — 首页主视觉
   ========================================================================== */

.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding: 110px 0 60px;
  overflow: hidden;
}

.hero-bg-line {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.5;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 880px;
}

.hero-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  color: var(--accent-gold);
  text-transform: uppercase;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero-tag .dot {
  width: 6px; height: 6px;
  background: var(--accent-coral);
  border-radius: 50%;
  display: inline-block;
}

.hero h1 {
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 1.08;
  margin-bottom: 10px;
}

.hero h1 .zh-main {
  font-family: var(--font-cjk);
  display: block;
}

.hero .fr-line {
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  font-style: italic;
  color: var(--accent-gold-bright);
  margin-bottom: 28px;
  font-weight: 400;
}

.hero p.lede {
  font-size: 1.08rem;
  color: var(--text-secondary);
  max-width: 640px;
  line-height: 1.75;
  margin-bottom: 44px;
}

.hero-cta-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-stats {
  position: absolute;
  bottom: 60px;
  right: 48px;
  display: flex;
  gap: 48px;
  z-index: 2;
}

@media (max-width: 980px) {
  .hero-stats { position: static; margin-top: 64px; flex-wrap: wrap; gap: 32px; }
}

.hero-stat .num {
  font-family: var(--font-mono);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-gold-bright);
  display: block;
}

.hero-stat .label {
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--text-tertiary);
  text-transform: uppercase;
  margin-top: 4px;
}

/* ==========================================================================
   章节通用 / SECTION GENERICS
   ========================================================================== */

.section {
  padding: 100px 0;
  position: relative;
  z-index: 1;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 56px;
  gap: 40px;
  flex-wrap: wrap;
}

.section-head h2 {
  font-size: clamp(1.8rem, 3.4vw, 2.6rem);
}

.section-head h2 .zh { font-family: var(--font-cjk); }

.section-head .section-desc {
  max-width: 420px;
  color: var(--text-secondary);
  font-size: 0.92rem;
  line-height: 1.65;
}

.brief-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border-hairline);
  border: 1px solid var(--border-hairline);
}

@media (max-width: 900px) {
  .brief-grid { grid-template-columns: 1fr; }
}

.brief-card {
  background: var(--bg-surface);
  padding: 32px;
  transition: background 0.3s;
}

.brief-card:hover { background: var(--bg-surface-raised); }

.brief-card .brief-eyebrow {
  font-size: 0.66rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 14px;
}

.brief-card h3 {
  font-size: 1.15rem;
  margin-bottom: 12px;
}

.brief-card p {
  font-size: 0.86rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.doctrine-quote {
  border-left: 2px solid var(--accent-gold);
  padding: 8px 0 8px 32px;
  margin: 0 auto;
  max-width: 760px;
}

.doctrine-quote p {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.5;
  color: var(--text-primary);
}

.doctrine-quote cite {
  display: block;
  margin-top: 18px;
  font-style: normal;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}
```

## index.html

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Project Hexagone：从军工、政治、地理、体育、历史与文化六个维度理解法国。">
    <title>Project Hexagone | 法国全维度数字档案</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## js\arena-v2.js

```javascript
/* ==========================================================================
   ARENA V2 — SPORT TERRITORY SWITCHER
   ========================================================================== */

(function () {
  'use strict';

  var territoryData = {
    paris: {
      number: '01',
      eyebrow: 'PARIS · ÎLE-DE-FRANCE',
      title: '世界赛事的首都舞台',
      copy: '法网、巴黎奥运会、法兰西体育场与巴黎俱乐部，把竞技、媒体、时尚和城市品牌放在同一画面中。',
      items: ['Roland-Garros', 'Stade de France', 'Paris 2024']
    },
    alps: {
      number: '02',
      eyebrow: 'ALPES · HAUTE MONTAGNE',
      title: '耐力运动的自然剧场',
      copy: '阿尔卑斯山口让环法自行车赛拥有无法复制的地理戏剧性，也连接滑雪、登山与法国户外文化。',
      items: ['Tour de France', 'Cyclisme', 'Sports d’hiver']
    },
    southwest: {
      number: '03',
      eyebrow: 'SUD-OUEST · TERRE DE RUGBY',
      title: '橄榄球的社会腹地',
      copy: '从图卢兹到波尔多，俱乐部、学校与地方身份共同维持法国最浓厚的橄榄球文化。',
      items: ['Top 14', 'Toulouse', 'Six Nations']
    },
    lemans: {
      number: '04',
      eyebrow: 'LE MANS · SARTHE',
      title: '速度与工程的试验场',
      copy: '勒芒 24 小时把耐力、机械可靠性和汽车工业创新转化为法国最持久的国际赛事资产之一。',
      items: ['24 Heures', 'Endurance', 'Innovation']
    },
    coast: {
      number: '05',
      eyebrow: 'LITTORAL · EAUX FRANÇAISES',
      title: '从大西洋到地中海',
      copy: '帆船、冲浪与水上项目把法国漫长海岸线带入竞技体系，也让体育与度假文化相互强化。',
      items: ['Voile', 'Surf', 'Méditerranée']
    }
  };

  var tabs = document.querySelectorAll('.territory-tab');
  var panel = document.querySelector('[data-territory-panel]');

  if (!tabs.length || !panel) return;

  var number = panel.querySelector('.territory-number');
  var eyebrow = panel.querySelector('[data-territory-eyebrow]');
  var title = panel.querySelector('[data-territory-title]');
  var copy = panel.querySelector('[data-territory-copy]');
  var list = panel.querySelector('[data-territory-list]');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var key = tab.getAttribute('data-territory');
      var data = territoryData[key];
      if (!data) return;

      tabs.forEach(function (item) {
        item.classList.toggle('is-active', item === tab);
      });

      number.textContent = data.number;
      eyebrow.textContent = data.eyebrow;
      title.textContent = data.title;
      copy.textContent = data.copy;
      list.innerHTML = data.items.map(function (item) {
        return '<li>' + item + '</li>';
      }).join('');
    });
  });
})();
```

## js\core.js

```javascript
/* ==========================================================================
   PROJECT HEXAGONE — SHARED CORE SCRIPT
   ========================================================================== */

(function () {
  'use strict';

  var burger = document.querySelector('.nav-burger');
  var mainNav = document.querySelector('.main-nav');
  if (burger && mainNav) {
    burger.addEventListener('click', function () {
      var open = mainNav.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  var LANG_KEY = 'hexagone-lang';
  var supported = ['zh', 'fr', 'en'];

  function getLang() {
    return localStorage.getItem(LANG_KEY) || 'zh';
  }

  function setLang(lang) {
    if (supported.indexOf(lang) === -1) return;
    localStorage.setItem(LANG_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    /* 旧版短文本 attribute 映射（仍兼容） */
    document.querySelectorAll('[data-zh]').forEach(function (el) {
      var val = el.dataset[lang];
      if (val !== undefined) el.textContent = val;
    });
    /* 新版内容块切换：data-lang-block="zh|fr|en" 整块显隐 */
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.style.display = (el.dataset.langBlock === lang) ? '' : 'none';
    });
  }

  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.dataset.lang);
    });
  });

  applyLang(getLang());

  var revealEls = document.querySelectorAll('.reveal, .bar-row');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      header.style.borderBottomColor = y > 40
        ? 'var(--border-hairline-strong)'
        : 'var(--border-hairline)';
    }, { passive: true });
  }

  window.Hexagone = window.Hexagone || {};
  window.Hexagone.getLang = getLang;
  window.Hexagone.setLang = setLang;
  window.Hexagone.applyLang = applyLang;
})();
```

## pages\aesthetics.html

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="法国工业与文化美学：空客、TGV、高级定制、米其林与生活艺术。">
    <title>文化与工业美学 L'Esthétique | Project Hexagone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## pages\arena.html

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0; url=sport.html">
    <link rel="canonical" href="sport.html">
    <title>Sport | Project Hexagone</title>
  </head>
  <body>
    <p><a href="sport.html">前往 Sport 页面</a></p>
  </body>
</html>
```

## pages\arsenal.html

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="法国军工与战略主权：阵风战机、核潜艇、陆战系统与外籍兵团。">
    <title>军工与霸权 L'Arsenal | Project Hexagone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## pages\epochs.html

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="法国历史的决定性断裂：革命、帝国、凡尔登、自由法国与第五共和国。">
    <title>历史引擎 Les Époques | Project Hexagone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## pages\sport.html

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="法国体育体系、2026 世界杯、Kylian Mbappé、Victor Wembanyama 与世界级赛事。">
    <title>Sport | Project Hexagone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## pages\statecraft.html

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="法国地缘政治与战略自主：欧洲、非洲、印太与核威慑。">
    <title>地缘与政治 La Statecraft | Project Hexagone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## pages\territories.html

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="法国海外领土、全球海洋专属经济区与战略地理纵深。">
    <title>全球地理纵深 Les Territoires | Project Hexagone</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## src\styles.css

```css
@import "leaflet/dist/leaflet.css";
@import "tailwindcss";

@theme {
  --font-sans: "Arial", "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-mono: "SFMono-Regular", "Cascadia Code", "Consolas", monospace;
}

@layer base {
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: #f4f6fa;
  }

  body {
    margin: 0;
    min-width: 320px;
    overflow-x: hidden;
    background: #f4f6fa;
    color: #111a2d;
    font-family: var(--font-sans);
    text-rendering: optimizeLegibility;
  }

  main {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  main p {
    overflow-wrap: anywhere;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
  }

  ::selection {
    background: #1f55d5;
    color: #fff;
  }

  :focus-visible {
    outline: 2px solid #1f55d5;
    outline-offset: 3px;
  }
}

@layer components {
  .nav-link {
    border-bottom: 2px solid transparent;
    padding: 10px 13px;
    color: rgb(255 255 255 / 0.58);
    font-size: 0.72rem;
    font-weight: 700;
    transition: color 180ms ease, border-color 180ms ease;
  }

  .nav-link:hover,
  .nav-link.is-active {
    border-bottom-color: #8da8ff;
    color: #fff;
  }

  .eyebrow {
    color: #1f55d5;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.13em;
  }

  .eyebrow.accent {
    color: var(--accent);
  }

  .section-title {
    margin-top: 1rem;
    max-width: 900px;
    font-size: clamp(2.7rem, 4.8vw, 5.2rem);
    font-weight: 900;
    line-height: 0.98;
    letter-spacing: -0.065em;
  }

  .primary-link {
    display: inline-flex;
    align-items: center;
    gap: 1.5rem;
    border-bottom: 2px solid #1f55d5;
    padding-block: 0.9rem;
    color: #0b1730;
    font-size: 0.78rem;
    font-weight: 800;
  }

  .module-tile {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #cbd5e1;
    border-bottom: 1px solid #cbd5e1;
    background: #fff;
    padding: 1.5rem;
    transition: background 200ms ease, transform 200ms ease;
  }

  .module-tile:hover {
    background: #e8eefc;
    transform: translateY(-3px);
  }

  .topic-page {
    background: #f4f6fa;
    color: #111a2d;
  }

  .region-button {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #cbd5e1;
    background: #fff;
    padding: 1.35rem 1.5rem;
    text-align: left;
    color: #64748b;
    font-size: 0.8rem;
    font-weight: 800;
    cursor: pointer;
    transition: background 180ms ease, color 180ms ease;
  }

  .region-button:hover,
  .region-button.is-active {
    background: var(--accent);
    color: #fff;
  }

  .timeline-button {
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem;
    border: 0;
    border-bottom: 1px solid #cbd5e1;
    background: transparent;
    padding: 1.4rem 0;
    text-align: left;
    cursor: pointer;
  }

  .timeline-button span {
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: 0.72rem;
  }

  .timeline-button b {
    color: #64748b;
  }

  .timeline-button.is-active b,
  .timeline-button:hover b {
    color: #111a2d;
  }
}

@media (max-width: 640px) {
  .header-actions {
    flex: 0 0 auto;
    gap: 0.35rem;
  }

  .language-switcher button {
    padding-inline: 0.55rem;
  }

  .language-switcher {
    display: none;
  }

  .menu-toggle {
    position: absolute;
    top: 1.1rem;
    right: 0.75rem;
    display: grid !important;
    flex: 0 0 2.5rem;
  }

  h1 {
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .topic-page h1 {
    font-size: clamp(3rem, 14vw, 3.75rem) !important;
    line-height: 0.94 !important;
    word-break: break-all;
  }

  .section-title {
    font-size: clamp(2.8rem, 14vw, 4.5rem);
  }

  .module-tile {
    min-height: 280px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* ==========================================================================
   DARK ARCHIVE THEME
   ========================================================================== */

html,
body {
  background: #050b14;
  color: #f2f5fb;
}

.site-page,
.topic-page {
  background:
    linear-gradient(rgba(103, 128, 177, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 128, 177, 0.035) 1px, transparent 1px),
    #07101d;
  background-size: 72px 72px;
  color: #f2f5fb;
}

.site-page .bg-white,
.topic-page .bg-white {
  background-color: #0a1423 !important;
}

.site-page .bg-\[\#f4f6fa\],
.topic-page .bg-\[\#f4f6fa\] {
  background-color: #07101d !important;
}

.site-page .bg-\[var\(--pale\)\],
.topic-page .bg-\[var\(--pale\)\] {
  background-color: #0e1b2e !important;
}

.site-page .bg-slate-300,
.topic-page .bg-slate-300 {
  background-color: #24344e !important;
}

.site-page .border-slate-200,
.site-page .border-slate-300,
.topic-page .border-slate-200,
.topic-page .border-slate-300 {
  border-color: #24344e !important;
}

.site-page .text-\[\#111a2d\],
.topic-page .text-\[\#111a2d\],
.site-page .text-slate-950,
.topic-page .text-slate-950 {
  color: #f2f5fb !important;
}

.site-page .text-slate-400,
.topic-page .text-slate-400 {
  color: #7f90ad !important;
}

.site-page .text-slate-500,
.site-page .text-slate-600,
.topic-page .text-slate-500,
.topic-page .text-slate-600 {
  color: #a6b2c8 !important;
}

.site-page img,
.topic-page img {
  border: 1px solid #263754;
  filter: saturate(0.84) contrast(1.04) brightness(0.88);
}

.module-tile {
  background: #0a1423;
  border-color: #24344e;
  color: #f2f5fb;
}

.module-tile:hover {
  background: #101e33;
}

.primary-link {
  color: #f2f5fb;
}

.region-button {
  background: #0a1423;
  border-color: #24344e;
  color: #a6b2c8;
}

.timeline-button {
  border-color: #24344e;
}

.timeline-button b {
  color: #a6b2c8;
}

.timeline-button.is-active b,
.timeline-button:hover b {
  color: #f2f5fb;
}

.site-footer {
  background: #050b14 !important;
  border-color: #24344e !important;
  color: #f2f5fb;
}

.site-footer .border-slate-200 {
  border-color: #24344e !important;
}

.site-footer .text-slate-950 {
  color: #f2f5fb !important;
}

.site-footer .text-slate-400,
.site-footer .text-slate-500,
.site-footer .text-slate-600 {
  color: #93a2bc !important;
}

.nav-link {
  min-width: 86px;
  text-align: center;
  white-space: nowrap;
}

.nav-link.is-active {
  color: #ffffff;
}

.home-hero-title {
  max-width: 680px;
  font-size: clamp(3.2rem, 4vw, 4.6rem);
  line-height: 0.96;
  text-wrap: balance;
}

.home-hero-title-fr,
.home-hero-title-en {
  letter-spacing: -0.065em;
}

.home-hero-visual {
  overflow: hidden;
  border: 1px solid #263754;
  background: #03070d;
}

.home-depth-rail {
  border-color: #24344e;
  background: #081321;
}

.home-depth-item {
  min-height: 220px;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 14px;
  border-right: 1px solid #24344e;
  border-bottom: 1px solid #24344e;
  padding: 24px;
  color: #dfe6f2;
  transition: background 180ms ease, color 180ms ease;
}

.home-depth-item > svg {
  color: #628cff;
}

.home-depth-item h2 {
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.35;
}

.home-depth-item p {
  color: #93a2bc;
  font-size: 0.75rem;
  line-height: 1.75;
}

.home-depth-item:hover {
  background: #101e33;
  color: #ffffff;
}

/* ========================================================================== 
   UNIQUE PAGE SYSTEMS
   ========================================================================== */

.arsenal-command-hero {
  min-height: 720px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(227, 77, 56, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(227, 77, 56, 0.05) 1px, transparent 1px),
    #07101d;
  background-size: 56px 56px;
}

.arsenal-hero-frame {
  aspect-ratio: 16 / 9;
  display: grid;
  place-items: center;
  border: 1px solid #39465b;
  background: #03070d;
  padding: 10px;
}

.arsenal-hero-frame img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 0;
  filter: saturate(0.88) contrast(1.05) brightness(0.92);
}

.arsenal-capability-index {
  background: #0a111c;
}

.military-item {
  min-height: 145px;
}

.territories-map-page {
  background: #06111b;
}

.territory-map-shell {
  max-width: 1440px;
  margin: 0 auto;
  border: 1px solid #263754;
  background: #081321;
}

.territory-map-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 76px;
  padding: 14px 18px;
  border-bottom: 1px solid #263754;
}

.territory-map-toolbar button {
  border: 1px solid #32445f;
  padding: 9px 13px;
  color: #9fadc4;
  background: #0a1626;
  font-size: 0.7rem;
  font-weight: 800;
  cursor: pointer;
}

.territory-map-toolbar button:hover,
.territory-map-toolbar button.is-active {
  border-color: var(--accent);
  background: var(--accent);
  color: #041017;
}

.territory-map-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  min-height: 720px;
}

.territory-map-canvas {
  min-width: 0;
  border-right: 1px solid #263754;
}

.territory-map-canvas .leaflet-container {
  width: 100%;
  height: 720px;
  background: #06101c;
  font-family: var(--font-sans);
}

.territory-map-canvas .leaflet-tile-pane {
  filter: grayscale(0.74) brightness(0.62) contrast(1.18) saturate(0.55) hue-rotate(165deg);
}

.territory-map-canvas .leaflet-control-zoom a {
  border-color: #32445f;
  background: #0a1626;
  color: #fff;
}

.territory-map-canvas .leaflet-control-attribution {
  background: rgba(5, 11, 20, 0.82);
  color: #7f90ad;
}

.territory-map-canvas .leaflet-control-attribution a {
  color: #9bb4ed;
}

.territory-map-canvas .leaflet-popup-content-wrapper,
.territory-map-canvas .leaflet-popup-tip {
  background: #0b1728;
  color: #eaf0fa;
}

.territory-map-canvas .leaflet-popup-content {
  line-height: 1.65;
}

.territory-city-panel {
  padding: 34px 28px;
  background:
    linear-gradient(rgba(32, 169, 202, 0.04) 1px, transparent 1px),
    #081321;
  background-size: 100% 38px;
}

.territory-city-panel dl {
  border-top: 1px solid #263754;
}

.territory-city-panel dl div {
  display: grid;
  grid-template-columns: 70px 1fr;
  gap: 16px;
  padding: 17px 0;
  border-bottom: 1px solid #263754;
}

.territory-city-panel dt {
  color: #70809c;
  font-size: 0.68rem;
}

.territory-city-panel dd {
  color: #d7dfed;
  font-size: 0.78rem;
  line-height: 1.6;
}

.territory-relief-section {
  border-color: #263754 !important;
  background: #081321;
}

.territory-relief-section h2,
.territory-underwater-section h2,
.heritage-continuum h2,
.cinema-cuisine-feature h2 {
  text-wrap: balance;
}

.territory-relief-nav {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid #2b3c58;
  border-left: 1px solid #2b3c58;
}

.territory-relief-nav button {
  min-height: 84px;
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: center;
  gap: 10px;
  border: 0;
  border-right: 1px solid #2b3c58;
  border-bottom: 1px solid #2b3c58;
  padding: 14px 16px;
  text-align: left;
  color: #8d9bb4;
  background: #081321;
  cursor: pointer;
  transition: background 180ms ease, color 180ms ease;
}

.territory-relief-nav button span {
  color: #20a9ca;
  font-family: var(--font-mono);
  font-size: 0.64rem;
}

.territory-relief-nav button b {
  font-size: 0.78rem;
}

.territory-relief-nav button:hover,
.territory-relief-nav button.is-active {
  color: #eef7fa;
  background: #102238;
}

.territory-relief-stage {
  min-height: 570px;
  display: grid;
  align-content: space-between;
  padding: 50px;
  border-left: 1px solid #263754;
  color: #dce8f2;
  background:
    radial-gradient(circle at 72% 24%, rgb(32 169 202 / 0.16), transparent 28%),
    linear-gradient(145deg, #0e2133, #07111d 62%);
}

.territory-relief-stage > svg {
  color: #20a9ca;
}

.territory-relief-stage p {
  color: #20a9ca;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 800;
}

.territory-relief-stage h3 {
  margin-top: 18px;
  max-width: 720px;
  font-size: clamp(3.6rem, 7vw, 7.6rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.075em;
}

.territory-relief-stage span {
  max-width: 680px;
  display: block;
  margin-top: 26px;
  color: #9aaac1;
  font-size: 0.88rem;
  line-height: 2;
}

.territory-underwater-section {
  background: #06111b;
}

.territory-underwater-frame {
  aspect-ratio: 16 / 9;
  border: 1px solid #29435a;
  background: #020b12;
  padding: 8px;
}

.territory-underwater-frame img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.territory-underwater-zones {
  border-top: 1px solid #29435a;
}

.territory-underwater-zones div {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 18px;
  padding: 14px 0;
  border-bottom: 1px solid #29435a;
}

.territory-underwater-zones dt {
  color: #20a9ca;
  font-family: var(--font-mono);
  font-size: 0.68rem;
}

.territory-underwater-zones dd {
  color: #c7d5e5;
  font-size: 0.78rem;
}

.heritage-continuum {
  border-color: #3b3030 !important;
  background: #0d1118;
}

.heritage-continuum-frame {
  aspect-ratio: 16 / 9;
  border: 1px solid #50362f;
  background: #080b10;
  padding: 8px;
}

.heritage-continuum-frame img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  filter: saturate(0.78) contrast(1.06) brightness(0.88);
}

.heritage-site-rail {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid #4a3530;
}

.heritage-site-rail article {
  min-height: 230px;
  padding: 24px 22px;
  border-right: 1px solid #4a3530;
}

.heritage-site-rail article:last-child {
  border-right: 0;
}

.heritage-site-rail span {
  color: #c2664f;
  font-family: var(--font-mono);
  font-size: 0.68rem;
}

.heritage-site-rail h3 {
  margin-top: 22px;
  color: #f1ece9;
  font-size: 1.08rem;
  font-weight: 900;
}

.heritage-site-rail p {
  margin-top: 16px;
  color: #a89c9a;
  font-size: 0.76rem;
  line-height: 1.8;
}

.cinema-cuisine-feature {
  border-color: #3f2d3a !important;
  background: #0d1019;
}

.cinema-cuisine-frame {
  min-height: 680px;
  border-right: 1px solid #3f2d3a;
  background: #070a10;
  padding: 8px;
}

.cinema-cuisine-frame img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.cinema-cuisine-feature h2 {
  font-size: clamp(2.7rem, 4vw, 4.5rem);
}

.cinema-cuisine-lenses {
  border-top: 1px solid #4a3041;
}

.cinema-cuisine-lenses div {
  display: grid;
  grid-template-columns: 82px 1fr;
  gap: 18px;
  padding: 15px 0;
  border-bottom: 1px solid #4a3041;
}

.cinema-cuisine-lenses b {
  color: #ce6599;
  font-size: 0.72rem;
}

.cinema-cuisine-lenses span {
  color: #a99aaa;
  font-size: 0.74rem;
  line-height: 1.7;
}

@media (max-width: 1023px) {
  .arsenal-command-hero {
    min-height: auto;
  }

  .territory-map-layout {
    grid-template-columns: 1fr;
  }

  .territory-map-canvas {
    border-right: 0;
    border-bottom: 1px solid #263754;
  }

  .territory-map-canvas .leaflet-container {
    height: 600px;
  }

  .territory-relief-stage {
    min-height: 430px;
    border-top: 1px solid #263754;
    border-left: 0;
  }

  .heritage-site-rail {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .heritage-site-rail article:nth-child(2) {
    border-right: 0;
  }

  .heritage-site-rail article:nth-child(-n + 2) {
    border-bottom: 1px solid #4a3530;
  }

  .cinema-cuisine-frame {
    min-height: auto;
    aspect-ratio: 16 / 9;
    border-right: 0;
    border-bottom: 1px solid #3f2d3a;
  }
}

@media (max-width: 640px) {
  .home-hero-title {
    font-size: clamp(3rem, 14vw, 3.75rem);
    line-height: 0.94;
  }

  .home-depth-item {
    min-height: 180px;
    padding: 20px;
  }

  .territory-map-shell {
    border-right: 0;
    border-left: 0;
  }

  .territory-map-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .territory-map-canvas .leaflet-container {
    height: 520px;
  }

  .territory-city-panel {
    padding: 28px 20px;
  }

  .territory-relief-nav {
    grid-template-columns: 1fr;
  }

  .territory-relief-nav button {
    min-height: 68px;
  }

  .territory-relief-stage {
    min-height: 390px;
    padding: 28px 20px;
  }

  .territory-relief-stage h3 {
    font-size: clamp(3rem, 16vw, 4.5rem);
  }

  .territory-underwater-zones div,
  .cinema-cuisine-lenses div {
    grid-template-columns: 1fr;
    gap: 7px;
  }

  .heritage-site-rail {
    grid-template-columns: 1fr;
  }

  .heritage-site-rail article,
  .heritage-site-rail article:nth-child(2) {
    min-height: 0;
    border-right: 0;
    border-bottom: 1px solid #4a3530;
  }

  .cinema-cuisine-frame {
    min-height: 260px;
  }
}
```

## vite.config.js

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        arsenal: resolve(__dirname, 'pages/arsenal.html'),
        statecraft: resolve(__dirname, 'pages/statecraft.html'),
        territories: resolve(__dirname, 'pages/territories.html'),
        arena: resolve(__dirname, 'pages/arena.html'),
        sport: resolve(__dirname, 'pages/sport.html'),
        epochs: resolve(__dirname, 'pages/epochs.html'),
        aesthetics: resolve(__dirname, 'pages/aesthetics.html')
      }
    }
  }
});
```

