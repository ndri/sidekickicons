import { icon } from '../compiler/dsl.ts'
import { cells } from './table-cells-merge.ts'

// The merge icon's cells, ][, with the arrows pointing away from them
export default icon({
  24: cells(24, 'out'),
  20: cells(20, 'out'),
  16: cells(16, 'out'),
})
