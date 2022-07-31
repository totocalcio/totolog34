import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import kebabCase from 'lodash/kebabCase'
import { Box } from '@mui/material'

type Props = {
  post: any
  defaultImage: any
}

export const Card: React.FC<Props> = ({ post, defaultImage }) => {
  return (
    <Box key={post.frontmatter.slug}>
      <GatsbyImage
        image={getImage(post.frontmatter.thumbnail ?? defaultImage)!}
        alt=""
      />
      <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
      {post.frontmatter.tags?.map((tag: string) => (
        <span key={tag}>
          {' '}
          / <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        </span>
      ))}
    </Box>
  )
}
