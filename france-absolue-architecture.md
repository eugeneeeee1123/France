# FRANCE ABSOLUE — 项目架构文档
> Next.js 14 · Tailwind CSS · Framer Motion · next-intl · MDX

---

## 网站命名最终方案

```
网站名：   FRANCE ABSOLUE
国家名：   La Grande République Impériale de France
缩写：     G.R.I.F.
中文：     法兰西大帝国共和国
英文：     The Grand Imperial Republic of France

Index Hero 三语标题：
  FR → LA GRANDE PUISSANCE
  ZH → 绝对法兰西
  EN → ABSOLUTE FRANCE

副标题：
  FR → De la Gaule à l'Empire · La République · L'Éternité
  ZH → 从高卢到帝国 · 共和国 · 永恒
  EN → From Gaul to Empire · The Republic · Eternity
```

---

## 目录结构

```
france-absolue/
│
├── app/                          # Next.js 14 App Router
│   ├── [locale]/                 # 多语言动态路由
│   │   ├── layout.tsx            # 全局 layout，包含 Header + Footer
│   │   ├── page.tsx              # 首页 (index)
│   │   ├── arsenal/
│   │   │   └── page.tsx          # 军事页（现实 + R.I.F. 混合）
│   │   ├── statecraft/
│   │   │   └── page.tsx
│   │   ├── territories/
│   │   │   └── page.tsx
│   │   ├── sport/
│   │   │   └── page.tsx
│   │   ├── epochs/
│   │   │   └── page.tsx
│   │   ├── aesthetics/
│   │   │   └── page.tsx
│   │   ├── science/              # 新增页面
│   │   │   └── page.tsx
│   │   ├── economy/              # 新增页面
│   │   │   └── page.tsx
│   │   └── francophonie/         # 新增页面
│   │       └── page.tsx
│   │
│   └── globals.css               # 全局样式
│
├── components/                   # 可复用组件
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── NavBar.tsx
│   │   └── LocaleSwitcher.tsx    # 语言切换器
│   │
│   ├── ui/                       # 基础 UI 组件
│   │   ├── Reveal.tsx            # 滚动进入动画包装器
│   │   ├── Metrics.tsx           # 数字快照格子
│   │   ├── SectionTitle.tsx      # 统一 section 标题
│   │   ├── EyebrowLabel.tsx      # 小标签（ARSENAL · SPORT）
│   │   ├── AccentBar.tsx         # 3px accent 竖线
│   │   ├── TricolourFlag.tsx     # 纯 CSS 三色旗
│   │   └── CountUp.tsx           # 数字滚动计数器
│   │
│   ├── sections/                 # 页面级 section 组件
│   │   ├── HeroSplit.tsx         # 左文右图标准 hero
│   │   ├── FeatureGrid.tsx       # 功能卡片网格
│   │   ├── TimelineSection.tsx   # 历史时间轴
│   │   ├── RegionTabs.tsx        # 地区 tab 切换
│   │   ├── SportBanner.tsx       # Wembanyama vs Mbappé
│   │   └── RIFForceStructure.tsx # R.I.F. 军力数据面板
│   │
│   └── effects/                  # 特效组件
│       ├── GrainOverlay.tsx      # 噪点纹理层
│       ├── CustomCursor.tsx      # 自定义光标
│       └── PageLoader.tsx        # 进入动画
│
├── content/                      # MDX 内容文件
│   ├── zh/
│   │   ├── arsenal.mdx
│   │   ├── statecraft.mdx
│   │   ├── territories.mdx
│   │   ├── sport.mdx
│   │   ├── epochs.mdx
│   │   └── aesthetics.mdx
│   ├── fr/
│   │   └── (同上)
│   └── en/
│       └── (同上)
│
├── messages/                     # next-intl 翻译文件
│   ├── zh.json
│   ├── fr.json
│   └── en.json
│
├── data/                         # 结构化数据（JSON）
│   ├── rif-navy.json             # R.I.F. 海军完全体
│   ├── rif-airforce.json         # R.I.F. 空天军完全体
│   ├── rif-army.json             # R.I.F. 陆军完全体
│   ├── real-arsenal.json         # 现实法国军力
│   ├── cities.json               # 法国城市坐标数据
│   ├── territories.json          # 海外领地数据
│   ├── epochs-timeline.json      # 历史时间线
│   ├── sport-players.json        # 球员数据
│   └── metrics.json              # 全站数字快照
│
├── lib/                          # 工具函数
│   ├── mdx.ts                    # MDX 解析器
│   ├── i18n.ts                   # 语言配置
│   └── utils.ts                  # 通用工具
│
├── public/
│   ├── images/
│   │   ├── site/                 # 各页面 hero 图
│   │   └── arena/                # 体育图片
│   └── fonts/                    # 本地字体
│
├── styles/
│   └── tokens.css                # CSS 变量 design tokens
│
├── i18n.ts                       # next-intl 配置
├── middleware.ts                  # 语言路由中间件
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 安装与初始化

```bash
# 创建项目
npx create-next-app@latest france-absolue \
  --typescript \
  --tailwind \
  --app \
  --src-dir=false \
  --import-alias="@/*"

cd france-absolue

# 安装核心依赖
npm install framer-motion next-intl

# MDX 支持
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install -D @types/mdx

# 可选：地图 + 图表
npm install leaflet react-leaflet
npm install d3
npm install chart.js react-chartjs-2

# 可选：滚动叙事
npm install scrollama

# 可选：数字动画
npm install countup.js
```

---

## next.config.mjs

```js
import createMDX from '@next/mdx'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true,
  },
}

export default withMDX(nextConfig)
```

---

## i18n.ts（next-intl 配置）

```ts
import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['zh', 'fr', 'en'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound()

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
```

---

## middleware.ts（语言路由）

```ts
import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'

export default createMiddleware({
  locales,
  defaultLocale: 'zh',
  localePrefix: 'always'
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
```

---

## messages/zh.json（翻译文件结构）

```json
{
  "nav": {
    "arsenal": "军工霸权",
    "statecraft": "地缘政治",
    "territories": "全球疆域",
    "sport": "体育竞技",
    "epochs": "历史引擎",
    "aesthetics": "文化美学",
    "science": "科学天工",
    "economy": "帝国经济",
    "francophonie": "法语帝国"
  },
  "site": {
    "name": "FRANCE ABSOLUE",
    "tagline": "从高卢到帝国 · 共和国 · 永恒",
    "country_name": "法兰西大帝国共和国",
    "country_abbr": "G.R.I.F."
  },
  "home": {
    "hero_title": "绝对法兰西",
    "hero_sub": "从外太空到马里亚纳海沟 · 六个维度 · 唯一的权力",
    "enter": "进入专题"
  },
  "arsenal": {
    "title": "军工与霸权",
    "label": "DÉFENSE · INDUSTRIE · SOUVERAINETÉ",
    "rif_disclaimer": "以下 R.I.F. 内容属于架空世界观 GDN-2040"
  }
}
```

---

## tailwind.config.ts（Design Tokens）

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        // 全站基础色
        navy:    '#06101f',
        ink:     '#030c1a',
        blue:    '#1f4ed8',
        'blue-light': '#4a7ef5',
        'blue-pale':  '#e6edf8',

        // 各页面 accent（与现有设计一致）
        arsenal:    '#d54a36',
        statecraft: '#3159a7',
        territory:  '#0787a7',
        sport:      '#1f55d5',
        epochs:     '#a44735',
        aesthetics: '#a63f72',
        science:    '#2d7a4f',
        economy:    '#8b6914',
        francophonie: '#6b3fa0',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Helvetica Neue', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.08em',
        tighter:  '-0.06em',
        tight:    '-0.04em',
        label:    '0.16em',
        eyebrow:  '0.2em',
      },
      fontSize: {
        display: ['clamp(4rem,8vw,9rem)', { lineHeight: '0.88', letterSpacing: '-0.07em' }],
        hero:    ['clamp(3rem,6vw,7rem)',  { lineHeight: '0.90', letterSpacing: '-0.06em' }],
        section: ['clamp(2rem,4vw,5rem)',  { lineHeight: '0.94', letterSpacing: '-0.05em' }],
      },
    },
  },
  plugins: [],
}

export default config
```

---

## styles/tokens.css（全局 CSS 变量）

```css
:root {
  /* 颜色 */
  --color-navy:        #06101f;
  --color-ink:         #030c1a;
  --color-blue:        #1f4ed8;
  --color-blue-light:  #4a7ef5;
  --color-slate-line:  #0f2444;

  /* 字体 */
  --font-sans: 'Geist', 'Helvetica Neue', sans-serif;
  --font-mono: 'Geist Mono', monospace;

  /* 间距节奏 */
  --section-y:   clamp(4rem, 8vw, 8rem);
  --container-x: clamp(1.25rem, 5vw, 4rem);
  --max-width:   1440px;

  /* 各页面 accent（每页 layout 里覆盖） */
  --accent:      #1f4ed8;
  --accent-pale: #e6edf8;
}

/* 各页面覆盖 accent */
[data-page="arsenal"]      { --accent: #d54a36; --accent-pale: #251714; }
[data-page="statecraft"]   { --accent: #3159a7; --accent-pale: #e7edf8; }
[data-page="territories"]  { --accent: #0787a7; --accent-pale: #0c2028; }
[data-page="sport"]        { --accent: #1f55d5; --accent-pale: #06101f; }
[data-page="epochs"]       { --accent: #a44735; --accent-pale: #f2e8e5; }
[data-page="aesthetics"]   { --accent: #a63f72; --accent-pale: #f3e5ed; }
[data-page="science"]      { --accent: #2d7a4f; --accent-pale: #0d1f16; }
[data-page="economy"]      { --accent: #8b6914; --accent-pale: #1e1708; }
[data-page="francophonie"] { --accent: #6b3fa0; --accent-pale: #1a0f28; }
```

---

## app/[locale]/layout.tsx

```tsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GrainOverlay from '@/components/effects/GrainOverlay'
import CustomCursor from '@/components/effects/CustomCursor'
import '@/app/globals.css'

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-white text-slate-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <GrainOverlay />
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

---

## components/ui/Reveal.tsx（滚动进入动画）

```tsx
'use client'
import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export default function Reveal({ children, className = '', delay = 0, y = 40 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

---

## components/ui/CountUp.tsx（数字计数器）

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CountUpProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
}

export default function CountUp({ target, suffix = '', prefix = '', duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // easeOut cubic
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(target)
    }
    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
```

---

## components/effects/GrainOverlay.tsx（噪点纹理）

```tsx
export default function GrainOverlay() {
  return (
    <>
      <style>{`
        .grain {
          position: fixed;
          inset: -200%;
          width: 400%;
          height: 400%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.035;
          animation: grain 0.5s steps(1) infinite;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0) }
          10%  { transform: translate(-5%, -10%) }
          20%  { transform: translate(-15%, 5%) }
          30%  { transform: translate(7%, -25%) }
          40%  { transform: translate(-5%, 25%) }
          50%  { transform: translate(-15%, 10%) }
          60%  { transform: translate(15%, 0%) }
          70%  { transform: translate(0%, 15%) }
          80%  { transform: translate(3%, 35%) }
          90%  { transform: translate(-10%, 10%) }
        }
      `}</style>
      <div className="grain" aria-hidden="true" />
    </>
  )
}
```

---

## components/effects/CustomCursor.tsx（自定义光标）

```tsx
'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring_pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // 触摸设备不显示
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onEnterLink = () => ring.current?.classList.add('is-hover')
    const onLeaveLink = () => ring.current?.classList.remove('is-hover')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    let raf: number
    const animate = () => {
      // dot 跟随鼠标
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`
      }
      // ring 插值跟随（lag 效果）
      ring_pos.current.x += (pos.current.x - ring_pos.current.x) * 0.12
      ring_pos.current.y += (pos.current.y - ring_pos.current.y) * 0.12
      if (ring.current) {
        ring.current.style.transform = `translate(${ring_pos.current.x - 20}px, ${ring_pos.current.y - 20}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <style>{`
        * { cursor: none !important; }
        .cursor-dot {
          position: fixed; top: 0; left: 0; z-index: 99999;
          width: 12px; height: 12px; border-radius: 50%;
          background: #1f4ed8; pointer-events: none;
          mix-blend-mode: difference;
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0; z-index: 99998;
          width: 40px; height: 40px; border-radius: 50%;
          border: 1.5px solid #1f4ed8; pointer-events: none;
          mix-blend-mode: difference;
          transition: width 0.2s, height 0.2s, border-color 0.2s;
        }
        .cursor-ring.is-hover {
          width: 64px; height: 64px;
          border-color: var(--accent, #1f4ed8);
          margin-top: -12px; margin-left: -12px;
        }
        @media (pointer: coarse) {
          .cursor-dot, .cursor-ring { display: none; }
          * { cursor: auto !important; }
        }
      `}</style>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
```

---

## data/rif-navy.json（数据文件示例）

```json
{
  "branch": "Marine Nationale Impériale",
  "total_personnel": 280000,
  "motto": "Honneur, Patrie, Valeur, Discipline",
  "capital_ships": [
    {
      "id": "pang-france-libre",
      "class": "France Libre",
      "type": "PANG",
      "type_label": { "zh": "核动力航母", "fr": "Porte-avions nucléaire", "en": "Nuclear Aircraft Carrier" },
      "count": 4,
      "displacement_tons": 95000,
      "propulsion": "Double réacteur K22",
      "aircraft": 40,
      "aircraft_type": "FCAS + Rafale-V",
      "vls_cells": 64,
      "crew": 2600,
      "names": ["France Libre", "Jeanne d'Arc", "Clemenceau", "Foch"],
      "description": {
        "zh": "戴高乐主义的钢铁化身——不需要任何盟国港口加油，不需要任何外国技术许可，从出港到全球任意海域投送打击力量，全程自主。",
        "fr": "L'incarnation d'acier du gaullisme — aucun port allié, aucune licence étrangère. Puissance de frappe mondiale, totalement autonome.",
        "en": "The steel embodiment of Gaullism — no allied port required, no foreign licence. Global strike capability, fully autonomous."
      }
    },
    {
      "id": "bretagne-lha",
      "class": "Bretagne",
      "type": "LHA",
      "type_label": { "zh": "两栖打击航母", "fr": "Porte-Aéronefs d'Assaut", "en": "Amphibious Strike Carrier" },
      "count": 4,
      "displacement_tons": 45000,
      "propulsion": "LM2500+ × 4 (conventionnel)",
      "aircraft": 20,
      "aircraft_type": "Rafale-V (STOVL)",
      "well_deck": false,
      "well_deck_note": {
        "zh": "彻底舍弃传统坞舱以换取极致航空效率",
        "fr": "Cale de débarquement supprimée au profit de l'efficacité aéronautique maximale",
        "en": "Well deck eliminated entirely in favour of maximum aviation efficiency"
      },
      "marines": 1200,
      "names": ["Bretagne", "Normandie", "Provence", "Gascogne"],
      "description": {
        "zh": "专为戴高乐主义量身定制的分布式海上打击中枢，搭载完全自主研发的垂直起降版阵风，不依赖任何外部技术。",
        "fr": "Centre de frappe maritime distribué, conçu sur mesure pour le gaullisme. Rafale-V à décollage vertical, 100% autonomie technologique.",
        "en": "A distributed maritime strike hub tailor-made for Gaullism. STOVL Rafale-V, zero foreign technology dependency."
      }
    }
  ]
}
```

---

## MDX 内容文件示例（content/zh/arsenal.mdx）

```mdx
---
title: 军工与霸权
subtitle: L'Arsenal souverain
label: DÉFENSE · INDUSTRIE · SOUVERAINETÉ
accent: '#d54a36'
metrics:
  - value: "SSBN"
    label: "凯旋级战略核潜艇"
  - value: "4"
    label: "弹道导弹核潜艇"
  - value: "290"
    label: "约计核弹头规模"
  - value: "1831"
    label: "外籍兵团创立"
---

## 核威慑体系

法国是全球五个合法拥核国之一，也是唯一主动废除陆基核力量的国家。
1996 年，希拉克在最后六次核试验后签署《全面禁止核试验条约》，
同年拆除所有陆基弹道导弹——这不是示弱，而是战略聚焦。

### M51 弹道导弹

射程 **9,000km**，分导式多弹头（MIRV），精度 200m CEP。
每艘凯旋级搭载 16 枚，每枚携带最多 10 枚 TN-75 核弹头。

> "法国的核力量不针对任何特定敌人，而是对全方位威胁的回应。"
> — 戴高乐，1967 年，tous azimuts 战略

---

## R.I.F. 架空军力

<RIFDisclaimer />

以下内容属于架空世界观 **GDN-2040**，La Grande République Impériale de France。
```

---

## 页面路由与 data-page 注入

```tsx
// app/[locale]/arsenal/page.tsx
import { setRequestLocale } from 'next-intl/server'
import RIFForceStructure from '@/components/sections/RIFForceStructure'
import navyData from '@/data/rif-navy.json'
import armyData from '@/data/rif-army.json'
import airData from '@/data/rif-airforce.json'

export default function ArsenalPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)

  return (
    <div data-page="arsenal">
      {/* Hero */}
      {/* 现实法国军力 sections */}
      {/* R.I.F. 架空军力 */}
      <RIFForceStructure
        navy={navyData}
        army={armyData}
        air={airData}
        locale={locale}
      />
    </div>
  )
}
```

---

## 页面转场（View Transitions API）

```tsx
// lib/transition.ts
export function navigateWithTransition(href: string) {
  if (!document.startViewTransition) {
    window.location.href = href
    return
  }
  document.startViewTransition(() => {
    window.location.href = href
  })
}
```

```css
/* globals.css */
::view-transition-old(root) {
  animation: 350ms ease both slide-out;
}
::view-transition-new(root) {
  animation: 350ms ease both slide-in;
}

@keyframes slide-out {
  to { opacity: 0; transform: translateX(-3%); }
}
@keyframes slide-in {
  from { opacity: 0; transform: translateX(3%); }
}

/* 标题跨页 morph */
.page-title {
  view-transition-name: page-title;
}
```

---

## 开发顺序建议

```
Phase 1 — 基础设施（2–3天）
  ✓ Next.js 初始化 + 目录结构
  ✓ next-intl 配置 + 三语言 JSON
  ✓ Tailwind tokens + CSS 变量
  ✓ Header / Footer / NavBar 组件
  ✓ GrainOverlay + CustomCursor
  ✓ Reveal + CountUp 基础组件

Phase 2 — 首页（1–2天）
  ✓ Hero（垂直深度轴 + 三语标题）
  ✓ Hexagone Matrix 6格
  ✓ 数字快照 + CountUp 动画
  ✓ 页面转场配置

Phase 3 — Arsenal 页（2–3天）
  ✓ 现实法国军力 sections
  ✓ JSON 数据读取
  ✓ RIFForceStructure 组件（海/空/陆 tab）
  ✓ 武器卡片 3D 翻转
  ✓ R.I.F. disclaimer 样式

Phase 4 — 其余页面（按优先级）
  ✓ Sport（banner + 球员 profile + 雷达图）
  ✓ Territories（Leaflet 地图）
  ✓ Epochs（时间轴）
  ✓ Aesthetics / Statecraft / Science / Economy / Francophonie

Phase 5 — 润色
  ✓ 所有交互特效
  ✓ 移动端适配
  ✓ SEO metadata
  ✓ 部署（Vercel）
```

---

## 部署（Vercel）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel

# 环境变量（如有需要）
# NEXT_PUBLIC_SITE_URL=https://france-absolue.vercel.app
```

```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

---

*FRANCE ABSOLUE — La Grande République Impériale de France*
*G.R.I.F. · GDN-2040 · 从高卢到帝国 · 永恒*
