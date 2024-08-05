/** @type {import('stylelint').Config} */

const config = {
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
  },
}

export default config
