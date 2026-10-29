import {
  circle,
  icon,
  line,
  n,
  path,
  PEN,
  polygon,
  polyline,
  rect,
  type Corner,
  type Point,
} from '../compiler/dsl.ts'

// The cube's top corner is at (x, top). Its slanted edges rise by `rise` over `width`, its upright
// sides are `side` long, its corners are rounded by `radius`, and the edges between its faces meet
// at (x, y), parallel to its own.
type Cube = {
  x: number
  top: number
  width: number
  rise: number
  side: number
  radius: number
  y: number
}

// Clockwise from the top
const cubeCorners = ({ x, top, width, rise, side }: Cube): Point[] => [
  [x, top],
  [x + width, top + rise],
  [x + width, top + rise + side],
  [x, top + 2 * rise + side],
  [x - width, top + rise + side],
  [x - width, top + rise],
]

/** The middle of the arc that rounds the cube's corner number `i`. */
function cornerTip(cube: Cube, i: number): Point {
  const corners = cubeCorners(cube)
  const [x, y] = corners[i]
  const toward = ([px, py]: Point) => [px - x, py - y].map((v) => v / Math.hypot(px - x, py - y))
  const [ax, ay] = toward(corners[(i + 5) % 6])
  const [bx, by] = toward(corners[(i + 1) % 6])
  const inset = cube.radius / Math.sin(Math.acos(ax * bx + ay * by) / 2) - cube.radius
  const length = Math.hypot(ax + bx, ay + by)
  return [x + ((ax + bx) / length) * inset, y + ((ay + by) / length) * inset]
}

// The edges between the faces end in the middle of the rounded corners
const cubeOutline = (cube: Cube) => [
  polygon(...cubeCorners(cube).map(([x, y]): Corner => [x, y, cube.radius])),
  polyline(cornerTip(cube, 5), [cube.x, cube.y], cornerTip(cube, 1)),
  line(cube.x, cube.y, ...cornerTip(cube, 3)),
]

// In solid each face is its own shape a pen width from the edges between faces, so the faces end
// up a pen width apart and the pen rounds all their corners. The cube's own corners are rounded
// like in the outline.
const cubeFaces = ({ x, top, width, rise, side, radius, y }: Cube) => {
  const slope = rise / width
  const bottom = top + 2 * rise + side
  // How far below the slanted edge between two faces a face's centerline runs
  const below = PEN * Math.hypot(1, slope)
  const edge = (at: number) => y - slope * Math.abs(x - at) + below
  const reach = (y - below - top) / (2 * slope)
  return [
    polygon(
      [x, top, radius],
      [x + reach, top + slope * reach],
      [x, y - below],
      [x - reach, top + slope * reach]
    ),
    polygon(
      [x - width, edge(x - width)],
      [x - PEN, edge(x - PEN)],
      [x - PEN, bottom - slope * PEN],
      [x - width, top + rise + side, radius]
    ),
    polygon(
      [x + width, edge(x + width)],
      [x + width, top + rise + side, radius],
      [x + PEN, bottom - slope * PEN],
      [x + PEN, edge(x + PEN)]
    ),
  ]
}

// Pips are round dots seen in isometric view: ellipses turned to lie on their face. Each is its own
// shape, since the pen fills a tight curve's middle only for a shape that is a single loop.
const pips = (rx: number, ry: number, angle: number, centers: Point[]) =>
  centers.map(([x, y]) => {
    const dx = rx * Math.cos((angle * Math.PI) / 180)
    const dy = rx * Math.sin((angle * Math.PI) / 180)
    const arc = (x: number, y: number) => `A${n(rx)} ${n(ry)} ${angle} 1 0 ${n(x)} ${n(y)}`
    return path(`M${n(x - dx)} ${n(y - dy)}${arc(x + dx, y + dy)}${arc(x - dx, y - dy)}Z`)
  })

// Pips on the top, left and right faces
const cubePips = (rx: number, ry: number, top: Point[], left: Point[], right: Point[]) => [
  ...pips(rx, ry, 0, top),
  ...pips(rx, ry, 60, left),
  ...pips(rx, ry, -60, right),
]

const cube24 = { x: 12, top: 2.25, width: 9, rise: 5.25, side: 9, radius: 1.5, y: 12.75 }
// The edges between the faces meet the left and right sides a little below their corners
const cube20 = { x: 10, top: 1.75, width: 7.25, rise: 4, side: 8.5, radius: 1.25, y: 10 }

export default icon({
  24: [
    ...cubeOutline(cube24).map((shape) => shape.outlineOnly()),
    ...cubePips(
      0.75,
      0.25,
      [[12, 7.25]],
      [
        [5.875, 12.15],
        [9.125, 13.85],
        [5.875, 15.35],
        [9.125, 17.1],
      ],
      [
        [14.875, 13.85],
        [18.125, 15.35],
      ]
    ).map((shape) => shape.outlineOnly()),
    ...cubeFaces(cube24).map((shape) => shape.solidOnly()),
    // The solid pips move with the faces, which the gaps between them push outwards
    ...cubePips(
      0.75,
      0.25,
      [[12, 6.578]],
      [
        [5.125, 12.556],
        [8.375, 14.257],
        [5.125, 15.757],
        [8.375, 17.507],
      ],
      [
        [15.625, 14.292],
        [18.875, 15.792],
      ]
    ).map((shape) => shape.cut().solidOnly()),
  ],
  20: [
    ...cubeFaces(cube20),
    ...cubePips(
      0.5,
      0.11,
      [[10, 5.072]],
      [
        [4.125, 10.068],
        [7.125, 11.818],
        [4.125, 13.318],
        [7.125, 15.068],
      ],
      [
        [12.875, 11.818],
        [15.875, 13.318],
      ]
    ).map((shape) => shape.cut()),
  ],
  // Pen-sized pips are too big for the cube's faces at 16, so it's a flat die showing five
  16: [
    rect(2.75, 2.75, 10.5, 10.5, 1.5),
    ...[
      [5, 5],
      [11, 5],
      [8, 8],
      [5, 11],
      [11, 11],
    ].map(([x, y]) => circle(x, y, 0.5).cut()),
  ],
})
