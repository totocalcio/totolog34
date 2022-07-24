import React from 'react'
import { graphql, PageProps } from 'gatsby'

const Template = ({ data }: PageProps<Queries.TemplateQuery>) => {
  const frontmatter = data.markdownRemark?.frontmatter
  const html = data.markdownRemark?.html

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter?.title}</h1>
        <h2>{frontmatter?.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html ?? '' }}
        />
      </div>
    </div>
  )
}

export default Template

export const query = graphql`
  query Template($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
