import { icon, line, path, scaled } from '../compiler/dsl.ts'

// Lucide's hammer head, squeezed to 80% across its length (its arcs as curves): a face at its
// bottom right and a claw tapering to the top left. The solid's neck behind the face is narrower,
// since the pen grows it, while the face's edge still sticks out on either side.
const head = (neck: 'outline' | 'solid') => [
  path(
    neck === 'outline'
      ? 'M21.2 11.8 19.286 9.886C18.911 9.511 18.67 9.032 18.617 8.555L18.5 7.5 16.24 5.24C15.125 4.125 13.703 3.406 12.283 3.239L9.096 2.864l.91.83C11.313 4.881 12.162 6.47 12.34 8.06l.16 1.44 2 2 1.055.117c.477.053.956.294 1.331.669L18.8 14.2Z'
      : 'M20.7 12.3 18.786 10.386C18.411 10.011 18.67 9.032 18.617 8.555L18.5 7.5 16.24 5.24C15.125 4.125 13.703 3.406 12.283 3.239L9.096 2.864l.91.83C11.313 4.881 12.162 6.47 12.34 8.06l.16 1.44 2 2 1.055.117c.477.053 1.456.044 1.831.419L19.3 13.7Z'
  ),
  line(18.4, 14.6, 21.6, 11.4),
]

// Lucide's hammer with a slimmer handle from the bottom left into the head, all made a little
// smaller for the pen. The solid has a smaller head, shrunk towards where the handle meets it.
const hammer = (gap: 'cutting' | 'below') =>
  scaled(
    [
      ...head('outline').map((shape) => shape.outlineOnly()),
      ...scaled(head('solid'), 0.85, 0.15 * 14, 0.15 * 10).map((shape) => shape.solidOnly()),
      // The handle is a capsule, open where it meets the head in the outline. The solid's is
      // narrower, since the pen grows it.
      path('M14.725 11.525 6.25 20a1.591 1.591 0 0 1-2.25-2.25l8.475-8.475').outlineOnly(),
      path('M14.13 10.93 5.655 19.405a.75.75 0 0 1-1.06-1.06l8.475-8.475Z').solidOnly(),
      // A gap between the solid's handle and head. At 24 it trims the head a little, the mini and
      // micro move it down the handle to just below the head.
      gap === 'cutting'
        ? line(11.3, 9.2, 14.8, 12.7).cut().solidOnly()
        : line(10.75, 9.75, 14.25, 13.25).cut().solidOnly(),
    ],
    0.9,
    1.2,
    1.2
  )

export default icon({
  24: hammer('cutting'),
  20: scaled(hammer('below'), 29 / 36, 1 / 3, 1 / 3),
  16: scaled(hammer('below'), 25 / 36, -1 / 3, -1 / 3),
})
