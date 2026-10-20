#!/usr/bin/env node
// Removes the ground meshes (lawn, esplanade) from the Blender export before compression; the hero
// shows the tower alone (ARCHITECTURE-INDEX §5 3D layer). Usage: node scripts/prepare-eiffel-glb.mjs <in.glb> <out.glb>
import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { prune } from '@gltf-transform/functions'

const [input, output] = process.argv.slice(2)
if (!input || !output) {
  console.error('usage: node scripts/prepare-eiffel-glb.mjs <input.glb> <output.glb>')
  process.exit(1)
}
const DROP = new Set(['Champ_De_Mars_Lawns', 'Eiffel_Ground_Esplanade'])
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS)
const doc = await io.read(input)
let dropped = 0
for (const node of doc.getRoot().listNodes()) {
  if (DROP.has(node.getName())) {
    node.dispose()
    dropped += 1
  }
}
if (dropped !== DROP.size) {
  console.error(`expected to drop ${DROP.size} nodes, dropped ${dropped}`)
  process.exit(1)
}
await doc.transform(prune())
await io.write(output, doc)
console.log(`wrote ${output} (dropped ${dropped} ground nodes)`)
