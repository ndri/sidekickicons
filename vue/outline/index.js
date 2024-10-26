let proxy = new Proxy(
  {},
  {
    get: (obj, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `You\'re trying to import \`@sidekickicons/vue/outline/${property}\` from Heroicons v1 but have installed Heroicons v2. Install \`@sidekickicons/vue@v1\` to resolve this error.`
      )
    },
  }
)

module.exports = proxy
