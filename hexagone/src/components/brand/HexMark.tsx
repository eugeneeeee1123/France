import type { CSSProperties } from 'react'
import { BRAND_WORDMARK } from '@/lib/brand'
import { cx } from '../cx'

/**
 * Hexagon "H" monogram, optionally with the wordmark.
 * Sizes from mockup: 32 nav (gold), 24 footer (paper), 100 hero crest (gold, filled).
 */
export interface HexMarkProps {
  size?: number
  tone?: 'gold' | 'paper'
  letter?: string
  withWordmark?: boolean
  /** Defaults to the fixed brand string; it is the accessible name when the wordmark is not shown. */
  wordmark?: string
  /** Translucent ink fill behind the mark (hero crest over imagery) */
  filled?: boolean
  className?: string
  style?: CSSProperties
}

// The hexagon "H" monogram, the site's one signature mark (design.md §6).
export function HexMark({
  size = 32,
  tone = 'gold',
  letter = 'H',
  withWordmark = false,
  wordmark = BRAND_WORDMARK,
  filled = false,
  className,
  style,
}: HexMarkProps) {
  const toneClass = tone === 'paper' ? 'text-paper-50' : 'text-gold-500'
  const isBrand = wordmark === BRAND_WORDMARK
  const mark = (
    <span className={cx('relative inline-flex flex-none items-center justify-center', toneClass)} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-0 size-full">
        <polygon
          points="25,1 75,1 99,50 75,99 25,99 1,50"
          className={filled ? 'fill-[var(--surface-chip-scrim)]' : 'fill-none'}
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="relative font-display leading-none" style={{ fontSize: Math.round(size * 0.4) }}>
        {letter}
      </span>
    </span>
  )
  if (!withWordmark) {
    return (
      <span role="img" aria-label={wordmark} className={cx('inline-flex', className)} style={style}>
        {mark}
      </span>
    )
  }
  return (
    <span className={cx('inline-flex items-center gap-[10px]', className)} style={style}>
      {mark}
      <span
        lang={isBrand ? 'fr' : undefined}
        translate="no"
        className="font-sans text-[13px] font-extrabold tracking-[var(--tracking-brand)] text-paper-50"
      >
        {wordmark}
      </span>
    </span>
  )
}
