import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { Container, Typography } from '@mui/material'

const Template: React.FC<PageProps<Queries.TemplateQuery>> = ({
  data,
}: PageProps<Queries.TemplateQuery>) => {
  const frontmatter = data.markdownRemark!.frontmatter
  const html = data.markdownRemark!.html

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Typography variant="h6">{frontmatter.date}</Typography>
        <div className="blog-post-container">
          <div className="blog-post">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html ?? '' }}
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query Template($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
        tags
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
