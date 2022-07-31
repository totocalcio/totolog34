import * as React from 'react'
import { Link } from 'gatsby'
import { AppBar, Box, Button, Typography } from '@mui/material'
import * as utility from '../css/utility.module.css'

type Props = {
  title: string | null | undefined
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Box sx={{ p: { xs: 0, sm: 1 } }}>
          <Link to="/" className={utility.textDecorationNone}>
            <Button sx={{ color: '#fff' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
            </Button>
          </Link>
        </Box>
      </AppBar>
    </Box>
  )
}
