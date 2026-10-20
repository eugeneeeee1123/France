import type { CSSProperties, ReactNode } from 'react'
// Note: next/link instead of the next-intl Link. That one is a client component that reads the intl
// context, which this app does not mount; callers pass locale-prefixed hrefs (getPathname).
import Link from 'next/link'
import { Icon } from '../icons/Icon'
import { cx } from '../cx'

/**
 * Gold text call-to-action with trailing arrow.
 * uppercase=true: hero CTA ("Commencer l'exploration →", 13px/600/.06em).
 * uppercase=false: inline panel link ("Explorer la carte →", 13px, unicode arrow).
 */
export interface CtaLinkProps {
  children: ReactNode
  href: string
  size?: number
  uppercase?: boolean
  arrow?: boolean
  className?: string
  style?: CSSProperties
}

// Gold uppercase text CTA with arrow, the mockup's primary call to action. Hover: underline only.
export function CtaLink({ children, href, size = 13, uppercase = true, arrow = true, className, style }: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cx(
        'inline-flex min-h-6 pointer-coarse:min-h-11 items-center gap-2 font-sans text-gold-500 no-underline underline-offset-[3px] hover:underline duration-[var(--dur-instant)] active:scale-[var(--press-scale)]',
        uppercase ? 'font-semibold uppercase tracking-[var(--tracking-label)]' : 'font-normal normal-case tracking-normal',
        className,
      )}
      style={{ fontSize: size, ...style }}
    >
      {children}
      {arrow && (uppercase ? <Icon name="arrowRight" size={16} strokeWidth={1.8} /> : <span aria-hidden="true">→</span>)}
    </Link>
  )
}
