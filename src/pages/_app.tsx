import { QueryClientProvider, QueryClient } from 'react-query'
import ContextProvider from 'providers/ContextProvider'

import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </QueryClientProvider>
      </div>
    </>
  )
}

export default MyApp
