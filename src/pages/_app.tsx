import Head from 'next/head'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
