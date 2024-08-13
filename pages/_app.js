import '../styles/globals.css'

import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { NavBar } from './component/NavBar'
import { Footer } from './component/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
})

export default function App({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/fav.ico' />
      </Head>
      
      <main className={`${montserrat.variable} font-mont`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  ) 
}
