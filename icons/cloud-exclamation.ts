import { dot, line } from '../compiler/dsl.ts'
import { cloud } from './cloud-check.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/**
 * Heroicons' exclamation mark, as tall as the span: a line, and a dot a pen-wide gap below it like
 * shield-exclamation's.
 */
export const exclamation: Symbol = (x, y, span) => {
  const [top, bottom] = [y - span / 2, y + span / 2]
  return [line(x, top, x, bottom - 3), dot(x, bottom)]
}

export default cloud(exclamation)
