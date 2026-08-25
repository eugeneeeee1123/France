'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import rifData from '@/data/rif-arsenal-full.json'

import type { Lang } from '@/lib/i18n'
type Branch = 'navy' | 'air' | 'army'

export default function RIFForceStructure({ locale }: { locale: string }) {
  const lang = locale as Lang
  const [branch, setBranch] = useState<Branch>('navy')
  const h = rifData.headline[lang]
  const current = rifData[branch]

  const branchLabels: Record<Branch, { tag: string; icon: string }> = {
    navy: { tag: 'Marine Nationale', icon: '🌊' },
    air:  { tag: "Armée de l'Air", icon: '✈' },
    army: { tag: 'Armée de Terre', icon: '🪖' },
  }

  return (
    <section className="border-t border-white/[0.06] bg-gradient-to-b from-[#06101e] to-navy py-16">
      <div className="container-main">
        <Reveal className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 border border-gold/15 bg-gold/[0.05] px-3 py-1.5 text-[8px] font-bold tracking-[0.22em] text-gold/70 uppercase">
            ⚠ {h.disclaimer}
          </div>
          <h2 className="section-title text-white">{h.title}</h2>
        </Reveal>

        {/* Top stats */}
        <Reveal delay={0.05} className="mb-10 grid grid-cols-2 gap-px bg-white/[0.04] sm:grid-cols-4">
          {rifData.stats.map((s) => (
            <div key={s.label[lang]} className="bg-[#07111f] px-5 py-6 text-center">
              <div className="text-2xl font-black tracking-tight text-gold">{s.value}</div>
              <div className="mt-1.5 text-[8px] font-bold tracking-[0.12em] text-white/30 uppercase">{s.label[lang]}</div>
            </div>
          ))}
        </Reveal>

        {/* Branch tabs */}
        <div className="flex gap-px bg-white/[0.04] mb-px">
          {(['navy', 'air', 'army'] as const).map((b) => (
            <button
              key={b}
              onClick={() => setBranch(b)}
              className={`flex-1 px-5 py-4 text-left transition-colors ${
                branch === b ? 'bg-[#07111f] border-b-2 border-gold' : 'bg-navy hover:bg-[#07111f] border-b-2 border-transparent'
              }`}
            >
              <div className="text-[8px] font-bold tracking-[0.2em] uppercase text-gold/50">
                {branchLabels[b].icon} {branchLabels[b].tag}
              </div>
              <div className={`mt-1.5 text-sm font-black tracking-tight ${branch === b ? 'text-white' : 'text-white/40'}`}>
                {rifData[b].name[lang]}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={branch}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border border-white/[0.06] border-t-0 bg-[#07111f] p-6 sm:p-9"
          >
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-6">
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{current.name[lang]}</h3>
              <span className="font-mono text-[10px] text-gold">{current.totalLabel[lang]}</span>
            </div>

            <div className="flex flex-col gap-9">
              {current.groups.map((group, gi) => (
                <div key={group.title[lang]}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-[9px] font-bold text-gold">0{gi + 1}</span>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/60">{group.title[lang]}</h4>
                  </div>
                  <div className="grid gap-px bg-white/[0.04] md:grid-cols-2">
                    {group.ships.map((ship) => (
                      <div key={ship.name} className="bg-navy p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <b className="text-[13px] font-bold text-white">{ship.name}</b>
                            <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.06em] text-gold/60">{ship.type[lang]}</div>
                          </div>
                          <strong className="shrink-0 whitespace-nowrap text-sm font-black text-gold">{ship.count}</strong>
                        </div>
                        <p className="mt-3 text-[10.5px] leading-[1.7] text-white/35">{ship.detail[lang]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
