require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.URL || `https://totolog34.com/`

const config = {
  siteMetadata: {
    title: `うさ技術`,
    description: `うさぎとフロントエンドが好きな技術ブログ。マークアップが一番好き。`,
    author: {
      name: `totocalcio`,
      summary: `totolog34`,
    },
    siteUrl: siteUrl,
    social: {
      twitter: `dir20634`,
      github: `totocalcio`,
    },
  },
  trailingSlash: `always`,
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-external-links",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              wrapperStyle: `
                margin-inline: 0;
              `,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options:{
              aliases: {
                sh: `shell`,
              },
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-code-titles`,
            options: {
              className: 'gatsby-remark-code-title',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `font`,
        path: `${__dirname}/src/font`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PVNPNSX",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        output: '/',
        excludes: ['/404?(.*)'],
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path, updatedAt }) =>  {
          const site = {
            url: path,
            changefreq: `daily`,
            priority: updatedAt ? 0.7 : 0.5,
          }
          if (!updatedAt) return site

          const lastmod = { lastmod: updatedAt }
          return { ...site, ...lastmod }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}sitemap-index.xml`,
        policy: [{ 
          userAgent: '*',
          allow: '/',
          disallow: ['/404.html', '/tags/index.html']
        }],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                const frontmatter = node.frontmatter
                return Object.assign({}, frontmatter, {
                  description: node.excerpt,
                  date: frontmatter.date,
                  url: site.siteMetadata.siteUrl + frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + frontmatter.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        slug
      }
    }
  }
}`,
            output: "/feed/rss.xml",
            title: "totolog34 Feed",
            feed_url: "https://totolog34.com/feed/rss.xml",
            site_url: "https://totolog34.com/",
          },
        ],
      },
    },
  ],
}

if ( process.env.NODE_ENV !== 'production' ) {
  const draftConfig = {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/pages/draft`,
      name: `draft`,
    },
  }
  config.plugins.push(draftConfig)
}

module.exports = config
