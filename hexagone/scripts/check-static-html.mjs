#!/usr/bin/env node
// Static-output checks for the INDEX in fr / en / zh (ARCHITECTURE-INDEX §1 acceptance 4, 5, 8; §4; §5).
// Reads the prerendered HTML in .next/server/app. Usage: node scripts/check-static-html.mjs (after npm run build)
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const nextDir = join(process.cwd(), '.next')
const modules = ['arsenal', 'statecraft', 'epochs', 'territories', 'arena', 'aesthetics', 'science', 'economy', 'francophonie', 'industry']
const htmlLang = { fr: 'fr', en: 'en', zh: 'zh-Hans' }
const failures = []
const count = (text, re) => (text.match(re) ?? []).length

for (const locale of ['fr', 'en', 'zh']) {
  const file = join(nextDir, 'server', 'app', `${locale}.html`)
  if (!existsSync(file)) { failures.push(`${locale}.html missing: not prerendered`); continue }
  const html = readFileSync(file, 'utf8')
  const need = (ok, message) => { if (!ok) failures.push(`${locale}.html: ${message}`) }
  need(html.includes(`<html lang="${htmlLang[locale]}"`), `<html lang="${htmlLang[locale]}"> missing`)
  need(count(html, /<h1[\s>]/g) === 1, `expected 1 <h1>, found ${count(html, /<h1[\s>]/g)}`)
  need(count(html, /<h2[\s>]/g) === 4, `expected 4 <h2>, found ${count(html, /<h2[\s>]/g)}`)
  need(count(html, /<h3[\s>]/g) === 3, `expected 3 <h3>, found ${count(html, /<h3[\s>]/g)}`)
  need(/<h1[^>]*lang="fr"/.test(html) && /<h1[^>]*translate="no"/.test(html), '<h1> must carry lang="fr" translate="no"')
  need(html.includes('GRANDEUR'), 'GRANDEUR missing from the server HTML')
  need(count(html, /translate="no"/g) >= 2, 'fewer than 2 translate="no" elements')
  need(count(html, /role="note"/g) === 1, `expected exactly 1 scenario notice (role="note"), found ${count(html, /role="note"/g)}`)
  // Visible markup only: the HTML embeds React flight data in <script> tags that repeats every string, so they are stripped before counting.
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  need(count(visible, /GDN-2040/g) === 1, `expected exactly 1 visible "GDN-2040", found ${count(visible, /GDN-2040/g)}`)
  need(html.includes('id="main"') && html.includes('href="#main"'), 'main#main or the skip link missing')
  need(count(html, /<details[\s>]/g) >= 3, 'nav <details> disclosures missing')
  for (const id of modules) need(html.includes(`href="/${locale}/${id}"`), `no link to /${locale}/${id}`)
  need(html.includes('hero-collage'), 'hero collage image missing')
  need(!/style="[^"]*opacity:0/.test(html), 'inline opacity:0 in server HTML (the final state must show without JS)')
}
const manifest = JSON.parse(readFileSync(join(nextDir, 'prerender-manifest.json'), 'utf8'))
for (const route of ['/fr', '/en', '/zh']) if (!manifest.routes?.[route]) failures.push(`prerender-manifest.json lacks ${route}`)
if (failures.length > 0) {
  console.error(`check-static-html failed (${failures.length}):`)
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}
console.log('check-static-html ok: fr, en, zh prerendered; 1 h1 / 4 h2 / 3 h3; one scenario notice; 10 module links; visible without JS.')
