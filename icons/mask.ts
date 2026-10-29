import { icon, n, path } from '../compiler/dsl.ts'

// The mask from the left half of its outline: a point on the middle of the icon, then cubic curves
// around to a point lower on the middle. Read backwards and mirrored, the same points make the
// curves of the right half, which closes the shape so the solid fills it.
function mask(size: number, half: string) {
  const numbers = half.match(/-?\d*\.?\d+/g)!.map(Number)
  const back: string[] = []
  for (let i = numbers.length - 4; i >= 0; i -= 2) {
    back.push(`${back.length % 3 ? '' : 'C'}${n(size - numbers[i])} ${n(numbers[i + 1])}`)
  }
  return path(`${half}${back.join(' ')}Z`)
}

// Ellipses turned by an angle in degrees, mirrored across the middle of the icon
function eyes(size: number, cx: number, cy: number, rx: number, ry: number, angle: number) {
  const eye = (x: number, a: number) => {
    const dx = rx * Math.cos((a * Math.PI) / 180)
    const dy = rx * Math.sin((a * Math.PI) / 180)
    const arc = (x: number, y: number) => `A${n(rx)} ${n(ry)} ${n(a)} 1 0 ${n(x)} ${n(y)}`
    return `M${n(x - dx)} ${n(cy - dy)}${arc(x + dx, cy + dy)}${arc(x - dx, cy - dy)}Z`
  }
  return path(eye(cx, angle) + eye(size - cx, -angle))
}

// The handmade 20 and 16 are the 24 solid scaled down pen and all, so their masks are the 24 one
// scaled down and inset by what the pen lost, and their eyes are slimmed the same way
export default icon({
  24: [
    mask(
      24,
      'M12 8.918C12 8.918 9.394 7.74 8 7.5C6.193 7.19 4.167 7.5 2.5 7.5C2.5 7.5 2.129 10.72 2.5 12.263' +
        'C2.757 13.332 3.216 14.429 4 15.2C4.662 15.85 5.59 16.242 6.5 16.426' +
        'C7.809 16.691 9.278 16.738 10.5 16.2C11.14 15.918 12 14.736 12 14.736'
    ),
    path(
      'M9.931 12.25c-.095.756-1.061 1.257-2.157 1.12-1.097-.139-1.908-.864-1.813-1.62.095-.756 ' +
        '1.061-1.257 2.158-1.12 1.096.139 1.907.864 1.812 1.62zm4.138 0c.095.756 1.061 1.257 2.157 ' +
        '1.12 1.097-.139 1.908-.864 1.813-1.62-.095-.756-1.061-1.257-2.158-1.12-1.096.139-1.907.864-1.812 1.62z'
    ).outlineOnly(),
    // The solid eyes are slimmer
    eyes(24, 7.946, 12, 2, 0.85, 11.4).cut().solidOnly(),
  ],
  20: [
    mask(
      20,
      'M10 7.569C10 7.569 7.791 6.57 6.645 6.373C5.16 6.118 3.482 6.375 2.195 6.375' +
        'C2.195 6.375 1.901 8.926 2.205 10.19C2.417 11.071 2.786 11.953 3.421 12.578' +
        'C3.956 13.102 4.695 13.415 5.441 13.566C6.522 13.785 7.707 13.822 8.7 13.386' +
        'C9.202 13.164 10 12.068 10 12.068'
    ),
    eyes(20, 6.622, 10, 1.53, 0.57, 11.4).cut(),
  ],
  16: [
    mask(
      16,
      'M8 6.22C8 6.22 6.189 5.401 5.291 5.246C4.126 5.047 2.797 5.25 1.89 5.25' +
        'C1.89 5.25 1.673 7.131 1.91 8.117C2.076 8.81 2.355 9.476 2.842 9.955' +
        'C3.249 10.355 3.801 10.588 4.383 10.706C5.235 10.878 6.137 10.907 6.899 10.571' +
        'C7.264 10.41 8 9.399 8 9.399'
    ),
    eyes(16, 5.3, 8, 1.065, 0.31, 11.4).cut(),
  ],
})
