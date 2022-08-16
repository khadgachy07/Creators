import { BaseLayout } from '@components/ui/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
