import { ChakraProvider, ColorModeProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return ( 
  <ChakraProvider resetCSS theme = {customTheme}>
    <ColorModeProvider 
      // options={{
      //   initialColorMode: 'light',
      // }}
    >
      <Component  {...pageProps}/>
    </ColorModeProvider>
  </ChakraProvider>
  )
}

export default MyApp
