import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Bio } from '../components/bio'
import { Seo } from '../components/seo'

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  console.log(data)
  const site = data.site
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout pageTitle="Home Page" headerTitle={site!.siteMetadata.title}>
      <Seo title="All posts" />
      <Bio />
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter.slug}>
            <a href={post.frontmatter.slug}>{post.frontmatter.title}</a>
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
    # allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
    #   nodes {
    #     name
    #     publicURL
    #   }
    # }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          date
          title
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
