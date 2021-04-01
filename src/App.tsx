import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "destyle.css";
import "antd/dist/antd.css";

import { Button } from "antd";

import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>

      <Router></Router>
    </ThemeProvider>
  );
}

export default App;
