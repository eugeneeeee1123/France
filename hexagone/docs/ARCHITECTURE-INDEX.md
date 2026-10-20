# INDEX 首页架构 v0.2（已过 4-agent review）

> 作者：Claude（指挥）· 日期：2026-10-16 · 状态：v0.2，吸收 Grok / Antigravity / Codex / Claude 四方 review（决策记录见 `REVIEW-ARCH-v0.1.md`），剩 2 个问题待用户拍板（§12）
> 依据：`Hexagone UI wireframes and design system/Hexagone Wireframes.dc.html`（1b + 1c）、`Hexagone UI Mockup.dc.html`（INDEX 段）、`Hexagone Design System/`（tokens + components + readme）、`hexagone-content-plan-v2.md` §00、§01、技术 BRIEF、`../../PRODUCT.md`

---

## 0. 已定决策

| # | 决策 | 来源 |
|---|------|------|
| D1 | 新建 Next.js 项目，位置 `France/hexagone/`（独立子目录，避免 TS/Tailwind 扫描 289KB 内容规划、设计系统 `.d.ts`、Blender 二进制） | 用户选 Next.js；子目录是 Claude 的决定 |
| D2 | 版本：Next 16.4.2 + React 19 + TypeScript + Tailwind 4.3 + Motion 14 (`motion/react`) + next-intl 4.14。内容规划写的是 Next 14，新项目用当前稳定版 | Claude |
| D3 | 代码放 `src/`（与 PROGRESS.md 的旧日志路径 `src/app`、`src/lib/content` 一致） | create-next-app 默认 + 旧日志 |
| D4 | INDEX 版式 = wireframe **1b + 1c 深度轴**，以 UI Mockup 的 INDEX 段为像素基准 | 用户 |
| D5 | 全站数字一律用 **R.I.F. 设定**（content plan 里的 `whatRif` / `valueRif`），不做 canon 开关；推演数字照样带 scénario 标注 | 用户 |
| D6 | 所有文案由 Antigravity（`gemini-3.8-flash-high`，用 humanizer + avoid-ai-writing）撰写；Claude 只写 brief 并按 voice 规则验收 | 用户 |
| D7 | 语言：`fr`（默认）/ `en` / `zh`，路由 `/[locale]/...`，GRANDEUR 不翻译 | content plan + 设计系统 |
| D8 | 构建路径：code-first（本环境没有图像生成，方向合同写进 layout 源码注释，finish review 按行为审） | impeccable |
| D9 | **Mockup 与设计系统冲突时：版式/构图听 Mockup，组件样式与 tokens 听设计系统**（逐项见 §1.1） | review #2 |
| D10 | i18n 用 next-intl 4（3 比 1），P0 先做一次 `cacheComponents` 下三语言静态生成的验证 build | review Q7 |
| D11 | INDEX 首页 v1 不需要 Motion 库：所有入场动效走纯 CSS，服务端永远输出终态。Motion 推迟到 Timeline overlay 再装 | review #1, #8 |
| D12 | v1 明确砍掉的内容（不是遗漏）：深度入口 Rail（§01）；INDEX 自己的 Why/How/What 与 RelatedCapabilities（矩阵已链接全部 10 个模块，Mockup 也没有）；Hero 里的"六个模块视觉预览"（被 10 行矩阵取代）；矩阵图标（编号是唯一导航符号，设计系统规定）；双联 58/42 拼贴 + hero crest（按 Mockup 单斜切）；1c 的分层滚动叙事；搜索；数字计数动画；INDEX 页的导航 CTA | review #9–11, #25, #26 |

---

## 1. 设计合同（anti-ui-slop design contract + impeccable direction contract）

这段会原样写进 `src/app/[locale]/layout.tsx` 顶部的源码注释（JSX 不能输出 HTML 注释），验收时 grep 源码确认还在。

- **THESIS**：一个法语词撑起整个首屏。GRANDEUR 是首页的论点本身，不是装饰标题。拒绝"全幅视频 + 居中口号 + 三张特性卡"的旅游站默认排法。
- **OWN-WORLD**：深海军蓝 ink 四阶平面（`#00152C → #12385F`）、唯一行动色香槟金 `#EFB44B`、每个模块一个 `oklch(68% .1 h)` 编号色、Playfair Display 大写纪念碑字 + Public Sans 正文 + IBM Plex Mono 数据、0 圆角、1px 发丝线分区不用卡片盒子、三色旗只作字面引用的细条。
- **STORY**：读者先看到论点（GRANDEUR）和问题（"为什么法国至今仍是全球玩家"），再看到四个 R.I.F. 数字作证据，再从十个平权编号入口里选一个进入，最后被时间线和戴高乐引言收住。
- **FIRST VIEWPORT**（1440×900）：Mockup 的两栏 auto-fit 网格 `repeat(auto-fit, minmax(min(100%,560px),1fr))`，1200px 以上约 50/50。左栏最左 14px 处是深度轴：五个刻度 +400 km / +10 km / 0 m / −200 m / −6000 m，0 m 处金点（v1 只是静态的海拔装饰，1c 的分层滚动叙事不在 v1 范围内）。文字栏自上而下：eyebrow → GRANDEUR（`clamp(3rem, 16.5cqi, 9rem)`，字距 .05em，字重 400，金色，`lang="fr"`）→ LA FRANCE EN PROFONDEUR → 三色细条 → 斜体金句 → 一段 lede → 主 CTA「COMMENCER L’EXPLORATION →」（金色描边按钮）+ 次 CTA「OUVRIR LA CHRONOLOGIE」。右栏是单斜切 clip-path 拼贴图（Marianne / 铁塔 / Rafale / 潜艇）+ 底部 scrim + 右下引言卡 + 巴黎坐标。主行动在 GRANDEUR 下方第六行，首屏内可见。INDEX 页导航栏不放 CTA，避免和 hero 主按钮重复。（2026-10-17 code review #27 补记：GRANDEUR 实际为 `clamp(2rem, 16.5cqi, 9rem)`、行高 .9；桌面端细指针设备在空闲后由可选的 3D 铁塔层替换右栏静态拼贴。）
- **FORM**：用户锁定 wireframe 1b + 1c（UI Mockup 实现版），没有跑 concept roll。
- **FINISH**：unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

### 必须覆盖的状态（anti-ui-slop）
- **服务端终态（硬规则）**：服务端 HTML 永远是动画结束后的样子。GRANDEUR、各区块、数字在没有 JS 时完整可见；入场动画只是在此之上的渐进增强（§8）。
- 语言切换：三语言下 GRANDEUR、品牌行、法文引言保持法文（`lang="fr" translate="no"`），其余全部切换；中文用 CJK 行高档（1.8），中文下斜体改正体。
- 图片未加载：拼贴图容器先显示 ink-800 底色，比例固定，零 CLS。
- 减弱动效：入场只保留 120ms opacity 交叉淡入（tokens 的值），无位移、无逐字母错峰。
- 无 JS：全部内容和链接可用；导航溢出与移动端菜单用 `<details>` 披露组件，不依赖 JS。
- 键盘：skip link → HexMark → 导航 7 项 → 「+3 ▾」→ FR / EN / 中 → 时间线按钮 → 英雄 CTA ×2 → 矩阵 10 行 → 时间线 5 节点 → 页脚链接；焦点环 2px 金色无过渡；`scroll-padding-top` 等于导航高度，焦点目标不被 sticky 导航遮住。

### 断点（取自 Mockup 实测值）

| 宽度 | 导航 | 英雄区 | 统计条 | 矩阵 | 时间线 |
|---|---|---|---|---|---|
| ≥1400 | HexMark + 7 项 + 「+3 ▾」+ 语言 + 时间线 | 两栏约 50/50 | 4 格一行 | 两列（≥1184） | 5 节点横排 |
| 1200–1399 | 7 项折叠成「MODULES ▾」 | 两栏 | 4 格 | 两列 | 横排 |
| 768–1199 | 同上 | 单栏，拼贴图在文字后 | 2×2 | 单列 | 横排 |
| <768 | HexMark + 「MENU」披露按钮 + 语言；菜单展开为全宽列表（10 个模块、语言、时间线） | 单栏；深度轴隐藏，文字栏去掉 56px 内缩；拼贴图变成 CTA 之后的 16:9 横条；英雄引言卡隐藏 | 2×2 | 单列 | 竖排列表 |
| 320 | 同上，必须无横向滚动（WCAG 1.4.10） | 同上 | 1 列 | 单列 | 竖排 |

### 1.1 Mockup 与设计系统的逐项裁决（D9）

| 项目 | Mockup | 设计系统 | 采用 |
|---|---|---|---|
| 导航高度 | 72px | `--nav-height: 62px` | **62px（DS）**；如需 72 先改 DS token 再同步 |
| 导航标签 | ACCUEIL + 模块名，无编号 | NavBar `{m.n} {m.name}` | **DS：`01 ARSENAL`，无 ACCUEIL 项**，HexMark 即首页链接 |
| Logo | 尖顶实心六边形，字标 .22em | HexMark 平顶描边，.04em | **DS HexMark**；字标文字待用户定（§12） |
| GRANDEUR | 400 字重，金色，16.5cqi 上限 156px | DisplayTitle 500 字重 paper-50；`--fs-grandeur` 上限 9rem | **DisplayTitle + `accentWord` 设金色；字重 400；上限 9rem**（content plan 指定金色） |
| Eyebrow | 金色 | SectionEyebrow paper-300 | **DS paper-300** |
| 统计数字 | 30px paper，左对齐 | StatStrip 18px 金色居中 | **DS StatStrip `variant="open"`** |
| 引言卡宽度 | 320px | QuoteBlock 250px | **DS 的 card 变体，max-width 320px，width 100%** |
| 三色条 | 240×2，无间隙 | TricolorRule 170×4，间隙 5 | **DS TricolorRule，props 设 width 240 / height 2 / gap 0**（用 props 表达 Mockup 值，不改组件） |
| 英雄栅格 | auto-fit 50/50 | 无规定 | **Mockup** |
| 矩阵形态 | 行（编号 + 名称 + 副标 + →） | ModuleCard 卡片 | **Mockup 行**，新增 `ModuleRow`（理由：DS ModuleCard 是带缩略图的卡，而缩略图素材不足，见 §12） |
| 时间线 | 5 节点 + 金线 | Timeline 组件 | **DS Timeline**，数据按 §6 锁定 |
| 时间线视觉值（code review #28 补记） | 11px 金边节点、年份 17px/500、说明 12px | DS 10px paper-300 节点、15px/600、11px | **INDEX 采用 Mockup 值**；组件 API 为 `items` / `fillToIndex`（节点是链接，DS 的 `eras` / `activeIndex` 是点击回调，服务端组件无法使用） |
| 推演说明 | Arsenal 页全宽发丝线带 | ScenarioLabel 金边小框 | **INDEX 用 Mockup 带状样式**（组件内实现，需 `badge`） |
| GRANDEUR 尺寸 | 16.5cqi 上限 156px，行高 .9 | `--fs-grandeur` | **`clamp(2rem, 16.5cqi, 9rem)`，字重 400，行高 .9**（2rem 下限：3rem 在 320px 溢出） |
| S5 引言栏 | 透明底 + 顶部发丝线 | QuoteBlock panel ink-900 填充 | **Mockup**：QuoteBlock `ground="rule"` |
| ≥1400 导航项 | 居中 | 无规定 | **Mockup 居中** |
| 英雄次要 CTA | paper 12px，44px 高 | Button ghost | **DS Button `variant="ghost"`**（与 Mockup 一致） |

### 验收标准（可观察）
1. 1440 / 1024 / 390 / 320 四个宽度截图无溢出、无重叠、无横向滚动。
2. 1440 宽度与 Mockup INDEX 段叠图比对：英雄栅格、GRANDEUR 尺寸、矩阵行高、区块间距误差 ≤ 8px（§1.1 已裁决为 DS 的项除外）。
3. 10 个模块全部出现在矩阵里，INDUSTRY 在矩阵和导航溢出菜单里都可达。
4. 每个推演数字旁有 scénario 标记；GDN-2040 说明全页只有一处，位于统计条正上方；`messages/` 与 `src/` 中 grep 不到 `290`。
5. 禁用 JS 渲染：全部文字、图片、链接可见可用。
6. 模拟 `prefers-reduced-motion: reduce`：无位移、无逐字母动画，只有 ≤120ms 淡入。
7. 键盘按上面的 Tab 序列走完一遍，焦点始终可见、不被导航遮住。
8. `npm run build` 0 error 0 warning；build 输出显示 `/fr`、`/en`、`/zh` 均为静态预渲染。
9. Lighthouse（移动端）Performance ≥ 90、Accessibility = 100、CLS < 0.05；LCP 元素以实测为准并记录。
10. INDEX 路由自身的客户端 JS（不含框架共享 chunk，从 build 输出读取）≤ 20KB gzip。
11. impeccable detector（`detect.mjs`）对 INDEX 无 error 级发现；web-design-guidelines 复查无 blocker。

---

## 2. 技能规则与设计系统冲突的裁决

impeccable 的原则："The brief wins." 用户的设计系统是 brief，下表冲突一律设计系统胜。

| 技能规则 | 设计系统 / 内容规划 | 裁决 |
|---|---|---|
| design-taste：禁止居中 Hero / 超大 H1 | GRANDEUR 14–18vw 纪念碑巨字是 content plan 指定的视觉锚点 | 保留巨字；Mockup 已改成左栏排布，不是正中居中 |
| design-taste：禁止 3 等宽列 | content plan「战略自主宣言（3列）」+ Mockup 三栏发丝线 | 保留三栏，但无卡片无阴影，按发丝线分隔 |
| design-taste：perpetual 循环微动效、spring 弹跳 | 设计系统：no loops，settle 曲线，不弹 | 不做循环；只用 settle 曲线；入场只触发一次 |
| design-taste：禁 Inter，推荐 Geist / Satoshi；impeccable：Playfair 是训练数据默认字体 | 设计系统锁定 Playfair Display（design.md 指定 Didot，Playfair 是其开源替代）+ Public Sans + IBM Plex Mono | 保留设计系统字体；如将来拿到 Didot 授权可替换 display 字体 |
| apple-design：导航用半透明毛玻璃 `backdrop-filter` | 设计系统：No backdrop blur；导航 ink-900 实底 + 底部发丝线 | 实底导航 |
| apple-design：spring 物理、手势 | 首页没有拖拽手势 | 只吸收"按下即反馈"（`:active` scale .98 / 100ms）和 reduced-motion 规则 |
| ui-setup：SaaS 向导（选品牌色/字体/页面配方） | 所有答案已由设计系统给出 | 只保留它的"设计锁"产物 → `docs/DESIGN-LOCK.md` |

---

## 3. 目录结构

```
hexagone/
├── AGENTS.md                      # create-next-app 生成的 Next 16 agent 指南（保留；上级 France/agents.md 的编辑规则同样适用）
├── docs/
│   ├── ARCHITECTURE-INDEX.md      # 本文件
│   ├── DESIGN-LOCK.md             # ui-setup 设计锁
│   └── COPY-BRIEF-INDEX.md        # 给 Antigravity 的文案 brief
├── messages/
│   ├── fr.json  en.json  zh.json  # next-intl，全部由 Antigravity 写
├── public/
│   └── images/                    # 从设计系统 assets/images 复制：hero-collage, degaulle-portrait, thumb-*
└── src/
    ├── proxy.ts                   # next-intl 语言路由（Next 16 的 middleware 改名为 proxy）；matcher 见 §4
    ├── i18n/
    │   ├── routing.ts             # locales: ['fr','en','zh'], defaultLocale: 'fr'
    │   ├── navigation.ts          # createNavigation(routing) → Link / getPathname
    │   └── request.ts             # getRequestConfig → messages/<locale>.json
    ├── global.d.ts                # next-intl AppConfig：Messages 类型 = typeof fr.json，Locale 联合类型
    ├── app/
    │   ├── globals.css            # @import tailwind + tokens；@theme 重置默认调色板后映射 tokens（§7）
    │   └── [locale]/
    │       ├── layout.tsx         # 唯一的 <html lang>/<body> 所有者；viewport；字体变量；NavBar、SiteFooter；设计合同源码注释
    │       ├── page.tsx           # INDEX（Server Component，只做组装）
    │       ├── not-found.tsx
    │       └── <module>/page.tsx  # 10 个占位页，矩阵链接不 404
    ├── styles/tokens/             # 设计系统 tokens/*.css 原样复制（已完成，逐字节一致）
    ├── lib/
    │   ├── content/
    │   │   ├── modules.ts         # 结构数据：id / n / route / hue / links / era / scenario / navVisible（不含文案）
    │   │   ├── index-stats.ts     # INDEX 四个 R.I.F. 数字（number 类型，§6）
    │   │   └── timeline-eras.ts   # BRIEF 指定名称；INDEX 用其中 5 个锁定节点
    │   ├── fonts-latin.ts         # Playfair Display / Public Sans / IBM Plex Mono → --nf-*
    │   └── fonts-cjk.ts           # Noto Serif SC / Noto Sans SC，preload:false，只在 zh 挂载
    └── components/
        ├── brand/       HexMark.tsx  TricolorRule.tsx
        ├── actions/     Button.tsx  CtaLink.tsx
        ├── icons/       Icon.tsx               # 13 个 DS 字形 + 新增 clock（时间线按钮，Mockup 有、DS 缺）
        ├── navigation/  NavBar.tsx  LangSwitch.tsx  Breadcrumb.tsx  SiteFooter.tsx
        ├── content/     ScenarioLabel.tsx  ModuleRow.tsx(新增)
        ├── editorial/   DisplayTitle.tsx  SectionEyebrow.tsx  QuoteBlock.tsx
        ├── data/        StatStrip.tsx  Timeline.tsx
        └── index/       HeroSection.tsx  DepthAxis.tsx(新增)  HeroCollage.tsx(新增)
                         MatrixSection.tsx  ManifestoSection.tsx
```

规则：
- 设计系统 `components/*.jsx` 逐个移植成 TSX，**保留原组件名和视觉 props 名**（AGENTS.md：禁止擅自改名）。移植时只改两件事：hover / press / focus 从 React state + `matchMedia` 改成 CSS（`@media (hover:hover) and (pointer:fine)`、`:active { scale: var(--press-scale) }`、`:focus-visible`）；回调 props（`onNavigate`、`onLangChange`）改成 `href` / `locale`，因为函数不能从服务端组件传给客户端。
- 设计系统组件 → 首页用法：NavBar（导航）、LangSwitch（三个 `<Link locale hrefLang>` 链接，不用按钮）、Timeline（时间线带）、QuoteBlock `variant="card"`（英雄引言）与 `variant="panel"`（结尾引言 + 22% 肖像）、StatStrip `variant="open"`、ScenarioLabel、DisplayTitle、SectionEyebrow、TricolorRule、Button、CtaLink、HexMark。
- 新增组件（设计系统里没有，明确登记）：`ModuleRow`（Mockup 的矩阵行）、`DepthAxis`、`HeroCollage`、`clock` 图标。不用 DS `ModuleCard` 的原因：它依赖缩略图，而缩略图只有 109×55（§12）。
- `components/index/*` 只给首页用。
- **INDEX v1 唯一的 React 客户端组件是可选的 `EiffelScene`**（`components/index/EiffelScene.tsx`，Three.js，桌面 + pointer:fine + 非 reduced-motion 时才懒加载）。导航溢出菜单和移动端菜单是 `<details>` 披露组件；"Esc 关闭并把焦点还给按钮"和区块入场用两段极小的内联脚本，不是 React 组件。DisplayTitle、入场动效都是服务端输出 + CSS。

---

## 4. 路由与 i18n

- `src/i18n/routing.ts`：`defineRouting({ locales: ['fr','en','zh'], defaultLocale: 'fr', localePrefix: 'always' })`。
- **`<html>` / `<body>` 只由 `[locale]/layout.tsx` 输出**；删除脚手架 `src/app/layout.tsx`（它写死了 `lang="en"`）。`<html lang>`：`fr` / `en` / `zh-Hans`。
- 静态生成：`[locale]/layout.tsx` 导出 `generateStaticParams` 返回三种语言；**每一个**静态 layout 和 page 在调用 next-intl API 之前都先 `setRequestLocale(locale)`；`generateMetadata` 里显式传 `getTranslations({ locale, namespace: 'meta' })`。P0 先跑一次 `npm run build`，确认 build 输出里 `/fr`、`/en`、`/zh` 都是静态的，才继续往下做。
- `src/proxy.ts` matcher：`'/((?!api|_next|_vercel|.*\\..*).*)'`，排除框架路径、API 和带扩展名的静态资源（图片、favicon）。
- 字符串怎么进客户端：服务端组件调用 `getTranslations` 取好字符串，作为 props 传给客户端组件；INDEX 不挂 `NextIntlClientProvider` 的全量 messages。
- **（build 后补记，2026-10-17）链接**：所有内部链接用 `next/link`，href 由 `src/i18n/paths.ts` 的本地 `getPathname({ locale, href })` 生成。不要从 next-intl 的 `createNavigation` 导入任何东西（含 `getPathname`）：它会把 next-intl 的客户端 `Link`（BaseLink）注册成 client reference，每个路由多出约 13KB gzip；next-intl 的 `Link` 没有 provider 时还会在预渲染时报 "No intl context found"（Opus 规划发现，Sonnet 复核）。
- 类型：`src/global.d.ts` 声明 next-intl `AppConfig`（`Messages = typeof import('../messages/fr.json')`），缺 key 在类型检查时报错；另加一个脚本校验三份 JSON 的 key 完全一致、ICU 占位符一致。
- 语言标注：GRANDEUR、品牌行 LA FRANCE EN PROFONDEUR、法文引言在 `en` / `zh` 页面上加 `lang="fr" translate="no"`；语言切换链接各自带 `lang` 和 `hrefLang`。
- 数字格式：统计值存成 number，用 next-intl `format.number`（底层 Intl.NumberFormat）按语言输出（法语千位分隔是窄不换行空格）；单位前用不换行空格。巴黎坐标也按语言格式化（法语小数逗号）。
- 字体按语言加载：拉丁字体在 `fonts-latin.ts`；中文字体在 `fonts-cjk.ts`，`preload: false`，只在 `locale === 'zh'` 时把它的 `.variable` 挂到 `<html>`。
- `viewport` 导出：`{ colorScheme: 'dark', themeColor: '#00152C' }`。
- 元数据：`generateMetadata` 读 `meta.*`，`<title>` 用 **La France en Profondeur**（content plan 命名规则）。
- 其他 10 个模块路由本阶段只建占位页（`[locale]/arsenal/page.tsx` 等），让矩阵链接不 404；正文后续逐页做。

### 4.1 Next 16.4 脚手架的既成事实（已在 `node_modules/next/dist/docs` 核实）

- 脚手架生成的 `next.config.ts` 显式写了 `cacheComponents: true` + `partialPrefetching: true`（是项目配置，不是框架默认值）。规则分三类：路由参数靠 `generateStaticParams` 静态化；读文件、读 messages 这类可缓存的数据靠 `"use cache"`；真正的请求期数据（cookies、headers）才包 `<Suspense>`。INDEX 没有请求期数据，目标是整页进入静态外壳。
- `next.config.ts` 补 `turbopack.root`，消除"package-lock.json 在 git 仓库之外被忽略"的警告（验收要求 0 warning）。
- Middleware 在 16 改名为 **Proxy**：文件是 `src/proxy.ts`，导出 `proxy` 或 default（`01-app/01-getting-started/16-proxy.md`）。
- Tailwind 4 通过 `@tailwindcss/turbopack` loader 接入（`next.config.ts` 的 `turbopack.rules`），没有 `postcss.config`。
- Next 16 自带 i18n 原语：`next/root-params` 的 `lang()` getter + 服务端字典（`02-guides/internationalization.md`）。next-intl 4.14.9 的 peer 支持 `next ^16`。两条路线见 §12 Q7。
- 脚手架自带 `AGENTS.md`（"This is NOT the Next.js you know"），要求写代码前先读 `node_modules/next/dist/docs/`。所有委派给 Codex / Grok / Antigravity 的写码 brief 都要带上这句。
- `npm install` 报 5 个 high 级漏洞 + `unrs-resolver` postinstall 未批准，P0 时用 `npm audit` 看来源再决定，不盲目 `--force`。

---

## 5. INDEX 区块地图

| # | 区块 | 组件 | 数据 / 文案 key | 渲染 | 动效 |
|---|---|---|---|---|---|
| S0 | 顶部导航（sticky，ink-900 实底，62px） | DS `NavBar`：**FFF 队徽 `fff-crest.png` 作为 logo（`logoSrc`），点击回 INDEX**，旁边字标 LA FRANCE EN PROFONDEUR（<1200px 只留队徽）+ 7 个可见模块 `01 ARSENAL`… + `<details>`「+3 ▾」+ `LangSwitch` FR/EN/中（链接）+ 时间线按钮；INDEX 页不放 CTA；无搜索 | `modules.ts`，`nav.*`，`a11y.*` | Server | hover 颜色 180ms；激活项 2px 金色下划线 |
| S1 | 英雄区（两栏） | `HeroSection` → `DepthAxis`（aria-hidden，5 刻度）+ 文字栏（`SectionEyebrow`、`DisplayTitle` GRANDEUR、品牌副标、`TricolorRule`、斜体金句、lede、`Button` + `CtaLink`）+ 右栏 `HeroCollage` + `QuoteBlock variant="card"` + 坐标 | `index.hero.*`，`index.heroQuote.*` | Server；右栏 3D 是可选 client 岛（见下） | GRANDEUR 逐字母浮现（CSS，服务端终态） |
| S2 | 推演说明 + 数字快照 | `ScenarioLabel`（GDN-2040，全页唯一一处，全宽发丝线带，照 Mockup Arsenal 页样式）+ DS `StatStrip variant="open"`（4 格） | `index-stats.ts`（值），`index.stats.*`，`scenario.*` | Server | 区块入场（CSS）；不做计数 |
| S3 | La Matrice Hexagone | `MatrixSection` → 标题行 + 10 × `ModuleRow`（编号用模块色、名称、一句副标、→），≥1184px 两列；每行是普通 `<a>`，可访问名称就是行内文字 | `modules.ts` + `modules.<id>.{name,sub}` + `index.matrix.*` | Server | hover（仅 `(hover:hover)`）：右移 6px（settle 320ms）+ 背景 `--mod-<id>-fill`；`:active` scale .98；入场 50ms 错峰（CSS `--i` 变量） |
| S4 | 战略自主宣言 | `ManifestoSection` → 3 栏（I / II / III，Mono 罗马数字 + Playfair h3 + 正文） | `index.manifesto.*` | Server | 区块入场 |
| S5 | 时间线 + 引言 | DS `Timeline`（5 个锁定节点，金线填充到"Aujourd’hui"，2040 节点标 scénario；<768px 竖排）+ DS `QuoteBlock variant="panel"`（戴高乐肖像 22% + 引言） | `timeline-eras.ts`，`index.chronology.*`，`index.citation.*` | Server | 金线 scaleX 0→1 一次；年份 hover scale 1.08 |
| S6 | 页脚 | DS `SiteFooter`（去掉占位社交链接） | `footer.*` | Server | 无 |

**S3 改版（2026-10-17，用户要求）**：矩阵主体改为 wireframe **1b 的 10 格矩阵**：10 张等权卡片，≥1024px 5 列 × 2 行（640–1023px 2 列，<640px 1 列），卡片 = 移植的 DS `ModuleCard`（编号 + 名称 + 一句介绍 + 箭头；无图时顶部为模块色大编号的字体版块），悬停显示模块色（content plan §01 + 1b 注释）。原先误按 1d 做的六边形方案已撤销（`docs/SPEC-HEXAGON-MATRIX.md` 作废）；`ModuleRow` 列表不再用于 INDEX。

**标题层级**：h1 = GRANDEUR；每个区块一个 h2（Mockup 只有 eyebrow 的地方用 sr-only h2）；宣言三条是 h3。

**英雄右栏（因素材不足而调整，见 §12-2）**：用户已确认 Blender 铁塔渲染图（`eiffel-daylight-hero.png`）不用，项目里的副本已删除。右栏方案：
- **静态层（永远存在）**：Mockup 原拼贴 `hero-collage.jpg`（实为 744×394 PNG），单斜切 clip-path + scrim，作为无 JS、移动端、reduced-motion、3D 加载前的画面，也是 LCP 候选。分辨率不足，`public/images/CREDITS.md` 标为占位，待用户提供高清版替换（替换只换文件，不改代码）。
- **3D 层（用户已允许 Three.js）**：桌面 `(pointer:fine)` 且未开 reduced-motion 时，空闲后懒加载 `EiffelScene`（`@react-three/fiber` 9 + drei 10 + three 0.186，`dynamic(..., { ssr:false })`），载入完成后在同一 clip-path 版位里与静态层交叉淡入。模型 `blender_eiffel/eiffel_tower_paris_mcp.glb`（2.5MB），用 `@gltf-transform/cli optimize` 压到 ≤1MB 放 `public/models/eiffel.glb`。材质统一成设计系统色：塔身暖金属（贴近 gold-700），背景透明露出 ink-800。只允许拖拽旋转（弹簧 damping 1.0 / response 0.4、可打断、松手按速度惯性），**不自动旋转、不循环**。`<canvas>` 为 `aria-hidden`，静态层 alt 保留。

**Favicon**：`fff-crest.png`（927×1697，竖长）居中放进正方形透明画布，输出 `src/app/icon.png`（512）和 `apple-icon.png`（180），走 Next 文件约定。队徽是第三方标志：不改色、不变形（设计系统 readme 规定）。

时间线 overlay（导航时间线按钮、"OUVRIR LA CHRONOLOGIE"）属于 TODO Day 6–7。本阶段按钮先链接到 `/[locale]/epochs`，overlay 做好后再换成打开 overlay。

---

## 6. 数据层

```ts
// src/lib/content/modules.ts —— 只放结构，不放文案
export type ModuleId =
  | 'arsenal' | 'statecraft' | 'epochs' | 'territories' | 'arena'
  | 'aesthetics' | 'science' | 'economy' | 'francophonie' | 'industry'

export interface Module {
  id: ModuleId
  n: string            // '01'…'10'，首要导航符号
  route: `/${ModuleId}`
  hue: number          // 对应 tokens 的 --hue-<id>
  links: ModuleId[]    // RelatedCapabilities
  era: string[]        // timeline-eras id
  scenario?: boolean   // 页面含推演数字 → 顶部 ScenarioLabel
  navVisible: boolean  // 前 7 个在导航直接显示，其余进「+3 ▾」
}
```

- 编号顺序以设计系统为准：01 ARSENAL · 02 STATECRAFT · 03 ÉPOQUES · 04 TERRITOIRES · 05 ARENA · 06 AESTHETICS · 07 SCIENCE · 08 ÉCONOMIE · 09 FRANCOPHONIE · 10 INDUSTRY。前 7 个 `navVisible: true`，08–10 进「+3 ▾」，INDUSTRY 在溢出菜单和矩阵里都可达。
- 设计系统组件用 `key` 字段，本项目用 `id`；只在组件边界做一次映射（`key: m.id`），不改 DS 的 prop 名。
- 文案（已过 review，4 比 0）：`modules.ts` 只管结构，三语言文案进 `messages/<locale>.json` 的 `modules.<id>.*`；之后模块页的 why / how / what 也按 id 放在 `modules.<id>.why|how|what`，WhyHowWhat、RelatedCapabilities、Timeline 都按 id 取。`getModule` / `getRelatedModules` 照旧提供。
- `index-stats.ts`（R.I.F.，值为 number，按语言格式化）：

```ts
export const indexStats = [
  { id: 'eez',         value: 11_000_000, unit: 'km²', compact: true,  scenario: false }, // 显示 11M km² / 1100万 km²
  { id: 'warheads',    value: 700,        unit: '',    approx: true,   scenario: true  }, // R.I.F. 设定，四层核力量，content plan §01、§02
  { id: 'francophone', value: 57,         unit: '',                    scenario: false },
  { id: 'continents',  value: 6,          unit: '',                    scenario: false },
] as const
```

- CI 检查：`messages/` 和 `src/` 里出现 `290` 即失败（R.I.F. 唯一 canon）。
- `timeline-eras.ts`（INDEX 用的 5 个锁定节点；完整时间线 Day 6–7 再补）：

```ts
export const homeEras = [
  { id: 'alesia',        year: -52,  module: 'epochs',     scenario: false },
  { id: 'revolution',    year: 1789, module: 'epochs',     scenario: false },
  { id: 'fifthRepublic', year: 1958, module: 'statecraft', scenario: false },
  { id: 'today',         year: null, module: 'territories', scenario: false }, // 显示 index.chronology.today
  { id: 'gdn2040',       year: 2040, module: 'arsenal',    scenario: true  },  // 金线停在 today，2040 段为发丝线
] as const
```

---

## 7. 样式架构

- `src/styles/tokens/*.css` 是设计系统 tokens 的**原样副本**，不改值。改值只在设计系统源头改，再同步过来。
- `globals.css`：

```css
@import "tailwindcss";
@import "../styles/tokens/colors.css";
@import "../styles/tokens/typography.css";
@import "../styles/tokens/spacing.css";
@import "../styles/tokens/motion.css";
@import "../styles/tokens/base.css";

/* 先清空 Tailwind 默认调色板和装饰工具，只留设计系统允许的东西 */
@theme {
  --color-*: initial; --shadow-*: initial; --inset-shadow-*: initial;
  --drop-shadow-*: initial; --blur-*: initial; --radius-*: initial;
}
@theme inline {
  --color-ink-950: var(--ink-950);  --color-ink-900: var(--ink-900);
  --color-ink-800: var(--ink-800);  --color-ink-700: var(--ink-700);
  --color-paper-50: var(--paper-50); --color-paper-300: var(--paper-300);
  --color-gold-500: var(--gold-500); --color-gold-700: var(--gold-700);
  --font-display: var(--font-display); --font-sans: var(--font-sans); --font-mono: var(--font-mono);
  --ease-settle: var(--ease-settle);
}
/* next/font 输出的是 --nf-*；在 tokens 之后重新声明一次家族栈，避免自引用和顺序竞争 */
:root {
  --font-display: var(--nf-playfair), var(--nf-noto-serif-sc, 'Noto Serif SC'), serif;
  --font-sans: var(--nf-public-sans), var(--nf-noto-sans-sc, 'Noto Sans SC'), sans-serif;
  --font-mono: var(--nf-plex-mono), monospace;
}
html { scroll-padding-top: var(--nav-height); color-scheme: dark; }
:lang(zh) em, :lang(zh) i, :lang(zh) .italic { font-style: normal; letter-spacing: 0; }
```

- 字体：`fonts.css` 的 Google Fonts `@import` 不进项目；`next/font/google` 自托管，变量名 `--nf-*`。锁定字重：Playfair Display 400 / 500 / 600 + 400 italic；Public Sans 400 / 500 / 600 / 700 / 800；IBM Plex Mono 400 / 500 / 600；Noto Serif SC 500；Noto Sans SC 400 / 600。全部 `display: 'swap'`，拉丁 `subsets: ['latin','latin-ext']`。
- 模块色：组件里写 `style={{ '--h': module.hue }}`，CSS 用 `oklch(68% .1 var(--h))`，不在 Tailwind 里注册 10 套颜色。
- 禁用清单（lint 期 grep）：`rounded-`、`shadow-`、`drop-shadow-`、`inset-shadow-`（模块 glow 除外）、`backdrop-blur`、`bg-gradient-` / `bg-linear-` / `bg-radial-`（scrim 除外）、`text-white`、`#000`、`#fff`、`#ffffff`、emoji、`—`（em-dash）。

---

## 8. 动效架构

- 引擎：**INDEX v1 全部是 CSS**。服务端 HTML 永远是终态；动画只在终态之上做渐进增强，没有 JS 也完整可读。
- 首屏（GRANDEUR 逐字母）：用 `@starting-style` 定义起始态（opacity 0、translateY .4em），每个字母 `transition-delay: calc(var(--i) * var(--stagger-letter))`。不支持 `@starting-style` 的浏览器直接显示终态。字母 span 外层 `aria-hidden="true"`，旁边一个 sr-only 的完整单词，读屏只读一次 "GRANDEUR"。
- 首屏以下（区块入场）：`<head>` 里一行内联脚本给 `<html>` 加 `js` 类；只有 `html.js` 下区块才带 opacity 0 + 16px 起始态，由一个极小的 IntersectionObserver 脚本加 `is-in` 类触发一次（`once`）。无 JS 时没有起始态，内容直接可见。
- 全站只认 4 个时长（100 / 180 / 320 / 700ms）和 2 条曲线（standard、settle），全部读 tokens。
- 从 `templates/hexagone-site` 借用：逐字母标题浮现、时间线金线填充。**不借用**：数字计数（review 否决）、钉住横向画廊（与 Mockup 矩阵冲突）、六边形全屏揭示、首屏钉住拆分。
- 只动 transform / opacity；无循环；无视差。
- 按下反馈（apple-design）：所有可点元素 `:active` 立即 scale .98 / 100ms，按下就反馈，不等松手。
- `prefers-reduced-motion`：沿用 tokens 的值，保留 120ms 纯 opacity 淡入，去掉位移和逐字母错峰；不是"什么都没有"。
- 3D 英雄（可选岛）：拖拽用弹簧（damping 1.0，response 0.4），可随时打断，松手按速度继续再停；不自动旋转；reduced-motion 下不加载。

---

## 9. 性能与可访问性预算

- LCP：以实测为准（英雄拼贴静态层或 GRANDEUR）。英雄图 `next/image` + `preload`（Next 16 已弃用 `priority`）+ `fetchPriority="high"` + `sizes="(min-width:1200px) 50vw, 100vw"`；GRANDEUR 在服务端渲染时就是可见文字。3D 层不参与 LCP。
- JS 预算：INDEX 路由自身 JS（不含框架共享 chunk，读 build 输出）≤ 20KB gzip。`EiffelScene` 不计入首屏预算：空闲后才请求，three + r3f + 加载器合计 gzip 上限 ~~250KB~~ **280KB**（2026-10-17 调整：实测单个 chunk 257 KiB，换加载器无收益，只有去掉 r3f 才能明显减重；它只在桌面端空闲后加载、aria-hidden、不影响首屏），GLB 压缩后 ≤ 1MB。实测（2026-10-17 build）：路由 JS 10.5KB，3D 岛 257 KiB，GLB 525KB。检查脚本：`scripts/check-js-budget.mjs`、`check-static-html.mjs`、`check-banned.mjs`、`check-messages`。
- 图片 alt 文案由 Antigravity 写；深度轴、三色条、肖像底图是装饰，`aria-hidden` / `alt=""`。3D 画布 `aria-hidden`，静态图保留 alt。
- 地标：`header` / `nav[aria-label]` / `main#main` / `footer`；skip link 指向 `#main`。
- 对比度：金 `#EFB44B` 对 `#00152C` ≈ 10:1；`--paper-300` 对 ink-950 ≈ 10:1；正文 85% paper 合格。
- 点击区域：导航、语言、页脚控件最小 24×24，`(pointer: coarse)` 下 44×44。
- 图片规格（每张上线图都要有来源与授权记录，写在 `public/images/CREDITS.md`）：英雄拼贴 `hero-collage.jpg` 744×394（占位，待高清）；3D 模型 `eiffel.glb`（Blender 自制，来源 `blender_eiffel/eiffel_tower_paris_mcp.glb`）；戴高乐肖像 165×140，只能作 22% 透明度底纹，需高清版（§12-2）；FFF 队徽 927×1697（用户提供，第三方标志，编辑用途，不改色不变形）。

---

## 10. 文案流水线

1. Claude 在 `docs/COPY-BRIEF-INDEX.md` 列出每个 key：要表达什么、事实来源（content plan 行号）、长度上限、语气。
2. Antigravity（`agy -p --model gemini-3.8-flash-high`）读 brief + 两个 skill（humanizer、avoid-ai-writing）→ 写 `messages/fr.json`、`en.json`、`zh.json`（只写 brief 列出的 key）。
3. Claude 验收：JSON 结构、三份 key 与 ICU 占位符一致、无 em-dash、无感叹号、无 emoji、法语 `: ; ? !` 前与 « » 内是 U+00A0 / U+202F、法语撇号是 ’、无 `290`、推演数字带 scénario。代码里的字符串（单位、坐标）同样过这套检查。
4. 不合格 → 给 Antigravity 发增量 brief（`--continue`）。

---

## 11. 交付阶段

用户指定（2026-10-16）：**Opus 5.5 + Sonnet 5.5（max）一起规划，Haiku 5.5（max）执行**；Claude 指挥、合并计划、验收；文案仍归 Antigravity。

| 阶段 | 内容 | 规划 | 执行 |
|---|---|---|---|
| P0 | 依赖（next-intl、three 系列）、`next.config`（turbopack.root）、删根 layout、`[locale]` 骨架、proxy、i18n、字体、globals.css、10 个占位路由、favicon；**跑通三语言静态 build** | Opus + Sonnet | Haiku |
| P1 | 设计系统组件移植（brand / actions / icons / navigation / editorial / content / data），CSS hover，href props | Opus + Sonnet | Haiku（按目录并行，文件不重叠） |
| P2 | INDEX 6 个区块静态版 + 断点 | Opus + Sonnet | Haiku |
| P3 | CSS 入场动效、`<details>` 菜单脚本、GLB 压缩 + `EiffelScene` 可选岛 | Opus + Sonnet | Haiku |
| P4 | 文案增量修订合并 | — | Antigravity → Claude 验收 |
| P5 | 验收标准 1–11 + 4-agent review（Claude subagent + agy + codex + grok）+ web-design-guidelines + impeccable detector | — | 全体 |
| P6 | 修复 → DESIGN.md（impeccable documenter）→ PROGRESS.md / TODO.md 同步 | — | Claude |

---

## 12. 问题状态

v0.1 的 7 个问题已由 review 投票和用户消息解决（明细见 `REVIEW-ARCH-v0.1.md`）：

1. 英雄区版式 → 跟 Mockup，auto-fit 两栏（4:0）。右栏素材按 §5 调整。
2. GDN-2040 说明 → 统计条正上方，全页一处（3:1）。
3. 深度入口 Rail → v1 不做（4:0）。
4. 导航字标 → 用户指定 FFF 队徽作为导航 logo（点击回首页）+ favicon；队徽旁字标按 content plan 命名规则用 LA FRANCE EN PROFONDEUR，<1200px 只留队徽。
5. 文案放 messages → 接受（4:0）。
6. 窄屏深度轴 → 隐藏（2:2，指挥裁决：横向刻度条是 DS 和 Mockup 都没有的新组件）。
7. i18n → next-intl 4（3:1），P0 验证 build。

仍需用户处理（不阻塞开工）：

- **12-2 图片素材**：设计系统 `assets/images/` 里的 `.jpg` 全是小 PNG 截图：拼贴图 744×394、戴高乐肖像 165×140、模块缩略图 109×55。v1 用低清拼贴作占位 + Three.js 铁塔顶上；拼贴图、肖像和缩略图需要高清来源（自制、授权图库或 AI 生成并标注），否则模块页的卡片缩略图也做不出来。
- **12-3 渲染图源文件**：用户说铁塔渲染图不用、可删。项目副本已删；它在用户的 `Hexagone Design System/assets/images/`、`Hexagone UI wireframes and design system/assets/`、`blender_eiffel/`（`eiffel_tower_daylight_hero_v4.png`）还有三份（都未进 git），是否一起删等用户确认。
