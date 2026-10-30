import { icon, path } from '../compiler/dsl.ts'

// Heroicons' arrow-uturn-down, mirrored so the arrow ends on the right
export default icon({
  24: [path('m9 15 6 6m0 0 6-6m-6 6V9a6 6 0 0 0-12 0v3')],
  20: [path('M2.75 9.25V6.375a4.625 4.625 0 0 1 9.25 0V18.25M6.75 12.75 12 18.25l5.25-5.5')],
  16: [path('M2.75 7.25v-1a3.5 3.5 0 0 1 7 0v7M6.25 9.75l3.5 3.5 3.5-3.5')],
})
