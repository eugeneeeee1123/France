import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

export const locales = ['zh', 'fr', 'en'] as const
export type Locale = (typeof locales)[number]
/** Alias used across data-driven components for localized JSON lookups. */
export type Lang = Locale

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !locales.includes(locale as Locale)) {
    notFound()
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
