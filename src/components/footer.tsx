import * as React from 'react'
import { Box } from '@mui/material'
import styled from 'styled-components'

const StyledFooter = styled(Box)`
  position: sticky;
  top: 100vh;
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter
      sx={{
        p: { xs: 1, sm: 2 },
        fontSize: '0.85rem',
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <footer>© 2019 USA GIJUTSU.</footer>
    </StyledFooter>
  )
}
