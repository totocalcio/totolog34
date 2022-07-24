import { GatsbyNode } from 'gatsby'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
      description: String
    }
    type MarkdownRemark {
      html: String!
      frontmatter: Frontmatter!
    }
    type Frontmatter {
      date: String!
      title: String!
      slug: String!
    }
  `)
  }
