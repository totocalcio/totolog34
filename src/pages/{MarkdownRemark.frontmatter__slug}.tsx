import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { Container, Typography } from '@mui/material'
import { Toc } from '../components/toc'

const Template: React.FC<PageProps<Queries.TemplateQuery>> = ({
  data,
}: PageProps<Queries.TemplateQuery>) => {
  const frontmatter = data.markdownRemark!.frontmatter
  const html = data.markdownRemark!.html


  return (
    <Layout>
      <Seo title={frontmatter.title} description={data.markdownRemark?.excerpt ?? ""} />
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Typography variant="h6">{frontmatter.date}</Typography>
        <div className="blog-post-container">
          <h1>{frontmatter.title}</h1>
          <Toc html={data.markdownRemark?.tableOfContents ?? ""}/>
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
        date(formatString: "YYYY-MM-DD")
        slug
        title
        tags
      }
      excerpt(pruneLength: 120)
      tableOfContents(
        absolute: false
      )
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
