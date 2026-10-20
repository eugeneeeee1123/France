import type { CSSProperties, ReactNode } from 'react'
// Note: next/link instead of the next-intl Link. That one is a client component that reads the intl
// context, which this app does not mount; callers pass locale-prefixed hrefs (getPathname).
import Link from 'next/link'
import { Icon, type IconName } from '../icons/Icon'
import { cx } from '../cx'

/**
 * Outline (gold hairline) or ghost (paper text) button, 44px min touch target, square corners.
 * Taken from the homepage/module prototype images ("COMMENCER L'EXPLORATION →", "▷ VOIR LA VIDÉO").
 * Server Component: give it an href (rendered as a locale-aware Link) or let a form own the submit.
 */
export interface ButtonProps {
  children: ReactNode
  variant?: 'outline' | 'ghost'
  icon?: IconName
  iconPosition?: 'start' | 'end'
  disabled?: boolean
  /** Renders a Link instead of a button. Internal routes get the locale prefix from next-intl. */
  href?: string
  type?: 'button' | 'submit'
  className?: string
  style?: CSSProperties
}

// Outline / ghost button. Square corners; press = instant scale .98; hover = faint gold wash (outline only).
export function Button({
  children,
  variant = 'outline',
  icon,
  iconPosition = 'end',
  disabled = false,
  href,
  type = 'button',
  className,
  style,
}: ButtonProps) {
  const outline = variant === 'outline'
  const classes = cx(
    'inline-flex min-h-[44px] items-center gap-[10px] border font-sans text-[12px] font-semibold uppercase tracking-[var(--tracking-label)] no-underline hover:no-underline',
    'transition-[scale,background-color] duration-[var(--dur-instant),var(--dur-fast)] ease-[var(--ease-standard)]',
    outline ? 'px-[18px]' : 'border-transparent px-1',
    disabled
      ? cx('cursor-not-allowed text-[var(--text-disabled)]', outline && 'border-ink-700')
      : cx(
          'cursor-pointer active:scale-[var(--press-scale)]',
          outline ? 'border-gold-500 text-gold-500 hover:bg-gold-500/8' : 'text-paper-50',
        ),
    className,
  )
  // The ghost "play" button carries its glyph in a 28px ring, the same construct as the DS social circles (radius exception).
  const ring = variant === 'ghost' && icon === 'play'
  const glyph = icon ? (
    ring ? (
      <span
        className={cx(
          'inline-flex size-7 flex-none items-center justify-center rounded-[var(--radius-round)] border',
          disabled ? 'border-ink-700 text-ink-700' : 'border-gold-500 text-gold-500',
        )}
      >
        <Icon name="play" size={11} />
      </span>
    ) : (
      <Icon name={icon} size={16} strokeWidth={1.8} />
    )
  ) : null
  const content = (
    <>
      {iconPosition === 'start' && glyph}
      {children}
      {iconPosition === 'end' && glyph}
    </>
  )
  if (href && !disabled) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    )
  }
  return (
    <button type={type} disabled={disabled} className={classes} style={style}>
      {content}
    </button>
  )
}
