import * as React from 'react'
import { Link } from 'gatsby'
import { Header } from '../components/header'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Toolbar } from '@mui/material'
import * as constants from '../constants'
import { Footer } from './footer'
import { ThemeProvider } from '@mui/system'
import { theme } from '../script/theme'

type Props = {
  pageTitle: string
  headerTitle: string | null | undefined
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({
  pageTitle,
  headerTitle,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Header title={headerTitle} />
      <Box sx={{ px: 4 }}>
        <CssBaseline />
        <title>{pageTitle}</title>
        <Toolbar sx={constants.toolbarProps} />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
