import { getLocale, getTranslations } from 'next-intl/server'
import { getPathname } from '@/i18n/paths'
import { modules } from '@/lib/content/modules'
import { ModuleCard } from '../content/ModuleCard'
import { type StyleWithVars } from '../cx'
import { SectionEyebrow } from '../editorial/SectionEyebrow'

/**
 * S3 La Matrice Hexagone (ARCHITECTURE-INDEX §5; Mockup lines 106 to 120): header row
 * (eyebrow, h2, intro) then the ten module rows in an auto-fit grid, two columns from 1184px.
 * Each row is a plain link (ModuleRow) inside a list item that carries --i for the P3 entry
 * stagger (hx-reveal-group / hx-reveal-item hooks; the classes P3 adds before hydration must not warn).
 * 2026-10-17 (user decision, wireframe 1b): the body is now the ten equal ModuleCard tiles, one column,
 * two from sm, five from lg (20px gap); each tile is one link (numeral, name, one-line intro) and the hover
 * shows the module colour. The ModuleRow list and the 1d hexagon are gone from this section.
 */
// 2026-10-19: real 1600 x 800 thumbnails at public/images/thumb-<id>.jpg for all ten modules.
const thumbIds: readonly string[] = ['arsenal', 'statecraft', 'epochs', 'territories', 'arena', 'aesthetics', 'science', 'economy', 'francophonie', 'industry']

export async function MatrixSection() {
  const locale = await getLocale()
  const t = await getTranslations('index.matrix')
  const tm = await getTranslations('modules')

  return (
    <section className="hx-reveal-group mx-auto max-w-[var(--container-max)] px-5 pt-[88px] md:px-[var(--gutter-page)]" suppressHydrationWarning>
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-6">
        <div className="flex flex-col gap-3">
          <SectionEyebrow variant="lead">{t('eyebrow')}</SectionEyebrow>
          <h2 className="font-display text-[length:var(--fs-h2)] font-normal leading-[var(--lh-display)] text-balance text-paper-50">
            {t('title')}
          </h2>
        </div>
        {/* 2026-10-21 (user decision): the intro line next to the heading is removed; its message key index.matrix.intro stays. */}
      </div>
      {/* Ten equal tiles (wireframe 1b): grid stretch + h-full on the link keep every tile the same height per row. */}
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {modules.map((m, i) => {
          const vars: StyleWithVars = { '--i': i }
          return (
            <li key={m.id} className="hx-reveal-item" style={vars} suppressHydrationWarning>
              <ModuleCard
                n={m.n}
                name={tm(`${m.id}.name`)}
                hue={m.hue}
                href={getPathname({ locale, href: m.route })}
                bullets={[tm(`${m.id}.sub`)]}
                imageSrc={thumbIds.includes(m.id) ? `/images/thumb-${m.id}.jpg` : undefined}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}
