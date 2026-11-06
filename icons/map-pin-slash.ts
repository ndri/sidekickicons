import { circle, icon, path, slash } from '../compiler/dsl.ts'

// Heroicons' map pin, crossed out. The slash runs just past the hole's center and would leave a
// sliver of it, so the solid drops the hole, like Heroicons' bookmark-slash drops details. The mini
// and micro follow Heroicons' own: their solid outlines moved in by half a pen.
export default icon({
  24: [
    path('M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'),
    circle(12, 10.5, 3).outlineOnly(),
    ...slash(24),
  ],
  20: [
    path(
      'M16.25 9c0 3.2-1.57 5.5-3.12 7-1.6 1.55-3.13 2.29-3.13 2.29S8.47 17.55 6.87 16C5.32 14.5 3.75 12.2 3.75 9a6.25 6.25 0 1 1 12.5 0Z'
    ),
    ...slash(20),
  ],
  16: [
    path(
      'M12.25 7c0 2.1-1.1 3.95-2.13 5.23A14.8 14.8 0 0 1 8 14.2a14.8 14.8 0 0 1-2.12-1.97C4.85 10.95 3.75 9.1 3.75 7a4.25 4.25 0 1 1 8.5 0Z'
    ),
    ...slash(16),
  ],
})
