import { icon, line, slash } from '../compiler/dsl.ts'

// Heroicons' italic: two bars joined by a slanted stem, which the slash crosses in the middle
export default icon({
  24: [
    line(11.25, 3.75, 18.75, 3.75),
    line(14.95, 3.75, 9.05, 20.25),
    line(5.25, 20.25, 12.75, 20.25),
    ...slash(24),
  ],
  20: [
    line(8.75, 2.75, 16.25, 2.75),
    line(12.5, 2.75, 7.5, 17.25),
    line(3.75, 17.25, 11.25, 17.25),
    ...slash(20),
  ],
  16: [line(7, 2.75, 13, 2.75), line(10, 2.75, 6, 13.25), line(3, 13.25, 9, 13.25), ...slash(16)],
})
