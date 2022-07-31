import * as React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link, graphql, PageProps } from 'gatsby'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'

type Tag = {
  tag?: string
}

const TagsPage: React.FC<PageProps<Queries.TagsPageQuery>> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMarkdownRemark.nodes
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
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter.slug}>
            <>
              <a href={post.frontmatter.slug}>{post.frontmatter.title}</a>
              {post.frontmatter.tags?.map((tag: string) => (
                <span key={tag}>
                  {' '}
                  / <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
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
