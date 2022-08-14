import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Card } from '../components/card'
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
        className='cards'
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          gap: 3,
          marginTop: 3,
        }}
      >
        {posts.map((post) => {
          return (
            <Card
              post={post}
              defaultImage={defaultImage}
              key={post.frontmatter.slug}
            />
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
    defaultImage: file(relativePath: { eq: "default.png" }) {
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
