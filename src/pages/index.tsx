import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import kebabCase from 'lodash/kebabCase'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { Box } from '@mui/material'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({
  data,
}: PageProps<Queries.IndexPageQuery>) => {
  const posts = data.allMarkdownRemark.nodes
  const defaultImage = data.defaultImage
  return (
    <Layout>
      <Seo title="" />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 4,
          marginTop: 3,
        }}
      >
        {posts.map((post: any) => {
          return (
            <Box key={post.frontmatter.slug}>
              <GatsbyImage
                image={getImage(post.frontmatter.thumbnail ?? defaultImage)!}
                alt=""
              />
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              {post.frontmatter.tags?.map((tag: string) => (
                <span key={tag}>
                  {' '}
                  / <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </span>
              ))}
            </Box>
          )
        })}
      </Box>
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
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
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
    defaultImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
