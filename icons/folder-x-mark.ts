import { icon, path, scaled } from '../compiler/dsl.ts'
import { xMark } from './calendar-x-mark.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/**
 * Heroicons' folder with a symbol inside, like their folder-plus and folder-minus. The solid cuts
 * the symbol out of the folder.
 */
export function folder(symbol: Symbol) {
  const drawing = [
    path(
      'M13.06 6.31 10.94 4.19a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z'
    ),
    ...symbol(12, 13.5, 6).map((shape) => shape.cut()),
  ]
  return icon({
    24: drawing,
    20: scaled(drawing, 29 / 36, 1 / 3, 1 / 3),
    16: scaled(drawing, 25 / 36, -1 / 3, -1 / 3),
  })
}

export default folder(xMark)
