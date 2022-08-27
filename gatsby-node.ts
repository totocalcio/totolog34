import { GatsbyNode } from 'gatsby'
import { getTagPath } from './src/script/common'

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
      fields: Slug
      excerpt: String
      tableOfContents: TableOfContents!
    }
    type Slug {
      slug: String
    }
    type Frontmatter {
      date: Date @dateformat
      title: String!
      slug: String!
      tags: [String!]
      description: String
      thumbnail: File @fileByRelativePath
    }
    type TableOfContents {
      absolute: Boolean
    }
  `)
  }

const path = require('path')

type PropsCreatePages = {
  actions: any
  graphql: any
  reporter: any
}

exports.createPages = async ({
  actions,
  graphql,
  reporter,
}: PropsCreatePages) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/category/*`,
    toPath: `/tags/*`,
  })

  const tagTemplate = path.resolve('src/pages/tags.tsx')

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    console.log(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  if (tags.length > 0) {
    tags.forEach((tag: { fieldValue: string }) => {
      createPage({
        path: `/tags/${getTagPath(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })
  }
}
