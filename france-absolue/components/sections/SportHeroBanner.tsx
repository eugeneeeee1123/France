import sportData from '@/data/sport.json'

import type { Lang } from '@/lib/i18n'

type Player = (typeof sportData.players)[number]

export default function SportHeroBanner({ locale }: { locale: string }) {
  const lang = locale as Lang
  const [wembanyama, mbappe] = sportData.players

  return (
    <section className="relative grid grid-cols-1 border-b border-white/[0.07] pt-16 md:grid-cols-2">
      <PlayerPanel player={wembanyama} lang={lang} side="left" />
      <PlayerPanel player={mbappe} lang={lang} side="right" />

      {/* VS badge */}
      <div className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/[0.08] bg-[#0c1526] font-mono text-[9px] font-black tracking-[0.12em] text-blue md:flex">
        VS
      </div>
    </section>
  )
}

interface PlayerPanelProps {
  player: Player
  lang: Lang
  side: 'left' | 'right'
}

function PlayerPanel({ player, lang, side }: PlayerPanelProps) {
  const isLeft = side === 'left'

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden px-9 py-12 sm:px-11 ${
        isLeft ? 'bg-[#071638] border-r border-white/[0.07]' : 'bg-[#030c1a]'
      }`}
    >
      {/* Ghost jersey number */}
      <div
        className={`pointer-events-none absolute top-1/2 select-none text-[220px] font-black leading-none tracking-[-0.09em] sm:text-[260px] ${
          isLeft ? 'right-[-18px] -translate-y-[55%] text-blue-light/[0.1]' : 'left-[-24px] -translate-y-[55%] text-white/[0.04]'
        }`}
      >
        {player.number}
      </div>

      {/* Corner tag */}
      <div className="absolute right-5 top-5 font-mono text-[9px] font-black tracking-[0.16em] text-blue/40 uppercase">
        {player.club}
      </div>

      <div className="relative z-[1]">
        <div className="mb-7 flex items-center gap-2.5 text-[10px] font-black tracking-[0.2em] text-blue-light uppercase before:block before:h-px before:w-6 before:bg-blue">
          {player.sport[lang]}
        </div>

        <div>
          <span className="mb-1 block text-[15px] font-light tracking-tight text-blue-light/50 sm:text-xl">
            {player.firstName}
          </span>
          <span className="block text-[2.6rem] font-black leading-[0.88] tracking-[-0.07em] text-white sm:text-[3.6rem]">
            {player.lastName}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] text-white/25 uppercase">
          <Tricolor />
          {player.birthplace}
        </div>

        <p className="mt-6 max-w-[320px] text-[11px] font-medium leading-[1.85] text-white/30">
          {player.bio[lang]}
        </p>

        <div className="my-7 h-0.5 w-7 bg-blue" />
      </div>

      {/* Stats */}
      <div className="relative z-[1] mt-auto grid grid-cols-3 gap-px bg-[#0d2040]">
        {player.stats.map((s) => (
          <div key={s.label} className={isLeft ? 'bg-[#071330] p-4' : 'bg-[#080f20] p-4'}>
            <span className="block text-2xl font-black leading-none tracking-[-0.05em] text-blue-light">{s.value}</span>
            <span className="mt-1.5 block text-[8px] font-bold tracking-[0.14em] text-white/15 uppercase">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-blue" />
    </div>
  )
}

function Tricolor() {
  return (
    <div className="flex h-[10px] w-[16px] overflow-hidden">
      <div className="flex-1 bg-[#002395]" />
      <div className="flex-1 bg-white" />
      <div className="flex-1 bg-[#ED2939]" />
    </div>
  )
}
