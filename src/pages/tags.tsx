import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link, graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

const TagsPage = ({ data }: PageProps<Queries.TagsPageQuery>) => {
  const group = data.allMarkdownRemark.group
  const title = data.site!.siteMetadata.title
  return (
    <Layout pageTitle="Tags" headerTitle={title}>
      <Seo title={title} />
      <ul>
        {group.map((tag: any) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default TagsPage

export const query = graphql`
  query TagsPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
