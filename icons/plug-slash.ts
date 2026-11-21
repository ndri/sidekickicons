import { icon, scaled, slash } from '../compiler/dsl.ts'
import { plug } from './plug.ts'

export default icon({
  24: [...plug, ...slash(24)],
  20: [...scaled(plug, 29 / 36, 1 / 3, 1 / 3), ...slash(20)],
  16: [...scaled(plug, 25 / 36, -1 / 3, -1 / 3), ...slash(16)],
})
