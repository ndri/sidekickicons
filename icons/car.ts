import {
  circle,
  icon,
  line,
  polygon,
  polyline,
  scaled,
  type Corner,
  type Shape,
} from '../compiler/dsl.ts'

// The car's outline from the back wheel round the cabin to the front wheel, like Heroicons' truck:
// a hatchback, its roof running back to a steep rear and its windshield sloping down to a short hood
const BODY: Corner[] = [
  [3, 18.75, 1.125],
  [3, 12.75, 1.5],
  [5.25, 8.25, 1.125],
  [13.5, 8.25, 1.125],
  [17.25, 13.5, 1],
  [21, 13.5, 1.125],
  [21, 18.75, 1.125],
]
const WHEELS = [6.75, 17.25]
// The windows reach down to the hood's height, and at 24 a pillar splits them
export const BELT = 13.5
export const PILLAR = 9

/**
 * The windows cut out of the solid, `inset` inside the body's centerline so that the frames left
 * around them are 1.5 wide once drawn at `scale`, with a pillar at `pillar` between them if `split`.
 * Their centerlines end at `bottom`, by default a frame above the belt.
 */
export function windows(
  scale: number,
  split: boolean,
  pillar = PILLAR,
  bottom = BELT - 1.5 / scale
): Corner[][] {
  const inset = 1.5 / scale
  const top = 8.25 + inset
  // Where the rear and the windshield, moved `inset` inwards, reach a height
  const along =
    ([x1, y1]: number[], [x2, y2]: number[], side: number) =>
    (y: number) => {
      const length = Math.hypot(x2 - x1, y2 - y1)
      const [nx, ny] = [(side * (y1 - y2)) / length, (side * (x2 - x1)) / length]
      return x1 + nx * inset + ((y - y1 - ny * inset) * (x2 - x1)) / (y2 - y1)
    }
  const rear = along([3, 12.75], [5.25, 8.25], 1)
  const front = along([13.5, 8.25], [17.25, 13.5], 1)
  const pane = (left: (y: number) => number, right: (y: number) => number): Corner[] => [
    [left(top), top, 0.375],
    [right(top), top, 0.375],
    [right(bottom), bottom, 0.375],
    [left(bottom), bottom, 0.375],
  ]
  const at = (x: number) => () => x
  return split
    ? [pane(rear, at(pillar - inset)), pane(at(pillar + inset), front)]
    : [pane(rear, front)]
}

/**
 * The car with `details` such as windows: the solid fills the body, applies the details (cuts, for
 * windows), cuts a gap round each wheel and draws the wheels back smaller, `wheels` giving the radii
 * of the gap and the wheel's centerline.
 */
export const car = (details: Shape[], wheels = { gap: 2.25, hub: 0.75 }) => [
  polyline([5.25, 18.75], ...BODY, [18.75, 18.75]).outlineOnly(),
  line(8.25, 18.75, 15.75, 18.75).outlineOnly(),
  ...WHEELS.map((x) => circle(x, 18.75, 1.5).outlineOnly()),
  polygon(...BODY).solidOnly(),
  ...details,
  ...WHEELS.map((x) => circle(x, 18.75, wheels.gap).cut().solidOnly()),
  ...WHEELS.map((x) => circle(x, 18.75, wheels.hub).solidOnly()),
]

// Windows: two lines in the outline, like the truck's cab, and holes in the solid
const glazed = (split: boolean) => [
  line(3, BELT, 17.25, BELT).outlineOnly(),
  ...(split ? [line(PILLAR, 8.25, PILLAR, BELT).outlineOnly()] : []),
  ...windows(1, split).map((corners) =>
    polygon(...corners)
      .cut()
      .solidOnly()
  ),
]

// The front window alone at a smaller size, with its frame a pen wide once scaled. The pillar
// moves back so the window is bigger.
const frontWindow = (scale: number, bottom?: number) =>
  polygon(...windows(scale, true, 6.75, bottom)[1]).cut()

export default icon({
  24: car(glazed(true)),
  20: scaled(car([frontWindow(29 / 36)]), 29 / 36, 1 / 3, 1 / 3),
  // Smaller wheels like Heroicons' micro truck: once scaled, a wheel of radius 1 in a
  // gap of radius 2. The window reaches down to the hood's top edge instead of stopping a frame
  // above the belt, or it's too short for its slanted front to show.
  16: scaled(car([frontWindow(25 / 36, 12)], { gap: 1.8, hub: 0.36 }), 25 / 36, -1 / 3, -1 / 3),
})
