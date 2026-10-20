import type { CSSProperties } from 'react'
import { Icon, type IconName } from '../icons/Icon'
import { cx } from '../cx'

export interface StatItem {
  /** Pre-formatted by the caller (locale grouping, units). */
  value: string
  label: string
  /** Speculative (R.I.F. / GDN-2040) figure: shows scenarioMarker beside the label. */
  scenario?: boolean
  scenarioMarker?: string
  icon?: IconName
}

/**
 * Stat strip: mono gold numerals over small labels, hairline dividers, no per-stat boxes.
 * open (home): top/bottom hairlines, 15px icon, 18px value, 10px uppercase label; 1 column, 2 from 360px, 4 from 1200px (fixed columns: auto-fit 220px gave 3 + 1 at 768 to 959px).
 * boxed (module): full hairline frame, 19px value, 10.5px sentence-case label.
 */
export interface StatStripProps {
  items: StatItem[]
  variant?: 'open' | 'boxed'
  className?: string
  style?: CSSProperties
}

// Hairline-separated stat row (design.md §8.3). The cells carry left/top hairlines and the grid is shifted
// 1px up and left inside an overflow-hidden frame, so dividers stay correct however the auto-fit grid wraps.
export function StatStrip({ items, variant = 'open', className, style }: StatStripProps) {
  const boxed = variant === 'boxed'
  return (
    <div className={cx('overflow-hidden border-ink-700 font-sans', boxed ? 'border' : 'border-y', className)} style={style}>
      <dl className={cx('-ml-px -mt-px grid', boxed ? 'grid-cols-[repeat(auto-fit,minmax(160px,1fr))]' : 'grid-cols-1 min-[360px]:grid-cols-2 min-[1200px]:grid-cols-4')}>
        {items.map((it) => (
          // DOM order label then value (valid dl group, read as "label: value"); the value is shown first with order-first.
          <div key={it.label} className={cx('flex flex-col border-l border-t border-ink-700 text-center', boxed ? 'p-[18px]' : 'px-2 py-5')}>
            <dt className={cx('text-paper-300', boxed ? 'mt-[5px] text-[10.5px]' : 'mt-1 text-[10px] uppercase tracking-[0.05em]')}>
              {it.label}
              {it.scenario && it.scenarioMarker && (
                <>
                  {' '}
                  <span className="ml-2 font-mono text-[10px] normal-case tracking-normal text-gold-700">({it.scenarioMarker})</span>
                </>
              )}
            </dt>
            <dd className={cx('order-first font-mono font-semibold tabular-nums text-gold-500', boxed ? 'text-[length:var(--fs-stat-lg)]' : 'text-[length:var(--fs-stat)]')}>
              {!boxed && it.icon && <Icon name={it.icon} size={15} className="mx-auto mb-[9px] text-paper-300" />}
              {it.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
