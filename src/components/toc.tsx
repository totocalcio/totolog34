import * as React from 'react'
import { Box, Typography } from '@mui/material';

type Props = {
  html?: string
}

export const Toc: React.FC<Props> = ({ html }) => {
  if (html) {
    return (
      <Box>
        <Typography component='div' variant='h6' sx={{my:1}}>目次</Typography>
        <Box
          dangerouslySetInnerHTML={{ __html: html }}
          sx={{p:1,backgroundColor:'#f5f2f0'}}
        />
      </Box>
    )
  }
  return <></>
}
