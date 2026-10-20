import type { CSSProperties } from 'react'
import { cx } from '../cx'

/** Three-band flag stripe under a hero headline or as a rare section rule. */
export interface TricolorRuleProps {
  /** px, default 170 (mockup hero). INDEX passes 240 / 2 / 0 (ARCHITECTURE-INDEX §1.1). */
  width?: number | string
  height?: number
  gap?: number
  /** muted = mockup-rendered values, readable on navy; brief = content-plan values for light grounds */
  palette?: 'muted' | 'brief'
  className?: string
  style?: CSSProperties
}

const BANDS = {
  muted: ['bg-[var(--tricolor-bleu)]', 'bg-[var(--tricolor-blanc)]', 'bg-[var(--tricolor-rouge)]'],
  brief: ['bg-[var(--brand-navy)]', 'bg-[var(--brand-white)]', 'bg-[var(--brand-red)]'],
} as const

// Literal flag citation, the only place bleu/blanc/rouge appear (design.md §3).
export function TricolorRule({ width = 170, height = 4, gap = 5, palette = 'muted', className, style }: TricolorRuleProps) {
  return (
    <div role="presentation" className={cx('flex', className)} style={{ width, gap, ...style }}>
      {BANDS[palette].map((bg) => (
        <span key={bg} className={cx('flex-1', bg)} style={{ height }} />
      ))}
    </div>
  )
}
