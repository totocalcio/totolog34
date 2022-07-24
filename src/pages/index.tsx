import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Layout } from '../components/layout'
import { Bio } from '../components/bio'
import { Seo } from '../components/seo'

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  console.log(data)
  const site = data.site
  const posts = data.allMarkdownRemark.nodes
  const group = data.allMarkdownRemark.group
  return (
    <Layout pageTitle="Home Page" headerTitle={site!.siteMetadata.title}>
      <Seo title="All posts" />
      <Bio />
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter.slug}>
            <a href={post.frontmatter.slug}>{post.frontmatter.title}</a>
            {group.map((tag: any) => (
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            ))}
          </li>
        ))}
      </ul>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          date
          title
          slug
          tags
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
