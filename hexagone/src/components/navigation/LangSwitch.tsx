import type { CSSProperties } from 'react'
// Note: next/link instead of the next-intl Link. That one is a client component that reads the intl
// context, which this app does not mount; getPathname (server-safe) builds the locale-prefixed hrefs.
import Link from 'next/link'
import { getPathname } from '@/i18n/paths'
import { cx } from '../cx'

export type LangCode = 'fr' | 'en' | 'zh'

// FR / EN / 中 are fixed UI symbols (design system readme); the HTML language tags follow BCP 47.
const LANGS: ReadonlyArray<{ code: LangCode; label: string; tag: string }> = [
  { code: 'fr', label: 'FR', tag: 'fr' },
  { code: 'en', label: 'EN', tag: 'en' },
  { code: 'zh', label: '中', tag: 'zh-Hans' },
]

/** Trilingual switch (fr / en / zh). Active = paper-50 + aria-current, inactive = paper-300. */
export interface LangSwitchProps {
  /** Locale of the current page. */
  current: LangCode
  /** Route without the locale prefix; each link re-targets it to its own locale. */
  pathname: string
  /** Accessible name of the group. */
  label: string
  className?: string
  style?: CSSProperties
}

// Three locale links, no menu and no client state: the same route in each language.
export function LangSwitch({ current, pathname, label, className, style }: LangSwitchProps) {
  return (
    <div role="group" aria-label={label} className={cx('flex items-center gap-3 font-sans', className)} style={style}>
      {LANGS.map((l) => {
        const active = l.code === current
        return (
          <Link
            key={l.code}
            href={getPathname({ locale: l.code, href: pathname })}
            prefetch={false}
            hrefLang={l.tag}
            lang={l.tag}
            aria-current={active ? 'true' : undefined}
            className={cx(
              'inline-flex min-h-6 min-w-6 items-center justify-center text-[13px] no-underline transition-[color,scale] duration-[var(--dur-fast)] ease-[var(--ease-standard)] hover:no-underline active:scale-[var(--press-scale)] pointer-coarse:min-h-11 pointer-coarse:min-w-11',
              active ? 'text-paper-50' : 'text-paper-300 hover:text-paper-50',
            )}
          >
            {l.label}
          </Link>
        )
      })}
    </div>
  )
}
