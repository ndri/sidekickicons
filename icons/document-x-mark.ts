import { icon, path, polygon } from '../compiler/dsl.ts'
import { xMark } from './calendar-x-mark.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/**
 * Heroicons' document with a symbol where document-plus has its plus. The solid fills the page,
 * cuts the symbol out and cuts the gap between the page and its folded corner where Heroicons'
 * solid documents have it, which runs wider than the outline's fold. The mini and micro follow
 * Heroicons' own: their solid outlines moved in by half a pen.
 */
export function document(symbol: Symbol) {
  const cut = (x: number, y: number, span: number) => symbol(x, y, span).map((shape) => shape.cut())
  return icon({
    24: [
      path(
        'M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
      ),
      path(
        'M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375'
      ).outlineOnly(),
      path(
        'M9 .75A4.5 4.5 0 0 1 13.5 5.25v1.875a1.125 1.125 0 0 0 1.125 1.125H16.5A4.5 4.5 0 0 1 21 12.75'
      )
        .cut()
        .solidOnly(),
      ...symbol(12, 14.25, 6).map((shape) => shape.outlineOnly()),
      ...cut(12, 14.25, 6).map((shape) => shape.solidOnly()),
    ],
    20: [
      polygon(
        [3.75, 2.75, 0.75],
        [11.689, 2.75, 0.75],
        [16.25, 7.311, 0.75],
        [16.25, 17.25, 0.75],
        [3.75, 17.25, 0.75]
      ),
      ...cut(10, 11, 4.5),
    ],
    16: [
      polygon(
        [3.25, 2.75, 0.75],
        [9.189, 2.75, 0.75],
        [12.75, 6.311, 0.75],
        [12.75, 13.25, 0.75],
        [3.25, 13.25, 0.75]
      ),
      ...cut(8, 9, 4.5),
    ],
  })
}

export default document(xMark)
