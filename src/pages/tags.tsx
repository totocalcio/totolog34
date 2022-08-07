import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Card } from '../components/card'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { Box } from '@mui/material'

type Tag = {
  tag?: string
}

const TagsPage: React.FC<PageProps<Queries.TagsPageQuery>> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMarkdownRemark.nodes
  const defaultImage = data.defaultImage
  const { totalCount } = data.allMarkdownRemark
  const { tag }: Tag = pageContext

  if (posts.length === 0) {
    const tagHeader = `タグ: "${tag}" (0記事)`
    return (
      <Layout>
        <h1>{tagHeader}</h1>
        <Seo title={tagHeader} />
        <p>該当するタグの投稿記事がありません。</p>
      </Layout>
    )
  }

  const tagHeader = `タグ: "${tag}" (${totalCount}記事)`

  return (
    <Layout>
      <h1>{tagHeader || 'Tag'}</h1>
      <Seo title={tagHeader || 'Tag'} />
      <Box
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

export default TagsPage

export const query = graphql`
  query TagsPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        excerpt
        frontmatter {
          date
          title
          slug
          description
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
