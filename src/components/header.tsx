import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { AppBar, Box, Button, Typography, Link as MuiLink } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import * as utility from '../css/utility.module.css'
import styled from 'styled-components'

type Props = {
  title: string | null | undefined
  twitter: string
  github: string
}

type Gif = {
  gif: {
    publicURL: string
  }
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

export const Header: React.FC<Props> = ({ title, twitter, github }) => {
  const { gif }: Gif = useStaticQuery(graphql`
    query {
      gif: file(relativePath: { eq: "usagi_momochy.gif" }) {
        publicURL
      }
    }
  `)
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <StyledHeader sx={{ p: { xs: 0, sm: 1 } }}>
          <StyledLogo>
            <Link to="/" className={utility.textDecorationNone}>
              <Button sx={{ color: 'primary.contrastText' }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, fontFamily: 'JKGM' }}
                >
                  {title}
                </Typography>
              </Button>
            </Link>
            <Box
              component="img"
              src={gif.publicURL}
              sx={{ height: { xs: '30px', sm: '40px' } }}
              alt=""
            />
          </StyledLogo>
          <Box>
            <MuiLink
              target="_blank"
              href={`https://github.com/${github || ``}`}
            >
              <Button sx={{ color: 'primary.contrastText' }}>
                <GitHubIcon />
              </Button>
            </MuiLink>
            <MuiLink
              target="_blank"
              href={`https://twitter.com/${twitter || ``}`}
            >
              <Button sx={{ color: 'primary.contrastText' }}>
                <TwitterIcon />
              </Button>
            </MuiLink>
          </Box>
        </StyledHeader>
      </AppBar>
    </Box>
  )
}
