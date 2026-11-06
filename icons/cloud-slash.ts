import { icon, slash } from '../compiler/dsl.ts'
import { clouds } from './cloud-check.ts'

export default icon({
  24: [clouds[24], ...slash(24)],
  20: [clouds[20], ...slash(20)],
  16: [clouds[16], ...slash(16)],
})
