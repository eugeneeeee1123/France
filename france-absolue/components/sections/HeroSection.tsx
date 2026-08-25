'use client'
import Link from 'next/link'
import ParisClock from '@/components/ui/ParisClock'

const sideNavItems = [
  { num: '01', key: 'home',         labelFr: 'Accueil',        sub: 'Vue d\'ensemble',          href: '' },
  { num: '02', key: 'arsenal',      labelFr: 'Arsenal',        sub: 'Puissance militaire',       href: 'arsenal' },
  { num: '03', key: 'statecraft',   labelFr: 'Statecraft',     sub: 'Politique & diplomatie',    href: 'statecraft' },
  { num: '04', key: 'epochs',       labelFr: 'Epochs',         sub: 'Histoire de la France',     href: 'epochs' },
  { num: '05', key: 'territories',  labelFr: 'Territories',    sub: 'Géographie & outre-mer',   href: 'territories' },
  { num: '06', key: 'sport',        labelFr: 'Arena',          sub: 'Sport & compétition',       href: 'sport' },
  { num: '07', key: 'aesthetics',   labelFr: 'Aesthetics',     sub: 'Culture & art de vivre',    href: 'aesthetics' },
  { num: '08', key: 'science',      labelFr: 'Science',        sub: 'Innovation & recherche',    href: 'science' },
  { num: '09', key: 'economy',      labelFr: 'Economy',        sub: 'Économie & industrie',      href: 'economy' },
  { num: '10', key: 'francophonie', labelFr: 'Francophonie',   sub: 'Langue & influence',        href: 'francophonie' },
]

const rightCards = [
  { num:'01', key:'arsenal',      title:'ARSENAL',      sub:'Force de frappe · Indépendance',  bg:'linear-gradient(135deg,#1a0a06,#2d120a)' },
  { num:'02', key:'statecraft',   title:'STATECRAFT',   sub:'Conseil de Sécurité · Autonomie', bg:'linear-gradient(135deg,#080f1f,#0f1f3d)' },
  { num:'03', key:'epochs',       title:'EPOCHS',       sub:'Des Gaulois à la Ve République',   bg:'linear-gradient(135deg,#1a0c08,#2d1510)' },
  { num:'04', key:'territories',  title:'TERRITORIES',  sub:'Outre-mer · 4 océans · ZEE',       bg:'linear-gradient(135deg,#020e14,#051a24)' },
  { num:'05', key:'sport',        title:'ARENA',        sub:'Mbappé · Wembanyama · JO 2024',    bg:'linear-gradient(135deg,#050e1f,#091b3a)' },
  { num:'06', key:'aesthetics',   title:'AESTHETICS',   sub:'Haute Couture · Cannes · Gastro',  bg:'linear-gradient(135deg,#160a10,#241220)' },
]

interface HeroSectionProps { locale: string }

export default function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section
      className="flex pt-16"
      style={{ minHeight: '100dvh' }}
    >
      {/* ── LEFT SIDENAV ── */}
      <aside className="hidden xl:flex flex-col w-[220px] flex-shrink-0 border-r border-white/[0.06] bg-navy/95 relative z-10">
        {sideNavItems.map((item, i) => (
          <Link
            key={item.key}
            href={item.href ? `/${locale}/${item.href}` : `/${locale}`}
            className={`flex items-center gap-3 px-5 py-[18px] border-b border-white/[0.04] no-underline transition-colors
              ${i === 0
                ? 'bg-blue/10 border-l-2 border-l-blue'
                : 'hover:bg-white/[0.02]'
              }`}
          >
            <span className={`font-mono text-[8px] font-bold min-w-[20px] ${i === 0 ? 'text-blue' : 'text-white/20'}`}>
              {item.num}
            </span>
            <div>
              <b className={`block text-[10px] font-bold tracking-[0.1em] uppercase ${i === 0 ? 'text-white' : 'text-white/50'}`}>
                {item.labelFr}
              </b>
              <span className="block text-[8px] text-white/25 tracking-[0.05em] mt-0.5">{item.sub}</span>
            </div>
          </Link>
        ))}

        {/* Lang + search at bottom */}
        <div className="mt-auto border-t border-white/[0.05] p-5">
          <div className="flex gap-3 mb-3">
            {['FR','EN','中文'].map(l => (
              <span key={l} className="text-[9px] font-bold text-white/25 cursor-pointer hover:text-gold transition-colors">{l}</span>
            ))}
          </div>
          <div className="flex items-center justify-between border border-white/[0.08] px-3 py-2 text-[9px] text-white/25 cursor-pointer hover:border-white/20 transition-colors">
            <span>⌕ RECHERCHER</span>
            <span className="opacity-40 font-mono">Ctrl K</span>
          </div>
        </div>
      </aside>

      {/* ── CENTER HERO ── */}
      <div className="relative flex flex-1 flex-col justify-end px-10 pb-16 pt-10 overflow-hidden lg:px-14">
        {/* Background layers */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 60% 40%,rgba(31,78,216,0.07) 0%,transparent 60%)',
        }} />

        {/* Diagonal image composite */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[65%] opacity-[0.13] overflow-hidden"
          style={{ clipPath: 'polygon(20% 0%,100% 0%,100% 100%,0% 100%)' }}
        >
          <div className="h-1/2 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#1a3060,#2a4a90)' }}>
            <span className="text-[160px] font-black text-white/5 tracking-[-0.1em] leading-none select-none">FR</span>
          </div>
          <div className="h-1/2 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#0d1a30,#152040)' }}>
            <span className="text-[120px] font-black text-gold/5 tracking-[-0.1em] leading-none select-none">GRIF</span>
          </div>
        </div>

        {/* Hexagon emblem */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 opacity-[0.12] pointer-events-none">
          <div
            className="hex-clip flex h-40 w-40 items-center justify-center border border-gold"
            style={{ background: 'rgba(200,168,75,0.04)' }}
          >
            <span className="text-6xl font-black text-gold tracking-[-0.05em]">H</span>
          </div>
        </div>

        {/* Clock */}
        <div className="absolute right-8 top-8 z-10">
          <ParisClock />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-[620px]">
          <p className="mb-6 flex items-center gap-3 text-[8px] font-bold tracking-[0.3em] text-white/25 uppercase">
            <span>—</span>
            LA FRANCE SOUS TOUS LES ANGLES
          </p>
          <h1 className="page-hero-title font-black leading-[0.88] tracking-[-0.07em] text-white"
            style={{ fontSize: 'clamp(3.2rem,5.5vw,6.5rem)' }}>
            LA FRANCE<br />
            N&apos;EST PAS UN PAYS,<br />
            <em className="not-italic font-light text-gold">C&apos;EST UNE IDÉE</em>
          </h1>

          {/* Tricolor */}
          <div className="my-6 flex gap-1.5">
            <div className="h-[3px] w-8 bg-[#002395]" />
            <div className="h-[3px] w-8 bg-white" />
            <div className="h-[3px] w-8 bg-[#ED2939]" />
          </div>

          <p className="mb-8 max-w-[440px] text-[13px] leading-[1.9] text-white/35">
            De la Gaule à l&apos;espace, des profondeurs océaniques aux sommets de la pensée,
            explorez toutes les dimensions de la France et de son influence dans le monde.
            <br /><br />
            <span className="text-gold/50">从高卢到帝国 · 共和国 · 永恒 · G.R.I.F.</span>
          </p>

          <Link
            href={`/${locale}/arsenal`}
            className="inline-flex items-center gap-3 text-[9px] font-bold tracking-[0.22em] text-gold uppercase no-underline group"
          >
            → COMMENCER L&apos;EXPLORATION
            <span className="flex h-9 w-9 items-center justify-center border border-gold/40 text-base transition-colors group-hover:bg-gold/10">
              →
            </span>
          </Link>
        </div>

        {/* Quote box */}
        <div className="absolute bottom-20 right-8 z-10 hidden w-64 border border-white/[0.08] bg-navy/85 p-5 backdrop-blur-sm lg:block">
          <p className="mb-3 text-[10px] italic leading-[1.75] text-white/50">
            &ldquo;La grandeur de la France ne se mesure pas seulement à ce qu&apos;elle possède,
            mais à ce qu&apos;elle apporte au monde.&rdquo;
          </p>
          <p className="text-[8px] font-bold tracking-[0.16em] text-gold uppercase">— Charles de Gaulle</p>
        </div>

        {/* Coord */}
        <div className="absolute bottom-6 right-8 font-mono text-[8px] text-white/15 tracking-[0.1em]">
          48.8566° N, 2.3522° E · PARIS, FRANCE
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-14 flex items-center gap-3 text-[8px] tracking-[0.2em] text-white/20 uppercase">
          <div className="h-px w-8 overflow-hidden bg-white/10">
            <div className="h-full bg-gold animate-scroll-line" style={{ width: '40%' }} />
          </div>
          FAITES DÉFILER POUR EXPLORER
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <aside className="hidden xl:flex flex-col w-[280px] flex-shrink-0 border-l border-white/[0.06] bg-navy/94">
        {rightCards.map((card) => (
          <Link
            key={card.key}
            href={`/${locale}/${card.key}`}
            className="group flex flex-1 items-center gap-3 border-b border-white/[0.05] px-5 py-5 no-underline transition-colors hover:bg-white/[0.02]"
          >
            <div
              className="flex h-14 w-16 flex-shrink-0 items-center justify-center text-xl font-black text-white/[0.06] tracking-[-0.1em]"
              style={{ background: card.bg }}
            >
              {card.num}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[8px] font-bold text-white/20 tracking-[0.2em] mb-1">{card.num}</div>
              <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-white">{card.title}</div>
              <div className="text-[8px] text-white/30 tracking-[0.05em] leading-relaxed mt-0.5 truncate">{card.sub}</div>
            </div>
            <div className="text-[10px] text-white/20 group-hover:text-gold transition-colors">→</div>
          </Link>
        ))}
        <div className="flex items-center justify-between border-t border-white/[0.05] px-5 py-4">
          <span className="text-[8px] font-bold tracking-[0.2em] text-white/20 uppercase">VOIR TOUTES LES SECTIONS</span>
          <span className="text-white/20">⊞</span>
        </div>
      </aside>
    </section>
  )
}
