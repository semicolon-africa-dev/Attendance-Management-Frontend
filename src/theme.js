import { extendTheme } from '@chakra-ui/react'
import "@fontsource/ibm-plex-sans";

const theme = extendTheme({
  fonts: {
    heading: 'IBM Plex Sans',
    body: 'IBM Plex Sans',
  },
})

export default theme