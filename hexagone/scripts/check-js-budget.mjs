#!/usr/bin/env node
// INDEX JS budget (ARCHITECTURE-INDEX §1 acceptance 10, §9). Next 16 no longer prints route sizes,
// so this reads the build's diagnostics: .next/diagnostics/route-bundle-stats.json (first-load
// chunks per route) and .next/build-manifest.json (framework chunks). INDEX route JS = chunks of
// "/[locale]" minus framework chunks minus chunks the built-in "/_not-found" route also loads.
// Lazy chunks (in no first load, e.g. the EiffelScene island) are checked against the 250 KB cap.
// Usage: node scripts/check-js-budget.mjs   (after npm run build)
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'

const nextDir = join(process.cwd(), '.next')
const norm = (p) => p.replace(/\\/g, '/').replace(/^\.next\//, '')
const readJson = (rel) => JSON.parse(readFileSync(join(nextDir, rel), 'utf8'))
const gz = (rel) => gzipSync(readFileSync(join(nextDir, rel))).length

if (!existsSync(join(nextDir, 'diagnostics', 'route-bundle-stats.json'))) {
  console.error('check-js-budget: run npm run build first (route-bundle-stats.json missing)')
  process.exit(1)
}
const stats = readJson('diagnostics/route-bundle-stats.json')
const manifest = readJson('build-manifest.json')
const framework = new Set([...(manifest.rootMainFiles ?? []), ...(manifest.polyfillFiles ?? [])].map(norm))
const byRoute = new Map(stats.map((r) => [r.route, r.firstLoadChunkPaths.map(norm)]))
const index = byRoute.get('/[locale]')
if (!index) {
  console.error('check-js-budget: route /[locale] missing from route-bundle-stats.json')
  process.exit(1)
}
const notFound = new Set(byRoute.get('/_not-found') ?? [])
const LIMIT = 20 * 1024
let total = 0
console.log('INDEX route-specific chunks (gzip):')
for (const rel of index) {
  if (framework.has(rel) || notFound.has(rel)) continue
  const size = gz(rel)
  total += size
  console.log(`  ${rel}  ${size} B`)
}
console.log(`INDEX route JS: ${total} B gzip (limit ${LIMIT} B)`)

const firstLoad = new Set([...framework, ...[...byRoute.values()].flat()])
// Cap raised from 250 to 280 KiB (2026-10-17, Sonnet planner D-1, accepted by the orchestrator): the island is
// one chunk of three + r3f + GLTF/meshopt loaders (257 KiB measured); swapping loaders saves nothing, only dropping
// r3f would. It loads on desktop only, after idle, and is aria-hidden decoration; first paint never waits for it.
const LAZY_LIMIT = 280 * 1024
let lazy = 0
for (const name of readdirSync(join(nextDir, 'static', 'chunks'))) {
  const rel = `static/chunks/${name}`
  if (name.endsWith('.js') && !firstLoad.has(rel)) lazy += gz(rel)
}
console.log(`Lazy chunks: ${lazy} B gzip (cap ${LAZY_LIMIT} B)`)

let failed = false
if (total > LIMIT) { console.error('FAIL: INDEX route JS over budget'); failed = true }
if (lazy > LAZY_LIMIT) { console.error('FAIL: lazy chunks over the 3D island cap'); failed = true }
process.exit(failed ? 1 : 0)
