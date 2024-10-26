// The only reason this file exists is to appease Vite's optimizeDeps feature which requires a root-level import.

export default new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `Importing from \`@sidekickicons/react\` directly is not supported. Please import from either \`@sidekickicons/react/16/solid\`, \`@sidekickicons/react/20/solid\`, \`@sidekickicons/react/24/solid\`, or \`@sidekickicons/react/24/outline\` instead.`
      )
    },
  }
)
