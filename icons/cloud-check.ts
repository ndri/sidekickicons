import { icon, path, type Shape } from '../compiler/dsl.ts'
import { check } from './calendar-check.ts'
import type { Symbol } from './video-camera-arrow-down-left.ts'

/** Heroicons' cloud at each size. The mini and micro are their solid outlines moved in by half a pen. */
export const clouds: Record<24 | 20 | 16, Shape> = {
  24: path(
    'M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z'
  ),
  20: path(
    'M15 16.25H5.5A3.75 3.75 0 0 1 4.978 8.787A3.75 3.75 0 0 1 12.013 6.187A2.75 2.75 0 0 1 15.883 9.872A3.25 3.25 0 0 1 15 16.25Z'
  ),
  16: path(
    'M12 12.25H4.5A2.75 2.75 0 0 1 4.068 6.784A2.75 2.75 0 0 1 9.242 5.284A1.75 1.75 0 0 1 11.705 7.769A2.25 2.25 0 0 1 12 12.25Z'
  ),
}

/** Heroicons' cloud with a symbol inside, like their cloud-arrow-up, cut out of the solid. */
export function cloud(symbol: Symbol) {
  const cut = (x: number, y: number, span: number) => symbol(x, y, span).map((shape) => shape.cut())
  return icon({
    24: [clouds[24], ...cut(12, 13.875, 6)],
    20: [clouds[20], ...cut(10, 11.5, 5)],
    16: [clouds[16], ...cut(8, 9, 4)],
  })
}

export default cloud(check)
