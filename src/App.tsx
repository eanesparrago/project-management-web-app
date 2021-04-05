import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "destyle.css";
import "antd/dist/antd.css";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import { store } from "app/store";

const CreateAccountPage = lazy(
  () => import("modules/Registration/pages/CreateAccountPage")
);
const AccountSetupPage = lazy(
  () => import("modules/Registration/pages/AccountSetupPage")
);
const VerifyEmailPage = lazy(
  () => import("modules/Registration/pages/VerifyEmailPage")
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <Router>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/account-setup">
                <AccountSetupPage />
              </Route>

              <Route path="/create-account">
                <CreateAccountPage />
              </Route>

              <Route path="/verify-email">
                <VerifyEmailPage />
              </Route>
            </Suspense>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
