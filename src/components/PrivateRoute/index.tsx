import { ReactNode } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import useAuth from "api/hooks/useAuth";

type PrivateRouteProps = {
  children: ReactNode;
} & RouteProps;

function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
  const { isAuthLoading, isSignedIn } = useAuth();

  if (isAuthLoading) return null;

  if (isSignedIn) {
    return <Route {...rest}>{children}</Route>;
  }

  return <Redirect to="/login" />;
}

export default PrivateRoute;
