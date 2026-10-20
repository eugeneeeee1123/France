import type { CSSProperties, ReactNode } from 'react'
import { cx } from '../cx'

/**
 * Scenario disclosure band: gold-700 top rule, mono badge, notice text (Mockup Arsenal page, ARCHITECTURE-INDEX §5 S2).
 * One per page, directly above the figures it qualifies.
 */
export interface ScenarioLabelProps {
  /** Mono badge, e.g. the scenario code. */
  badge: string
  /** Notice sentence. */
  children: ReactNode
  className?: string
  style?: CSSProperties
}

// Speculative-content disclosure (design.md §10), the single most important integrity rule.
export function ScenarioLabel({ badge, children, className, style }: ScenarioLabelProps) {
  return (
    <div role="note" className={cx('flex flex-wrap items-baseline gap-[14px] border-t border-gold-700 py-[14px] font-sans', className)} style={style}>
      <span className="whitespace-nowrap font-mono text-[11px] font-medium leading-none tracking-[var(--tracking-label)] text-gold-500">{badge}</span>
      <span className="text-[length:var(--fs-ui)] leading-[1.45] text-paper-50">{children}</span>
    </div>
  )
}
