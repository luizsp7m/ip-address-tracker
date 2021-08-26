import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Rubik', sans-serif;
  }

  #__next {
    height: 100vh;
    width: 100%;
    /* overflow-y: hidden; */
  }
`

export default GlobalStyle;