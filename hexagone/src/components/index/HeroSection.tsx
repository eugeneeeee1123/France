import { getFormatter, getLocale, getTranslations } from 'next-intl/server'
import { getPathname } from '@/i18n/paths'
import { GRANDEUR } from '@/lib/brand'
import { Button } from '../actions/Button'
import { TricolorRule } from '../brand/TricolorRule'
import { DisplayTitle } from '../editorial/DisplayTitle'
import { SectionEyebrow } from '../editorial/SectionEyebrow'
import { HeroCollage } from './HeroCollage'
import { HeroLinework } from './HeroLinework'
import './HeroSection.css'

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
    // 2026-10-21 (user decision): from xl the section is no longer capped; the left padding keeps the text on the page's content edge, the right padding is 0 so the collage bleeds to the viewport edge, and the collage column grows to 1 : 1.35.
    <section className="relative mx-auto grid max-w-[var(--container-max)] grid-cols-[repeat(auto-fit,minmax(min(100%,560px),1fr))] items-center gap-10 px-5 pb-12 pt-14 md:px-[var(--gutter-page)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] xl:max-w-none xl:pr-0 xl:pl-[max(var(--gutter-page),calc((100%_-_var(--container-max))/2_+_var(--gutter-page)))]">
      {/* 2026-10-20 (user decision): the depth axis is removed, and with it the 56px inset that kept the text clear of it. */}
      {/* Text column: a container so GRANDEUR scales with the column (16.5cqi), not the viewport. */}
      <div className="@container relative isolate z-[1] flex min-w-0 flex-col gap-[22px]">
        {/* 2026-10-21 (user decision): faint gold linework behind the text column, echoing the blueprint lines in the collage; md and up only, behind the text (isolate + -z-10). */}
        <HeroLinework className="pointer-events-none absolute right-0 top-1/2 -z-10 hidden aspect-square w-[78%] -translate-y-1/2 md:block" />
        {/* 2026-10-20 (user decision, less text): the eyebrow and the gold tagline are removed; GRANDEUR opens the column, the de Gaulle quote is the only statement. */}
        {/* GRANDEUR is never translated (D7): French, excluded from machine translation. */}
        {/* 2026-10-21 (user decision): the eyebrow is back above GRANDEUR (lead variant: short dash + uppercase), using the existing index.hero.eyebrow copy. */}
        <SectionEyebrow variant="lead" as="p">{t('eyebrow')}</SectionEyebrow>
        {/* 2026-10-21 (user decision): GRANDEUR gets an engraved echo, a 1px gold outline copy offset down-right that fades in once after the letters (HeroSection.css). */}
        {/* 2026-10-21 (user decision): from xl GRANDEUR is sized by the viewport, clamp(2rem, 7.1vw, 141.5px), reaching about 850px wide from 2000px; it runs past its column onto the collage, and z-[1] on the column keeps it above the image. */}
        <DisplayTitle as="h1" size="grandeur" accentWord={GRANDEUR} reveal lang="fr" translate="no" style={{ lineHeight: 0.9 }} className="hx-grandeur-echo xl:text-[length:clamp(2rem,7.1vw,141.5px)]">
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
      {/* 2026-10-21 (user decision): from xl the panel reaches left toward the title with a negative left margin, clamp(96px, 8vw, 160px); as a stretched grid item it grows wider (and taller at 3:2), and the diagonal cut keeps its top-left clear of GRANDEUR. */}
      {/* 2026-10-21 (user decision): the reach is clamp(80px, 6vw, 120px) (was clamp(96px, 8vw, 160px)) so the diagonal keeps clear of the bolder GRANDEUR at every width. */}
      {/* 2026-10-21 (user decision, review item 1): the reach is clamp(32px, calc(6vw - 48px), 72px), 48px less than before at every width, so the R of GRANDEUR no longer grazes the diagonal at 1280 to 1536px and at 2560px; from about 1700px "UR" still runs onto the image. */}
      <HeroCollage src="/images/hero-collage.jpg" alt={t('imageAlt')} className="md:-translate-y-6 xl:-ml-[clamp(32px,calc(6vw_-_48px),72px)]">
        <span className="absolute bottom-[18px] right-6 font-mono text-[11px] leading-none text-paper-300">{coordinates}</span>
      </HeroCollage>
    </section>
  )
}
