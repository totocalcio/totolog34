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
      fields: Slug
    }
    type Slug {
      slug: String
    }
    type Frontmatter {
      date: String!
      title: String!
      slug: String!
      tags: [String!]
    }
  `)
  }

const path = require('path')
const _ = require('lodash')

type Props = {
  actions: any
  graphql: any
  reporter: any
}

exports.createPages = async ({ actions, graphql, reporter }: Props) => {
  const { createPage } = actions

  const tagTemplate = path.resolve('src/pages/tags.tsx')

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
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
  tags.forEach((tag: any) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
