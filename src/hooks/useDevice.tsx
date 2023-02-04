import { useTheme,useMediaQuery } from "@mui/material"


function useIsMobile() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return isMobile
}

export {useIsMobile}
