import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";
import { store } from "app/store";

import "destyle.css";
import "antd/dist/antd.css";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

import { Switch, Route } from "react-router-dom";
import LoadingScreen from "components/LoadingScreen";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import RootRedirect from "./RootRedirect";
import Page404 from "modules/Page404";
import ProjectInfo from "modules/ProjectInfo";

const CreateAccountPage = lazy(
  () => import("modules/exterior/registration/pages/CreateAccountPage")
);
const AccountSetupPage = lazy(
  () => import("modules/exterior/registration/pages/AccountSetupPage")
);
const VerifyEmailPage = lazy(
  () => import("modules/exterior/registration/pages/VerifyEmailPage")
);
const LoginPage = lazy(() => import("modules/exterior/LoginPage"));
const ForgotPasswordPage = lazy(
  () => import("modules/exterior/forgotPassword/pages/ForgotPasswordPage")
);

const MainApp = lazy(() => import("modules/mainApp/MainApp"));
const CreateProjectPage = lazy(
  () => import("modules/mainApp/CreateProjectPage")
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>

        <Suspense fallback={<LoadingScreen />}>
          <Switch>
            <Route exact path="/">
              <RootRedirect />
            </Route>

            {/* Private routes */}
            <PrivateRoute path="/app">
              <MainApp />
            </PrivateRoute>

            <PrivateRoute path="/create-project">
              <CreateProjectPage />
            </PrivateRoute>

            <PrivateRoute path="/account-setup">
              <AccountSetupPage />
            </PrivateRoute>

            {/* Public routes */}
            <PublicRoute path="/login">
              <LoginPage />
            </PublicRoute>

            <PublicRoute path="/create-account">
              <CreateAccountPage />
            </PublicRoute>

            <PublicRoute path="/verify-email">
              <VerifyEmailPage />
            </PublicRoute>

            <PublicRoute path="/forgot-password">
              <ForgotPasswordPage />
            </PublicRoute>

            <Route path="*">
              <Page404 />
            </Route>
          </Switch>

          <ProjectInfo />
        </Suspense>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
