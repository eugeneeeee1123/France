import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

const modules = [
  {
    num: '01', key: 'arsenal',
    labelFr: 'Arsenal', labelEn: 'Arsenal', labelZh: '军工霸权',
    subFr: 'PUISSANCE MILITAIRE', subEn: 'MILITARY POWER', subZh: '军工霸权',
    desc: 'Arme nucléaire · Forces armées · Industrie de défense · OPEX & Légion étrangère',
    bg: 'linear-gradient(160deg,#200a06 0%,#3d1208 50%,#1a0804 100%)',
    accent: '#d54a36', icon: '⚔',
  },
  {
    num: '02', key: 'statecraft',
    labelFr: 'Statecraft', labelEn: 'Statecraft', labelZh: '地缘政治',
    subFr: 'GOUVERNANCE', subEn: 'GOVERNANCE', subZh: '治理外交',
    desc: 'Cinquième République · Politique étrangère · Union Européenne · Francophonie',
    bg: 'linear-gradient(160deg,#080f24 0%,#112040 50%,#060d1c 100%)',
    accent: '#3159a7', icon: '⚖',
  },
  {
    num: '03', key: 'epochs',
    labelFr: 'Epochs', labelEn: 'Epochs', labelZh: '历史引擎',
    subFr: 'NOTRE HISTOIRE', subEn: 'OUR HISTORY', subZh: '历史断裂',
    desc: 'Des Gaulois à aujourd\'hui · Révolutions & Empires · Deux guerres mondiales',
    bg: 'linear-gradient(160deg,#1c0c06 0%,#361808 50%,#150904 100%)',
    accent: '#a44735', icon: '⚜',
  },
  {
    num: '04', key: 'territories',
    labelFr: 'Territories', labelEn: 'Territories', labelZh: '全球疆域',
    subFr: 'GÉOGRAPHIE', subEn: 'GEOGRAPHY', subZh: '海外领地',
    desc: 'Hexagone & régions · Outre-mer & territoires · ZEE & espaces maritimes',
    bg: 'linear-gradient(160deg,#020e16 0%,#061c2a 50%,#020b12 100%)',
    accent: '#0787a7', icon: '◉',
  },
  {
    num: '05', key: 'sport',
    labelFr: 'Arena', labelEn: 'Arena', labelZh: '体育竞技',
    subFr: 'SPORT & COMPÉTITION', subEn: 'SPORT', subZh: '体育竞技',
    desc: 'Football & Coupe du monde · Tour de France · Roland Garros · JO & Champions',
    bg: 'linear-gradient(160deg,#050e22 0%,#0d1f3e 50%,#040c1c 100%)',
    accent: '#1f55d5', icon: '🏆',
  },
  {
    num: '06', key: 'aesthetics',
    labelFr: 'Aesthetics', labelEn: 'Aesthetics', labelZh: '文化美学',
    subFr: 'CULTURE', subEn: 'CULTURE', subZh: '艺术文化',
    desc: 'Art & Architecture · Cinéma & Littérature · Mode & Luxe · Gastronomie française',
    bg: 'linear-gradient(160deg,#180a12 0%,#2c1220 50%,#120809 100%)',
    accent: '#a63f72', icon: '✦',
  },
  {
    num: '07', key: 'science',
    labelFr: 'Science', labelEn: 'Science', labelZh: '科学天工',
    subFr: 'INNOVATION', subEn: 'INNOVATION', subZh: '科学创新',
    desc: 'Ariane & espace · Nucléaire & énergie · Mathématiques · Recherche & CNRS',
    bg: 'linear-gradient(160deg,#060e0a 0%,#0e2016 50%,#050c08 100%)',
    accent: '#2d7a4f', icon: '⚛',
  },
]

interface ModulesGridProps { locale: string }

export default function ModulesGrid({ locale }: ModulesGridProps) {
  return (
    <section className="px-[var(--container-x)] py-16">
      {/* Section header */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <p className="text-[9px] font-bold tracking-[0.28em] text-white/25 uppercase">
          ✦ LA FRANCE EN 7 DIMENSIONS · 七个维度 · SEPT DOMAINES ✦
        </p>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      {/* 7-column grid */}
      <div className="grid grid-cols-2 gap-[3px] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {modules.map((mod, i) => (
          <Reveal key={mod.key} delay={i * 0.05}>
            <Link
              href={`/${locale}/${mod.key}`}
              className="group flex flex-col overflow-hidden no-underline transition-transform duration-300 hover:-translate-y-1"
              style={{ ['--accent' as string]: mod.accent }}
            >
              {/* Image area */}
              <div
                className="relative flex h-[180px] items-center justify-center overflow-hidden"
                style={{ background: mod.bg }}
              >
                <span className="text-[56px] font-black leading-none text-white/[0.07] tracking-[-0.1em] select-none">
                  {mod.icon}
                </span>
                {/* Gradient overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom,transparent 40%,rgba(5,14,28,0.95) 100%)' }}
                />
              </div>

              {/* Info area */}
              <div
                className="mod-card-bottom flex flex-1 flex-col gap-2 border-t-[3px] border-transparent bg-[#07111f] px-3.5 pb-4 pt-4 transition-colors group-hover:border-current"
                style={{ color: mod.accent }}
              >
                {/* Number + icon */}
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center border border-white/[0.08] text-[10px]"
                    style={{ color: mod.accent }}>
                    {mod.icon}
                  </div>
                  <span className="font-mono text-[8px] font-bold tracking-[0.16em]"
                    style={{ color: mod.accent }}>
                    {mod.num}
                  </span>
                </div>

                <div className="text-[11px] font-black tracking-[0.06em] uppercase text-white leading-tight">
                  {mod.labelFr}
                </div>
                <div className="text-[7.5px] font-bold tracking-[0.14em] uppercase leading-[1.4] text-white/[0.28]">
                  {mod.subFr}
                </div>
                <div className="text-[8px] leading-[1.6] text-white/[0.28]">
                  {mod.desc}
                </div>

                {/* Arrow */}
                <div className="mt-auto flex h-[22px] w-[22px] items-center justify-center border border-white/[0.06] text-[9px] text-white/20 transition-all group-hover:border-current group-hover:text-current">
                  →
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
