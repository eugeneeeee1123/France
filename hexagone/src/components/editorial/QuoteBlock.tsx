import type { CSSProperties, ReactNode } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { cx } from '../cx'

/**
 * Pull-quote in Playfair italic. Max one or two per page.
 * card: hero overlay, width 100% / max 320px, ink-800 @85% (--surface-overlay), gold-700 rule above the attribution.
 * No decorative quote glyphs in either variant: the copy carries its own « ».
 * panel: 30px-padded ink-900 panel, optional portrait at 22% opacity behind (decorative, right-aligned), eyebrow above the quote.
 * Note: ground="rule" (ChronologySection) swaps the ink-900 ground and 30px padding for a top hairline.
 */
export interface QuoteBlockProps {
  quote: ReactNode
  attribution?: ReactNode
  variant?: 'card' | 'panel'
  /** panel only. 'filled' (default): ink-900 ground, 30px padding. 'rule': transparent ground, 1px ink-700 top hairline, 32px vertical padding, no side padding, as in the Mockup S5 column. */
  ground?: 'filled' | 'rule'
  /** panel only: decorative portrait, alt="" */
  imageSrc?: string | StaticImageData
  /** Rendered small beneath the quote, in the page language. */
  translation?: string
  /** panel only: small uppercase label above the quote */
  eyebrow?: string
  /** Language of the quote; French originals keep their register on EN / ZH pages. */
  quoteLang?: string
  className?: string
  style?: CSSProperties
}

export function QuoteBlock({
  quote,
  attribution,
  variant = 'card',
  ground = 'filled',
  imageSrc,
  translation,
  eyebrow,
  quoteLang = 'fr',
  className,
  style,
}: QuoteBlockProps) {
  if (variant === 'panel') {
    return (
      <figure
        className={cx(
          'relative flex min-h-[240px] flex-col justify-end gap-[14px] overflow-hidden font-sans',
          ground === 'rule' ? 'border-t border-ink-700 py-8' : 'bg-ink-900 p-[30px]',
          className,
        )}
        style={style}
      >
        {imageSrc && (
          /* 2026-10-21 (user decision): the portrait reads at 45% opacity (was 22%) so de Gaulle is clearly visible. */
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.45]">
            <Image src={imageSrc} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain object-right" />
          </div>
        )}
        {eyebrow && <span className="relative text-[12px] uppercase tracking-[var(--tracking-eyebrow-wide)] text-paper-300">{eyebrow}</span>}
        <blockquote
          lang={quoteLang}
          translate={quoteLang === 'fr' ? 'no' : undefined}
          className="relative max-w-[360px] font-display text-[length:var(--fs-quote-lg)] [font-style:italic] leading-[var(--lh-quote)] text-pretty text-paper-50"
        >
          {quote}
        </blockquote>
        {translation && <p className="relative max-w-[360px] text-[12px] leading-[1.5] text-paper-300">{translation}</p>}
        {attribution && <figcaption className="relative text-[12px] text-paper-300">{attribution}</figcaption>}
      </figure>
    )
  }
  return (
    <figure
      className={cx('flex w-full max-w-[320px] flex-col gap-3 border border-ink-700 bg-[var(--surface-overlay)] px-6 py-[22px] font-sans', className)}
      style={style}
    >
      <blockquote
        lang={quoteLang}
        translate={quoteLang === 'fr' ? 'no' : undefined}
        className="font-display text-[length:var(--fs-quote)] [font-style:italic] leading-[var(--lh-quote)] text-paper-50"
      >
        {quote}
      </blockquote>
      {translation && <p className="text-[12px] leading-[1.5] text-paper-300">{translation}</p>}
      {attribution && <figcaption className="w-fit border-t border-gold-700 pt-[7px] text-[11.5px] text-paper-300">{attribution}</figcaption>}
    </figure>
  )
}
