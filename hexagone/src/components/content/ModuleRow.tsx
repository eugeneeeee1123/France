import type { CSSProperties } from 'react'
// Note: next/link instead of the next-intl Link. That one is a client component that reads the intl
// context, which this app does not mount; callers pass locale-prefixed hrefs (getPathname).
import Link from 'next/link'
import { cx, type StyleWithVars } from '../cx'

/**
 * Matrix row for the INDEX (new component, ARCHITECTURE-INDEX §1.1 / §5 S3): numeral in the module hue,
 * name, one-line sub title, gold arrow. A plain link whose accessible name is its own text.
 * Hover (hover-capable devices only): 6px shift on the settle curve + hue fill. Press: scale .98.
 */
export interface ModuleRowProps {
  /** Two-digit numeral "01" to "10" */
  n: string
  name: string
  /** One-line sub title */
  sub: string
  /** oklch hue from the module rotation (236 arsenal ... 92 industry) */
  hue: number
  href: string
  /** Position in the matrix, exposed as --i for the entry stagger (P3). */
  index?: number
  className?: string
  style?: CSSProperties
}

export function ModuleRow({ n, name, sub, hue, href, index, className, style }: ModuleRowProps) {
  const vars: StyleWithVars = { '--h': hue, ...(index != null ? { '--i': index } : {}), ...style }
  return (
    <Link
      href={href}
      style={vars}
      className={cx(
        'grid grid-cols-[72px_minmax(0,1fr)_auto] items-baseline gap-5 border-t border-ink-700 px-4 py-6 text-left no-underline',
        'transition-[translate,scale,background-color] duration-[var(--dur-base),var(--dur-instant),var(--dur-fast)] ease-[var(--ease-settle)]',
        'hover:translate-x-[6px] motion-reduce:hover:translate-x-0 hover:bg-[oklch(30%_0.05_var(--h))] hover:no-underline active:scale-[var(--press-scale)]',
        className,
      )}
    >
      <span className="font-display text-[36px] leading-none text-[oklch(68%_0.1_var(--h))]">{n}</span>
      <span className="flex flex-col gap-[6px]">
        <span className="font-sans text-[length:var(--fs-body-sm)] font-bold leading-[1.2] tracking-[0.04em] text-paper-50">{name}</span>
        <span className="font-sans text-[length:var(--fs-body-sm)] leading-[1.45] text-paper-300">{sub}</span>
      </span>
      <span aria-hidden="true" className="font-sans text-[18px] leading-none text-gold-500">
        →
      </span>
    </Link>
  )
}
