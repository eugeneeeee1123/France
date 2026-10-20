/*
Design contract. Pasted verbatim from docs/ARCHITECTURE-INDEX.md §1 (JSX cannot
emit HTML comments; the finish review greps this file to confirm it is still here).

- **THESIS**：一个法语词撑起整个首屏。GRANDEUR 是首页的论点本身，不是装饰标题。拒绝"全幅视频 + 居中口号 + 三张特性卡"的旅游站默认排法。
- **OWN-WORLD**：深海军蓝 ink 四阶平面（`#00152C → #12385F`）、唯一行动色香槟金 `#EFB44B`、每个模块一个 `oklch(68% .1 h)` 编号色、Playfair Display 大写纪念碑字 + Public Sans 正文 + IBM Plex Mono 数据、0 圆角、1px 发丝线分区不用卡片盒子、三色旗只作字面引用的细条。
- **STORY**：读者先看到论点（GRANDEUR）和问题（"为什么法国至今仍是全球玩家"），再看到四个 R.I.F. 数字作证据，再从十个平权编号入口里选一个进入，最后被时间线和戴高乐引言收住。
- **FIRST VIEWPORT**（1440×900）：Mockup 的两栏 auto-fit 网格 `repeat(auto-fit, minmax(min(100%,560px),1fr))`，1200px 以上约 50/50。左栏最左 14px 处是深度轴：五个刻度 +400 km / +10 km / 0 m / −200 m / −6000 m，0 m 处金点（v1 只是静态的海拔装饰，1c 的分层滚动叙事不在 v1 范围内）。文字栏自上而下：eyebrow → GRANDEUR（`clamp(3rem, 16.5cqi, 9rem)`，字距 .05em，字重 400，金色，`lang="fr"`）→ LA FRANCE EN PROFONDEUR → 三色细条 → 斜体金句 → 一段 lede → 主 CTA「COMMENCER L’EXPLORATION →」（金色描边按钮）+ 次 CTA「OUVRIR LA CHRONOLOGIE」。右栏是单斜切 clip-path 拼贴图（Marianne / 铁塔 / Rafale / 潜艇）+ 底部 scrim + 右下引言卡 + 巴黎坐标。主行动在 GRANDEUR 下方第六行，首屏内可见。INDEX 页导航栏不放 CTA，避免和 hero 主按钮重复。
// Note (2026-10-17, REVIEW-CODE-INDEX #27): GRANDEUR floor is 2rem (3rem overflowed 320px); on desktop with a fine pointer the static collage is replaced after idle by the optional 3D tower layer (EiffelScene).
- **FORM**：用户锁定 wireframe 1b + 1c（UI Mockup 实现版），没有跑 concept roll。
- **FINISH**：unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
*/

import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/paths";
import { playfair, plexMono, publicSans } from "@/lib/fonts-latin";
import { modules } from "@/lib/content/modules";
import { NavBar } from "@/components/navigation/NavBar";
import { SiteFooter } from "@/components/navigation/SiteFooter";
import { InlineScript } from "@/components/InlineScript";
import "../globals.css";

// <html lang> per locale (§4): Chinese is served as Simplified Chinese.
const htmlLang = { fr: "fr", en: "en", zh: "zh-Hans" } as const;

// S6 footer routes (§5): label key footer.links.<id>, route /<id> (placeholder pages).
const footerRoutes = ["about", "sources", "legal", "credits"] as const;

// FFF crest (927 x 1697, public/images/CREDITS.md) rendered at the NavBar's 40px logo
// height: 22px wide, kept as an aspect-ratio hint against layout shift.
const crestWidthAt40 = 22;

// One line, runs before first paint: later CSS entry animations (§8) only
// exist under html.js, so no-JS visitors always get the final state.
const jsClassScript = "document.documentElement.classList.add('js')";

// Runs once at the end of <body> (§8): reveals .hx-reveal / .hx-reveal-group as they enter the
// viewport (IntersectionObserver, once), watches for sections inserted by client navigations
// (MutationObserver), and closes <details data-menu> disclosures on Escape (focus returns to the
// summary), on outside clicks and when a link inside them is followed.
// Note: focus leaving an open menu closes it too; Escape returns focus to the summary only when focus was inside the menu (REVIEW-CODE-INDEX #7).
// Note: focusout closes only when focus lands on a known element outside the menu; a null relatedTarget (a click on plain text inside the panel) keeps it open, and outside clicks are handled by the click listener.
const enhanceScript = [
  "(function(){var d=document,h=d.documentElement,S='.hx-reveal,.hx-reveal-group';",
  "function show(e){e.classList.add('is-in')}",
  "var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){show(e.target);io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'}):null;",
  "function watch(e){if(!e.classList.contains('is-in')){if(io)io.observe(e);else show(e)}}",
  "function scan(n){if(n.nodeType!==1)return;if(n.matches(S))watch(n);n.querySelectorAll(S).forEach(watch)}",
  "scan(d.body);",
  "if('MutationObserver' in window)new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(scan)})}).observe(d.body,{childList:true,subtree:true});",
  "h.classList.add('io');",
  "function shut(x){x.removeAttribute('open')}",
  "d.addEventListener('keydown',function(e){if(e.key!=='Escape')return;var o=d.querySelector('details[data-menu][open]');if(!o)return;var inside=o.contains(d.activeElement);shut(o);var s=o.querySelector('summary');if(s&&inside)s.focus()});",
  "d.addEventListener('focusout',function(e){var m=e.target instanceof Element?e.target.closest('details[data-menu][open]'):null;if(m&&e.relatedTarget instanceof Node&&!m.contains(e.relatedTarget))shut(m)});",
  "d.addEventListener('click',function(e){var t=e.target;if(!(t instanceof Element))return;var m=t.closest('details[data-menu]');d.querySelectorAll('details[data-menu][open]').forEach(function(x){if(x!==m)shut(x)});if(m&&t.closest('a'))shut(m)})",
  "})();",
].join("");

// All three locales are prerendered at build time (§4, D10).
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#00152C",
};

export async function generateMetadata({
  params,
}: {
  params: LayoutProps<"/[locale]">["params"];
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  // Explicit locale: metadata must stay static too (no request-time locale).
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Only owner of <html> and <body> (the scaffold root layout was removed, §4).
export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Must precede every next-intl call so rendering stays static (§4).
  setRequestLocale(locale);

  const t = await getTranslations("a11y");
  const tNav = await getTranslations("nav");
  const tModules = await getTranslations("modules");
  const tFooter = await getTranslations("footer");

  // S0 / S6 data (§5): structure from modules.ts, names and labels from messages.
  // Every href is locale-prefixed here (getPathname), because the components render next/link.
  const navModules = modules.map((m) => ({
    key: m.id,
    n: m.n,
    name: tModules(`${m.id}.name`),
    hue: m.hue,
    href: getPathname({ locale, href: m.route }),
  }));
  const overflowCount = modules.filter((m) => !m.navVisible).length;
  const footerLinks = footerRoutes.map((id) => ({
    label: tFooter(`links.${id}`),
    href: getPathname({ locale, href: `/${id}` }),
  }));

  // Latin font variables always; CJK variables only on zh (§4, §7).
  // Note: CJK variables are no longer set here (REVIEW-CODE-INDEX #2); zh loads Noto SC through the zh-only stylesheet link in <head>.
  const fontVariables = [
    playfair.variable,
    publicSans.variable,
    plexMono.variable,
  ].join(" ");

  return (
    // suppressHydrationWarning: the head script adds `js` to the class list
    // before React hydrates, which would otherwise log a className mismatch.
    <html lang={htmlLang[locale]} className={fontVariables} suppressHydrationWarning>
      <head>
        {/* 2026-10-20: InlineScript instead of a bare <script>, which made React log "Encountered a script tag" in dev. */}
        <InlineScript html={jsClassScript} />
        {/* zh only: fr/en must not ship CJK @font-face CSS (REVIEW-CODE-INDEX #2). The family names
            match the fallbacks in globals.css: var(--nf-noto-*, "Noto Serif SC" / "Noto Sans SC"). */}
        {locale === "zh" && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout of app/[locale]: this sheet applies to every zh route, not one page. */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600&family=Noto+Serif+SC:wght@500&display=swap" />
          </>
        )}
      </head>
      <body>
        <a href="#main" className="skip-link">
          {t("skipLink")}
        </a>
        {/* S0 (§5): crest logo back to INDEX, 7 numbered modules + "+3 ▾", FR / EN / 中, timeline
            link (overlay is a later phase, so it goes to /epochs), no CTA on INDEX (D12).
            The layout cannot know the current route statically: pathname "/" sends the language
            links to the other locale's INDEX, and activeKey stays "home" (same on module pages). */}
        <NavBar
          modules={navModules}
          activeKey="home"
          homeHref={getPathname({ locale, href: "/" })}
          lang={locale}
          pathname="/"
          logoSrc="/images/fff-crest.png"
          logoAlt=""
          homeLabel={t("home")}
          logoWidth={crestWidthAt40}
          navLabel={t("mainNav")}
          langLabel={t("language")}
          moreLabel={t("moreModules", { count: overflowCount })}
          modulesLabel={tNav("modulesMenu")}
          menuLabel={tNav("menu")}
          menuOpenLabel={t("menuOpen")}
          menuCloseLabel={t("menuClose")}
          timelineHref={getPathname({ locale, href: "/epochs" })}
          timelineLabel={t("timeline")}
          showCta={false}
        />
        {children}
        {/* S6 (§5): rights line, scenario note, four editorial links, language links. */}
        {/* Note: the scenario note is no longer rendered here (REVIEW-CODE-INDEX #1); its message key stays. */}
        <SiteFooter
          navLinks={footerLinks}
          navLabel={tFooter("navLabel")}
          langLabel={t("language")}
          lang={locale}
          pathname="/"
          legal={tFooter("rights")}
        />
        <InlineScript html={enhanceScript} />

      </body>
    </html>
  );
}
