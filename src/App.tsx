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
const MainApp = lazy(() => import("modules/MainApp"));
const CreateProjectPage = lazy(() => import("modules/CreateProjectPage"));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/account-setup">
                <AccountSetupPage />
              </Route>

              <Route path="/create-account">
                <CreateAccountPage />
              </Route>

              <Route path="/verify-email">
                <VerifyEmailPage />
              </Route>

              <Route path="/create-project">
                <CreateProjectPage />
              </Route>

              <Route path="/app">
                <MainApp />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
