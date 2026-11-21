import {
  icon,
  line,
  path,
  polygon,
  polyline,
  scaled,
  type Corner,
  type Point,
} from '../compiler/dsl.ts'

// Two hands clasped, seen from the front. The left hand's fingers wrap down around the right hand,
// and the right hand's thumb hooks over the top of the left hand and down its outside. In the
// outline each forearm ends in a cuff curved like hand-thumb-up's; the solids leave the forearms
// open-ended.

// Diagonal coordinates: depth runs down-right (x + y), offset up-right (x - y)
const at = (depth: number, offset: number): Point => [(depth + offset) / 2, (depth - offset) / 2]
const corner = (depth: number, offset: number, radius?: number): Corner =>
  radius === undefined ? at(depth, offset) : [...at(depth, offset), radius]

// The forearms' top and bottom edges
const TOP = 9
const BOTTOM = 14.25
// The fingers' edges from the left hand's bottom edge up to the index finger's top edge, and how
// deep each fingertip reaches. A tip rounded by half a finger's width is a semicircle.
const EDGES = [-8, -4.5, -1, 2.5]
const TIPS = [30.5, 31.25, 32]
const R = (EDGES[1] - EDGES[0]) / Math.SQRT2 / 2
const tip = (i: number) => [corner(TIPS[i], EDGES[i], R), corner(TIPS[i], EDGES[i + 1], R)]
// The lines between the fingers start a little above the tip before
const stub = (i: number) => corner(TIPS[i - 1] - 3, EDGES[i])
// How round the left wrist's underside is where it turns down into the fingers
const WRIST = 3

// The thumb runs left along the top, then bends down at 45° between two depths to its tip. The
// outline's thumb is 3 wide.
const THUMB_TOP = 6.75
const [OUTER, INNER] = [18.75, 18.75 + 3 * Math.SQRT2]
const THUMB_TIP = -3
const THUMB_R = 3 / 2
// Where the right hand's knuckles come down at 45° to its forearm
const KNUCKLES = 16.5

// The outline's cuffs, bands curved like hand-thumb-up's cuff: two arcs bowing out, closed at the
// ends, reaching 1.5 above and below the forearms, which run into their inner arcs
const [CUFF_TOP, CUFF_BOTTOM] = [TOP - 1.5, BOTTOM + 1.5]
const CUFF_R = 9
const [CUFF_OUT, CUFF_IN] = [3.25, 5.5]
const cuff = (x: number, flip: number) => {
  const [outer, inner] = [x + flip * CUFF_OUT, x + flip * CUFF_IN]
  const [toward, back] = flip > 0 ? [0, 1] : [1, 0]
  return path(
    `M${outer} ${CUFF_TOP}A${CUFF_R} ${CUFF_R} 0 0 ${toward} ${outer} ${CUFF_BOTTOM}` +
      `L${inner} ${CUFF_BOTTOM}A${CUFF_R} ${CUFF_R} 0 0 ${back} ${inner} ${CUFF_TOP}Z`
  )
}
// Where the cuffs' inner arcs cross the forearms' edges
const CUFF_CENTER = CUFF_IN + Math.sqrt(CUFF_R ** 2 - ((CUFF_BOTTOM - CUFF_TOP) / 2) ** 2)
const ARM = CUFF_CENTER - Math.sqrt(CUFF_R ** 2 - ((BOTTOM - TOP) / 2) ** 2)

const outline = [
  cuff(0, 1),
  cuff(24, -1),
  line(ARM, TOP, OUTER - TOP, TOP),
  polyline([ARM, BOTTOM], [BOTTOM + EDGES[0], BOTTOM, WRIST], ...tip(0), stub(1)),
  polyline(stub(1), ...tip(1), stub(2)),
  polyline(
    stub(2),
    ...tip(2),
    corner(INNER, EDGES[3], 1),
    corner(INNER, THUMB_TIP, THUMB_R),
    corner(OUTER, THUMB_TIP, THUMB_R),
    [OUTER - THUMB_TOP, THUMB_TOP, 1.5],
    [KNUCKLES, THUMB_TOP, 1.5],
    [KNUCKLES + TOP - THUMB_TOP, TOP, 0.75],
    [24 - ARM, TOP]
  ),
  line(24 - ARM, BOTTOM, BOTTOM + EDGES[3], BOTTOM),
]

// The solid fills both hands and the thumb in front of the left hand. The gap round the thumb cuts
// into the left hand behind it, through its top edge. The gap along the index finger cuts into the
// right hand and runs out through its bottom edge, which turns into it round. The fingers are
// strips with full round tips reaching as far as the outline's, with a groove between each.

/** A finger between two offsets, fully rounded at its tip's depth. */
const strip = (low: number, high: number, tipDepth: number) => {
  const r = (high - low) / Math.SQRT2 / 2
  return polygon(
    at(tipDepth - 7, low),
    corner(tipDepth, low, r),
    corner(tipDepth, high, r),
    at(tipDepth - 7, high)
  )
}

// The right hand's edge beside the index finger's gap, as at 24
const RIGHT_EDGE = EDGES[3] + 3 * Math.SQRT2

/**
 * The solid drawn for `scale`, its gaps a pen wide once scaled, with `tips` fingers `groove` apart
 * once drawn, the grooves reaching `depth` half pens behind where the tips start curving, and a
 * thumb `thumb` wide once drawn. At small sizes the gaps take up more of the drawing, so the index
 * finger gives up width to keep the right hand's edge where it is at 24.
 */
function solid(scale: number, { tips = TIPS, groove = 1, depth = 3.25, thumb = 2.5 } = {}) {
  const half = (0.75 / scale) * Math.SQRT2
  const gap = 2 * half
  // The solid's thumb is slimmer than the outline's, with the same outer edge
  const inner = OUTER + ((thumb - 1.5) / scale) * Math.SQRT2
  const thumbR = (thumb - 1.5) / scale / 2
  // The fingers' top edge, the index finger's gap beside it
  const top = RIGHT_EDGE - gap - half
  const indexGap = top + half
  // The grooves between the fingers are narrower than a pen
  const apart = (groove / scale) * Math.SQRT2
  const width = (top - (EDGES[0] - half) - (tips.length - 1) * apart) / tips.length
  const lows = tips.map((_, i) => EDGES[0] - half + i * (width + apart))
  const centers = lows.map((low) => low + width / 2)
  const grooves = lows.slice(1).map((low) => low - apart / 2)
  const last = tips.length - 1
  // Each finger's tip depth, and where its tip starts curving
  const ends = tips.map((tip) => tip + (R + 0.75) * Math.SQRT2 - width / 2)
  const curving = ends.map((end) => end - (width - 2 * half) / 2)
  // The palm fills each groove up to a flat end, clear of where the fingertips start curving so
  // it doesn't poke out past them, and likewise along the outer fingers' outer edges
  const palm = grooves.map((_, i) => Math.min(curving[i], curving[i + 1]) - depth * half)
  const [first, final] = [0, last].map((i) => Math.min(tips[i] - 3, curving[i] - 1.5 * half))
  return [
    polygon(
      [2.75, TOP],
      [OUTER - TOP, TOP],
      [OUTER - THUMB_TOP, THUMB_TOP, 1.5],
      [KNUCKLES, THUMB_TOP, 1.5],
      [KNUCKLES + TOP - THUMB_TOP, TOP, 0.75],
      [21.25, TOP],
      [21.25, BOTTOM],
      [BOTTOM + RIGHT_EDGE, BOTTOM, 0.5 / scale],
      at(28, RIGHT_EDGE),
      at(28, top - half),
      at(final, top - half),
      // Straight across each groove, between the fingers' middles
      ...grooves
        .flatMap((_, i) => [at(palm[i], centers[i]), at(palm[i], centers[i + 1])])
        .reverse(),
      at(first, EDGES[0]),
      [BOTTOM + EDGES[0], BOTTOM, WRIST],
      [2.75, BOTTOM]
    ),
    ...lows.map((low, i) => strip(low + half, low + width - half, ends[i])),
    polygon(
      at(OUTER, 4),
      corner(OUTER, THUMB_TIP, thumbR),
      corner(inner, THUMB_TIP, thumbR),
      at(inner, 4)
    ),
    polyline(
      // From above the left hand's top edge, so it cuts cleanly through it
      at(OUTER - gap, OUTER - gap - 2 * (TOP - 1.5 / scale)),
      corner(OUTER - gap, THUMB_TIP - gap, thumbR + 1.5 / scale),
      corner(inner + gap, THUMB_TIP - gap, thumbR + 1.5 / scale),
      corner(inner + gap, indexGap, 1),
      at(31, indexGap)
    ).cut(),
  ]
}

export default icon({
  24: [
    ...outline.map((shape) => shape.outlineOnly()),
    ...solid(1).map((shape) => shape.solidOnly()),
  ],
  20: scaled(solid(29 / 36), 29 / 36, 1 / 3, 1 / 3),
  // The micro's fingers are only just apart, the grooves between them short, its thumb slimmer
  16: scaled(solid(25 / 36, { groove: 0.3, depth: 2, thumb: 2 }), 25 / 36, -1 / 3, -1 / 3),
})
