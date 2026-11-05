import { line, path } from '../compiler/dsl.ts'
import { letterBox } from './cc.ts'

// An A with a round top and a D, for ads or audio description
export default letterBox(() => [
  path('M6.125 15.75V10.5a2.25 2.25 0 0 1 4.5 0v5.25'),
  line(6.125, 12.75, 10.625, 12.75),
  path('M13.625 8.25v7.5h1.125a3.75 3.75 0 0 0 0-7.5Z').hollowed(),
])
