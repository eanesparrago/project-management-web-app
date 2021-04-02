import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "destyle.css";
import "antd/dist/antd.css";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import { store } from "app/store";

import AccountSetupPage from "modules/Registration/AccountSetupPage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <Router></Router>

        <AccountSetupPage></AccountSetupPage>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
