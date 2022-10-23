import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="\node_modules\flowbite\dist\flowbite.js" />
      </Head>
      <Component {...pageProps} />
    </>
  )


}

export default MyApp
