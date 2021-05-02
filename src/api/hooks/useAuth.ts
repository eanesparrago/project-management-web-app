// https://stackoverflow.com/questions/37883981/cant-get-currentuser-on-load

import { useState, useEffect } from 'react'
import firebase from 'firebase'
import { auth } from 'api/firebase'

type AuthState = {
  isSignedIn: boolean
  isAuthLoading: boolean
  user: firebase.User | null
}

function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isSignedIn: false,
    isAuthLoading: true,
    user: null,
  })

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(user =>
      setAuthState({ user, isAuthLoading: false, isSignedIn: !!user }),
    )
    return () => unregisterAuthObserver()
  }, [])

  return { auth, ...authState }
}

export default useAuth
