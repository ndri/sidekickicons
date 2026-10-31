import { icon, path, scaled } from '../compiler/dsl.ts'

// Heroicons' inbox-arrow-down with the arrow turned around, a little lower to clear the tray's top
const inner =
  'M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859'
const inbox = [
  path(
    'M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15'
  ),
  path(inner).outlineOnly(),
  // Like Heroicons' solid, the tray is filled below its inner line
  path(`${inner}V18a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 18Z`).solidOnly(),
  path('M12 11.25V4.5m0 0-3 3m3-3 3 3'),
]

export default icon({
  24: inbox,
  20: scaled(inbox, 29 / 36, 1 / 3, 1 / 3),
  16: scaled(inbox, 25 / 36, -1 / 3, -1 / 3),
})
