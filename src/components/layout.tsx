import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, CssBaseline, Toolbar } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import * as constants from '../script/constants'
import { theme } from '../script/theme'
import { Header } from './header'
import { Footer } from './footer'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}>
      <Header title={site.siteMetadata.title} />
      <Box sx={{ px: 4 }}>
        <CssBaseline />
        <Toolbar sx={constants.toolbarProps} />
        <main>{children}</main>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
