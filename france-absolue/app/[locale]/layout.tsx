import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { notFound } from 'next/navigation'
import { locales } from '@/lib/i18n'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import GrainOverlay from '@/components/effects/GrainOverlay'
import CustomCursor from '@/components/effects/CustomCursor'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: { template: '%s · FRANCE ABSOLUE', default: 'FRANCE ABSOLUE · La Grande Puissance' },
  description: 'La Grande République Impériale de France — G.R.I.F.',
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as (typeof locales)[number])) notFound()

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html
      lang={locale === 'zh' ? 'zh-CN' : locale}
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-navy text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <GrainOverlay />
          <CustomCursor />
          <NavBar locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
