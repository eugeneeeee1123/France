# Project Source

## Folder Structure

- .agents
- agents.md
- assets
- assets\images
- assets\images\arena
- assets\images\arena\france-sport-panorama-v2.png
- assets\images\arena\mbappe.jpg
- assets\images\arena\wembanyama.jpg
- assets\images\site
- assets\images\site\aesthetics-hero.png
- assets\images\site\aesthetics-ratatouille-culture.png
- assets\images\site\arsenal-hero-v2.png
- assets\images\site\arsenal-hero-v3.png
- assets\images\site\arsenal-hero.png
- assets\images\site\epochs-heritage-industry.png
- assets\images\site\epochs-hero.png
- assets\images\site\home-france-depths.png
- assets\images\site\home-hero.png
- assets\images\site\statecraft-hero.png
- assets\images\site\territories-hero.png
- assets\images\site\territories-underwater.png
- build.cmd
- css
- css\arena-v2.css
- css\arena.css
- css\core.css
- css\inner.css
- css\nav.css
- css\sections.css
- dev.cmd
- Final_Example.docx
- index.html
- js
- js\arena-v2.js
- js\core.js
- military.txt
- package.json
- pages
- pages\aesthetics.html
- pages\arena.html
- pages\arsenal.html
- pages\epochs.html
- pages\sport.html
- pages\statecraft.html
- pages\territories.html
- pnpm-lock.yaml
- pnpm-workspace.yaml
- project.md
- project2.md
- src
- src\App.jsx
- src\main.jsx
- src\styles.css
- src\TerritoryInteractiveMap.jsx
- vite.config.js

---

## agents.md

```markdown
# Agent Instructions: Precise Web Editor

## 核心任务
你是一个资深的前端开发助手，专门负责 HTML、CSS 和 JavaScript 的维护与增量修改。你的首要原则是：**不干涉、不重构、不自作主张。**

## 行为约束 (Critical Constraints)

### 1. 修改范围限制 (Strict Scope Control)
- **精准操作**：仅允许修改用户明确指出的代码块、样式或逻辑。
- **严禁重构**：禁止在未授权的情况下重写现有的变量名、函数名或 CSS 类名，即便你认为有更好的命名方式。
- **保持原样**：严禁修改与当前任务无关的 HTML 结构、CSS 布局属性或全局变量。

### 2. 代码完整性保护 (Integrity Protection)
- **保留注释**：严禁删除或改动源代码中的任何注释。
- **格式一致性**：必须遵循原文件的缩进（Space/Tab）和代码风格。
- **禁止清空重写**：在修改大型文件时，禁止删除全部内容后重新输出，必须采用增量修改或局部替换。

### 3. Web 特定规则
- **CSS 隔离**：修改样式时，优先使用具体的 ID 或 Class 选择器，禁止修改全局选择器（如 `body`, `div`, `*`）除非被明确要求。
- **JS 逻辑安全**：在添加新功能时，确保不破坏原有的事件监听器 (Event Listeners) 和全局状态。

## 交互协议 (Workflow)
在执行修改前，请按以下步骤思考：
1. **定位**：确定受影响的代码行数或代码块。
2. **评估**：判断该修改是否会产生副作用（例如影响其他页面的布局）。
3. **执行**：仅输出或应用必要的改动部分。

## 拒绝原则
如果用户的指令可能导致整个项目样式崩溃或逻辑冲突，你必须先提出警告并请求确认，而不是直接执行。
```

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

## package.json

```json
{
  "name": "project-hexagone",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1"
  },
  "dependencies": {
    "@phosphor-icons/react": "^2.1.10",
    "leaflet": "^1.9.4",
    "motion": "^12.23.24",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-leaflet": "^5.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "@vitejs/plugin-react": "^5.1.1",
    "tailwindcss": "^4.1.17",
    "vite": "^7.2.4"
  }
}
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

## project.md

```markdown
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

```

## project2.md

```markdown
# Project Source

## Folder Structure

- .agents
- agents.md
- assets
- assets\images
- assets\images\arena
- assets\images\arena\france-sport-panorama-v2.png
- assets\images\arena\mbappe.jpg
- assets\images\arena\wembanyama.jpg
- assets\images\site
- assets\images\site\aesthetics-hero.png
- assets\images\site\aesthetics-ratatouille-culture.png
- assets\images\site\arsenal-hero-v2.png
- assets\images\site\arsenal-hero-v3.png
- assets\images\site\arsenal-hero.png
- assets\images\site\epochs-heritage-industry.png
- assets\images\site\epochs-hero.png
- assets\images\site\home-france-depths.png
- assets\images\site\home-hero.png
- assets\images\site\statecraft-hero.png
- assets\images\site\territories-hero.png
- assets\images\site\territories-underwater.png
- build.cmd
- css
- css\arena-v2.css
- css\arena.css
- css\core.css
- css\inner.css
- css\nav.css
- css\sections.css
- dev.cmd
- Final_Example.docx
- index.html
- js
- js\arena-v2.js
- js\core.js
- military.txt
- package.json
- pages
- pages\aesthetics.html
- pages\arena.html
- pages\arsenal.html
- pages\epochs.html
- pages\sport.html
- pages\statecraft.html
- pages\territories.html
- pnpm-lock.yaml
- pnpm-workspace.yaml
- project.md
- project2.md
- src
- src\App.jsx
- src\main.jsx
- src\styles.css
- src\TerritoryInteractiveMap.jsx
- vite.config.js

---

## agents.md

```markdown
# Agent Instructions: Precise Web Editor

## 核心任务
你是一个资深的前端开发助手，专门负责 HTML、CSS 和 JavaScript 的维护与增量修改。你的首要原则是：**不干涉、不重构、不自作主张。**

## 行为约束 (Critical Constraints)

### 1. 修改范围限制 (Strict Scope Control)
- **精准操作**：仅允许修改用户明确指出的代码块、样式或逻辑。
- **严禁重构**：禁止在未授权的情况下重写现有的变量名、函数名或 CSS 类名，即便你认为有更好的命名方式。
- **保持原样**：严禁修改与当前任务无关的 HTML 结构、CSS 布局属性或全局变量。

### 2. 代码完整性保护 (Integrity Protection)
- **保留注释**：严禁删除或改动源代码中的任何注释。
- **格式一致性**：必须遵循原文件的缩进（Space/Tab）和代码风格。
- **禁止清空重写**：在修改大型文件时，禁止删除全部内容后重新输出，必须采用增量修改或局部替换。

### 3. Web 特定规则
- **CSS 隔离**：修改样式时，优先使用具体的 ID 或 Class 选择器，禁止修改全局选择器（如 `body`, `div`, `*`）除非被明确要求。
- **JS 逻辑安全**：在添加新功能时，确保不破坏原有的事件监听器 (Event Listeners) 和全局状态。

## 交互协议 (Workflow)
在执行修改前，请按以下步骤思考：
1. **定位**：确定受影响的代码行数或代码块。
2. **评估**：判断该修改是否会产生副作用（例如影响其他页面的布局）。
3. **执行**：仅输出或应用必要的改动部分。

## 拒绝原则
如果用户的指令可能导致整个项目样式崩溃或逻辑冲突，你必须先提出警告并请求确认，而不是直接执行。
```

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

## package.json

```json
{
  "name": "project-hexagone",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "vite build",
    "preview": "vite preview --host 127.0.0.1"
  },
  "dependencies": {
    "@phosphor-icons/react": "^2.1.10",
    "leaflet": "^1.9.4",
    "motion": "^12.23.24",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-leaflet": "^5.0.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.17",
    "@vitejs/plugin-react": "^5.1.1",
    "tailwindcss": "^4.1.17",
    "vite": "^7.2.4"
  }
}
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

## project.md

```markdown
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

```

## src\App.jsx

```jsx
import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  AirplaneTilt,
  ArrowRight,
  Atom,
  Basketball,
  BookOpenText,
  Buildings,
  Compass,
  CookingPot,
  Crosshair,
  Crown,
  CastleTurret,
  Factory,
  FishSimple,
  GlobeHemisphereWest,
  MapTrifold,
  Medal,
  Mountains,
  ShieldChevron,
  Sparkle,
  Train,
  Waves
} from '@phosphor-icons/react';

const base = window.location.pathname.includes('/pages/') ? '..' : '.';
const TerritoryInteractiveMap = lazy(() => import('./TerritoryInteractiveMap'));

const navItems = [
  { key: 'arsenal', label: { zh: '军工霸权', fr: 'Arsenal', en: 'Arsenal' }, href: `${base}/pages/arsenal.html` },
  { key: 'statecraft', label: { zh: '地缘政治', fr: 'Diplomatie', en: 'Statecraft' }, href: `${base}/pages/statecraft.html` },
  { key: 'territories', label: { zh: '全球疆域', fr: 'Territoires', en: 'Territories' }, href: `${base}/pages/territories.html` },
  { key: 'sport', label: { zh: '体育竞技', fr: 'Sport', en: 'Sport' }, href: `${base}/pages/sport.html` },
  { key: 'epochs', label: { zh: '历史引擎', fr: 'Époques', en: 'History' }, href: `${base}/pages/epochs.html` },
  { key: 'aesthetics', label: { zh: '文化美学', fr: 'Esthétique', en: 'Aesthetics' }, href: `${base}/pages/aesthetics.html` }
];

const pageKey = (() => {
  const file = window.location.pathname.split('/').pop() || 'index.html';
  return file === 'index.html' || file === '' ? 'home' : file.replace('.html', '');
})();

const pages = {
  arsenal: {
    number: '01',
    icon: ShieldChevron,
    accent: '#d54a36',
    pale: '#f5e8e5',
    image: `${base}/assets/images/site/arsenal-hero.png`,
    title: { zh: '军工与霸权', fr: "L'Arsenal souverain", en: 'The Sovereign Arsenal' },
    intro: {
      zh: '法国是欧盟内部少数拥有核威慑、航空、潜艇、导弹与陆战装备完整自主链条的国家。技术主权在这里不是口号，而是工业组织方式。',
      fr: "La souveraineté française repose sur une chaîne industrielle complète, de la dissuasion nucléaire à l'aéronautique et aux forces navales.",
      en: 'French sovereignty rests on an integrated industrial chain spanning nuclear deterrence, aerospace, naval power and land systems.'
    },
    label: 'DÉFENSE · INDUSTRIE · SOUVERAINETÉ',
    metrics: [['Rafale', '全谱系多用途战机'], ['4', '弹道导弹核潜艇'], ['290', '约计核弹头规模'], ['1831', '外籍兵团创立']],
    sections: [
      { title: '制空权的系统设计', subtitle: 'Rafale + SPECTRA + RBE2 AESA', text: '阵风并非依靠单一性能取胜。航电融合、电子战、自卫系统和多任务挂载构成一套可独立作战的空中体系。', icon: AirplaneTilt },
      { title: '深海中的国家意志', subtitle: 'Naval Group · Barracuda · Triomphant', text: '攻击核潜艇与战略核潜艇共同维持水下情报、远洋护航和二次核打击能力。', icon: Atom },
      { title: '陆战火力的出口模型', subtitle: 'CAESAR · Leclerc · Scorpion', text: '法国陆战装备强调轮式机动、网络化指挥与远程精确火力，适合快速部署和海外行动。', icon: Crosshair },
      { title: '两个世纪的全球部署', subtitle: 'Légion étrangère', text: '外籍兵团兼具军事单位、国家神话和人才吸纳机制，是法国全球军事存在最独特的制度之一。', icon: Medal }
    ],
    note: '法国军工体系的核心不是装备数量，而是关键决策与维护能力不依赖外部许可。',
    forceStructure: true
  },
  statecraft: {
    number: '02',
    icon: Buildings,
    accent: '#3159a7',
    pale: '#e7edf8',
    image: `${base}/assets/images/site/statecraft-hero.png`,
    title: { zh: '地缘与政治', fr: 'La puissance de décision', en: 'The Power to Decide' },
    intro: {
      zh: '从戴高乐主义到印太战略，法国外交的持续命题是如何在联盟内部保持最终决策权，并把欧洲、海外领土与核威慑组织成独立行动空间。',
      fr: "Du gaullisme à l'Indo-Pacifique, la diplomatie française cherche à préserver sa liberté de décision au sein des alliances.",
      en: 'From Gaullism to the Indo-Pacific, French diplomacy seeks to preserve freedom of decision within alliances.'
    },
    label: 'DIPLOMATIE · EUROPE · AUTONOMIE',
    metrics: [['UNSC', '安理会常任理事国'], ['EU', '欧洲战略核心国家'], ['11M km²', '海外经济海域纵深'], ['1966', '退出北约一体化指挥']],
    sections: [
      { title: '爱丽舍宫的棋局', subtitle: 'Ambiguïté stratégique', text: '法国在北约、欧盟和双边关系之间保留模糊空间，用可预测的国家利益代替自动站队。', icon: Crown },
      { title: '欧洲战略自主', subtitle: 'Défense européenne', text: '推动欧洲具备独立防务、产业和外交能力，是法国长期政策，而非短期口号。', icon: ShieldChevron },
      { title: '法非关系重构', subtitle: 'Après la Françafrique', text: '军事基地、货币安排与政治网络正在面对主权诉求和公众反弹，法国影响力转向更透明的合作模式。', icon: GlobeHemisphereWest },
      { title: '印太存在', subtitle: 'Résident, pas invité', text: '海外领土使法国成为印太常驻国家，海军、科研、气候与伙伴关系构成长期存在。', icon: Compass }
    ],
    note: '战略自主并不意味着孤立，而是联盟关系中的选择权和退出权。'
  },
  territories: {
    number: '03',
    icon: MapTrifold,
    accent: '#0787a7',
    pale: '#e1f1f4',
    image: `${base}/assets/images/site/territories-hero.png`,
    title: { zh: '全球地理纵深', fr: 'La France des océans', en: 'France Across the Oceans' },
    intro: {
      zh: '法国不仅位于欧洲。海外省与海外领地让法国横跨大西洋、印度洋、太平洋与南极周边，形成全球第二大的专属经济区。',
      fr: "Les territoires ultramarins projettent la France dans l'Atlantique, l'océan Indien, le Pacifique et les mers australes.",
      en: 'Overseas territories project France across the Atlantic, Indian Ocean, Pacific and Southern seas.'
    },
    label: 'OUTRE-MER · OCÉANS · PRÉSENCE',
    metrics: [['12', '主要海外实体'], ['11M km²', '专属经济区'], ['4', '大洋覆盖'], ['2nd', '全球 EEZ 排名']],
    regions: [
      ['加勒比海', '瓜德罗普、马提尼克、法属圭亚那', '航天、海洋治理与美洲存在'],
      ['印度洋', '留尼汪、马约特、南部领地', '海上通道、科研与反走私'],
      ['太平洋', '新喀里多尼亚、法属波利尼西亚', '印太战略、镍资源与广阔海域'],
      ['北大西洋', '圣皮埃尔和密克隆', '渔业、北极通道与北美邻接']
    ],
    note: '海外领土既是法国全球力量的基础，也包含自治、身份与去殖民化的复杂政治问题。'
  },
  epochs: {
    number: '05',
    icon: BookOpenText,
    accent: '#a44735',
    pale: '#f2e8e5',
    image: `${base}/assets/images/site/epochs-hero.png`,
    title: { zh: '历史引擎', fr: 'Les ruptures françaises', en: 'The French Ruptures' },
    intro: {
      zh: '法国历史并非平滑展开，而是由革命、帝国、总体战、抵抗与重建不断断裂。每一次危机都重新定义国家、共和国与公民。',
      fr: "L'histoire française avance par ruptures: révolution, empire, guerre totale, résistance et reconstruction.",
      en: 'French history moves through ruptures: revolution, empire, total war, resistance and reconstruction.'
    },
    label: 'RÉVOLUTION · GUERRE · RÉPUBLIQUE',
    metrics: [['1789', '革命与旧制度终结'], ['1805', '奥斯特里茨'], ['1916', '凡尔登'], ['1940', '自由法国']],
    timeline: [
      ['1789', '法国大革命', '主权从君主转向国民，权利、共和国与群众政治进入现代世界。'],
      ['1805', '奥斯特里茨战役', '拿破仑把革命国家的动员能力转化为欧洲大陆霸权。'],
      ['1916', '凡尔登战役', '工业化战争把坚守、牺牲与国家记忆永久绑定。'],
      ['1940-44', '自由法国', '在国家崩溃之后，抵抗运动重新争夺法国的合法性。'],
      ['1958', '第五共和国', '强化总统权力，以制度稳定回应殖民战争和政治碎片化。']
    ],
    heritageFeature: true,
    note: '历史不是静态遗产，而是法国今天讨论国家权力与共和国价值时持续调用的政治资源。'
  },
  aesthetics: {
    number: '06',
    icon: Sparkle,
    accent: '#a63f72',
    pale: '#f3e5ed',
    image: `${base}/assets/images/site/aesthetics-hero.png`,
    title: { zh: '文化与工业美学', fr: "L'esthétique française", en: 'The French Aesthetic' },
    intro: {
      zh: '法国的软实力不只来自奢侈品。航空、铁路、航天、时装、餐饮与葡萄酒共享一种标准：技术必须被转化为可识别的形式与体验。',
      fr: "L'influence française relie ingénierie, forme, usage et art de vivre, de l'aéronautique à la haute couture.",
      en: 'French influence connects engineering, form, use and art de vivre, from aerospace to haute couture.'
    },
    label: 'DESIGN · INDUSTRIE · ART DE VIVRE',
    metrics: [['A350', '复合材料航空平台'], ['574.8', 'TGV 轮轨速度纪录'], ['3★', '米其林最高评级'], ['Haute', '高级定制体系']],
    sections: [
      { title: '空客的工业优雅', subtitle: 'Airbus · Toulouse', text: '复合材料、空气动力学与跨国制造体系被转化为清晰、克制的欧洲工业形象。', icon: AirplaneTilt },
      { title: '速度的公共设计', subtitle: 'TGV', text: '高速铁路将工程、国土规划与公共服务结合，车头轮廓成为法国现代化的视觉符号。', icon: Train },
      { title: '标准制造稀缺', subtitle: 'Michelin · Haute Couture', text: '米其林与高级定制都通过严格认证、匿名评估和稀缺资格维持权威。', icon: Sparkle },
      { title: '地方性成为世界语言', subtitle: 'Vin · Cuisine · Savoir-faire', text: '产区、工艺和生活方式被组织为可传播的文化资产，而不是单纯商品。', icon: Factory }
    ],
    cultureFeature: true,
    note: '法国美学最稳定的特征，是让技术、制度和生活方式共同塑造形式。'
  }
};

const translations = {
  zh: { archive: '法国全维度数字档案', enter: '进入专题', menu: '打开菜单', close: '关闭菜单', view: '查看领域', next: '下一个领域' },
  fr: { archive: 'Archives numériques de la France', enter: 'Entrer dans le dossier', menu: 'Ouvrir le menu', close: 'Fermer le menu', view: 'Voir le domaine', next: 'Domaine suivant', fields: 'Six domaines', continue: 'Continuer', footer: "Une archive numérique consacrée aux capacités, aux territoires, à l'histoire et à la culture de la France." },
  en: { archive: 'A multidimensional archive of France', enter: 'Open the dossier', menu: 'Open menu', close: 'Close menu', view: 'View field', next: 'Next field', fields: 'Six fields', continue: 'Continue exploring', footer: "A digital archive examining France through state capacity, territory, history and culture." }
};

translations.zh.fields = '六个领域';
translations.zh.continue = '继续探索';
translations.zh.footer = '以国家能力、领土、历史和文化为线索重新认识法国。内容用于教育性与创作型数字档案展示。';

const frenchCities = [
  { name: '巴黎', fr: 'Paris', lat: 48.8566, lng: 2.3522, region: '法兰西岛', type: 'capital', note: '共和国首都、政治与文化中枢' },
  { name: '马赛', fr: 'Marseille', lat: 43.2965, lng: 5.3698, region: '普罗旺斯-阿尔卑斯-蓝色海岸', type: 'metropolis', note: '地中海港口与南部都会' },
  { name: '里昂', fr: 'Lyon', lat: 45.764, lng: 4.8357, region: '奥弗涅-罗讷-阿尔卑斯', type: 'metropolis', note: '罗讷河谷工业与交通枢纽' },
  { name: '图卢兹', fr: 'Toulouse', lat: 43.6047, lng: 1.4442, region: '奥克西塔尼', type: 'strategic', note: '法国航空航天工业核心' },
  { name: '尼斯', fr: 'Nice', lat: 43.7102, lng: 7.262, region: '普罗旺斯-阿尔卑斯-蓝色海岸', type: 'metropolis', note: '蔚蓝海岸国际门户' },
  { name: '南特', fr: 'Nantes', lat: 47.2184, lng: -1.5536, region: '卢瓦尔河地区', type: 'metropolis', note: '大西洋工业与文化城市' },
  { name: '蒙彼利埃', fr: 'Montpellier', lat: 43.6108, lng: 3.8767, region: '奥克西塔尼', type: 'regional', note: '地中海科研与大学城市' },
  { name: '斯特拉斯堡', fr: 'Strasbourg', lat: 48.5734, lng: 7.7521, region: '大东部', type: 'strategic', note: '欧洲机构与法德边境中心' },
  { name: '波尔多', fr: 'Bordeaux', lat: 44.8378, lng: -0.5792, region: '新阿基坦', type: 'metropolis', note: '大西洋港口与葡萄酒中心' },
  { name: '里尔', fr: 'Lille', lat: 50.6292, lng: 3.0573, region: '上法兰西', type: 'metropolis', note: '北部跨境都会与铁路枢纽' },
  { name: '雷恩', fr: 'Rennes', lat: 48.1173, lng: -1.6778, region: '布列塔尼', type: 'regional', note: '布列塔尼行政与数字产业中心' },
  { name: '兰斯', fr: 'Reims', lat: 49.2583, lng: 4.0317, region: '大东部', type: 'regional', note: '香槟产区与王室加冕历史城市' },
  { name: '勒阿弗尔', fr: 'Le Havre', lat: 49.4944, lng: 0.1079, region: '诺曼底', type: 'strategic', note: '塞纳河口大型海港' },
  { name: '圣艾蒂安', fr: 'Saint-Étienne', lat: 45.4397, lng: 4.3872, region: '奥弗涅-罗讷-阿尔卑斯', type: 'regional', note: '工业、设计与制造传统' },
  { name: '土伦', fr: 'Toulon', lat: 43.1242, lng: 5.928, region: '普罗旺斯-阿尔卑斯-蓝色海岸', type: 'strategic', note: '法国地中海舰队核心基地' },
  { name: '格勒诺布尔', fr: 'Grenoble', lat: 45.1885, lng: 5.7245, region: '奥弗涅-罗讷-阿尔卑斯', type: 'strategic', note: '阿尔卑斯科研与微电子中心' },
  { name: '第戎', fr: 'Dijon', lat: 47.322, lng: 5.0415, region: '勃艮第-弗朗什-孔泰', type: 'regional', note: '勃艮第行政与交通中心' },
  { name: '昂热', fr: 'Angers', lat: 47.4784, lng: -0.5632, region: '卢瓦尔河地区', type: 'regional', note: '卢瓦尔河谷教育与植物产业中心' },
  { name: '尼姆', fr: 'Nîmes', lat: 43.8367, lng: 4.3601, region: '奥克西塔尼', type: 'regional', note: '古罗马遗产与南法交通节点' },
  { name: '克莱蒙费朗', fr: 'Clermont-Ferrand', lat: 45.7772, lng: 3.087, region: '奥弗涅-罗讷-阿尔卑斯', type: 'strategic', note: '轮胎工业与中央高原门户' },
  { name: '勒芒', fr: 'Le Mans', lat: 48.0061, lng: 0.1996, region: '卢瓦尔河地区', type: 'strategic', note: '世界耐力赛车城市' },
  { name: '艾克斯', fr: 'Aix-en-Provence', lat: 43.5297, lng: 5.4474, region: '普罗旺斯-阿尔卑斯-蓝色海岸', type: 'regional', note: '普罗旺斯文化与大学城市' },
  { name: '布雷斯特', fr: 'Brest', lat: 48.3904, lng: -4.4861, region: '布列塔尼', type: 'strategic', note: '大西洋海军与核潜艇支援中心' },
  { name: '图尔', fr: 'Tours', lat: 47.3941, lng: 0.6848, region: '中央-卢瓦尔河谷', type: 'regional', note: '卢瓦尔河谷交通与历史城市' },
  { name: '亚眠', fr: 'Amiens', lat: 49.8941, lng: 2.2958, region: '上法兰西', type: 'regional', note: '皮卡第行政中心' },
  { name: '利摩日', fr: 'Limoges', lat: 45.8336, lng: 1.2611, region: '新阿基坦', type: 'regional', note: '陶瓷工艺与中西部节点' },
  { name: '梅斯', fr: 'Metz', lat: 49.1193, lng: 6.1757, region: '大东部', type: 'strategic', note: '东北军事与跨境交通城市' },
  { name: '贝桑松', fr: 'Besançon', lat: 47.2378, lng: 6.0241, region: '勃艮第-弗朗什-孔泰', type: 'regional', note: '精密制造与汝拉门户' },
  { name: '奥尔良', fr: 'Orléans', lat: 47.903, lng: 1.9093, region: '中央-卢瓦尔河谷', type: 'regional', note: '卢瓦尔河中部行政中心' },
  { name: '鲁昂', fr: 'Rouen', lat: 49.4432, lng: 1.0993, region: '诺曼底', type: 'regional', note: '塞纳河航运与诺曼底历史城市' },
  { name: '卡昂', fr: 'Caen', lat: 49.1829, lng: -0.3707, region: '诺曼底', type: 'regional', note: '诺曼底教育与二战记忆中心' },
  { name: '南锡', fr: 'Nancy', lat: 48.6921, lng: 6.1844, region: '大东部', type: 'regional', note: '洛林文化、大学与新艺术中心' },
  { name: '佩皮尼昂', fr: 'Perpignan', lat: 42.6887, lng: 2.8948, region: '奥克西塔尼', type: 'regional', note: '法国加泰罗尼亚门户' },
  { name: '巴约讷', fr: 'Bayonne', lat: 43.4929, lng: -1.4748, region: '新阿基坦', type: 'regional', note: '法属巴斯克地区中心' },
  { name: '拉罗谢尔', fr: 'La Rochelle', lat: 46.1603, lng: -1.1511, region: '新阿基坦', type: 'strategic', note: '大西洋海事与帆船城市' },
  { name: '阿讷西', fr: 'Annecy', lat: 45.8992, lng: 6.1294, region: '奥弗涅-罗讷-阿尔卑斯', type: 'regional', note: '阿尔卑斯湖区与户外产业中心' },
  { name: '阿雅克肖', fr: 'Ajaccio', lat: 41.9192, lng: 8.7386, region: '科西嘉', type: 'regional', note: '科西嘉行政中心与地中海港口' },
  { name: '巴斯蒂亚', fr: 'Bastia', lat: 42.6973, lng: 9.4509, region: '科西嘉', type: 'regional', note: '科西嘉北部港口城市' },
  { name: '库鲁', fr: 'Kourou', lat: 5.1611, lng: -52.6493, region: '法属圭亚那', type: 'overseas', note: '圭亚那航天中心所在地' },
  { name: '卡宴', fr: 'Cayenne', lat: 4.9224, lng: -52.3135, region: '法属圭亚那', type: 'overseas', note: '法属圭亚那首府' },
  { name: '法兰西堡', fr: 'Fort-de-France', lat: 14.6161, lng: -61.0588, region: '马提尼克', type: 'overseas', note: '马提尼克行政与港口中心' },
  { name: '皮特尔角城', fr: 'Pointe-à-Pitre', lat: 16.2411, lng: -61.5331, region: '瓜德罗普', type: 'overseas', note: '瓜德罗普主要经济与港口节点' },
  { name: '圣但尼', fr: 'Saint-Denis', lat: -20.8823, lng: 55.4504, region: '留尼汪', type: 'overseas', note: '留尼汪首府与印度洋支点' },
  { name: '马穆楚', fr: 'Mamoudzou', lat: -12.7806, lng: 45.2278, region: '马约特', type: 'overseas', note: '马约特行政中心' },
  { name: '努美阿', fr: 'Nouméa', lat: -22.2758, lng: 166.458, region: '新喀里多尼亚', type: 'overseas', note: '南太平洋政治、海军与镍产业节点' },
  { name: '帕皮提', fr: 'Papeete', lat: -17.5516, lng: -149.5585, region: '法属波利尼西亚', type: 'overseas', note: '法属波利尼西亚首府' },
  { name: '马塔乌图', fr: 'Mata-Utu', lat: -13.2825, lng: -176.1736, region: '瓦利斯和富图纳', type: 'overseas', note: '南太平洋海外集体行政中心' },
  { name: '圣皮埃尔', fr: 'Saint-Pierre', lat: 46.7791, lng: -56.1773, region: '圣皮埃尔和密克隆', type: 'overseas', note: '北大西洋法国海外节点' }
];

function Header({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const t = translations[language];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071226]/94 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href={`${base}/index.html`} className="flex items-center gap-3" aria-label="Project Hexagone 首页">
          <span className="grid size-9 place-items-center border border-[#7898f5] text-xs font-black">FR</span>
          <span className="hidden leading-tight sm:block">
            <b className="block text-sm tracking-[-0.02em]">PROJECT HEXAGONE</b>
            <span className="text-[10px] tracking-[0.13em] text-[#9fb2de]">{t.archive}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="主导航">
          {navItems.map(item => (
            <a key={item.key} href={item.href} className={`nav-link ${pageKey === item.key ? 'is-active' : ''}`}>
              {item.label[language]}
            </a>
          ))}
        </nav>

        <div className="header-actions flex items-center gap-3">
          <div className="language-switcher flex border border-white/20">
            {['zh', 'fr', 'en'].map(lang => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className={`px-3 py-2 text-[10px] font-bold uppercase ${language === lang ? 'bg-white text-[#071226]' : 'text-white/55 hover:text-white'}`}
              >
                {lang === 'zh' ? '中文' : lang}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="menu-toggle grid size-10 place-items-center xl:hidden"
            aria-label={open ? t.close : t.menu}
            onClick={() => setOpen(value => !value)}
          >
            <span className="text-[11px] font-bold">{open ? '关闭' : '菜单'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/10 bg-[#071226] px-5 pb-6 xl:hidden"
          >
            {navItems.map(item => (
              <a key={item.key} href={item.href} className="block border-b border-white/10 py-4 text-sm text-white/75">
                {item.label[language]}
              </a>
            ))}
            <div className="mt-5 flex border border-white/20 sm:hidden">
              {['zh', 'fr', 'en'].map(lang => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`flex-1 px-3 py-3 text-[10px] font-bold uppercase ${language === lang ? 'bg-white text-[#071226]' : 'text-white/55'}`}
                >
                  {lang === 'zh' ? '中文' : lang}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer({ language }) {
  const t = translations[language];
  return (
    <footer className="site-footer border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-10">
        <div>
          <b className="text-lg text-slate-950">Project Hexagone</b>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">{t.footer}</p>
        </div>
        <div>
          <span className="text-xs font-bold text-blue-700">{t.fields}</span>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            {navItems.slice(0, 3).map(item => <a key={item.key} href={item.href}>{item.label[language]}</a>)}
          </div>
        </div>
        <div>
          <span className="text-xs font-bold text-blue-700">{t.continue}</span>
          <div className="mt-4 grid gap-2 text-sm text-slate-600">
            {navItems.slice(3).map(item => <a key={item.key} href={item.href}>{item.label[language]}</a>)}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-5 py-5 text-center text-[11px] tracking-[0.08em] text-slate-400">LIBERTÉ · ÉGALITÉ · AUTONOMIE</div>
    </footer>
  );
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={false}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ArsenalPage() {
  const capabilityRows = [
    ['海上核力量', 'Triomphant SSBN · SNLE 3G · Barracuda', '持续海上核威慑与水下拒止'],
    ['航母航空兵', 'France Libre · PANG · Rafale Marine', '远洋制空、打击与全球干预'],
    ['空天体系', 'Rafale F5/F6 · FCAS · CSO 3G', '制空、电子战与天基侦察'],
    ['陆战集群', 'Leclerc 2.0 · CAESAR Mk3 · SAMP/T NG', '装甲突击、远火与伴随防空']
  ];

  return (
    <main style={{ '--accent': '#e34d38', '--pale': '#251714' }} className="topic-page arsenal-page pt-[76px]">
      <section className="arsenal-command-hero">
        <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-16 md:px-10 md:pt-24">
          <div className="grid gap-10 xl:grid-cols-[0.56fr_1.44fr] xl:items-end">
            <Reveal>
              <div className="flex items-center gap-4 text-[var(--accent)]">
                <span className="font-mono text-xs font-bold">01 / 06</span>
                <ShieldChevron size={28} weight="thin" />
              </div>
              <p className="mt-12 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">FORCE · INDUSTRIE · DISSUASION</p>
              <h1 className="mt-5 text-[clamp(3.8rem,7vw,7.8rem)] font-black leading-[0.86] tracking-[-0.075em]">军工<br />战略沙盘</h1>
              <p className="mt-8 max-w-lg text-base leading-8 text-slate-500">从凯旋级战略核潜艇到 France Libre 航母，从 Rafale 到 Leclerc。这里展示的不是单件武器，而是一套能够独立决策、制造、部署与维护的国家体系。</p>
            </Reveal>

            <Reveal delay={0.08} className="arsenal-hero-frame">
              <img src={`${base}/assets/images/site/arsenal-hero-v3.png`} alt="完整展示 France Libre 航母、凯旋级战略核潜艇、Rafale 战机、Leclerc 坦克与 CAESAR 凯撒自走炮的法兰西军力全景" />
            </Reveal>
          </div>

          <div className="mt-12 grid border-l border-t border-slate-300 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['SSBN', '凯旋级战略核潜艇'],
              ['CVN', 'France Libre 航母'],
              ['AIR', 'Rafale 多用途战机'],
              ['LAND', 'Leclerc 主战坦克']
            ].map(([code, label]) => (
              <div key={code} className="border-b border-r border-slate-300 p-5">
                <strong className="font-mono text-xl text-[var(--accent)]">{code}</strong>
                <span className="mt-2 block text-xs text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="arsenal-capability-index border-y border-slate-300">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
          <Reveal className="max-w-4xl">
            <p className="eyebrow accent">CAPABILITY MATRIX</p>
            <h2 className="section-title">四条作战链，组成同一套主权系统。</h2>
          </Reveal>
          <div className="mt-10 border-t border-slate-300">
            {capabilityRows.map((row, index) => (
              <Reveal key={row[0]}>
                <article className="grid gap-5 border-b border-slate-300 py-8 lg:grid-cols-[70px_0.65fr_1fr_1fr] lg:items-center">
                  <span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span>
                  <h3 className="text-2xl font-black">{row[0]}</h3>
                  <b className="text-sm text-slate-300">{row[1]}</b>
                  <p className="text-sm leading-7 text-slate-500">{row[2]}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MilitaryForceStructure />
    </main>
  );
}

function TerritoriesPage({ language }) {
  const [mode, setMode] = useState('metropole');
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(frenchCities[0]);
  const [reliefActive, setReliefActive] = useState(0);
  const visibleCities = frenchCities.filter(city => {
    const inMode = mode === 'metropole' ? city.type !== 'overseas' : city.type === 'overseas';
    return inMode && (filter === 'all' || city.type === filter);
  });

  const markerColor = type => ({
    capital: '#ffffff',
    metropolis: '#25b8db',
    strategic: '#ff684f',
    regional: '#7f93ba',
    overseas: '#ffca58'
  }[type] || '#7f93ba');

  const reliefs = [
    {
      icon: Waves,
      title: { zh: '莱茵河廊道', fr: 'Le corridor rhénan', en: 'The Rhine Corridor' },
      place: { zh: '阿尔萨斯与斯特拉斯堡', fr: 'Alsace et Strasbourg', en: 'Alsace and Strasbourg' },
      copy: {
        zh: '莱茵河在法国东北部既构成边界，也连接港口、制造业、欧洲机构与跨境城市网络。',
        fr: "Dans le nord-est, le Rhin forme une frontière et relie ports, industrie, institutions européennes et villes transfrontalières.",
        en: 'In the northeast, the Rhine is both a border and a corridor linking ports, industry, European institutions and cross-border cities.'
      }
    },
    {
      icon: Mountains,
      title: { zh: '阿尔卑斯高地', fr: 'Les Alpes', en: 'The Alps' },
      place: { zh: '萨瓦、格勒诺布尔与勃朗峰', fr: 'Savoie, Grenoble et Mont Blanc', en: 'Savoie, Grenoble and Mont Blanc' },
      copy: {
        zh: '高山地形塑造水电、科研、冬季运动和穿越欧洲南北的交通工程。',
        fr: "Le relief alpin structure l'hydroélectricité, la recherche, les sports d'hiver et les grands axes européens.",
        en: 'Alpine terrain shapes hydropower, research, winter sport and major transport routes through Europe.'
      }
    },
    {
      icon: Mountains,
      title: { zh: '比利牛斯边境', fr: 'Les Pyrénées', en: 'The Pyrenees' },
      place: { zh: '大西洋与地中海之间', fr: "Entre l'Atlantique et la Méditerranée", en: 'Between Atlantic and Mediterranean' },
      copy: {
        zh: '东西延伸的山脉把法国与伊比利亚半岛分隔，同时保留山口、牧业和区域文化通道。',
        fr: "La chaîne sépare la France de la péninsule Ibérique tout en maintenant cols, pastoralisme et passages culturels.",
        en: 'The range separates France from Iberia while preserving mountain passes, pastoral economies and cultural corridors.'
      }
    },
    {
      icon: MapTrifold,
      title: { zh: '中央高原', fr: 'Le Massif central', en: 'The Massif Central' },
      place: { zh: '火山台地与河流源区', fr: 'Plateaux volcaniques et sources', en: 'Volcanic plateaus and headwaters' },
      copy: {
        zh: '古老火山地貌、峡谷和高原分散人口，却孕育多条河流，并形成独特的农业与聚落格局。',
        fr: "Volcans anciens, gorges et plateaux dispersent l'habitat, alimentent les fleuves et organisent des économies rurales distinctes.",
        en: 'Ancient volcanoes, gorges and plateaus disperse settlement, feed major rivers and shape distinct rural economies.'
      }
    }
  ];
  const relief = reliefs[reliefActive];
  const ReliefIcon = relief.icon;

  return (
    <main style={{ '--accent': '#20a9ca', '--pale': '#0c2028' }} className="topic-page territories-map-page pt-[76px]">
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-14 md:px-10 md:pt-20">
        <Reveal className="grid gap-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4 text-[var(--accent)]"><span className="font-mono text-xs">03 / 06</span><MapTrifold size={28} weight="thin" /></div>
            <p className="mt-10 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">CITIES · REGIONS · OUTRE-MER</p>
            <h1 className="mt-5 text-[clamp(3.7rem,7vw,7.5rem)] font-black leading-[0.88] tracking-[-0.075em]">法国<br />互动地理志</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-500">拖动、缩放并点击城市。地图覆盖法国本土主要都会、区域中心、军事与工业节点，以及从加勒比海到南太平洋的海外城市。</p>
        </Reveal>
      </section>

      <section className="territory-map-shell">
        <div className="territory-map-toolbar">
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => { setMode('metropole'); setFilter('all'); setSelected(frenchCities[0]); }} className={mode === 'metropole' ? 'is-active' : ''}>法国本土</button>
            <button type="button" onClick={() => { setMode('overseas'); setFilter('all'); setSelected(frenchCities.find(city => city.type === 'overseas')); }} className={mode === 'overseas' ? 'is-active' : ''}>海外领地</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              ['all', '全部'],
              ['capital', '首都'],
              ['metropolis', '都会'],
              ['strategic', '战略节点'],
              ['regional', '区域城市']
            ].filter(item => mode === 'metropole' || ['all'].includes(item[0])).map(([key, label]) => (
              <button type="button" key={key} onClick={() => setFilter(key)} className={filter === key ? 'is-active' : ''}>{label}</button>
            ))}
          </div>
        </div>

        <div className="territory-map-layout">
          <div className="territory-map-canvas">
            <Suspense fallback={<div className="grid h-[720px] place-items-center text-sm text-slate-500">正在加载法国互动地图...</div>}>
              <TerritoryInteractiveMap mode={mode} cities={visibleCities} markerColor={markerColor} onSelect={setSelected} />
            </Suspense>
          </div>

          <aside className="territory-city-panel">
            <span className="font-mono text-xs text-[var(--accent)]">{mode === 'metropole' ? 'FRANCE MÉTROPOLITAINE' : 'FRANCE OUTRE-MER'}</span>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em]">{selected.name}</h2>
            <p className="mt-1 text-lg text-slate-300">{selected.fr}</p>
            <dl className="mt-10">
              <div><dt>区域</dt><dd>{selected.region}</dd></div>
              <div><dt>定位</dt><dd>{selected.note}</dd></div>
              <div><dt>坐标</dt><dd>{selected.lat.toFixed(3)}, {selected.lng.toFixed(3)}</dd></div>
            </dl>
            <div className="mt-10 border-t border-slate-300 pt-7">
              <b className="text-sm">{visibleCities.length} 个当前可见节点</b>
              <p className="mt-3 text-xs leading-6 text-slate-500">点击地图标记查看城市详情。使用滚轮缩放，拖动地图探索城市分布。</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="territory-relief-section border-y border-slate-300">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="px-5 py-14 md:px-10 md:py-16">
            <h2 className="text-[clamp(2.7rem,4.8vw,5rem)] font-black leading-[0.96] tracking-[-0.06em]">{({
              zh: '河流与山脉，决定法国如何连接欧洲。',
              fr: "Fleuves et montagnes organisent la France en Europe.",
              en: 'Rivers and mountains connect France to Europe.'
            })[language]}</h2>
            <div className="territory-relief-nav mt-10">
              {reliefs.map((item, index) => (
                <button type="button" key={item.title.zh} onClick={() => setReliefActive(index)} className={reliefActive === index ? 'is-active' : ''}>
                  <span>0{index + 1}</span>
                  <b>{item.title[language]}</b>
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.article key={relief.title.zh} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="territory-relief-stage">
              <ReliefIcon size={54} weight="thin" />
              <div>
                <p>{relief.place[language]}</p>
                <h3>{relief.title[language]}</h3>
                <span>{relief.copy[language]}</span>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="territory-underwater-section mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="territory-underwater-frame">
            <img src={`${base}/assets/images/site/territories-underwater.png`} alt="法国地中海海草床与海外珊瑚礁构成的水下生态全景" />
          </div>
          <div>
            <FishSimple size={42} weight="thin" className="text-[var(--accent)]" />
            <h2 className="mt-6 text-[clamp(2.7rem,4.8vw,5rem)] font-black leading-[0.96] tracking-[-0.06em]">{({ zh: '海面之下，还有另一片法国。', fr: 'Sous la surface existe une autre France.', en: 'Below the surface lies another France.' })[language]}</h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-slate-400">{({
              zh: '地中海的波西多尼亚海草床、科西嘉岩礁、加勒比与太平洋珊瑚群落，把生物多样性、科研和海洋主权连接起来。',
              fr: "Herbiers de posidonie, récifs corses et coraux ultramarins relient biodiversité, recherche et souveraineté maritime.",
              en: 'Posidonia meadows, Corsican reefs and overseas coral communities connect biodiversity, research and maritime sovereignty.'
            })[language]}</p>
            <dl className="territory-underwater-zones mt-8">
              <div><dt>Méditerranée</dt><dd>{({ zh: '海草床与岩礁', fr: 'Herbiers et récifs rocheux', en: 'Seagrass and rocky reefs' })[language]}</dd></div>
              <div><dt>Outre-mer</dt><dd>{({ zh: '珊瑚礁与潟湖', fr: 'Récifs et lagons', en: 'Coral reefs and lagoons' })[language]}</dd></div>
              <div><dt>Profondeur</dt><dd>{({ zh: '深海科研与保护', fr: 'Recherche et protection', en: 'Research and protection' })[language]}</dd></div>
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal>
          <p className="eyebrow accent">URBAN NETWORK</p>
          <h2 className="section-title">首都之外，法国由多层城市网络组成。</h2>
        </Reveal>
        <div className="mt-10 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['巴黎盆地', '政治、金融、媒体与全国交通网络高度集中。'],
            ['地中海轴线', '马赛、尼斯、蒙彼利埃和土伦连接港口、旅游与海军。'],
            ['东部工业带', '里昂、格勒诺布尔、斯特拉斯堡和梅斯连接欧洲制造网络。'],
            ['海外城市链', '库鲁、努美阿、圣但尼和帕皮提维持法国全球地理存在。']
          ].map(([title, copy]) => (
            <article key={title} className="border-b border-r border-slate-300 bg-white p-6">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-10 text-sm leading-7 text-slate-500">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function HomePage({ language }) {
  const modules = [
    ['arsenal', '01', { zh: '军工与霸权', fr: 'Arsenal souverain', en: 'Sovereign Arsenal' }, { zh: '独立核威慑、航空、潜艇与全球部署', fr: 'Dissuasion, aéronautique, sous-marins et projection mondiale', en: 'Deterrence, aerospace, submarines and global deployment' }, ShieldChevron],
    ['statecraft', '02', { zh: '地缘与政治', fr: 'Diplomatie et puissance', en: 'Statecraft' }, { zh: '战略自主、欧洲、非洲与印太', fr: 'Autonomie stratégique, Europe, Afrique et Indo-Pacifique', en: 'Strategic autonomy across Europe, Africa and the Indo-Pacific' }, Buildings],
    ['territories', '03', { zh: '全球地理纵深', fr: 'Géographie mondiale', en: 'Global Geography' }, { zh: '海外领土、河流、地形与海洋生态', fr: 'Outre-mer, fleuves, reliefs et écologie marine', en: 'Overseas territories, rivers, terrain and marine ecology' }, MapTrifold],
    ['sport', '04', { zh: '体育竞技', fr: 'Sport', en: 'Sport' }, { zh: '国家队、体育体系与全球赛事', fr: 'Équipes nationales, formation et compétitions mondiales', en: 'National teams, development systems and global events' }, Basketball],
    ['epochs', '05', { zh: '历史引擎', fr: 'Moteur historique', en: 'History Engine' }, { zh: '中世纪遗迹、革命、工业化与共和国', fr: 'Vestiges médiévaux, révolution, industrie et République', en: 'Medieval remains, revolution, industry and the Republic' }, BookOpenText],
    ['aesthetics', '06', { zh: '文化与工业美学', fr: 'Culture et esthétique', en: 'Culture and Aesthetics' }, { zh: '料理、电影、铁路、时尚与生活方式', fr: 'Cuisine, cinéma, rail, mode et art de vivre', en: 'Cuisine, cinema, rail, fashion and art de vivre' }, Sparkle]
  ];

  const title = {
    zh: '法国，远不止巴黎。',
    fr: 'La France, au-delà de Paris.',
    en: 'France is more than Paris.'
  }[language];

  const homeCopy = {
    zh: {
      intro: '从军工体系到海外领土，从共和国历史到料理、体育与工业设计。六个入口共同解释法国如何组织国家能力与全球影响力。',
      matrix: '一个国家，六种观察尺度。',
      autonomy: '贯穿六个领域的共同逻辑。',
      principles: [
        ['决策自主', '最终国家决策不外包给联盟或市场。'],
        ['体系完整', '工业、领土、制度与文化形成相互支持的网络。'],
        ['全球投射', '海外存在和世界级品牌把法国能力带到欧洲之外。']
      ]
    },
    fr: {
      intro: "De la défense aux territoires ultramarins, de l'histoire républicaine à la cuisine, au sport et au design. Six entrées expliquent la puissance française.",
      matrix: "Un pays, six échelles d'observation.",
      autonomy: 'Une logique commune traverse les six domaines.',
      principles: [
        ['Décider librement', "La décision nationale finale n'est déléguée ni aux alliances ni aux marchés."],
        ['Relier les systèmes', "Industrie, territoire, institutions et culture forment un réseau cohérent."],
        ['Projeter une présence', "Les territoires ultramarins et les marques mondiales prolongent la France hors d'Europe."]
      ]
    },
    en: {
      intro: 'From defence and overseas territories to republican history, cuisine, sport and industrial design. Six perspectives explain how France projects influence.',
      matrix: 'One country, six ways of seeing it.',
      autonomy: 'One strategic logic connects all six fields.',
      principles: [
        ['Independent decisions', 'Final national decisions are not outsourced to alliances or markets.'],
        ['Connected systems', 'Industry, territory, institutions and culture reinforce one another.'],
        ['Global presence', 'Overseas territories and global brands extend French capacity beyond Europe.']
      ]
    }
  }[language];

  const depths = [
    ['aesthetics', CookingPot, { zh: '《料理鼠王》与巴黎餐桌', fr: 'Ratatouille et la table parisienne', en: 'Ratatouille and the Paris Table' }, { zh: '电影把料理、城市与法国生活方式变成全球文化记忆。', fr: 'Le cinéma relie cuisine, ville et art de vivre dans une mémoire mondiale.', en: 'Cinema turns cuisine, city life and art de vivre into global memory.' }],
    ['territories', Waves, { zh: '莱茵河与阿尔萨斯', fr: "Le Rhin et l'Alsace", en: 'The Rhine and Alsace' }, { zh: '河流既是边界，也是欧洲贸易、城市与文化交换的走廊。', fr: "Le fleuve est une frontière et un corridor d'échanges européens.", en: 'The river is both a border and a corridor of European exchange.' }],
    ['territories', Mountains, { zh: '从高山到大西洋', fr: "Des Alpes à l'Atlantique", en: 'From the Alps to the Atlantic' }, { zh: '阿尔卑斯、比利牛斯、中央高原与海岸塑造不同区域经济。', fr: 'Alpes, Pyrénées, Massif central et littoraux structurent les régions.', en: 'Mountain ranges, plateaus and coasts shape distinct regional economies.' }],
    ['epochs', CastleTurret, { zh: '石砌遗迹与钢铁时代', fr: "De la pierre à l'acier", en: 'From Stone to Steel' }, { zh: '中世纪修道院、城堡与工业革命设施叠加在同一片国土。', fr: "Abbayes, forteresses et sites industriels superposent les siècles.", en: 'Abbeys, fortresses and industrial sites layer centuries across the landscape.' }],
    ['territories', FishSimple, { zh: '法国的水下生态', fr: 'Les écosystèmes sous-marins', en: 'Underwater France' }, { zh: '地中海海草床、珊瑚礁与海外海域构成另一种法国疆域。', fr: "Herbiers méditerranéens, récifs et outre-mer composent une autre France.", en: 'Mediterranean seagrass, reefs and overseas waters form another French realm.' }]
  ];

  return (
    <main className="site-page pt-[76px]">
      <section className="bg-white">
        <div className="mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-10 px-5 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <Reveal>
            <p className="eyebrow">FRANCE · SIX DIMENSIONS</p>
            <h1 className={`home-hero-title home-hero-title-${language} mt-5 font-black tracking-[-0.07em]`}>{title}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">{homeCopy.intro}</p>
            <a href="#matrix" className="primary-link mt-7">{translations[language].enter} <ArrowRight size={18} /></a>
          </Reveal>
          <Reveal delay={0.1} className="home-hero-visual relative">
            <img src={`${base}/assets/images/site/home-france-depths.png`} alt="法国料理、莱茵河、山地地形、历史工业遗迹与水下生态组成的全景" className="aspect-video w-full object-cover" />
            <div className="absolute inset-y-0 right-0 w-3 bg-blue-700" />
          </Reveal>
        </div>
      </section>

      <section className="home-depth-rail border-y border-slate-300">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-2 xl:grid-cols-5">
          {depths.map(([key, Icon, depthTitle, copy]) => (
            <a key={depthTitle.zh} href={`${base}/pages/${key}.html`} className="home-depth-item group">
              <Icon size={24} weight="thin" />
              <h2>{depthTitle[language]}</h2>
              <p>{copy[language]}</p>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </section>

      <section id="matrix" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">THE HEXAGONE MATRIX</p>
          <h2 className="section-title">{homeCopy.matrix}</h2>
        </Reveal>
        <div className="mt-10 grid border-l border-t border-slate-300 md:grid-cols-2 xl:grid-cols-3">
          {modules.map(([key, number, titleText, copy, Icon], index) => (
            <Reveal key={key} delay={index * 0.04}>
              <a href={`${base}/pages/${key}.html`} className="module-tile group">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-blue-700">{number} / 06</span>
                  <Icon size={30} weight="thin" className="text-blue-700 transition-transform group-hover:-translate-y-1" />
                </div>
                <div>
                  <h3 className="text-3xl font-black tracking-[-0.045em]">{titleText[language]}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">{copy[language]}</p>
                </div>
                <span className="flex items-center gap-2 text-xs font-bold text-blue-700">{translations[language].enter} <ArrowRight /></span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-300 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <Reveal>
            <p className="eyebrow">AUTONOMIE STRATÉGIQUE</p>
            <h2 className="section-title">{homeCopy.autonomy}</h2>
          </Reveal>
          <Reveal className="grid gap-px bg-slate-300 md:grid-cols-3">
            {homeCopy.principles.map(([titleText, copy]) => (
              <article key={titleText} className="bg-white p-7">
                <h3 className="text-xl font-black">{titleText}</h3>
                <p className="mt-6 text-sm leading-7 text-slate-500">{copy}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function StandardTopic({ data, language }) {
  const Icon = data.icon;
  return (
    <main style={{ '--accent': data.accent, '--pale': data.pale }} className="topic-page pt-[76px]">
      <section className="bg-white">
        <div className="mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-10 px-5 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4 text-[var(--accent)]">
              <span className="font-mono text-xs font-bold">{data.number} / 06</span>
              <Icon size={28} weight="thin" />
            </div>
            <p className="mt-8 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">{data.label}</p>
            <h1 className="mt-5 text-[clamp(3.8rem,7vw,7.7rem)] font-black leading-[0.88] tracking-[-0.075em]">{data.title[language]}</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">{data.intro[language]}</p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <img src={data.image} alt={data.title.zh} className="aspect-[1.22/1] w-full object-cover" />
            <div className="absolute inset-y-0 right-0 w-3 bg-[var(--accent)]" />
          </Reveal>
        </div>
        <Metrics metrics={data.metrics} />
      </section>

      {data.regions ? <Regions data={data} /> : data.timeline ? <Timeline data={data} /> : <FeatureSections data={data} />}
      {data.heritageFeature && <HeritageContinuum language={language} />}
      {data.cultureFeature && <CinemaCuisineFeature language={language} />}
      {data.forceStructure && <MilitaryForceStructure />}

      <section className="border-t border-slate-300 bg-[var(--pale)]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:grid-cols-[0.4fr_1.6fr] md:px-10 md:py-16">
          <span className="font-mono text-xs font-bold text-[var(--accent)]">SYNTHÈSE</span>
          <Reveal>
            <p className="max-w-5xl text-[clamp(1.7rem,3.3vw,3.7rem)] font-black leading-[1.08] tracking-[-0.045em]">{data.note}</p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Metrics({ metrics }) {
  return (
    <div className="mx-auto grid max-w-[1440px] border-l border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map(([value, label]) => (
        <div key={value + label} className="min-h-24 border-b border-r border-slate-300 p-5">
          <strong className="block text-3xl font-black text-[var(--accent)]">{value}</strong>
          <span className="mt-2 block text-xs text-slate-500">{label}</span>
        </div>
      ))}
    </div>
  );
}

function FeatureSections({ data }) {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
      <Reveal className="max-w-3xl">
        <p className="eyebrow accent">SYSTEMS, NOT OBJECTS</p>
        <h2 className="section-title">实力来自系统，而不是孤立的符号。</h2>
      </Reveal>
      <div className="mt-10 border-t border-slate-300">
        {data.sections.map((section, index) => {
          const SectionIcon = section.icon;
          return (
            <Reveal key={section.title}>
              <article className="grid gap-6 border-b border-slate-300 py-7 md:grid-cols-[70px_0.8fr_1.2fr] md:items-start">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span>
                  <SectionIcon size={25} weight="thin" className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="font-mono text-[10px] font-bold tracking-[0.1em] text-[var(--accent)]">{section.subtitle}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">{section.title}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-8 text-slate-500">{section.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Regions({ data }) {
  const [active, setActive] = useState(0);
  const region = data.regions[active];
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
      <Reveal className="max-w-3xl">
        <p className="eyebrow accent">A COUNTRY IN FOUR OCEANS</p>
        <h2 className="section-title">领土分散，主权相连。</h2>
      </Reveal>
      <div className="mt-10 grid border border-slate-300 bg-white lg:grid-cols-[300px_1fr]">
        <div className="border-b border-slate-300 lg:border-b-0 lg:border-r">
          {data.regions.map((item, index) => (
            <button key={item[0]} onClick={() => setActive(index)} className={`region-button ${active === index ? 'is-active' : ''}`}>{item[0]}</button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={region[0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid min-h-[360px] content-between p-8 md:p-10">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">0{active + 1} / 04</span>
            <div>
              <h3 className="text-[clamp(2.7rem,5vw,5.5rem)] font-black leading-none tracking-[-0.06em]">{region[0]}</h3>
              <p className="mt-5 text-xl font-bold">{region[1]}</p>
              <p className="mt-4 max-w-xl text-sm leading-8 text-slate-500">{region[2]}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function Timeline({ data }) {
  const [active, setActive] = useState(0);
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
      <Reveal className="max-w-3xl">
        <p className="eyebrow accent">FIVE RUPTURES</p>
        <h2 className="section-title">改变国家方向的五个断裂点。</h2>
      </Reveal>
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="border-t border-slate-300">
          {data.timeline.map((item, index) => (
            <button key={item[0]} onClick={() => setActive(index)} className={`timeline-button ${active === index ? 'is-active' : ''}`}>
              <span>{item[0]}</span><b>{item[1]}</b>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="min-h-[360px] bg-[var(--pale)] p-8 md:p-10">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">{data.timeline[active][0]}</span>
            <h3 className="mt-10 text-[clamp(3rem,6vw,6.8rem)] font-black leading-[0.9] tracking-[-0.07em]">{data.timeline[active][1]}</h3>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600">{data.timeline[active][2]}</p>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

function HeritageContinuum({ language }) {
  const sites = [
    ['8th-16th c.', { zh: '修道院与宗教城市', fr: 'Abbayes et villes religieuses', en: 'Abbeys and religious cities' }, { zh: '圣米歇尔山等遗址把信仰、海岸防御与石砌工程叠合。', fr: 'Le Mont-Saint-Michel relie foi, défense côtière et construction en pierre.', en: 'Sites such as Mont-Saint-Michel combine faith, coastal defence and stone engineering.' }],
    ['12th-14th c.', { zh: '城墙与封建秩序', fr: 'Remparts et ordre féodal', en: 'Walls and feudal order' }, { zh: '卡尔卡松等城堡城市保存领主权力、贸易路线与边境战争的空间结构。', fr: 'Carcassonne conserve la géographie du pouvoir, des routes commerciales et des frontières.', en: 'Carcassonne preserves the geography of lordship, trade routes and frontier conflict.' }],
    ['18th c.', { zh: '启蒙时代的生产规划', fr: 'Produire au siècle des Lumières', en: 'Production in the Enlightenment' }, { zh: '阿尔克-塞南皇家盐场把工业生产第一次组织成完整的建筑秩序。', fr: "La saline royale d'Arc-et-Senans transforme la production en ordre architectural.", en: 'The Royal Saltworks at Arc-et-Senans turns production into an architectural system.' }],
    ['19th c.', { zh: '煤、钢铁与铁路', fr: 'Charbon, acier et rail', en: 'Coal, steel and rail' }, { zh: '勒克勒佐与洛林工业区留下高炉、矿井、工人城和铁路基础设施。', fr: 'Le Creusot et la Lorraine conservent hauts-fourneaux, mines, cités ouvrières et voies ferrées.', en: 'Le Creusot and Lorraine retain blast furnaces, mines, worker housing and railway infrastructure.' }]
  ];

  return (
    <section className="heritage-continuum border-t border-slate-300">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[0.95] tracking-[-0.065em]">{({ zh: '石头没有退场，钢铁只是叠了上去。', fr: "La pierre demeure. L'acier s'y superpose.", en: 'Stone remained. Steel was layered on top.' })[language]}</h2>
          <p className="max-w-2xl text-sm leading-8 text-slate-400">{({
            zh: '法国的现代化不是清空旧世界，而是在修道院、城墙、运河和乡镇之间嵌入工厂、矿井与铁路。',
            fr: "La modernisation française insère usines, mines et chemins de fer parmi abbayes, remparts, canaux et bourgs anciens.",
            en: 'French modernisation inserted factories, mines and railways among abbeys, walls, canals and older towns.'
          })[language]}</p>
        </Reveal>
        <Reveal delay={0.08} className="heritage-continuum-frame mt-10">
          <img src={`${base}/assets/images/site/epochs-heritage-industry.png`} alt="法国中世纪修道院、城堡与工业革命铁路和钢铁设施组成的历史遗迹全景" />
        </Reveal>
        <p className="mt-3 text-xs leading-6 text-slate-500">{({ zh: '视觉合成：用于呈现历史层叠关系，不代表同一处真实遗址。', fr: "Composition visuelle montrant la superposition des époques, sans représenter un site unique.", en: 'A visual composite showing layers of history, not a single real site.' })[language]}</p>
        <div className="heritage-site-rail mt-8">
          {sites.map(([date, title, copy]) => (
            <article key={date}>
              <span>{date}</span>
              <h3>{title[language]}</h3>
              <p>{copy[language]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CinemaCuisineFeature({ language }) {
  const lenses = [
    [{ zh: '料理', fr: 'Cuisine', en: 'Cuisine' }, { zh: '普罗旺斯蔬菜、厨房技艺与米其林体系成为叙事核心。', fr: 'Légumes provençaux, gestes culinaires et système Michelin deviennent récit.', en: 'Provençal vegetables, kitchen craft and the Michelin system become narrative material.' }],
    [{ zh: '巴黎', fr: 'Paris', en: 'Paris' }, { zh: '屋顶、巷道、市场与餐厅后厨共同塑造可传播的城市想象。', fr: 'Toits, rues, marchés et cuisines composent un imaginaire urbain exportable.', en: 'Rooftops, streets, markets and kitchens form an exportable image of the city.' }],
    [{ zh: '影响力', fr: 'Influence', en: 'Influence' }, { zh: '一部动画电影把法国料理从专业制度转化为全球观众都能理解的情感语言。', fr: "Un film d'animation transforme la cuisine française en langage émotionnel mondial.", en: 'An animated film turns French cuisine into an emotional language understood worldwide.' }]
  ];

  return (
    <section className="cinema-cuisine-feature border-t border-slate-300">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1.18fr_0.82fr]">
        <Reveal className="cinema-cuisine-frame">
          <img src={`${base}/assets/images/site/aesthetics-ratatouille-culture.png`} alt="巴黎屋顶厨房中一只小老鼠正在制作法式普罗旺斯炖菜的原创文化插画" />
        </Reveal>
        <Reveal delay={0.08} className="px-5 py-14 md:px-10 md:py-16 lg:px-12">
          <CookingPot size={44} weight="thin" className="text-[var(--accent)]" />
          <h2 className="mt-7 text-[clamp(2.8rem,5vw,5.4rem)] font-black leading-[0.94] tracking-[-0.065em]">{({ zh: '《料理鼠王》把法国端上了全球银幕。', fr: 'Ratatouille met la France à table sur les écrans du monde.', en: 'Ratatouille served France to a global audience.' })[language]}</h2>
          <p className="mt-7 max-w-xl text-sm leading-8 text-slate-400">{({
            zh: '皮克斯 2007 年动画电影把巴黎、厨师制度与普罗旺斯料理压缩成易于理解的文化入口。它不是法国文化本身，却显著放大了全球观众对法国料理的想象。',
            fr: "Le film Pixar de 2007 condense Paris, la brigade de cuisine et la ratatouille en une porte d'entrée culturelle mondiale.",
            en: "Pixar's 2007 animated film condenses Paris, the kitchen brigade and Provençal cooking into a widely understood cultural gateway."
          })[language]}</p>
          <div className="cinema-cuisine-lenses mt-9">
            {lenses.map(([title, copy]) => <div key={title.zh}><b>{title[language]}</b><span>{copy[language]}</span></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MilitaryForceStructure() {
  const forces = [
    {
      name: '法兰西海军完全体',
      en: 'The Ultimate Marine Nationale',
      icon: ShieldChevron,
      total: '7 航母战备轮转',
      groups: [
        {
          title: '核心打击力量',
          items: [
            ['PANG France Libre class', '3 艘', '新一代核动力航母，搭载 FCAS 六代机与电磁弹射系统。'],
            ['戴高乐级 R91 / R92', '4 艘', '深度延寿的中型核动力支援航母。'],
            ['布列塔尼级两栖航母', '4 艘', '4.5 万吨航空平台，搭载 14 至 20 架 Rafale-V。'],
            ['西北风级 LHD', '8 艘', '全球投送、无人机蜂群母舰与两栖登陆核心。']
          ]
        },
        {
          title: '远洋防空与舰队基石',
          items: [
            ['万吨级大型驱逐舰', '9 艘', '128 单元 VLS，承担远程反导与舰队区域防空。'],
            ['地平线级驱逐舰', '12 艘', '区域防空指挥核心。'],
            ['FREMM 改进型', '17 艘', '反潜与 MdCN 陆攻主力。'],
            ['FDI 数字化护卫舰', '16 艘', '分布式作战与中近程防御。']
          ]
        },
        {
          title: '水下禁区',
          items: [
            ['梭鱼级攻击核潜艇', '24 艘', '大西洋与地中海水下控制力量。'],
            ['雷霆级 SSGN', '6 艘', '84 枚级巡航或高超音速导弹搭载能力，并支持特战与 UUV。'],
            ['SNLE 3G', '6 艘', '第三代战略核威慑平台。']
          ]
        }
      ]
    },
    {
      name: '法兰西空天军完全体',
      en: 'The Imperial Air & Space Force',
      icon: AirplaneTilt,
      total: '900+ 战机总库存',
      groups: [
        {
          title: '战机编队',
          items: [
            ['FCAS 六代机', '200 架', '维持 4 个隐身突击联队。'],
            ['Rafale F5 / F6', '450 架', '空军与航母航空兵主力。'],
            ['Rafale F4', '150 架', '本土防空与战术核打击备份。'],
            ['LIFT 高级教练机', '200 架', '训练、轻型攻击与飞行员储备。']
          ]
        },
        {
          title: '电子战与天基监测',
          items: [
            ['Archange SIGINT', '15 架', '雷达频率情报与电子战数据库采集。'],
            ['Rafale-E', '40 架', 'SEAD、防空压制与高能干扰。'],
            ['CSO 3G', '3 个集群', '全天候全球军事侦察网络。']
          ]
        },
        {
          title: '战略投送',
          items: [
            ['A330 MRTT', '60 架', '岸基与航母航空兵持续加油支援。'],
            ['A400M', '80 架', '重装部队与远程战区运输。'],
            ['A380-M', '20 架', '特重型战略货运平台。']
          ]
        }
      ]
    },
    {
      name: 'R.I.F. 陆军完全体',
      en: 'The Imperial Land Force',
      icon: Crosshair,
      total: '1,500,000 现役兵力',
      groups: [
        {
          title: '人员与无人体系',
          items: [
            ['职业化现役部队', '150 万人', '数字化外骨骼与神经元链路配置。'],
            ['地面无人战斗单位 UGV', '50 万台', '承担侦察、排雷与高危突击任务。']
          ]
        },
        {
          title: '重装突击力量',
          items: [
            ['Leclerc 2.0', '5,500 辆', '140mm 主炮、360° APS 与车载无人机指挥台。'],
            ['AFV / IFV', '28,000 辆', 'VBCI 2.0、Jaguar 与 VBMR 组成全机械化集群。']
          ]
        },
        {
          title: '火炮、防空与陆航',
          items: [
            ['CAESAR Mk3', '2,500 门', '自动化 155mm 轮式自行火炮。'],
            ['远程火箭炮', '800 门', '150 至 300 公里纵深火力。'],
            ['SAMP/T NG 移动版', '2,000 套', '伴随防空与巡航导弹拦截。'],
            ['Tiger Mk3', '600 架', 'MUM-T 有人和无人协同攻击直升机。'],
            ['NH90 / H225M', '1,200 架', '大规模垂直登陆与极地增援。']
          ]
        }
      ]
    }
  ];

  const [activeForce, setActiveForce] = useState(0);
  const force = forces[activeForce];
  const ForceIcon = force.icon;

  return (
    <section className="military-force-section border-t border-slate-300">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-4xl">
          <p className="eyebrow accent">R.I.F. ALTERNATE FORCE STRUCTURE</p>
          <h2 className="section-title">法兰西共和国帝国军队完全体配置。</h2>
          <p className="mt-7 max-w-3xl text-sm leading-8 text-slate-500">以下内容直接依据 military.txt 整理，属于架空世界观军力方案，并非现实法国武装力量现状。</p>
        </Reveal>

        <div className="mt-10 grid border border-slate-300 bg-white lg:grid-cols-[300px_1fr]">
          <div className="border-b border-slate-300 lg:border-b-0 lg:border-r">
            {forces.map((item, index) => (
              <button key={item.name} type="button" onClick={() => setActiveForce(index)} className={`region-button ${activeForce === index ? 'is-active' : ''}`}>
                {item.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={force.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-7 md:p-12">
              <div className="flex flex-wrap items-start justify-between gap-6 border-b border-slate-300 pb-8">
                <div>
                  <div className="flex items-center gap-3 text-[var(--accent)]"><ForceIcon size={28} weight="thin" /><span className="font-mono text-xs">{force.en}</span></div>
                  <h3 className="mt-4 text-4xl font-black tracking-[-0.05em]">{force.name}</h3>
                </div>
                <strong className="text-xl text-[var(--accent)]">{force.total}</strong>
              </div>

              <div className="mt-4">
                {force.groups.map((group, groupIndex) => (
                  <article key={group.title} className="grid gap-5 border-b border-slate-300 py-8 xl:grid-cols-[180px_1fr]">
                    <div>
                      <span className="font-mono text-xs text-[var(--accent)]">0{groupIndex + 1}</span>
                      <h4 className="mt-3 font-black">{group.title}</h4>
                    </div>
                    <div className="grid gap-px bg-slate-300 md:grid-cols-2">
                      {group.items.map(([name, count, copy]) => (
                        <div key={name} className="military-item bg-white p-5">
                          <div className="flex items-start justify-between gap-4">
                            <b>{name}</b>
                            <strong className="shrink-0 text-[var(--accent)]">{count}</strong>
                          </div>
                          <p className="mt-5 text-xs leading-6 text-slate-500">{copy}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SportPage({ language }) {
  const territories = [
    ['巴黎', '法网、巴黎奥运与法兰西体育场把城市文化和全球赛事连接起来。'],
    ['阿尔卑斯', '环法自行车赛把山地、旅游与耐力竞技变成移动国家舞台。'],
    ['西南部', 'Top 14 与地方俱乐部维持法国最深厚的橄榄球文化。'],
    ['勒芒', '24 小时耐力赛把工程能力转化为全球赛事品牌。']
  ];
  const [active, setActive] = useState(0);

  return (
    <main style={{ '--accent': '#1f55d5', '--pale': '#e6edfb' }} className="topic-page pt-[76px]">
      <section className="bg-white">
        <div className="mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-10 px-5 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4 text-[var(--accent)]"><span className="font-mono text-xs font-bold">04 / 06</span><Basketball size={28} weight="thin" /></div>
            <p className="mt-8 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">SPORT · TERRITOIRE · INFLUENCE</p>
            <h1 className="mt-5 text-[clamp(3.8rem,7vw,7.7rem)] font-black leading-[0.88] tracking-[-0.075em]">
              {language === 'fr' ? 'La France en mouvement' : language === 'en' ? 'France in Motion' : <>法国，<br />在运动中</>}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">从国家队、青训学院到世界级赛事，法国用体育连接城市、产业、文化与国际影响力。</p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <img src={`${base}/assets/images/arena/france-sport-panorama-v2.png`} alt="法国多项目体育全景" className="aspect-[1.22/1] w-full object-cover" />
            <div className="absolute inset-y-0 right-0 w-3 bg-[var(--accent)]" />
          </Reveal>
        </div>
        <Metrics metrics={[['2', '男足世界杯冠军'], ['1903', '首届环法'], ['1 / 4', '主办网球大满贯'], ['2024', '巴黎奥运会']]} />
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-4xl"><p className="eyebrow accent">FIFA WORLD CUP 26</p><h2 className="section-title">第三颗星，是一项国家工程。</h2></Reveal>
        <div className="mt-10 grid border border-slate-300 bg-white lg:grid-cols-[0.62fr_1.38fr]">
          <div className="grid min-h-[460px] place-items-center bg-blue-700 p-10 text-white">
            <div className="text-center"><span className="text-sm tracking-[0.3em]">FRANCE</span><strong className="mt-8 block text-[10rem] leading-none tracking-[-0.13em]">10</strong><b>MBAPPÉ</b></div>
          </div>
          <div className="p-7 md:p-12">
            {[['16 JUN', 'FRANCE / SENEGAL', 'NEW YORK'], ['22 JUN', 'FRANCE / IRAQ', 'PHILADELPHIA'], ['26 JUN', 'NORWAY / FRANCE', 'BOSTON']].map((match, index) => (
              <div key={match[0]} className="grid gap-3 border-b border-slate-200 py-7 md:grid-cols-[90px_1fr_160px] md:items-center">
                <span className="font-mono text-xs text-blue-700">{match[0]}</span><b className="text-2xl tracking-[-0.04em]">{match[1]}</b><small className="text-slate-400 md:text-right">{match[2]}</small>
              </div>
            ))}
            <p className="mt-9 max-w-2xl text-sm leading-8 text-slate-500">阵容深度、速度与中轴控制力决定法国能否把天赋转化为稳定的大赛统治。</p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
          <Reveal className="max-w-3xl"><p className="eyebrow accent">TWO ICONS</p><h2 className="section-title">两个坐标，同一种法国野心。</h2></Reveal>
          <div className="mt-10 grid gap-12">
            {[
              ['Kylian Mbappé', '世界杯冠军、国家队队长与法国足球最具全球辨识度的当代符号。', `${base}/assets/images/arena/mbappe.jpg`, ['2018 世界杯冠军', '2022 世界杯金靴', '法国队 10 号']],
              ['Victor Wembanyama', '改变 NBA 空间尺度的新核心，也是法国篮球人才体系的全球证明。', `${base}/assets/images/arena/wembanyama.jpg`, ['2023 选秀状元', '2024 最佳新秀', '巴黎奥运银牌']]
            ].map((person, index) => (
              <Reveal key={person[0]}>
                <article className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <img src={person[2]} alt={person[0]} className="h-[480px] w-full object-cover object-top" loading="lazy" />
                  <div>
                    <span className="font-mono text-xs font-bold text-blue-700">{index ? 'BASKETBALL' : 'FOOTBALL'}</span>
                    <h3 className="mt-4 text-[clamp(3.2rem,6vw,6.5rem)] font-black leading-[0.88] tracking-[-0.075em]">{person[0]}</h3>
                    <p className="mt-7 max-w-xl text-base leading-8 text-slate-500">{person[1]}</p>
                    <div className="mt-8 grid border-t border-slate-300 sm:grid-cols-3">{person[3].map(x => <span key={x} className="border-b border-slate-300 py-5 text-xs font-bold sm:border-b-0">{x}</span>)}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <Reveal className="max-w-3xl"><p className="eyebrow accent">SPORTING GEOGRAPHY</p><h2 className="section-title">法国国土，本身就是竞技场。</h2></Reveal>
        <div className="mt-10 grid border border-slate-300 bg-white lg:grid-cols-[280px_1fr]">
          <div className="border-b border-slate-300 lg:border-b-0 lg:border-r">{territories.map((item, i) => <button key={item[0]} onClick={() => setActive(i)} className={`region-button ${active === i ? 'is-active' : ''}`}>{item[0]}</button>)}</div>
          <div className="grid min-h-[300px] content-center p-8 md:p-10"><span className="font-mono text-xs text-blue-700">0{active + 1}</span><h3 className="mt-6 text-5xl font-black">{territories[active][0]}</h3><p className="mt-5 max-w-xl text-sm leading-8 text-slate-500">{territories[active][1]}</p></div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('hexagone-language') || 'zh');
  useEffect(() => {
    localStorage.setItem('hexagone-language', language);
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  }, [language]);

  const content = useMemo(() => {
    if (pageKey === 'home') return <HomePage language={language} />;
    if (pageKey === 'arsenal') return <ArsenalPage language={language} />;
    if (pageKey === 'territories') return <TerritoriesPage language={language} />;
    if (pageKey === 'sport' || pageKey === 'arena') return <SportPage language={language} />;
    return <StandardTopic data={pages[pageKey] || pages.statecraft} language={language} />;
  }, [language]);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      {content}
      <Footer language={language} />
    </>
  );
}
```

## src\main.jsx

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
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

## src\TerritoryInteractiveMap.jsx

```jsx
import React, { useEffect } from 'react';
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';

function MapViewController({ mode }) {
  const map = useMap();

  useEffect(() => {
    if (mode === 'metropole') {
      map.flyTo([46.6, 2.4], 6, { duration: 1.1 });
    } else {
      map.flyTo([12, 15], 2, { duration: 1.1 });
    }
  }, [map, mode]);

  return null;
}

export default function TerritoryInteractiveMap({ mode, cities, markerColor, onSelect }) {
  return (
    <MapContainer center={[46.6, 2.4]} zoom={6} minZoom={2} maxZoom={12} zoomControl scrollWheelZoom>
      <MapViewController mode={mode} />
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map(city => (
        <CircleMarker
          key={`${city.fr}-${city.lat}`}
          center={[city.lat, city.lng]}
          radius={city.type === 'capital' ? 9 : city.type === 'overseas' ? 7 : 6}
          pathOptions={{
            color: markerColor(city.type),
            fillColor: markerColor(city.type),
            fillOpacity: 0.86,
            weight: 1
          }}
          eventHandlers={{ click: () => onSelect(city) }}
        >
          <Popup>
            <b>{city.name} · {city.fr}</b><br />
            {city.region}<br />
            {city.note}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
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

