import { lazy, Suspense, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Switch, Route, useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import "destyle.css";
import "antd/dist/antd.css";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import { store } from "app/store";
import { auth } from "backend/firebase";

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
const LoginPage = lazy(() => import("modules/LoginPage"));

function App() {
  const history = useHistory();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/app");
        return;
      }

      history.push("/login");
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [history]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>

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
      </ThemeProvider>
    </Provider>
  );
}

export default App;
