// Compiles the definitions in icons/ and compares them with the handmade SVGs in optimized/.
// Prints how much each variant differs, then writes the computed SVGs and a comparison sheet
// (handmade, computed, difference) per icon to computed/.
//
//   pnpm compare [icon names...]

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { Resvg } from '@resvg/resvg-js'
import CanvasKitInit from 'canvaskit-wasm'
import { compileIcon, variants, type Variant } from './compile.ts'
import type { IconDefinition } from './dsl.ts'

type Row = { variant: Variant; handmade?: string; computed: string; difference?: number }

const root = new URL('../', import.meta.url)
const out = new URL('computed/', root)

// Pixels per icon unit when measuring the difference
const ZOOM = 16
const HANDMADE = '#e11d48'
const COMPUTED = '#2563eb'
const OVERLAP = '#d1d5db'

const ck = await CanvasKitInit()
const only = process.argv.slice(2)
const names = (await readdir(new URL('icons/', root)))
  .filter((file) => file.endsWith('.ts'))
  .map((file) => file.slice(0, -3))
  .filter((name) => !only.length || only.includes(name))

console.log('icon'.padEnd(28) + variants.map((variant) => variant.padStart(12)).join(''))
for (const name of names) {
  const module = await import(new URL(`icons/${name}.ts`, root).href)
  const computed = compileIcon(ck, module.default as IconDefinition)
  const rows: Row[] = []
  for (const variant of variants) {
    const svg = computed[variant]
    if (!svg) continue
    await mkdir(new URL(`${variant}/`, out), { recursive: true })
    await writeFile(new URL(`${variant}/${name}.svg`, out), svg)
    const handmade = await readFile(
      new URL(`optimized/${variant}/${name}.svg`, root),
      'utf8'
    ).catch(() => undefined)
    const difference = handmade ? mismatch(handmade, svg, size(variant)) : undefined
    rows.push({ variant, handmade, computed: svg, difference })
  }
  const cells = variants.map((variant) => {
    const row = rows.find((row) => row.variant === variant)
    return (row ? percent(row.difference) : '-').padStart(12)
  })
  console.log(name.padEnd(28) + cells.join(''))
  await writeFile(new URL(`${name}.png`, out), sheet(rows))
}
console.log(`\nComparison sheets are in ${out.pathname}`)

function size(variant: Variant): number {
  return parseInt(variant)
}

function percent(difference: number | undefined): string {
  return difference === undefined ? 'new' : `${(difference * 100).toFixed(2)}%`
}

/** The share of inked area that only one of the two icons covers. */
function mismatch(a: string, b: string, size: number): number {
  const [alphaA, alphaB] = [a, b].map((svg) => {
    const { pixels } = new Resvg(svg, { fitTo: { mode: 'width', value: size * ZOOM } }).render()
    return pixels.filter((_, i) => i % 4 === 3)
  })
  let differing = 0
  let inked = 0
  alphaA.forEach((value, i) => {
    differing += Math.abs(value - alphaB[i])
    inked += Math.max(value, alphaB[i])
  })
  return inked ? differing / inked : 0
}

function sheet(rows: Row[]): Buffer {
  const panel = 240
  const gap = 16
  const label = 120
  const header = 40
  const columns = ['handmade', 'computed', 'difference']
  const x = (column: number) => label + column * (panel + gap)
  let body = columns.map((title, column) => text(x(column), 24, title)).join('')
  rows.forEach((row, index) => {
    const y = header + index * (panel + gap)
    const units = size(row.variant)
    body += text(0, y + 18, row.variant) + text(0, y + 40, `${percent(row.difference)} off`)
    body += columns.map((_, column) => grid(x(column), y, panel, units)).join('')
    if (row.handmade) {
      // Red where only the handmade icon is, blue where only the computed one is, gray where both are
      const mask = `overlap-${index}`
      body += nest(row.handmade, x(0), y, panel, '#111827')
      body += nest(row.handmade, x(2), y, panel, HANDMADE)
      body += nest(row.computed, x(2), y, panel, COMPUTED)
      body += `<mask id="${mask}">${nest(row.handmade, x(2), y, panel, 'white')}</mask>`
      body += `<g mask="url(#${mask})">${nest(row.computed, x(2), y, panel, OVERLAP)}</g>`
    }
    body += nest(row.computed, x(1), y, panel, '#111827')
  })
  const width = x(columns.length)
  const height = header + rows.length * (panel + gap)
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` +
    `<rect width="100%" height="100%" fill="white"/>${body}</svg>`
  return new Resvg(svg).render().asPng()
}

function text(x: number, y: number, content: string): string {
  return `<text x="${x}" y="${y}" font-family="Helvetica, Arial, sans-serif" font-size="14" fill="#374151">${content}</text>`
}

function grid(x: number, y: number, size: number, units: number): string {
  let d = ''
  for (let i = 0; i <= units; i++) {
    const offset = (i * size) / units
    d += `M${x + offset} ${y}v${size}M${x} ${y + offset}h${size}`
  }
  return `<path d="${d}" stroke="#e5e7eb" stroke-width="1" fill="none"/>`
}

/** Places an icon's SVG inside the sheet at the given position and size. */
function nest(svg: string, x: number, y: number, size: number, color: string): string {
  return svg.replace(/<svg([^>]*)>/, (_, attributes: string) => {
    const kept = attributes.replace(/\s(width|height)="[^"]*"/g, '')
    return `<svg${kept} x="${x}" y="${y}" width="${size}" height="${size}" color="${color}">`
  })
}
