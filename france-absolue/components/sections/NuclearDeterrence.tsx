import Reveal from '@/components/ui/Reveal'
import arsenalData from '@/data/arsenal-real.json'

import type { Lang } from '@/lib/i18n'

export default function NuclearDeterrence({ locale }: { locale: string }) {
  const lang = locale as Lang
  const { nuclear } = arsenalData

  return (
    <section className="container-main py-16">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{nuclear.label[lang]}</p>
        <h2 className="section-title mt-4 text-white">
          {lang === 'zh' && '威慑不针对任何人，而是回应一切。'}
          {lang === 'fr' && "Une dissuasion qui ne vise personne, mais répond à tout."}
          {lang === 'en' && 'A deterrent aimed at no one, responding to everything.'}
        </h2>
      </Reveal>

      <div className="mt-10 border-t border-white/[0.06]">
        {nuclear.sections.map((sec, i) => (
          <Reveal key={sec.title[lang]} delay={i * 0.05}>
            <article className="grid gap-5 border-b border-white/[0.06] py-7 md:grid-cols-[60px_1fr_1.6fr] md:items-start">
              <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
              <h3 className="text-xl font-black tracking-tight text-white">{sec.title[lang]}</h3>
              <p className="max-w-2xl text-[12px] leading-[1.85] text-white/40">{sec.text[lang]}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
