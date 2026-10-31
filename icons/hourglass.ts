import { icon, line, path, polygon, rect, scaled } from '../compiler/dsl.ts'

// Two bulbs with straight sides, narrowing to meet in the middle
const TOP = 'M7.5 3.75v3c0 1.5 4.5 3 4.5 5.25 0-2.25 4.5-3.75 4.5-5.25v-3Z'
const BOTTOM = 'M7.5 20.25v-3c0-1.5 4.5-3 4.5-5.25 0 2.25 4.5 3.75 4.5 5.25v3Z'

// The 24's solid has a pile of sand in the bottom bulb, the mini and micro fill it, where a pile
// would only be a dot
const hourglass = (pile: boolean) => [
  // The solid fills the top bulb, empties its upper part and draws the glass back around it, so
  // the sand sits in the bottom of the bulb
  path(TOP),
  rect(7.5, 3.75, 9, 3.75).cut().solidOnly(),
  path(TOP).hollowed().solidOnly(),
  ...(pile
    ? [
        path(BOTTOM).hollowed(),
        path('M7.5 20.25v-3c1.5-1 3-1.5 4.5-1.5s3 .5 4.5 1.5v3Z').solidOnly(),
      ]
    : [path(BOTTOM)]),
  // The outline's sand is half a pen or more from the glass
  polygon([11, 7.25], [13, 7.25], [12, 7.875]).outlineOnly(),
  path('M10.125 18a2.03125 2.03125 0 0 1 3.75 0Z').outlineOnly(),
  // A bar at the top and the bottom
  line(5.25, 3.75, 18.75, 3.75),
  line(5.25, 20.25, 18.75, 20.25),
]

export default icon({
  24: hourglass(true),
  20: scaled(hourglass(false), 29 / 36, 1 / 3, 1 / 3),
  16: scaled(hourglass(false), 25 / 36, -1 / 3, -1 / 3),
})
