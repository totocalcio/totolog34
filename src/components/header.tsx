import * as React from 'react'
import { Link } from 'gatsby'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as utility from './css/utility.module.css'

const Header = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Box sx={{ p: { xs: 0, sm: 1}}}>
          <Link to="/" className={ utility.textDecorationNone }>
            <Button sx={{ color: '#fff' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                うさ技術
              </Typography>
            </Button>
          </Link>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header
