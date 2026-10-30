# Sidekickicons

Fan-made icons that complement [Heroicons](https://heroicons.com): the same four styles, sizes and naming,
for icons Heroicons doesn't have. Every icon must look like it could be a Heroicon.

## Where things live

- `icons/<name>.ts` — **the source of every icon.** One definition per icon, written in the DSL in
  `compiler/dsl.ts`.
- `compiler/` — the DSL, the compiler (`compile.ts`, using CanvasKit/Skia path ops) and two scripts:
  `write.ts` (`pnpm compile`) and `compare.ts` (`pnpm compare`).
- `src/` and `optimized/` — **generated, never edit by hand.** `pnpm compile` rewrites `src/` from the
  definitions, then svgo turns it into `optimized/`. Both are committed: the README shows icons from `src/`,
  and the Svelte and React Native packages download `optimized/` from GitHub.
- `react/` and `vue/` — the `@sidekickicons/react` and `@sidekickicons/vue` packages, built from `optimized/`.
- `ROADMAP.md` — icons to add next, with their demand. Cross an icon off when it's added.
- Related repos next to this one: `sidekickicons-site` (sidekickicons.com), `sidekickicons-svelte` and
  `sidekickicons-react-native`.

## Commands

```sh
pnpm compare [names...]   # compile definitions and compare them with the last build (see below)
pnpm compile              # regenerate src/ from icons/
pnpm build                # compile, then svgo and the React/Vue packages
pnpm lint                 # every icon must exist in all four styles
pnpm typecheck
```

`pnpm compare` prints how much each style differs from the last build in `optimized/` and writes
`computed/<name>.png`: last build | computed | difference (red = only in the build, blue = only in the
definition, gray = both). **Look at that image** (it's how you see your work); the numbers only tell you
where to look. For a new icon there is no build yet, so the sheet just shows the computed icon.

Change requests often come as prompts like this one, with numbered notes pinned to spots on the
computed icons, and notes about the whole icon:

```
sidekickicons/icons/face-meh.ts
1. 24/solid at (9.3, 9.8). Shapes there, bottom to top: circle(12, 12, 9); ellipse(9.375, 9.75, 0.375, 0.75) (cut)
   Make the eyes a little rounder
2. Try a slightly wider mouth in every style
Check the result with `pnpm compare face-meh`.
```

The shapes are named the way they were made, so search the file for them; ones made by a local helper or
`scaled()` show the computed numbers rather than the source.

## How icons are drawn

Every shape is a **centerline traced by a round pen 1.5 units wide** (round caps and joins), like Heroicons.

- Key `24` makes two styles: **outline** (centerlines stroked) and **solid**. Keys `20` (mini) and `16`
  (micro) are solid only.
- Solid applies shapes **in array order**. A body shape adds its area (if closed) plus the pen around it, so
  a body `circle(12, 12, 9)` becomes a disk of radius 9.75. A `.cut()` shape erases the same region: a
  closed cut erases its area plus the pen, an open cut erases a 1.5-wide slot with round ends. A body listed
  after a cut is drawn on top of it.
- Modifiers: `.cut()`, `.hollowed()` (a closed shape adds only its pen ring), `.outlineOnly()` and
  `.solidOnly()` (for the parts of the 24 that differ between the two styles).
- Shapes: `line`, `polyline`, `polygon`, `rect(x, y, width, height, radius)`, `circle`, `ellipse`, `dot`
  (a pen-sized dot), `path(d)` for anything else (its subpaths must be all closed or all open). Polygon and
  polyline points take an optional third number, the radius their corner is rounded by:
  `polygon([12, 2.25, 1.5], ...)`.
- `slash(size)` crosses out the shapes listed before it, like Heroicons' `-slash` icons: the solid gets a
  pen-wide gap on both sides of the slash, and the outline stops strokes on the slash's bottom left side a
  gap away from it (its top right side runs into it). The outline's trimming follows curves, so draw the
  whole icon and let it cut.
- `scaled(shapes, factor, dx, dy)` scales from the origin and then moves. Many small sizes are the 24
  scaled around the center: `scaled(drawing, 29 / 36, 1 / 3, 1 / 3)` for 20 and
  `scaled(drawing, 25 / 36, -1 / 3, -1 / 3)` for 16.

Good examples: `face-meh.ts` and `compass.ts` (solid-only shapes, small sizes written out),
`blockquote.ts` (each size drawn on its own), `dots-2x2.ts` (a small local helper),
`paint-brush-slash.ts` (a Heroicon with `slash()`), `dice.ts` (helpers for a whole construction, a redesigned micro size).

## Heroicons style rules

- **The pen is 1.5 at every size.** Gaps cut around a slash or badge are a pen wide, strokes and cut-outs
  in mini and micro icons too. Never fake a thinner pen; if something doesn't fit, simplify it.
- Solid shapes stay within about 2–22 at 24, 2–18 at 20 and 1–15 at 16.
- Use clean numbers, usually on a 0.25 grid (0.125 for small details).
- Mini and micro are drawn for their grid, not just shrunk. Simplify details that would clog at 16: the
  micro dice is a flat die showing five, and the micro lettered-list has two letters instead of three.
- The solid is the outline grown by the pen wherever the shapes allow, so the two styles share a
  silhouette. Where Heroicons' solids differ from the outline (a slimmer detail, a gap instead of a line),
  use `.outlineOnly()` and `.solidOnly()`.
- Names follow Heroicons: kebab-case, object first, then a modifier (`face-smile-plus`, `pin-slash`,
  `arrow-path-clock`). Check heroicons.com for an existing name pattern before inventing one.

## Adding or changing an icon

1. Write `icons/<name>.ts` with all three sizes. Start from a similar Heroicon or Sidekickicon: Heroicons'
   outline path data is centerline data and can go into `path()`, split into separate shapes where it
   mixes open and closed subpaths.
2. Check it with `pnpm compare <name>` and look at the PNG.
3. `pnpm compile && pnpm lint && pnpm typecheck`.
4. Add a line to `CHANGELOG.md` under Unreleased. The site's search keywords live in
   `sidekickicons-site/data/keywords.ts`.

## Gotchas

- Skia leaves a hole in the middle of a closed shape smaller than about half the pen. The compiler fills it,
  but only for shapes that are a single loop, so give each tiny closed shape (pips, small dots) its own
  shape instead of putting several in one `path()`.
- In the outline, a stroked circle with a radius under 0.75 can show a pinhole in its middle in some
  renderers. Add a `dot()` at its center with `.outlineOnly()`, as Heroicons does.
- svgo approximates curves with arcs, so `pnpm compare` can show up to about 1% against the build for icons
  made of many small curves (`circle-dashed`). That's svgo, not the definition.

## Releasing

Releases are minor versions (0.x.0) and touch four repos, in this order. Publishing to npm needs the
maintainer, who is logged in to npm; everything else can be prepared for them.

1. Bump the version in `package.json`, `react/package.json` and `vue/package.json`. In `CHANGELOG.md`, move
   the Unreleased entries under a new `## [x.y.z] - date` heading and update the link references at the
   bottom (`[unreleased]` compares from the new tag, plus a new `[x.y.z]` line).
2. `pnpm build`, commit as `vx.y.z`, and push `master`.
3. Tag that commit `vx.y.z` (a lightweight tag), push the tag, and create a GitHub release named `vx.y.z`
   with that version's changelog section as its notes.
4. `npm publish` in `react/` and `vue/`. The root `sidekickicons` package isn't published.
5. `sidekickicons-svelte` and `sidekickicons-react-native` download `optimized/` from GitHub's `master`, so
   only after step 2 is pushed: bump their version, `pnpm build`, commit as `vx.y.z`, `npm publish`, push.
   These two take a few minutes to appear on npm after publishing.
6. Once `@sidekickicons/react` is on npm, `sidekickicons-site` gets `pnpm add @sidekickicons/react@^x.y.z`, a
   build, a commit and a push to `main`, which Vercel deploys.
