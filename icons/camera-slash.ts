import { circle, dot, icon, path, polygon, slash } from '../compiler/dsl.ts'

// Heroicons' camera, crossed out. The solid cuts the lens and the flash out of the body; Heroicons'
// ring around a lens leaves slivers along the slash, so the lens is a plain hole as wide as their
// lens and ring. The mini and micro follow Heroicons' own, without a flash: their solid outlines
// moved in by half a pen.
export default icon({
  24: [
    path(
      'M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z'
    ),
    circle(12, 12.75, 4.5).outlineOnly(),
    circle(12, 12.75, 3).cut().solidOnly(),
    dot(18.75, 10.5).outlineOnly(),
    circle(18.75, 10.5, 0).cut().solidOnly(),
    ...slash(24),
  ],
  20: [
    polygon(
      [1.75, 6.75, 1.25],
      [4.593, 6.75, 1],
      [6.588, 3.75, 1.25],
      [13.412, 3.75, 1.25],
      [15.407, 6.75, 1],
      [18.25, 6.75, 1.25],
      [18.25, 16.25, 1.25],
      [1.75, 16.25, 1.25]
    ),
    circle(10, 11, 2.25).cut(),
    ...slash(20),
  ],
  16: [
    polygon(
      [1.75, 5.75, 0.75],
      [4.31, 5.75, 0.75],
      [6.31, 3.75, 0.75],
      [9.69, 3.75, 0.75],
      [11.69, 5.75, 0.75],
      [14.25, 5.75, 0.75],
      [14.25, 12.25, 0.75],
      [1.75, 12.25, 0.75]
    ),
    circle(8, 8.5, 1.5).cut(),
    ...slash(16),
  ],
})
