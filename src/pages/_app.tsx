import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../Layout/Layout'
import { ContextProvider } from '../Context/SettingContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
      <ContextProvider>
     <Component {...pageProps} />
     </ContextProvider>
  </Layout>
}

export default MyApp
