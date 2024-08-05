/**
 * @type {import('prettier').Config}
 */
const config = {
  endOfLine: "lf",
  printWidth: 80,
  semi: false,
  singleAttributePerLine: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  singleQuote: false,
  plugins: ["prettier-plugin-packagejson"],
}

export default config
