import { icon, path } from '../compiler/dsl.ts'

// Heroicons' arrow-uturn-up, mirrored so the arrow ends on the left
export default icon({
  24: [path('m15 9-6-6m0 0-6 6m6-6v12a6 6 0 0 0 12 0v-3')],
  20: [path('M17.25 10.75v2.875a4.625 4.625 0 0 1-9.25 0V1.75M2.75 7.25 8 1.75l5.25 5.5')],
  16: [path('M13.25 8.75v1a3.5 3.5 0 0 1-7 0v-7M2.75 6.25l3.5-3.5 3.5 3.5')],
})
