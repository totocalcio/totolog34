import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link, graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

type Tag = {
  tag?: string
}

const TagsPage = ({ data, pageContext }: PageProps<Queries.TagsPageQuery>) => {
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site!.siteMetadata.title || `Title`
  const { totalCount } = data.allMarkdownRemark
  const { tag }: Tag = pageContext

  if (posts.length === 0) {
    return (
      <Layout pageTitle={`タグ: "${tag}" (0記事)`} headerTitle={siteTitle}>
        <Seo title={`タグ: "${tag}" (0記事)`} />
        <p>該当するタグの投稿記事がありません。</p>
      </Layout>
    )
  }

  const tagHeader = `タグ: "${tag}" (${totalCount}記事)`

  return (
    <Layout pageTitle={tagHeader || 'Tag'} headerTitle={siteTitle}>
      <Seo title={tagHeader || 'Tag'} />
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter.slug}>
            <>
              <a href={post.frontmatter.slug}>{post.frontmatter.title}</a>
              {post.frontmatter.tags?.map((tag: string) => (
                <span key={tag}>
                  {' '}
                  /{' '}<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </span>
              ))}
            </>
          </li>
        ))}
      </ul>
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
        }
      }
    }
  }
`
