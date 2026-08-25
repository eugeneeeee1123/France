'use client'
import { useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Reveal from '@/components/ui/Reveal'
import territoriesData from '@/data/territories.json'
import type { CityPoint } from './TerritoryMap'

import type { Lang } from '@/lib/i18n'

const TerritoryMap = dynamic(() => import('./TerritoryMap'), {
  ssr: false,
  loading: () => (
    <div className="grid h-full place-items-center text-[11px] text-white/30">
      Loading map…
    </div>
  ),
})

const headings: Record<Lang, { eyebrow: string; title: string; desc: string }> = {
  zh: {
    eyebrow: 'CITIES · RÉGIONS · OUTRE-MER',
    title: '法国互动地理志',
    desc: '拖动、缩放并点击城市。地图覆盖法国本土主要都会、区域中心、军事与工业节点，以及从加勒比海到南太平洋的海外城市。',
  },
  fr: {
    eyebrow: 'CITIES · RÉGIONS · OUTRE-MER',
    title: 'Atlas Interactif de la France',
    desc: 'Glissez, zoomez et cliquez sur les villes. La carte couvre les métropoles, centres régionaux, et villes ultramarines.',
  },
  en: {
    eyebrow: 'CITIES · RÉGIONS · OUTRE-MER',
    title: 'Interactive Atlas of France',
    desc: 'Drag, zoom, and click on cities. The map covers metropolitan hubs, regional centres, and overseas territories.',
  },
}

const modeLabels: Record<Lang, { metropole: string; overseas: string; visible: string; hint: string }> = {
  zh: { metropole: '法国本土', overseas: '海外领地', visible: '个当前可见节点', hint: '点击地图标记查看城市详情。使用滚轮缩放，拖动地图探索城市分布。' },
  fr: { metropole: 'France métropolitaine', overseas: 'Outre-mer', visible: 'nœuds visibles', hint: 'Cliquez sur un marqueur pour voir les détails. Molette pour zoomer.' },
  en: { metropole: 'Metropolitan France', overseas: 'Overseas', visible: 'visible nodes', hint: 'Click a marker for details. Scroll to zoom, drag to explore.' },
}

export default function InteractiveMapSection({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]
  const ml = modeLabels[lang]

  const [mode, setMode] = useState<'metropole' | 'overseas'>('metropole')
  const cities = useMemo(
    () => (mode === 'metropole' ? territoriesData.cities : territoriesData.overseas),
    [mode]
  )
  const [selected, setSelected] = useState(cities[0])

  const handleModeChange = useCallback((m: 'metropole' | 'overseas') => {
    setMode(m)
    const next = m === 'metropole' ? territoriesData.cities : territoriesData.overseas
    setSelected(next[0])
  }, [])

  const handleSelect = useCallback((city: CityPoint) => {
    setSelected(city)
  }, [])

  return (
    <section className="border-t border-white/[0.06] py-16">
      <div className="container-main">
        <Reveal className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
          <div>
            <p className="eyebrow">{h.eyebrow}</p>
            <h2 className="section-title mt-4 text-white">{h.title}</h2>
          </div>
          <p className="max-w-xl text-[12px] leading-[1.85] text-white/35">{h.desc}</p>
        </Reveal>

        {/* Toolbar */}
        <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
          <button
            onClick={() => handleModeChange('metropole')}
            className={`px-4 py-2 text-[10px] font-bold tracking-[0.06em] transition-colors ${
              mode === 'metropole' ? 'bg-[var(--accent)] text-white' : 'border border-white/10 text-white/40 hover:text-white'
            }`}
          >
            {ml.metropole}
          </button>
          <button
            onClick={() => handleModeChange('overseas')}
            className={`px-4 py-2 text-[10px] font-bold tracking-[0.06em] transition-colors ${
              mode === 'overseas' ? 'bg-[var(--accent)] text-white' : 'border border-white/10 text-white/40 hover:text-white'
            }`}
          >
            {ml.overseas}
          </button>
        </Reveal>

        {/* Map + detail panel */}
        <Reveal delay={0.08} className="mt-6 grid border border-white/[0.06] lg:grid-cols-[1.6fr_1fr]">
          <div className="h-[420px] sm:h-[520px] lg:h-[600px]">
            <TerritoryMap mode={mode} cities={cities} onSelect={handleSelect} lang={lang} />
          </div>

          <aside className="border-t border-white/[0.06] bg-[#07111f] p-7 lg:border-l lg:border-t-0 sm:p-9">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.12em]" style={{ color: 'var(--accent)' }}>
              {mode === 'metropole' ? 'FRANCE MÉTROPOLITAINE' : 'FRANCE OUTRE-MER'}
            </span>
            <h3 className="mt-5 text-3xl font-black tracking-tight text-white">{selected.name}</h3>
            <p className="mt-1 text-base text-white/40">{selected.fr}</p>

            <dl className="mt-8 flex flex-col gap-4">
              <div>
                <dt className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/25">Région</dt>
                <dd className="mt-1 text-[12px] text-white/60">{selected.region}</dd>
              </div>
              <div>
                <dt className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/25">{lang === 'zh' ? '定位' : lang === 'fr' ? 'Particularité' : 'Notable for'}</dt>
                <dd className="mt-1 text-[12px] leading-[1.7] text-white/60">{selected.note[lang]}</dd>
              </div>
              <div>
                <dt className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/25">Coordonnées</dt>
                <dd className="mt-1 font-mono text-[11px] text-white/60">{selected.lat.toFixed(3)}, {selected.lng.toFixed(3)}</dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <b className="text-[11px] font-bold text-white/50">{cities.length} {ml.visible}</b>
              <p className="mt-2 text-[10px] leading-[1.7] text-white/25">{ml.hint}</p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
