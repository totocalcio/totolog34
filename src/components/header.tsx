import * as React from 'react'
import { Link } from 'gatsby'
import { AppBar, Box, Button, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import * as utility from '../css/utility.module.css'
import styled from 'styled-components'

type Props = {
  title: string | null | undefined
  twitter: string
}

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items:center ;
`

export const Header: React.FC<Props> = ({ title, twitter }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <StyledBox sx={{ p: { xs: 0, sm: 1 } }}>
          <Link to="/" className={utility.textDecorationNone}>
            <Button sx={{ color: 'primary.contrastText' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
            </Button>
          </Link>
          <Link target="_blank" to={`https://twitter.com/${twitter || ``}`}>
          <Button sx={{ color: 'primary.contrastText' }}>
            <TwitterIcon />
            </Button>
          </Link>
        </StyledBox>
      </AppBar>
    </Box>
  )
}
