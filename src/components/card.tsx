import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import kebabCase from 'lodash/kebabCase'
import { Box, Button, Typography } from '@mui/material'
import styled from 'styled-components'

type Props = {
  post: any
  defaultImage: any
}

const StyledList = styled('ul')`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 4px;
  flex-wrap: wrap;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

export const Card: React.FC<Props> = ({ post, defaultImage }) => {
  return (
    <Box sx={{ display: 'flex', gap: 3 }}>
      <Box sx={{ width: { xs: '40%', md: '50%' }, flex: 'none' }}>
        <GatsbyImage
          image={getImage(post.frontmatter.thumbnail ?? defaultImage)!}
          alt=""
          style={{ width: '100%' }}
        />
      </Box>
      <Box>
        <Typography variant="h5">
          <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
        </Typography>
        <StyledList>
          {post.frontmatter.tags?.map((tag: string) => (
            <li key={tag}>
              <Button variant="contained">
                <StyledLink to={`/tags/${kebabCase(tag)}/`}>{tag}</StyledLink>
              </Button>
            </li>
          ))}
        </StyledList>
      </Box>
    </Box>
  )
}
