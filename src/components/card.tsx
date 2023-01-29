import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Card as MuiCard } from '@mui/material'
import { styled as MuiStyled } from '@mui/system'
import { useStyles } from 'tss-react/mui'
import CardActions from '@mui/material/CardActions'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import { getTagPath } from '../script/common'

type Props = {
  post: any
  defaultImage: any
}

const StyledGrid = styled(MuiCard)`
  display: grid;
  grid-template-columns: 1fr;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: 4fr 1fr;
  }
  @supports (grid-template-rows: subgrid) {
    grid-template-rows: subgrid;
    grid-row: 2 span;
  }
  gap: 0;
`

const StyledList = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 0 0.5rem 1rem;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const StyledGatsbyImage = MuiStyled(GatsbyImage)(({ theme }) => ({
  '&.gatsby-image-wrapper': {
    height: '100%',
    display: 'grid',
    placeItems: 'center',
    '& img': {
      paddingBlock: '0.5rem',
      objectFit: 'contain !important',
      [theme.breakpoints.up('sm')]: {
        paddingBlock: '1rem',
      },
    },
  },
}))

const StyledTitle = styled(Typography)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Card: React.FC<Props> = ({ post, defaultImage }) => {
  const { css } = useStyles()
  return (
    <StyledGrid
      classes={{
        root: css({
          border: '1px solid #000',
          borderRadius: 8,
          boxShadow: 'none',
        }),
      }}
    >
      <CardActionArea
        href={post.frontmatter.slug}
        sx={{
          p: '1rem',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: { xs: '2fr 1fr', sm: '3fr 1fr' },
        }}
      >
        <CardMedia sx={{ height: '100%' }}>
          <StyledGatsbyImage
            image={getImage(post.frontmatter.thumbnail ?? defaultImage)!}
            alt=""
          />
        </CardMedia>
        <CardContent sx={{ p: 0 }}>
          <StyledTitle
            sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: '700' }}
          >
            {post.frontmatter.title}
          </StyledTitle>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <StyledList>
          {post.frontmatter.tags?.map((tag: string) => (
            <li key={tag}>
              <Button
                size="small"
                variant="contained"
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
              >
                <StyledLink to={`/tags/${getTagPath(tag)}/`}>
                  <span>{tag}</span>
                </StyledLink>
              </Button>
            </li>
          ))}
        </StyledList>
      </CardActions>
    </StyledGrid>
  )
}
