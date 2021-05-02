import { Redirect } from 'react-router'
import useAuth from 'api/hooks/useAuth'

function RootRedirect() {
  const { isAuthLoading, isSignedIn } = useAuth()

  if (isAuthLoading) return null

  if (isSignedIn) {
    return <Redirect to='/app' />
  }

  return <Redirect to='/login' />
}

export default RootRedirect
