<p align="center">
  <a href="https://heroicons.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ndri/sidekickicons/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/ndri/sidekickicons/HEAD/.github/logo-light.svg">
      <img alt="Heroicons" width="315" height="117" style="max-width: 100%" src="https://raw.githubusercontent.com/ndri/sidekickicons/HEAD/.github/logo-light.svg">
    </picture>
  </a>
</p>

Fanmade icons to complement [Heroicons](https://github.com/tailwindlabs/heroicons).

## Basic Usage

First, install `@sidekickicons/react` from npm:

```sh
npm install @sidekickicons/react
```

Now each icon can be used alongside Heroicons and imported individually as a React component:

```js
import { CrownIcon } from '@sidekickicons/react/24/solid'
import { BeakerIcon } from '@heroicons/react/24/solid'

function MyComponent() {
  return (
    <div>
      <CrownIcon className="size-6 text-blue-500" />
      <BeakerIcon className="size-6 text-green-500" />
    </div>
  )
}
```

Import the icons from their respective directory:

- 24x24 outline: `@sidekickicons/react/24/outline`
- 24x24 solid: `@sidekickicons/react/24/solid`
- 20x20 solid: `@sidekickicons/react/20/solid`
- 16x16 solid: `@sidekickicons/react/16/solid`

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@sidekickicons/react/24/outline/)

## License

This library is MIT licensed.
