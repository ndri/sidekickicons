// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

export default new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `Importing from \`@sidekickicons/vue\` directly is not supported. Please import from either \`@sidekickicons/vue/16/solid\`, \`@sidekickicons/vue/20/solid\`, \`@sidekickicons/vue/24/solid\`, or \`@sidekickicons/vue/24/outline\` instead.`
      )
    },
  }
)
