import { icon, path } from '../compiler/dsl.ts'

// Heroicons' arrow-uturn-right, flipped so the arrow points right from the bottom
export default icon({
  24: [path('M15 9l6 6m0 0-6 6M21 15H9a6 6 0 0 1 0-12h3')],
  20: [path('M12.75 17.25 18.25 12l-5.5-5.25M18.25 12H6.375a4.625 4.625 0 0 1 0-9.25H9.25')],
  16: [path('M9.75 13.25l3.5-3.5-3.5-3.5M13.25 9.75h-7a3.5 3.5 0 0 1 0-7h1')],
})
