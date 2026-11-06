import { icon, line, path, polygon, polyline } from '../compiler/dsl.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/** An arrow pointing up, as tall as the span, with a head half as wide. */
const arrowUp: Symbol = (x, y, span) => {
  const half = span / 2
  return [
    line(x, y + half, x, y - half),
    polyline([x - half * 0.75, y - half * 0.25], [x, y - half], [x + half * 0.75, y - half * 0.25]),
  ]
}

/**
 * Heroicons' trash with a symbol in place of its two lines, like archive-box-arrow-down. The solid
 * fills the bin and cuts the symbol out. The mini and micro follow Heroicons' own: their solid
 * outlines moved in by half a pen.
 */
export function trash(symbol: Symbol) {
  return icon({
    24: [
      path(
        'M19.228 5.79c.342.052.682.107 1.022.166M19.228 5.79 18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
      ),
      path(
        'M4.772 5.79 5.84 19.673a2.25 2.25 0 0 0 2.244 2.077h7.832a2.25 2.25 0 0 0 2.244-2.077L19.228 5.79a48.108 48.108 0 0 0-14.456 0Z'
      ).solidOnly(),
      ...symbol(12, 13.5, 7.5).map((shape) => shape.outlineOnly()),
      ...symbol(12, 13.5, 7.5).map((shape) => shape.cut().solidOnly()),
    ],
    20: [
      path('M3.75 5.25A40 40 0 0 1 16.25 5.25'),
      path('M6.75 4.75v-1a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v1'),
      polygon([4.75, 5.5], [15.25, 5.5], [14.27, 18.25, 2], [5.73, 18.25, 2]),
      ...symbol(10, 12, 6).map((shape) => shape.cut()),
    ],
    16: [
      line(2.75, 4.75, 13.25, 4.75),
      path('M5.75 4.75v-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5'),
      polygon([3.75, 4.75], [12.25, 4.75], [11.32, 14.25, 0.75], [4.68, 14.25, 0.75]),
      ...symbol(8, 10, 4.5).map((shape) => shape.cut()),
    ],
  })
}

// An arrow up, for restoring
export default trash(arrowUp)
