import { ReactNode } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import useAuth from 'api/hooks/useAuth'

type PublicRouteProps = {
  children: ReactNode
} & RouteProps

function PublicRoute({ children, ...rest }: PublicRouteProps) {
  const { isAuthLoading, isSignedIn } = useAuth()

  if (isAuthLoading) return null

  if (isSignedIn) {
    return <Redirect to='/app' />
  }

  return <Route {...rest}>{children}</Route>
}

export default PublicRoute
