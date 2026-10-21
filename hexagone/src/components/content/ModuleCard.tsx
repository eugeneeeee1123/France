import type { CSSProperties } from 'react'
import Image from 'next/image'
// Note: next/link instead of the next-intl Link. That one is a client component that reads the intl
// context, which this app does not mount; callers pass locale-prefixed hrefs (getPathname).
import Link from 'next/link'
import { Icon } from '../icons/Icon'
import { cx, type StyleWithVars } from '../cx'

/**
 * Numbered module tile for the homepage matrix (design.md §8.2; wireframe 1b: ten equal tiles, 5 x 2).
 * Port of the design system's components/content/ModuleCard.jsx as a Server Component: same name and
 * visual props; onClick, imageSlotId and imagePlaceholder are dropped (no image-slot custom element here).
 * Top panel, 120px: with imageSrc a next/image under the thumb scrim and the 22px Playfair numeral; without
 * it (INDEX today: the existing thumbs are 109 x 55 crops and only 6 of 10 exist) a typographic tile, ink-900
 * ground with the numeral at --fs-module-numeral in the module hue, anchored bottom-left. Then the uppercase
 * name, the bullets (one intro line on INDEX) and the arrow. The whole tile is one link whose accessible name
 * is its own text. States are CSS only. Rest: ink-800 ground, 1px ink-700 border, square, no shadow.
 * Hover (fine pointers only, globals.css) and focus-visible: border and top-panel fill in the module hue,
 * 2px lift (none under reduced motion), gold arrow (gold = action; the hue never becomes "click me").
 * active: hue border + the module glow, the one permitted shadow. Press: scale .98 at once.
 */
export interface ModuleCardProps {
  /** Two-digit numeral "01" to "10" */
  n: string
  name: string
  /** oklch hue from the module rotation (236 arsenal ... 92 industry) */
  hue?: number
  /** Up to four short lines; INDEX passes the one-line sub title. */
  bullets?: readonly string[]
  /** Real thumbnail (public path); omitted, the top panel is the typographic tile. */
  imageSrc?: string
  /** The current module: hue border + glow. Unused on INDEX. */
  active?: boolean
  href?: string
  className?: string
  style?: CSSProperties
}

export function ModuleCard({ n, name, hue = 236, bullets = [], imageSrc, active = false, href = '#', className, style }: ModuleCardProps) {
  const vars: StyleWithVars = { '--h': hue, ...style }
  return (
    <Link
      href={href}
      style={vars}
      className={cx(
        'group flex h-full flex-col overflow-hidden border bg-ink-800 font-sans no-underline hover:no-underline',
        'transition-[translate,scale,border-color] duration-[var(--dur-fast),var(--dur-instant),var(--dur-fast)] ease-[var(--ease-standard)]',
        'hover:border-[oklch(68%_0.1_var(--h))] focus-visible:border-[oklch(68%_0.1_var(--h))]',
        'hover:translate-y-[var(--lift-card)] focus-visible:translate-y-[var(--lift-card)] motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0',
        'active:scale-[var(--press-scale)]',
        active ? 'border-[oklch(68%_0.1_var(--h))] shadow-[var(--glow-module)_oklch(68%_0.1_var(--h))]' : 'border-ink-700',
        className,
      )}
    >
      {/* Top panel: image + scrim, or the typographic tile. The hue fill answers hover and focus on the whole link. */}
      <span className="relative block h-[120px] bg-ink-900 transition-[background-color] duration-[var(--dur-fast)] ease-[var(--ease-standard)] group-hover:bg-[oklch(30%_0.05_var(--h))] group-focus-visible:bg-[oklch(30%_0.05_var(--h))]">
        {imageSrc && (
          <>
            <Image src={imageSrc} alt="" fill sizes="(min-width: 64rem) 20vw, (min-width: 40rem) 50vw, 100vw" className="object-cover" />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[image:var(--scrim-thumb)]" />
          </>
        )}
        {/* 2026-10-21 (user decision, review item 5): the numeral is gold on every tile (was the module hue), so the ten tiles read as one navy-and-gold set; hover and focus still show the module hue. */}
        <span
          className={cx(
            'pointer-events-none absolute bottom-2 left-[10px] font-display leading-none text-gold-500',
            imageSrc ? 'text-[length:var(--fs-card-numeral)]' : 'text-[length:var(--fs-module-numeral)]',
          )}
        >
          {n}
        </span>
      </span>
      <span className="flex flex-1 flex-col p-[14px]">
        <span className="mb-2 text-[13px] font-bold uppercase leading-[1.2] tracking-[var(--tracking-nav)] text-paper-50">{name}</span>
        {bullets.length > 0 && (
          <span className="mb-2 flex flex-col text-[length:var(--fs-caption)] leading-[1.7] text-pretty text-paper-300">
            {bullets.map((b, i) => (
              <span key={i}>{b}</span>
            ))}
          </span>
        )}
        <span
          aria-hidden="true"
          className="mt-auto flex justify-end text-paper-300 transition-colors duration-[var(--dur-fast)] ease-[var(--ease-standard)] group-hover:text-gold-500 group-focus-visible:text-gold-500"
        >
          <Icon name="arrowRight" size={14} strokeWidth={1.8} />
        </span>
      </span>
    </Link>
  )
}
