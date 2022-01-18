import type { AppProps } from 'next/app'
import '../styles/globals.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />
}

export default MyApp
