import sharedConfig from "@config/tailwind-config"
import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: () => {
        return {
          center: true,
          padding: "0rem",
          screens: {
            "2xl": { min: "1400px" },
          },
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-agbalumo-serif)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  presets: [sharedConfig],
  plugins: [],
}
export default config
