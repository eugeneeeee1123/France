'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { key: 'arsenal',      num: '02' },
  { key: 'statecraft',   num: '03' },
  { key: 'epochs',       num: '04' },
  { key: 'territories',  num: '05' },
  { key: 'sport',        num: '06' },
  { key: 'aesthetics',   num: '07' },
  { key: 'science',      num: '08' },
  { key: 'economy',      num: '09' },
  { key: 'francophonie', num: '10' },
] as const

const locales = ['zh', 'fr', 'en'] as const
const localeLabels: Record<string, string> = { zh: '中文', fr: 'FR', en: 'EN' }

interface NavBarProps { locale: string }

export default function NavBar({ locale }: NavBarProps) {
  const t = useTranslations('nav')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/[0.06] bg-navy/92 backdrop-blur-xl">
      <div className="container-main flex h-full items-center justify-between">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 no-underline">
          <div className="hex-clip flex h-9 w-9 items-center justify-center border border-gold bg-gold/5 text-[10px] font-black text-gold">
            FR
          </div>
          <div className="hidden sm:block">
            <b className="block text-[11px] font-black tracking-[0.2em] text-white">FRANCE ABSOLUE</b>
            <span className="block text-[8px] tracking-[0.18em] text-white/30">G.R.I.F. · LA GRANDE PUISSANCE</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0 xl:flex border-l border-white/[0.06] pl-8 ml-8">
          <Link href={`/${locale}`} className="nav-link-item">
            {t('home')}
          </Link>
          {navItems.slice(0, 6).map((item) => (
            <Link key={item.key} href={`/${locale}/${item.key}`} className="nav-link-item">
              {t(item.key as Parameters<typeof t>[0])}
            </Link>
          ))}
          <span className="px-3 text-white/20 text-sm">···</span>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Lang switcher */}
          <div className="flex border border-white/10">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`px-[10px] py-[6px] text-[9px] font-bold tracking-[0.1em] transition-colors ${
                  locale === l
                    ? 'bg-white text-navy'
                    : 'text-white/35 hover:text-white'
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>

          {/* Search */}
          <button className="hidden h-8 w-8 items-center justify-center border border-white/10 text-sm text-white/30 hover:text-white transition-colors sm:flex">
            ⌕
          </button>

          {/* Mobile toggle */}
          <button
            className="flex h-8 w-8 items-center justify-center border border-white/10 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="text-[9px] font-bold text-white/50">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-navy px-5 pb-6 xl:hidden">
          <Link href={`/${locale}`} className="block border-b border-white/[0.06] py-4 text-sm text-white/60">
            {t('home')}
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}/${item.key}`}
              className="block border-b border-white/[0.06] py-4 text-sm text-white/60 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              <span className="mr-3 font-mono text-[9px] text-white/20">{item.num}</span>
              {t(item.key as Parameters<typeof t>[0])}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
