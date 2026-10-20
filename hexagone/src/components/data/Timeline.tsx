import type { CSSProperties } from 'react'
// Note: next/link instead of the next-intl Link. That one is a client component that reads the intl
// context, which this app does not mount; callers pass locale-prefixed hrefs (getPathname).
import Link from 'next/link'
import { cx, type StyleWithVars } from '../cx'

export interface TimelineItem {
  id: string
  /** Pre-formatted year or word ("-52", "1789", "Aujourd'hui") */
  yearLabel: string
  caption: string
  href: string
  /** Speculative node (GDN-2040): shows scenarioTag */
  scenario?: boolean
  scenarioTag?: string
}

/**
 * Era timeline (design.md §8.4 / §9.5, ARCHITECTURE-INDEX §5 S5). Each node is a link into its module.
 * >= 768px: one column per item, hairline track, gold fill up to fillToIndex (scaleX from --fill), 11px nodes.
 * < 768px: vertical list. Hover (hover-capable devices): year gold + scale 1.08 on the settle curve.
 */
export interface TimelineProps {
  items: TimelineItem[]
  /** Gold line and filled nodes run up to this index (inclusive). */
  fillToIndex: number
  /** aria-label of the <nav> */
  label: string
  bordered?: boolean
  className?: string
  style?: CSSProperties
}

export function Timeline({ items, fillToIndex, label, bordered = true, className, style }: TimelineProps) {
  const last = items.length - 1
  const fill = last > 0 ? Math.min(Math.max(fillToIndex, 0), last) / last : 0
  const vars: StyleWithVars = { '--n': items.length, '--fill': fill, ...style }
  return (
    <nav aria-label={label} className={cx('py-11 font-sans', bordered && 'border-t border-ink-700', className)} style={vars}>
      <div className="relative">
        {/* Track between the first and last node centres; the fill is a transform so P3 can run it once on entry. */}
        <div aria-hidden="true" className="absolute left-[calc(50%/var(--n))] right-[calc(50%/var(--n))] top-[5px] hidden h-px bg-ink-700 md:block">
          <div data-hx-fill="" className="absolute inset-0 origin-left scale-x-[var(--fill)] bg-gold-700" />
        </div>
        <ol className="relative grid grid-cols-1 md:grid-cols-[repeat(var(--n),minmax(0,1fr))]">
          {items.map((e, i) => {
            const reached = i <= fillToIndex
            const current = i === fillToIndex
            return (
              <li key={e.id} className="border-t border-ink-700 first:border-t-0 md:border-t-0">
                <Link
                  href={e.href}
                  aria-current={current ? 'step' : undefined}
                  className="group flex items-center gap-3 py-3 text-left no-underline hover:no-underline md:flex-col md:py-0 md:text-center transition-[scale] duration-[var(--dur-instant)] ease-[var(--ease-standard)] active:scale-[var(--press-scale)]"
                >
                  <span
                    aria-hidden="true"
                    className={cx('size-[11px] flex-none rounded-[var(--radius-round)] border border-gold-500', reached ? 'bg-gold-500' : 'bg-ink-800')}
                  />
                  <span
                    className={cx(
                      'font-mono text-[17px] font-medium leading-none tabular-nums transition-[color,scale] duration-[var(--dur-fast),var(--dur-base)] ease-[var(--ease-settle)] group-hover:scale-[1.08] motion-reduce:group-hover:scale-100 group-hover:text-gold-500',
                      current ? 'text-gold-500' : 'text-paper-50',
                    )}
                  >
                    {e.yearLabel}
                  </span>
                  <span className="text-[12px] leading-[1.35] text-paper-300 md:max-w-[120px]">{e.caption}</span>
                  {e.scenario && e.scenarioTag && (
                    <span className="border border-gold-700 px-[6px] py-1 font-mono text-[10px] leading-none text-gold-500">{e.scenarioTag}</span>
                  )}
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
