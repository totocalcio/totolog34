import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Card } from '../components/card'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'
import { getTagPath } from '..//script/common'

type Tag = {
  tag?: string
}

const StyledH1 = styled(Typography)`
  &.MuiTypography-h1 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    margin-inline: auto;
    text-align: center;
  }
`

const TagsPage: React.FC<PageProps<Queries.TagsPageQuery>> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMarkdownRemark.nodes
  const defaultImage = data.defaultImage
  const { totalCount } = data.allMarkdownRemark
  const { tag }: Tag = pageContext
  const siteUrl =
    data.site?.siteMetadata?.siteUrl && tag
      ? `${data.site.siteMetadata.siteUrl}/tags/${getTagPath(tag)}/`
      : ''

  if (posts.length === 0) {
    const tagHeader = `"${tag}" (0記事)`
    return (
      <Layout>
        <StyledH1 variant="h1">{tagHeader}</StyledH1>
        <Seo title={tagHeader} />
        <p>該当するタグの投稿記事がありません。</p>
      </Layout>
    )
  }

  const tagHeader = tag?.charAt(0).toUpperCase() + (tag?.slice(1) ?? '')
  const tagHeaderSmall = `(${totalCount}記事)`

  return (
    <Layout>
      <StyledH1 variant="h1" sx={{ fontSize: { xs: '1.75rem', sm: '3rem' } }}>
        {tagHeader || 'Tag'}
      </StyledH1>
      <Typography
        component="small"
        sx={{ display: 'block', fontSize: '0.875rem', textAlign: 'center' }}
      >
        {tagHeaderSmall}
      </Typography>
      <Seo title={tagHeader || 'Tag'} url={siteUrl} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 3,
          marginBlock: { xs: 3, sm: 10 },
        }}
      >
        {posts.map((post) => {
          return (
            <Card
              post={post}
              defaultImage={defaultImage}
              key={post.frontmatter!.slug}
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
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
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
