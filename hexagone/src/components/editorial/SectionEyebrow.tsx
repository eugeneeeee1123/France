import type { CSSProperties, ReactNode } from 'react'
import { cx } from '../cx'

/** 12px uppercase .1em paper-300 eyebrow. centered: 100px ink-700 rules either side. lead: 16px paper-300 dash before. */
export interface SectionEyebrowProps {
  children: ReactNode
  variant?: 'centered' | 'lead'
  /** Element to render; h2 when the eyebrow is the section's heading (ARCHITECTURE-INDEX §5). */
  as?: 'div' | 'p' | 'span' | 'h2' | 'h3'
  className?: string
  style?: CSSProperties
}

// Eyebrow label. centered = rule · TEXT · rule (section opener). lead = short dash + TEXT (hero).
export function SectionEyebrow({ children, variant = 'centered', as: Tag = 'div', className, style }: SectionEyebrowProps) {
  const text = (
    <span className="text-[12px] font-normal uppercase tracking-[var(--tracking-eyebrow-wide)] text-paper-300">{children}</span>
  )
  if (variant === 'lead') {
    return (
      <Tag className={cx('flex items-center gap-[10px] font-sans', className)} style={style}>
        <span aria-hidden="true" className="h-px w-4 bg-paper-300" />
        {text}
      </Tag>
    )
  }
  return (
    <Tag className={cx('flex items-center justify-center gap-4 font-sans', className)} style={style}>
      <span aria-hidden="true" className="h-px w-[100px] bg-ink-700" />
      {text}
      <span aria-hidden="true" className="h-px w-[100px] bg-ink-700" />
    </Tag>
  )
}
