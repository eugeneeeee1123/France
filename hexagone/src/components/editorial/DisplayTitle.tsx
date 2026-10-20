import type { CSSProperties, ReactNode } from 'react'
import { cx, type StyleWithVars } from '../cx'
import './DisplayTitle.css'

/**
 * Monumental Playfair title, uppercase.
 * hero = mockup H1 (--fs-hero, .02em, 500). grandeur = GRANDEUR treatment (clamp(2rem,16.5cqi,9rem), .05em, 400,
 * ARCHITECTURE-INDEX §1 / §1.1); the caller sets container-type: inline-size on the text column.
 * accentWord turns ONE word gold. reveal: per-letter fade + rise, 20ms stagger, settle curve, CSS only
 * (the server renders the final state, @starting-style supplies the start). Reduced motion: opacity only.
 */
export interface DisplayTitleProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'div'
  size?: 'hero' | 'grandeur'
  /** Matched without punctuation, case-insensitive. */
  accentWord?: string
  /** Needs a string child. */
  reveal?: boolean
  /** GRANDEUR and French titles carry lang="fr" translate="no" on EN / ZH pages. */
  lang?: string
  translate?: 'yes' | 'no'
  className?: string
  style?: CSSProperties
}

const SIZE = {
  hero: 'text-[length:var(--fs-hero)] font-medium tracking-[var(--tracking-hero)]',
  // 2rem floor: 3rem overflows the 280px text column at 320px (WCAG 1.4.10).
  grandeur: 'text-[length:clamp(2rem,16.5cqi,9rem)] font-normal tracking-[var(--tracking-grandeur)]',
} as const

// Letters only (Latin + Latin-1 / Latin Extended), lower-cased, so "Grandeur," matches "GRANDEUR".
const bare = (w: string) => w.replace(/[^a-zÀ-ɏ]/gi, '').toLowerCase()

export function DisplayTitle({
  children,
  as: Tag = 'h1',
  size = 'hero',
  accentWord,
  reveal = false,
  lang,
  translate,
  className,
  style,
}: DisplayTitleProps) {
  const text = typeof children === 'string' ? children : null
  const accent = accentWord ? bare(accentWord) : null
  let letter = 0
  const words = text
    ? text.split(/(\s+)/).map((w, wi) => {
        if (/^\s+$/.test(w)) return w
        const gold = accent !== null && bare(w) === accent
        return (
          <span key={wi} className={cx('inline-block whitespace-nowrap', gold && 'text-gold-500')}>
            {reveal
              ? Array.from(w).map((ch) => {
                  const i = letter++
                  const vars: StyleWithVars = { '--i': i }
                  return (
                    <span key={i} className="hx-letter inline-block" style={vars}>
                      {ch}
                    </span>
                  )
                })
              : w}
          </span>
        )
      })
    : null
  return (
    <Tag
      lang={lang}
      translate={translate}
      className={cx('font-display uppercase leading-[var(--lh-display)] text-balance text-paper-50', SIZE[size], className)}
      style={style}
    >
      {words && reveal ? (
        <>
          <span aria-hidden="true">{words}</span>
          <span className="sr-only">{text}</span>
        </>
      ) : (
        (words ?? children)
      )}
    </Tag>
  )
}
