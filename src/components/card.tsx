import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import kebabCase from 'lodash/kebabCase'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'

type Props = {
  post: any
  defaultImage: any
}

const StyledGrid = styled(MuiCard)`
  display: grid;
  grid-template-columns: 1fr;
  @supports not (grid-template-rows: subgrid){
    grid-template-rows: 4fr 1fr;
  }
  @supports (grid-template-rows: subgrid){
    grid-template-rows: subgrid;
    grid-row: 2 span;
  }
  gap: 0;
`

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

const StyledGatsbyImage = styled(GatsbyImage)`
  &.gatsby-image-wrapper {
    height: 100%;
    display: grid;
    place-items: center;
    img {
      padding-top: 16px;
      object-fit: contain !important;
    }
  }
`
const StyledTitle = styled(Typography)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Card: React.FC<Props> = ({ post, defaultImage }) => {
  return (
    <StyledGrid>
      <CardActionArea
        href={post.frontmatter.slug}
        sx={{ display: 'grid', gridTemplateColumns:'1fr', gridTemplateRows: {xs:'2fr 1fr',sm: '3fr 1fr'}}}
      >
        <CardMedia sx={{ height: '100%' }}>
          <StyledGatsbyImage
            image={getImage(post.frontmatter.thumbnail ?? defaultImage)!}
            alt=""
          />
        </CardMedia>
        <CardContent>
          <StyledTitle sx={{fontSize:{xs:'16px',sm:'20px'}}}>
            {post.frontmatter.title}
          </StyledTitle>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StyledList>
          {post.frontmatter.tags?.map((tag: string) => (
            <li key={tag}>
              <Button size="small" variant="contained">
                <StyledLink to={`/tags/${kebabCase(tag)}/`}>{tag}</StyledLink>
              </Button>
            </li>
          ))}
        </StyledList>
      </CardActions>
    </StyledGrid>
  )
}
