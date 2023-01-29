import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#bb6bc9',
      main: '#eee',
      dark: '#ddd',
      contrastText: '#000',
    },
    secondary: {
      light: '#1c54b2',
      main: '#2979ff',
      dark: '#5393ff',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: `
    "Noto Sans JP",
    sans-serif`,
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          gap: '4px',
        },
      },
    },
  },
})
