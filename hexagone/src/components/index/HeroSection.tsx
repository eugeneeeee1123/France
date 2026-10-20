import { getFormatter, getLocale, getTranslations } from 'next-intl/server'
import { getPathname } from '@/i18n/paths'
import { GRANDEUR } from '@/lib/brand'
import { Button } from '../actions/Button'
import { TricolorRule } from '../brand/TricolorRule'
import { DisplayTitle } from '../editorial/DisplayTitle'
import { HeroCollage } from './HeroCollage'

// Paris, decimal degrees; formatted per locale (fr: decimal comma), ARCHITECTURE-INDEX §4.
const PARIS = { lat: 48.8566, lon: 2.3522 } as const
const COORD_FORMAT = { minimumFractionDigits: 4, maximumFractionDigits: 4 } as const
const NBSP = '\u00A0'

/**
 * S1 (ARCHITECTURE-INDEX §1 FIRST VIEWPORT, §5; Mockup lines 54 to 92): two-column auto-fit grid.
 * Left: depth axis + eyebrow, GRANDEUR, brand line, tricolor rule, italic tagline, lede, CTAs.
 * Right: the collage with the hero quote card and the Paris coordinates.
 * Below 768px the axis and the quote card are hidden, the text column loses its 56px inset and
 * the collage becomes a 16:9 band after the CTAs. The server renders the final state (§8).
 */
export async function HeroSection() {
  const locale = await getLocale()
  const t = await getTranslations('index.hero')
  const tq = await getTranslations('index.heroQuote')
  const format = await getFormatter()

  const coordinates = `${format.number(PARIS.lat, COORD_FORMAT)}°${NBSP}N, ${format.number(PARIS.lon, COORD_FORMAT)}°${NBSP}E`
  // fr carries no translation of the French original (empty string in messages).
  const translation = tq('translation')

  return (
    // 2026-10-20 (user decision): from xl the collage column is a bit wider than the text column (1 : 1.15) so the image reads larger.
    <section className="relative mx-auto grid max-w-[var(--container-max)] grid-cols-[repeat(auto-fit,minmax(min(100%,560px),1fr))] items-center gap-10 px-5 pb-12 pt-14 md:px-[var(--gutter-page)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
      {/* 2026-10-20 (user decision): the depth axis is removed, and with it the 56px inset that kept the text clear of it. */}
      {/* Text column: a container so GRANDEUR scales with the column (16.5cqi), not the viewport. */}
      <div className="@container flex min-w-0 flex-col gap-[22px]">
        {/* 2026-10-20 (user decision, less text): the eyebrow and the gold tagline are removed; GRANDEUR opens the column, the de Gaulle quote is the only statement. */}
        {/* GRANDEUR is never translated (D7): French, excluded from machine translation. */}
        <DisplayTitle as="h1" size="grandeur" accentWord={GRANDEUR} reveal lang="fr" translate="no" style={{ lineHeight: 0.9 }}>
          {GRANDEUR}
        </DisplayTitle>
        <p
          lang="fr"
          translate="no"
          className="font-display text-[length:clamp(22px,2vw,30px)] leading-[var(--lh-display)] tracking-[0.06em] text-paper-50"
        >
          {t('subtitle')}
        </p>
        <TricolorRule width={240} height={2} gap={0} />
        {/* 2026-10-20 (user decision): the lede is replaced by the de Gaulle quote (index.heroQuote: French original, translation, attribution). */}
        <figure className="mt-[14px] flex max-w-[520px] flex-col gap-2 text-[16px] leading-[var(--lh-body)] text-pretty text-[color:var(--text-body)]">
          <blockquote lang="fr" translate="no" className="font-display text-[20px] [font-style:italic] text-paper-50">
            {tq('text')}
          </blockquote>
          {translation && <p>{translation}</p>}
          <figcaption className="mt-2 text-[13px] text-paper-300">{tq('attribution')}</figcaption>
        </figure>
        <div className="mt-[18px] flex flex-wrap items-center gap-7">
          {/* The message already ends with the arrow: no icon on the button, none on the secondary link. */}
          {/* Note: the copy has no arrow now; the primary Button draws it (icon arrowRight, aria-hidden). */}
          <Button href={getPathname({ locale, href: '/arsenal' })} icon="arrowRight">{t('ctaPrimary')}</Button>
          <Button variant="ghost" href={getPathname({ locale, href: '/epochs' })}>
            {t('ctaSecondary')}
          </Button>
        </div>
      </div>

      {/* 2026-10-21 (user decision): the panel sits 24px higher on md and up; a transform, so the text column and the sections below do not move. */}
      <HeroCollage src="/images/hero-collage.jpg" alt={t('imageAlt')} className="md:-translate-y-6">
        <span className="absolute bottom-[18px] right-6 font-mono text-[11px] leading-none text-paper-300">{coordinates}</span>
      </HeroCollage>
    </section>
  )
}
