import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({
  data,
}: PageProps<Queries.IndexPageQuery>) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Seo title=""/>
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter.slug}>
            <>
              <a href={post.frontmatter.slug}>{post.frontmatter.title}</a>
              {post.frontmatter.tags?.map((tag: string) => (
                <span key={tag}>
                  {' '}
                  / <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </span>
              ))}
            </>
          </li>
        ))}
      </ul>
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
