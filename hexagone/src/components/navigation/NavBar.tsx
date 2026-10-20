import type { CSSProperties } from 'react'
import Image, { type StaticImageData } from 'next/image'
// Note: next/link instead of the next-intl Link. That one is a client component that reads the intl
// context, which this app does not mount; callers pass locale-prefixed hrefs (getPathname).
import Link from 'next/link'
import { BRAND_WORDMARK } from '@/lib/brand'
import { Button } from '../actions/Button'
import { HexMark } from '../brand/HexMark'
import { Icon } from '../icons/Icon'
import { cx, type StyleWithVars } from '../cx'
import { LangSwitch, type LangCode } from './LangSwitch'

export interface NavModule {
  key: string
  n: string
  name: string
  hue: number
  href: string
}

/**
 * Sticky top navigation (ARCHITECTURE-INDEX §5 S0, §1 breakpoints, §1.1):
 * logo (FFF crest or HexMark) + fixed wordmark, numbered modules "01 ARSENAL", language links, timeline link.
 * Active item = paper-50 + 2px gold underline + aria-current. Overflow chip turns gold-bordered when the active module lives inside it.
 * >= 1400px: first maxVisible items + "+N ▾" disclosure. 768 to 1399px: one "MODULES ▾" disclosure. < 768px: "MENU" disclosure with a full-width panel.
 * Disclosures are <details data-menu>; they work without JS (P3 adds Esc-to-close).
 */
export interface NavBarProps {
  modules?: NavModule[]
  /** 'home' or a module key */
  activeKey?: string
  /** Modules shown before the overflow disclosure at >= 1400px. Mockup: 7 of 10. */
  maxVisible?: number
  /** Home route; the logo links there. */
  homeHref?: string
  /** Accessible name of the home link, e.g. "La France en Profondeur, accueil"; when set, the crest image becomes decorative. */
  homeLabel?: string
  /** Locale of the current page (language links). */
  lang: LangCode
  /** Current route without the locale prefix (language links). */
  pathname: string
  /** Wordmark next to the logo; the fixed brand string by default. Visible from 1200px, read by assistive tech below. */
  // Note: with homeLabel set, the home link's name comes from homeLabel, so assistive tech no longer reads this wordmark.
  brand?: string
  /** Image logo replacing the HexMark (the FFF crest, not recoloured, not distorted). */
  logoSrc?: string | StaticImageData
  logoAlt?: string
  /** px, default 40 */
  logoHeight?: number
  /** Rendered width at logoHeight when logoSrc is a string (aspect-ratio hint against layout shift); static imports compute it. */
  logoWidth?: number
  /** aria-label of the <nav> landmark */
  navLabel: string
  /** aria-label of the language group */
  langLabel: string
  /** Accessible name of the "+N ▾" overflow disclosure (>= 1400px) */
  moreLabel: string
  /** Visible text of the single "MODULES ▾" disclosure (768 to 1399px) */
  modulesLabel: string
  /** Visible text of the mobile disclosure button (< 768px) */
  menuLabel: string
  /** Screen-reader hints for the mobile disclosure while closed / open */
  menuOpenLabel: string
  menuCloseLabel: string
  /** Timeline link: clock icon in the bar (aria-label), text row in the mobile panel. */
  timelineHref: string
  timelineLabel: string
  /** Optional outline CTA at the right end. INDEX leaves it off (ARCHITECTURE-INDEX D12). */
  showCta?: boolean
  ctaLabel?: string
  ctaHref?: string
  className?: string
  style?: CSSProperties
}

const hueVar = (hue: number): StyleWithVars => ({ '--h': hue })

const CHIP =
  'inline-flex min-h-6 cursor-pointer list-none items-center gap-1 whitespace-nowrap border px-3 py-[5px] text-[11px] font-bold tracking-[var(--tracking-nav)] transition-[color,border-color] duration-[var(--dur-fast)] ease-[var(--ease-standard)] [&::-webkit-details-marker]:hidden pointer-coarse:min-h-11'
const CHIP_IDLE = 'border-ink-700 text-paper-300 hover:text-paper-50 group-open:text-paper-50'
const CHIP_ACTIVE = 'border-gold-500 text-paper-50'
const PANEL =
  'absolute left-0 top-[calc(100%+10px)] z-[var(--z-dropdown)] flex min-w-[170px] flex-col border border-ink-700 bg-ink-800 p-2'
const PANEL_ITEM =
  'flex min-h-6 items-center gap-2 whitespace-nowrap px-[10px] py-2 text-[12px] text-paper-50 no-underline transition-[background-color,scale] duration-[var(--dur-fast)] ease-[var(--ease-standard)] hover:bg-ink-700 hover:no-underline active:scale-[var(--press-scale)] pointer-coarse:min-h-11'
const ROW =
  'flex min-h-11 items-baseline gap-3 px-5 py-3 text-[12px] font-bold tracking-[var(--tracking-nav)] text-paper-50 no-underline transition-[background-color,scale] duration-[var(--dur-fast)] ease-[var(--ease-standard)] hover:bg-ink-700 hover:no-underline active:scale-[var(--press-scale)]'
const NUMERAL = 'font-display font-normal leading-none text-[oklch(68%_0.1_var(--h))]'

function PanelItem({ m, active }: { m: NavModule; active: boolean }) {
  return (
    <li>
      <Link href={m.href} aria-current={active ? 'page' : undefined} className={cx(PANEL_ITEM, active && 'bg-ink-700')}>
        <span className={cx(NUMERAL, 'text-[13px]')} style={hueVar(m.hue)}>
          {m.n}
        </span>
        {m.name}
      </Link>
    </li>
  )
}

export function NavBar({
  modules = [],
  activeKey = 'home',
  maxVisible = 7,
  homeHref = '/',
  homeLabel,
  lang,
  pathname,
  brand = BRAND_WORDMARK,
  logoSrc,
  logoAlt = '',
  logoHeight = 40,
  logoWidth,
  navLabel,
  langLabel,
  moreLabel,
  modulesLabel,
  menuLabel,
  menuOpenLabel,
  menuCloseLabel,
  timelineHref,
  timelineLabel,
  showCta = false,
  ctaLabel,
  ctaHref,
  className,
  style,
}: NavBarProps) {
  const visible = modules.slice(0, maxVisible)
  const overflow = modules.slice(maxVisible)
  const moduleActive = modules.some((m) => m.key === activeKey)
  const overflowActive = overflow.some((m) => m.key === activeKey)
  const isHome = activeKey === 'home'
  const logoRatio = typeof logoSrc === 'object' ? logoSrc.width / logoSrc.height : (logoWidth ?? logoHeight) / logoHeight
  const logoW = Math.max(1, Math.round(logoHeight * logoRatio))

  return (
    <header className={cx('sticky top-0 z-[var(--z-nav)] border-b border-ink-700 bg-ink-900 font-sans', className)} style={style}>
      <nav
        aria-label={navLabel}
        className="mx-auto flex h-[var(--nav-height)] max-w-[var(--container-max)] items-center gap-3 px-5 md:gap-[26px] md:px-[var(--gutter-page)]"
      >
        <Link
          href={homeHref}
          aria-label={homeLabel}
          aria-current={isHome ? 'page' : undefined}
          className="flex flex-none items-center gap-[10px] whitespace-nowrap no-underline hover:no-underline min-w-6 justify-center pointer-coarse:min-h-11 pointer-coarse:min-w-11"
        >
          {logoSrc ? (
            <>
              <Image src={logoSrc} alt={homeLabel ? '' : logoAlt} width={logoW} height={logoHeight} loading="eager" className="block w-auto" style={{ height: logoHeight }} />
              <span
                lang={brand === BRAND_WORDMARK ? 'fr' : undefined}
                translate="no"
                className="sr-only text-[13px] font-extrabold tracking-[var(--tracking-brand)] text-paper-50 min-[1200px]:not-sr-only"
              >
                {brand}
              </span>
            </>
          ) : (
            // DS fallback without an image logo: the mark carries the wordmark itself.
            <HexMark size={32} withWordmark wordmark={brand} />
          )}
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-6">
          {/* >= 1400px: first maxVisible items inline */}
          <ul className="hidden items-center gap-6 min-[1400px]:flex">
            {visible.map((m) => {
              const active = m.key === activeKey
              return (
                <li key={m.key} className="flex">
                  <Link
                    href={m.href}
                    aria-current={active ? 'page' : undefined}
                    className={cx(
                      'inline-flex h-[var(--nav-height)] items-center whitespace-nowrap border-y-2 border-t-transparent text-[11px] font-bold tracking-[var(--tracking-nav)] no-underline transition-[color,scale] duration-[var(--dur-fast)] ease-[var(--ease-standard)] hover:no-underline active:scale-[var(--press-scale)]',
                      active ? 'border-b-gold-500 text-paper-50' : 'border-b-transparent text-paper-300 hover:text-paper-50',
                    )}
                  >
                    {m.n} {m.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* >= 1400px: "+N ▾" overflow disclosure (radius-chip is a documented exception) */}
          {overflow.length > 0 && (
            <details data-menu="" className="group relative hidden min-[1400px]:block">
              <summary className={cx(CHIP, 'rounded-[var(--radius-chip)]', overflowActive ? CHIP_ACTIVE : CHIP_IDLE)}>
                <span aria-hidden="true">+{overflow.length} ▾</span>
                <span className="sr-only">{moreLabel}</span>
              </summary>
              <ul className={PANEL}>
                {overflow.map((m) => (
                  <PanelItem key={m.key} m={m} active={m.key === activeKey} />
                ))}
              </ul>
            </details>
          )}

          {/* 768 to 1399px: every module behind one "MODULES ▾" disclosure */}
          {/* Note: min-[768px] instead of md: Tailwind 4 cannot order a rem breakpoint (md = 48rem) against min-[1400px], so md:block won at 1440px. */}
          <details data-menu="" className="group relative hidden min-[768px]:block min-[1400px]:hidden">
            <summary className={cx(CHIP, 'rounded-[var(--radius-chip)]', moduleActive ? CHIP_ACTIVE : CHIP_IDLE)}>
              {modulesLabel} <span aria-hidden="true">▾</span>
            </summary>
            <ul className={PANEL}>
              {modules.map((m) => (
                <PanelItem key={m.key} m={m} active={m.key === activeKey} />
              ))}
            </ul>
          </details>

          {/* < 768px: "MENU" disclosure; the panel spans the header (the sticky header is its containing block) */}
          <details data-menu="" className="group ml-auto md:hidden">
            <summary className={cx(CHIP, 'min-h-11', CHIP_IDLE)}>
              {menuLabel}
              <span className="sr-only group-open:hidden">{menuOpenLabel}</span>
              <span className="sr-only hidden group-open:inline">{menuCloseLabel}</span>
            </summary>
            <div className="absolute inset-x-0 top-full z-[var(--z-dropdown)] max-h-[calc(100dvh-var(--nav-height))] overflow-y-auto overscroll-contain border-y border-ink-700 bg-ink-800">
              <ul>
                {modules.map((m) => {
                  const active = m.key === activeKey
                  return (
                    <li key={m.key} className="border-t border-ink-700 first:border-t-0">
                      <Link href={m.href} aria-current={active ? 'page' : undefined} className={cx(ROW, active && 'bg-ink-700')}>
                        <span className={cx(NUMERAL, 'text-[14px]')} style={hueVar(m.hue)}>
                          {m.n}
                        </span>
                        {m.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="border-t border-ink-700 px-5 py-3">
                <LangSwitch current={lang} pathname={pathname} label={langLabel} />
              </div>
              <Link href={timelineHref} className={cx(ROW, 'items-center border-t border-ink-700')}>
                <Icon name="clock" size={20} />
                {timelineLabel}
              </Link>
            </div>
          </details>
        </div>

        <div className="flex flex-none items-center gap-[14px]">
          {/* < 768px: the MENU panel carries its own language links */}
          <LangSwitch current={lang} pathname={pathname} label={langLabel} className="hidden md:flex md:border-l md:border-ink-700 md:pl-[14px]" />
          <Link
            href={timelineHref}
            aria-label={timelineLabel}
            className="hidden size-11 flex-none items-center justify-center border border-ink-700 text-paper-300 no-underline transition-[color,border-color] duration-[var(--dur-fast)] ease-[var(--ease-standard)] hover:border-gold-500 hover:text-gold-500 hover:no-underline md:inline-flex"
          >
            <Icon name="clock" size={20} />
          </Link>
          {showCta && ctaHref && ctaLabel && (
            // Shown only where the bar has room: 1200 to 1399px (items collapsed) and from 1600px (7 items + chip + CTA).
            <span className="hidden min-[1200px]:block min-[1400px]:hidden min-[1600px]:block">
              <Button href={ctaHref}>{ctaLabel}</Button>
            </span>
          )}
        </div>
      </nav>
    </header>
  )
}
