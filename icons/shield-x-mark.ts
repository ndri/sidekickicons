import { icon } from '../compiler/dsl.ts'
import { xMark } from './calendar-x-mark.ts'
import { shields } from './shield.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/**
 * The shield from icons/shield.ts with a symbol where Heroicons' shield-check has its check, cut
 * out of the solid.
 */
export function shield(symbol: Symbol) {
  const cut = (x: number, y: number, span: number) => symbol(x, y, span).map((shape) => shape.cut())
  return icon({
    24: [shields[24], ...cut(12, 12, 6)],
    20: [shields[20], ...cut(10, 9.75, 5.5)],
    16: [shields[16], ...cut(8, 7.75, 4.5)],
  })
}

export default shield(xMark)
