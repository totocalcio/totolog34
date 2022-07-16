import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `うさ技術`,
    author: {
      name: `totocalcio`,
      summary: `totolog34`,
    },
    siteUrl: `https://totolog34.com/`,
    social: {
      twitter: `dir20634`,
      github: `totocalcio`,
    },
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
  ]
};

export default config;
