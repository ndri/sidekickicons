import { PEN, circle, icon, line, n, path, rect } from '../compiler/dsl.ts'

const asterisk = (x: number, y: number) => [
  line(x - 1.299, y + 0.75, x + 1.299, y - 0.75).cut(),
  line(x + 1.299, y + 0.75, x - 1.299, y - 0.75).cut(),
  line(x, y - 1.5, x, y + 1.5).cut(),
]

/**
 * The solid pencil: a centerline `width` wide that runs up-right along the diagonal from its tip at
 * (x, y), comes to a point over `taper` and ends in a round back `length` from the tip. A gap a pen
 * wide is cut around it first.
 */
function pencil(x: number, y: number, width: number, taper: number, length: number) {
  const w = width / 2
  const side = Math.hypot(taper, w)
  // u runs along the pencil, v across it
  const at = (u: number, v: number) =>
    `${n(x + (u + v) / Math.SQRT2)} ${n(y + (v - u) / Math.SQRT2)}`
  // The centerline grown by g, with round corners
  const outline = (g: number) => {
    const corner = (to: string) => (g ? `A${n(g)} ${n(g)} 0 0 1 ${to}` : '')
    const [du, dv] = [(g * w) / side, (g * taper) / side]
    return path(
      `M${at(-du, -dv)}L${at(taper - du, -w - dv)}${corner(at(taper, -w - g))}` +
        `L${at(length, -w - g)}A${n(w + g)} ${n(w + g)} 0 0 1 ${at(length, w + g)}` +
        `L${at(taper, w + g)}${corner(at(taper - du, w + dv))}` +
        `L${at(-du, dv)}${corner(at(-du, -dv))}Z`
    )
  }
  return [outline(PEN).cut().solidOnly(), outline(0).solidOnly()]
}

export default icon({
  24: [
    path(
      'M14.5 7.75H4.75A2.25 2.25 0 0 0 2.5 10v4a2.25 2.25 0 0 0 2.25 2.25h14.5A2.25 2.25 0 0 0 21.5 14v-1.5'
    ).outlineOnly(),
    path(
      'M19.568 6.311a1.49 1.49 0 0 1 2.106.015 1.49 1.49 0 0 1 .015 2.107l-3.809 3.809a3.513 3.513 0 0 1-1.501.888l-2.129.62.62-2.128c.167-.569.472-1.085.889-1.502z'
    ).outlineOnly(),
    rect(3, 7.75, 18, 8.5, 2.25).solidOnly(),
    // The handmade solid moves the first asterisk a quarter to the left
    ...asterisk(6.25, 12).map((shape) => shape.outlineOnly()),
    ...asterisk(6, 12).map((shape) => shape.solidOnly()),
    ...asterisk(11, 12),
    ...pencil(15.75, 12.75, 1, 2, 8),
  ],
  20: [
    rect(2.75, 6.75, 14.5, 6.5, 1.75),
    circle(5, 10, 0.75).cut(),
    circle(9, 10, 0.75).cut(),
    ...pencil(13.25, 10.25, 1, 1.5, 6),
  ],
  16: [
    rect(1.75, 5.25, 12.5, 5.5, 1.5),
    circle(3.5, 8, 0.5).cut(),
    circle(6.5, 8, 0.5).cut(),
    ...pencil(10.5, 8, 0.5, 1, 5.25),
  ],
})
