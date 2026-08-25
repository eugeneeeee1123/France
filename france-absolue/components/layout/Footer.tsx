import Link from 'next/link'

const navItems = [
  { key: 'arsenal', label: { zh:'军工霸权', fr:'Arsenal', en:'Arsenal' } },
  { key: 'statecraft', label: { zh:'地缘政治', fr:'Diplomatie', en:'Statecraft' } },
  { key: 'territories', label: { zh:'全球疆域', fr:'Territoires', en:'Territories' } },
  { key: 'epochs', label: { zh:'历史引擎', fr:'Époques', en:'Epochs' } },
  { key: 'sport', label: { zh:'体育竞技', fr:'Sport', en:'Sport' } },
  { key: 'aesthetics', label: { zh:'文化美学', fr:'Esthétique', en:'Aesthetics' } },
  { key: 'science', label: { zh:'科学天工', fr:'Science', en:'Science' } },
  { key: 'economy', label: { zh:'帝国经济', fr:'Économie', en:'Economy' } },
  { key: 'francophonie', label: { zh:'法语帝国', fr:'Francophonie', en:'Francophonie' } },
]

interface FooterProps { locale: string }

export default function Footer({ locale }: FooterProps) {
  const lang = locale as 'zh' | 'fr' | 'en'
  const col1 = navItems.slice(0, 5)
  const col2 = navItems.slice(5)

  return (
    <footer className="border-t border-white/[0.06] bg-ink">
      <div className="container-main grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="hex-clip flex h-8 w-8 items-center justify-center border border-gold/30 text-[9px] font-black text-gold">
              FR
            </div>
            <div>
              <b className="block text-sm font-black tracking-[0.16em] text-white">FRANCE ABSOLUE</b>
              <span className="block text-[8px] tracking-[0.14em] text-white/25">G.R.I.F. · La Grande Puissance</span>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-[11px] leading-7 text-white/25">
            La Grande République Impériale de France. De la Gaule à l&apos;espace, des profondeurs océaniques aux sommets de la pensée.
          </p>
        </div>

        {/* Nav col 1 */}
        <div>
          <span className="mb-4 block text-[8px] font-bold tracking-[0.22em] text-gold/60 uppercase">Navigation</span>
          <div className="flex flex-col gap-2">
            {col1.map(item => (
              <Link
                key={item.key}
                href={`/${locale}/${item.key}`}
                className="text-[11px] text-white/30 hover:text-white transition-colors no-underline"
              >
                {item.label[lang]}
              </Link>
            ))}
          </div>
        </div>

        {/* Nav col 2 */}
        <div>
          <span className="mb-4 block text-[8px] font-bold tracking-[0.22em] text-gold/60 uppercase">Explorer</span>
          <div className="flex flex-col gap-2">
            {col2.map(item => (
              <Link
                key={item.key}
                href={`/${locale}/${item.key}`}
                className="text-[11px] text-white/30 hover:text-white transition-colors no-underline"
              >
                {item.label[lang]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05] px-6 py-4 text-center text-[8px] tracking-[0.24em] text-white/10 uppercase">
        LIBERTÉ · ÉGALITÉ · GRANDEUR · AUTONOMIE · ÉTERNITÉ
      </div>
    </footer>
  )
}
