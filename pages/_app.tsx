import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css"

function StrackApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default StrackApp;
