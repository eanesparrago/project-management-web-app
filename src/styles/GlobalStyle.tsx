import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }

  *:focus {
    outline: 1px solid black;
  }

  .TaskOptions-overlay {
    animation-duration: 0s !important;
  }
`

export default GlobalStyle
