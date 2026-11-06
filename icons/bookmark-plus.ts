import { icon, path, polygon } from '../compiler/dsl.ts'
import { plus } from './calendar-plus.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/**
 * Heroicons' bookmark with a symbol cut out of the solid. The mini and micro follow Heroicons'
 * own: their solid outlines moved in by half a pen.
 */
export function bookmark(symbol: Symbol) {
  const cut = (x: number, y: number, span: number) => symbol(x, y, span).map((shape) => shape.cut())
  return icon({
    24: [
      path(
        'M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
      ),
      ...cut(12, 10.5, 6),
    ],
    20: [
      path(
        'M10 2.75a40.7 40.7 0 0 0-4.98.305c-.73.09-1.27.72-1.27 1.46V17.25L10 14.25l6.25 3V4.515c0-.74-.54-1.37-1.27-1.46A40.7 40.7 0 0 0 10 2.75Z'
      ),
      ...cut(10, 8.75, 5),
    ],
    16: [
      polygon([3.75, 2.75], [12.25, 2.75], [12.25, 13.25], [8, 9], [3.75, 13.25]),
      ...cut(8, 6.75, 3.5),
    ],
  })
}

export default bookmark(plus)
