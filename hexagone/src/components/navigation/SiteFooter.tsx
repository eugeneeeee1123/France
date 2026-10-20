import type { CSSProperties } from 'react'
// Note: next/link instead of the next-intl Link. That one is a client component that reads the intl
// context, which this app does not mount; callers pass locale-prefixed hrefs (getPathname).
import Link from 'next/link'
import { BRAND_WORDMARK } from '@/lib/brand'
import { HexMark } from '../brand/HexMark'
import { cx } from '../cx'
import { LangSwitch, type LangCode } from './LangSwitch'

export interface FooterLink {
  label: string
  href: string
}

/** Three-column footer on ink-950: mark + tagline, navigation links, language. No social placeholders. */
export interface SiteFooterProps {
  tagline?: string
  /** Heading of the link column and aria-label of its <nav>. */
  navLabel?: string
  navLinks?: FooterLink[]
  /** Heading of the language column and aria-label of the language group. */
  langLabel: string
  lang: LangCode
  /** Current route without the locale prefix (language links). */
  pathname: string
  /** Rights line (copyright notice). */
  legal: string
  /** Short reminder that figures follow the R.I.F. / GDN-2040 scenario. */
  scenarioNote?: string
  /** Wordmark beside the footer mark; the fixed brand string by default. */
  brand?: string
  className?: string
  style?: CSSProperties
}

const HEAD = 'mb-3 text-[11px] uppercase tracking-[var(--tracking-label)] text-paper-300'

export function SiteFooter({
  tagline,
  navLabel,
  navLinks = [],
  langLabel,
  lang,
  pathname,
  legal,
  scenarioNote,
  brand = BRAND_WORDMARK,
  className,
  style,
}: SiteFooterProps) {
  return (
    <footer className={cx('border-t border-ink-700 bg-ink-950 px-5 pb-6 pt-12 font-sans md:px-[var(--gutter-page)]', className)} style={style}>
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="grid grid-cols-1 gap-8 pb-7 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-[10px]">
              <HexMark size={24} tone="paper" withWordmark wordmark={brand} />
            </div>
            {tagline && <p className="max-w-[220px] text-[12px] leading-[1.6] text-paper-300">{tagline}</p>}
          </div>
          {navLinks.length > 0 && (
            <nav aria-label={navLabel}>
              {navLabel && <p className={HEAD}>{navLabel}</p>}
              <ul className="flex flex-col gap-[9px] text-[13px]">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex min-h-6 items-center duration-[var(--dur-instant)] active:scale-[var(--press-scale)] pointer-coarse:min-h-11">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div>
            <p className={HEAD}>{langLabel}</p>
            <LangSwitch current={lang} pathname={pathname} label={langLabel} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 border-t border-ink-700 pt-[18px] text-center text-[11.5px] text-paper-300">
          {scenarioNote && <p className="max-w-[60ch]">{scenarioNote}</p>}
          <p>{legal}</p>
        </div>
      </div>
    </footer>
  )
}
