#!/usr/bin/env node
// Banned styling and copy patterns in src/ (ARCHITECTURE-INDEX §7, DESIGN-LOCK).
// src/styles/tokens/ is skipped: byte-identical design-system copies.
// Usage: node scripts/check-banned.mjs
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { extname, join, relative } from 'node:path'

const root = process.cwd()
const srcDir = join(root, 'src')
const tokensDir = join(srcDir, 'styles', 'tokens')
const extensions = new Set(['.ts', '.tsx', '.css', '.js', '.mjs'])
const rules = [
  ['rounded-* (only rounded-[var(--radius-chip)] / rounded-[var(--radius-round)])', /(?<![\w-])rounded-(?!\[var\(--radius-(?:chip|round)\)\])/],
  ['shadow utilities (module glow token excepted)', /(?<![\w-])(?:drop-|inset-)?shadow-(?!\[var\(--glow-module\))[\w[]/],
  ['backdrop-blur', /backdrop-blur/],
  ['gradient utilities', /(?<![\w-])bg-(?:gradient|linear|radial)-/],
  ['text-white', /(?<![\w-])text-white(?![\w-])/],
  ['pure black or white hex', /#(?:000|fff|ffffff)(?![0-9a-f])/i],
  ['em-dash', /\u2014/],
]
const allowedPictographs = new Set(['©', '®', '™'])
const emoji = /\p{Extended_Pictographic}/u

function walk(dir, out) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (path === tokensDir) continue
    if (statSync(path).isDirectory()) walk(path, out)
    else if (extensions.has(extname(name))) out.push(path)
  }
  return out
}

const failures = []
for (const file of walk(srcDir, [])) {
  readFileSync(file, 'utf8').split(/\r?\n/).forEach((line, i) => {
    const where = `${relative(root, file)}:${i + 1}`
    for (const [name, re] of rules) if (re.test(line)) failures.push(`${where}: ${name}`)
    for (const ch of line) {
      if (!allowedPictographs.has(ch) && emoji.test(ch)) { failures.push(`${where}: emoji ${ch}`); break }
    }
  })
}
if (failures.length > 0) {
  console.error(`check-banned failed (${failures.length}):`)
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}
console.log('check-banned ok: no banned utilities, hex, em-dash or emoji in src/.')
