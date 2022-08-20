import * as React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { Button, Container, Typography } from '@mui/material'
import { Toc } from '../components/toc'
import styled from 'styled-components'

const StyledList = styled('ul')`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 8px;
  flex-wrap: wrap;
  margin-inline: 8px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

const Template: React.FC<PageProps<Queries.TemplateQuery>> = ({
  data,
}: PageProps<Queries.TemplateQuery>) => {
  const frontmatter = data.markdownRemark!.frontmatter
  const html = data.markdownRemark!.html

  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={data.markdownRemark?.excerpt ?? ''}
      />
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Typography variant="h6">{frontmatter.date}</Typography>
        <div className="blog-post-container">
          <h1>{frontmatter.title}</h1>
          <StyledList>
            {frontmatter.tags?.map((tag: string) => (
              <li key={tag}>
                <Button size="small" variant="contained">
                  <StyledLink to={`/tags/${kebabCase(tag)}/`}>{tag}</StyledLink>
                </Button>
              </li>
            ))}
          </StyledList>
          <Toc html={data.markdownRemark?.tableOfContents ?? ''} />
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
      tableOfContents(absolute: false)
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
