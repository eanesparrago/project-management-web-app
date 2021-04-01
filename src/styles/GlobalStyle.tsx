import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }
  *:focus {
    outline: 1px solid black;
  }
`;

export default GlobalStyle;
