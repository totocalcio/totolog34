import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Layout } from '../components/layout'
import { Bio } from '../components/bio'
import { Seo } from '../components/seo'

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const site = data.site
  const posts = data.allMarkdownRemark.nodes
  const hasTags = (post: any) => {
    console.log(post)
    const ret = post.frontmatter.tags.length > 0
    console.log(ret)
    return ret
  }
  return (
    <Layout pageTitle="Home Page" headerTitle={site!.siteMetadata.title}>
      <Seo title="All posts" />
      <Bio />
      <ul>
        {posts.map((post: any) => (
          <li key={post.frontmatter.slug}>
            <>
              <a href={post.frontmatter.slug}>{post.frontmatter.title}</a>
              {post.frontmatter.tags.map((tag: string) => (
                <>
                <span> / </span>

                <Link to={`/tags/${kebabCase(tag)}/`}>
                  {tag}
                </Link>
                </>
              ))}
            </>
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
