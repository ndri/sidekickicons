let proxy = new Proxy(
  {},
  {
    get: (obj, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `You\'re trying to import \`@sidekickicons/react/solid/${property}\` from Heroicons v1 but have installed Heroicons v2. Install \`@sidekickicons/react@v1\` to resolve this error.`
      )
    },
  }
)

module.exports = proxy
