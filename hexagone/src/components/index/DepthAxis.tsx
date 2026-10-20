import { cx } from '../cx'

/**
 * Static elevation axis of the hero (ARCHITECTURE-INDEX §1 FIRST VIEWPORT; Mockup lines 56 to 63):
 * a 1px ink-700 line 14px from the left edge of the hero section with five mono ticks, top to bottom
 * +400 km, +10 km, 0 m, −200 m, −6000 m. Sea level (0 m) is gold and carries the node.
 * Decorative (aria-hidden); the caller hides it below 768px. The layered scrolling narrative of
 * wireframe 1c is out of v1 scope (D12).
 */
export interface DepthAxisProps {
  /** Pre-formatted tick labels in reading order (the page formats the numbers per locale). */
  ticks: readonly [space: string, sky: string, sea: string, shelf: string, abyss: string]
  className?: string
}

const TICK = 'absolute left-2 whitespace-nowrap font-mono text-[length:var(--fs-micro)] leading-none text-paper-300'

export function DepthAxis({ ticks, className }: DepthAxisProps) {
  const [space, sky, sea, shelf, abyss] = ticks
  return (
    <div aria-hidden="true" className={cx('absolute bottom-[72px] left-[14px] top-[72px] w-px bg-ink-700', className)}>
      <span className={cx(TICK, 'top-0')}>{space}</span>
      <span className={cx(TICK, 'top-[24%]')}>{sky}</span>
      {/* Sea-level node on the axis: the same construct as the DS timeline nodes (radius-round exception, DESIGN-LOCK). */}
      <span className="absolute -left-1 top-[calc(48%-4px)] size-[9px] rounded-[var(--radius-round)] bg-gold-500" />
      <span className={cx(TICK, 'top-[48%] font-medium text-gold-500')}>{sea}</span>
      <span className={cx(TICK, 'top-[72%]')}>{shelf}</span>
      <span className={cx(TICK, 'bottom-0')}>{abyss}</span>
    </div>
  )
}
