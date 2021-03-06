import GlobalStyle from '../styles/Global'

import theme from '../styles/Theme';

import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
