import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Card } from '../components/card'
import { Layout } from '../components/layout'
import { Pagination } from '../components/pagination'
import { Seo } from '../components/seo'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

const IndexPage = ({
  data,
  pageContext,
}: PageProps<
  Queries.IndexPageQuery,
  Queries.IndexPageQueryVariables & {
    numPages: number
    currentPage: number
  }
>) => {
  const posts = data.allMarkdownRemark.nodes
  const defaultImage = data.defaultImage
  const siteUrl = data.site?.siteMetadata?.siteUrl
    ? `${data.site.siteMetadata.siteUrl}/`
    : ''
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Layout>
      <Seo title="" url={siteUrl} />
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100vw',
          minWidth: '100%',
          marginLeft: 'calc(-1 * (100vw - 100%)/2)',
          marginBottom: { xs: '50px', sm: '100px' },
        }}
      >
        <StaticImage
          src="../images/hero.jpg"
          alt=""
          style={{ maxHeight: '700px', width: '100vw' }}
        />
        <Typography
          component="h1"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '0.9375rem', sm: '1.125rem' },
            p: { xs: 2, sm: 4 },
            whiteSpace: { xs: 'pre-wrap', sm: 'normal' },
          }}
        >
          うさぎが好きなエンジニアのブログ
          {isMobile ? <br /> : ':  '}
          <Typography
            component="small"
            sx={{ fontSize: { xs: '0.8125rem', sm: '0.9375rem' } }}
          >
            React / Vue.js / jQuery / HTML / CSS
          </Typography>
        </Typography>
      </Box>
      <Box sx={{ lineHeight: '1.6' }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.75rem', sm: '3rem' },
            fontWeight: '700',
            textAlign: 'center',
          }}
        >
          Article{' '}
          <Typography
            component="small"
            sx={{ display: 'block', fontSize: '0.875rem', textAlign: 'center' }}
          >
            記事
          </Typography>
        </Typography>
      </Box>

      <Box
        className="cards"
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 3,
          marginTop: { xs: 3, md: 10 },
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
      <Box sx={{ marginBlock: { xs: 5, md: 10 } }}>
        <Pagination
          currentPage={pageContext.currentPage}
          pageSum={pageContext.numPages}
        />
      </Box>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
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
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
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
