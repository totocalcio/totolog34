import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

const Template: React.FC<PageProps<Queries.TemplateQuery>> = ({
  data,
}: PageProps<Queries.TemplateQuery>) => {
  const frontmatter = data.markdownRemark!.frontmatter
  const html = data.markdownRemark!.html

  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <h2>{frontmatter.date}</h2>
      <div className="blog-post-container">
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html ?? '' }}
          />
        </div>
      </div>
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
