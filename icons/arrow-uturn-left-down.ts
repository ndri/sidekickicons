import { icon, path } from '../compiler/dsl.ts'

// Heroicons' arrow-uturn-left, flipped so the arrow points left from the bottom
export default icon({
  24: [path('M9 9 3 15m0 0 6 6M3 15h12a6 6 0 0 0 0-12h-3')],
  20: [path('M7.25 17.25 1.75 12l5.5-5.25M1.75 12h11.875a4.625 4.625 0 0 0 0-9.25H10.75')],
  16: [path('M6.25 13.25 2.75 9.75l3.5-3.5M2.75 9.75h7a3.5 3.5 0 0 0 0-7h-1')],
})
