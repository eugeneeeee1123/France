import { getTranslations } from 'next-intl/server'

// Roman numerals are the Mockup's column markers (line 124 to 126); the list order already carries the sequence.
const ITEMS = [
  { key: 'i', numeral: 'I' },
  { key: 'ii', numeral: 'II' },
  { key: 'iii', numeral: 'III' },
] as const

/**
 * S4 Strategic-autonomy manifesto (ARCHITECTURE-INDEX §5, §2; Mockup lines 122 to 128):
 * three rule-bounded columns (no cards, no shadows), auto-fit from 260px. The section heading
 * is the eyebrow key, visually hidden as in the Mockup; the three principles are h3.
 */
export async function ManifestoSection() {
  const t = await getTranslations('index.manifesto')

  return (
    // hx-reveal: P3 attaches the CSS entry; the class it adds before hydration must not warn.
    <section className="hx-reveal mx-auto max-w-[var(--container-max)] px-5 pt-[88px] md:px-[var(--gutter-page)]" suppressHydrationWarning>
      <h2 className="sr-only">{t('eyebrow')}</h2>
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] border-y border-ink-700">
        {ITEMS.map(({ key, numeral }) => (
          <li key={key} className="flex flex-col gap-3 pb-9 pr-8 pt-8">
            <span aria-hidden="true" className="font-mono text-[15px] leading-none text-gold-500">
              {numeral}
            </span>
            <h3 className="font-display text-[length:var(--fs-h3)] font-normal leading-[1.15] text-balance text-paper-50">
              {t(`${key}.title`)}
            </h3>
            <p className="text-[length:var(--fs-body)] leading-[var(--lh-body)] text-pretty text-[color:var(--text-body)]">{t(`${key}.body`)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
