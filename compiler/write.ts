// Compiles every definition in icons/ into src/, which the rest of the build reads. src/ is
// rewritten from scratch, so an icon without a definition disappears from it.
//
//   pnpm compile

import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import CanvasKitInit from 'canvaskit-wasm'
import { compileIcon, variants } from './compile.ts'
import type { IconDefinition } from './dsl.ts'

const root = new URL('../', import.meta.url)
const ck = await CanvasKitInit()

const names = (await readdir(new URL('icons/', root)))
  .filter((file) => file.endsWith('.ts'))
  .map((file) => file.slice(0, -3))

for (const variant of variants) {
  await rm(new URL(`src/${variant}/`, root), { recursive: true, force: true })
  await mkdir(new URL(`src/${variant}/`, root), { recursive: true })
}
for (const name of names) {
  const module = await import(new URL(`icons/${name}.ts`, root).href)
  const svgs = compileIcon(ck, module.default as IconDefinition)
  for (const variant of variants) {
    const svg = svgs[variant]
    if (svg) await writeFile(new URL(`src/${variant}/${name}.svg`, root), svg)
  }
}
console.log(`Compiled ${names.length} icons into src/`)
