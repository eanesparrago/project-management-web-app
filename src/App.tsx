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
  () => import("modules/registration/pages/CreateAccountPage")
);
const AccountSetupPage = lazy(
  () => import("modules/registration/pages/AccountSetupPage")
);
const VerifyEmailPage = lazy(
  () => import("modules/registration/pages/VerifyEmailPage")
);
const MainApp = lazy(() => import("modules/MainApp"))

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

              <Route exact path="/">
                <MainApp />
              </Route>
            </Suspense>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
