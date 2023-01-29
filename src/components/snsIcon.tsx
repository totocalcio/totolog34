import * as React from 'react'
import Box from '@mui/material/Box'

type Props = {
  src: string
  alt: string
}

export const SnsIcon: React.FC<Props> = ({ src, alt }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{ width: { xs: '1.5rem', sm: '2rem' } }}
    />
  )
}
