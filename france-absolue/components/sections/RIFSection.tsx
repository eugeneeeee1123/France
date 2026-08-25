'use client'
import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import rifData from '@/data/rif-summary.json'
import type { Lang } from '@/lib/i18n'

interface RIFSectionProps { locale: string }

const forceIcons: Record<string, string> = {
  navy: '🌊',
  air: '✈',
  army: '🪖',
}

const headerText: Record<Lang, { badge: string; title: string; desc: string }> = {
  zh: {
    badge: '⚠ GDN-2040 · 架空世界观',
    title: '法兰西大帝国共和国',
    desc: '军事虚构——GDN-2040 宇宙中 R.I.F. 的完整武装力量。海军 · 空天军 · 陆军 · 特种部队。',
  },
  fr: {
    badge: '⚠ GDN-2040 · Univers Alternatif · 架空世界观',
    title: 'La Grande République Impériale',
    desc: "Fiction militaire — force armée complète de la R.I.F. dans l'univers GDN-2040. Marine Nationale · Armée de l'Air et de l'Espace · Armée de Terre · Forces Spéciales.",
  },
  en: {
    badge: '⚠ GDN-2040 · Alternate Universe',
    title: 'The Grand Imperial Republic',
    desc: 'Military fiction — the complete R.I.F. armed forces in the GDN-2040 universe. Navy · Air & Space Force · Army · Special Forces.',
  },
}

export default function RIFSection({ locale }: RIFSectionProps) {
  const lang = locale as Lang
  const t = headerText[lang]
  const [active, setActive] = useState<'navy' | 'air' | 'army'>('navy')

  return (
    <div className="mx-[var(--container-x)] mb-16 border border-gold/15 border-t-2 border-t-gold/40 bg-gradient-to-br from-[#06101e] to-[#08131f] overflow-hidden">

      {/* Header */}
      <div className="flex flex-col gap-8 border-b border-white/[0.05] px-7 py-7 lg:flex-row lg:items-start lg:justify-between">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-1.5 border border-gold/15 bg-gold/[0.06] px-2.5 py-1.5 text-[8px] font-bold tracking-[0.22em] text-gold/70 uppercase">
            {t.badge}
          </div>
          <h2 className="mb-2 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
            {t.title}
          </h2>
          <p className="max-w-md text-[11px] leading-[1.75] text-white/30">
            {t.desc}
          </p>
        </Reveal>

        {/* Top-line stats */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-px bg-white/[0.03] sm:grid-cols-4 sm:min-w-[380px]">
            {rifData.headline.map((stat) => (
              <div key={stat.value + stat.label[lang]} className="bg-navy px-4 py-4 text-center">
                <div className="text-xl font-black tracking-[-0.04em] text-gold">{stat.value}</div>
                <div className="mt-1 text-[7.5px] font-bold tracking-[0.12em] text-white/25 uppercase">{stat.label[lang]}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Force tabs */}
      <div className="grid grid-cols-1 gap-px bg-white/[0.03] sm:grid-cols-3">
        {(['navy', 'air', 'army'] as const).map((branch) => {
          const data = rifData.forces[branch]
          const isActive = active === branch
          return (
            <button
              key={branch}
              onClick={() => setActive(branch)}
              className={`flex flex-col gap-3 px-6 py-6 text-left transition-colors border-t-2 ${
                isActive ? 'border-t-gold bg-[#07111f]' : 'border-t-transparent bg-navy hover:bg-[#07111f]'
              }`}
            >
              <div className="text-[7.5px] font-bold tracking-[0.2em] text-gold/50 uppercase">
                {forceIcons[branch]} {data.tag[lang]}
              </div>
              <div className="text-[13px] font-black tracking-[-0.02em] text-white">{data.name[lang]}</div>
              <div className="flex flex-col gap-1.5">
                {data.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-2">
                    <span className="text-[8.5px] text-white/40">{item.name}</span>
                    <span className="text-[9px] font-bold tracking-[0.04em] text-gold whitespace-nowrap">{item.value[lang]}</span>
                  </div>
                ))}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
