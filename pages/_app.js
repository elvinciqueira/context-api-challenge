import Head from 'next/head'
import GlobalProvider from '../src/hooks'

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  )
}
