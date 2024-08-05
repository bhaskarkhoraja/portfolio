import { PLAIN_URL } from "./constants"

export const SITE_CONFIG = {
  name: "Bhaskar Khoraja",
  url: PLAIN_URL,
  ogImage: `${PLAIN_URL}/og.jpg`,
  description:
    "A personal portfolio showcasing my projects, skills, and experiences.",
  links: {
    twitter: "https://twitter.com/bhaskarkhoraja",
    github: "https://github.com/bhaskarkhoraja/portfolio",
  },
} as const
