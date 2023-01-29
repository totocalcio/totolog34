import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, CssBaseline, Toolbar } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import * as constants from '../script/constants'
import { theme } from '../script/theme'
import { Header } from './header'
import { Footer } from './footer'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

const Main = styled('main')`
  max-width: 1140px;
  margin-inline: auto;
`

export const Layout: React.FC<Props> = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            twitter
            github
          }
        }
      }
    }
  `)
  return (
    <ThemeProvider theme={theme}>
      <Header
        title="USA GIJUTSU"
        twitter={site.siteMetadata.social.twitter}
        github={site.siteMetadata.social.github}
      />
      <Box sx={{ px: { xs: 2, md: 4 }, overflowX: 'hidden' }}>
        <CssBaseline />
        <Toolbar sx={constants.toolbarProps} />
        <Main>{children}</Main>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
