import * as React from 'react'
import { Link } from 'gatsby'
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

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header: React.FC<Props> = ({ title, twitter, github }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <StyledBox sx={{ p: { xs: 0, sm: 1 } }}>
          <Link to="/" className={utility.textDecorationNone}>
            <Button sx={{ color: 'primary.contrastText' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontFamily: 'JKGL' }}
              >
                {title}
              </Typography>
            </Button>
          </Link>
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
        </StyledBox>
      </AppBar>
    </Box>
  )
}
