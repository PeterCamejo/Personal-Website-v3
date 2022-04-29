import '../styles/globals.css'
import theme from '../lib/theme'
import {ChakraProvider} from '@chakra-ui/react'
import {FormspreeProvider, FormSpreeProvider} from '@formspree/react'

function MyApp({ Component, pageProps }) {

  return (
  <ChakraProvider theme={theme}> 
    <FormspreeProvider project={'https://formspree.io/f/xzbogprv'}>
      <Component {...pageProps} />
    </FormspreeProvider>
  </ChakraProvider>
  )
}

export default MyApp
