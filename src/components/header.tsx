import { AppBar, Box, Button, Link as MuiLink, Typography } from '@mui/material'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import styled from 'styled-components'
import * as utility from '../css/utility.module.css'
import { SnsIcon } from './snsIcon'

type Props = {
  title: string | null | undefined
  x: string
  github: string
}

type Node = {
  publicURL: string
}

const StyledHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled(Box)`
  display: flex;
  align-items: center;
`

export const Header: React.FC<Props> = ({ title, x, github }) => {
  const files = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "svg" } }) {
        nodes {
          publicURL
        }
      }
    }
  `)
  const nodes = files?.allFile?.nodes
  const getIconPath = (arr: Node[], name: string) => {
    console.log(arr)
    const file = arr.find((file) => file.publicURL.includes(name))
    return file ? file.publicURL : ''
  }

  const feedIconPath = getIconPath(nodes, 'feed')
  const githubIconPath = getIconPath(nodes, 'github')
  const xIconPath = getIconPath(nodes, 'x')
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <StyledHeader sx={{ p: { xs: 0, sm: 3, lg: 5 } }}>
          <StyledLogo>
            <Link to="/" className={utility.textDecorationNone}>
              <Button sx={{ color: 'primary.contrastText' }}>
                <Typography
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontWeight: 700,
                    fontSize: { xs: '1.125rem', sm: '1.5rem' },
                  }}
                >
                  {title}
                </Typography>
              </Button>
            </Link>
          </StyledLogo>
          <Box sx={{ display: 'flex', gap: { xs: '0', sm: '0.625rem' } }}>
            <MuiLink
              target="_blank"
              href="https://totolog34.com/feed/rss.xml"
              aria-label="RSS Feed Link"
            >
              <Button
                sx={{ color: 'primary.contrastText', minWidth: '50px' }}
                aria-label="RSS Feed LinkButton"
              >
                <SnsIcon src={feedIconPath} alt="RSS Feed アイコン" />
              </Button>
            </MuiLink>
            <MuiLink
              target="_blank"
              href={`https://github.com/${github || ``}`}
              aria-label="GitHub Link"
            >
              <Button
                sx={{ color: 'primary.contrastText', minWidth: '50px' }}
                aria-label="GitHub LinkButton"
              >
                <SnsIcon src={githubIconPath} alt="Github アイコン" />
              </Button>
            </MuiLink>
            <MuiLink
              target="_blank"
              href={`https://x.com/${x || ``}`}
              aria-label="x Link"
            >
              <Button
                sx={{ color: 'primary.contrastText', minWidth: '50px' }}
                aria-label="x LinkButton"
              >
                <SnsIcon src={xIconPath} alt="x アイコン" />
              </Button>
            </MuiLink>
          </Box>
        </StyledHeader>
      </AppBar>
    </Box>
  )
}
