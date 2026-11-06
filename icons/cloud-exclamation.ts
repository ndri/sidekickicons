import { dot, line } from '../compiler/dsl.ts'
import { cloud } from './cloud-check.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/**
 * Heroicons' exclamation mark, as tall as the span: a line, and a dot a pen-wide gap below it like
 * shield-exclamation's. It's never shorter than 4.5, which keeps its line at least a pen long.
 */
export const exclamation: Symbol = (x, y, span) => {
  const half = Math.max(span, 4.5) / 2
  const [top, bottom] = [y - half, y + half]
  return [line(x, top, x, bottom - 3), dot(x, bottom)]
}

export default cloud(exclamation)
