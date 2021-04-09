// https://stackoverflow.com/questions/37883981/cant-get-currentuser-on-load

import { useState, useEffect } from "react";
import firebase from "firebase";
import { auth } from "backend/firebase";

type AuthState = {
  isSignedIn: boolean;
  isLoading: boolean;
  user: firebase.User | null;
};

function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isSignedIn: false,
    isLoading: true,
    user: null,
  });

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) =>
      setAuthState({ user, isLoading: false, isSignedIn: !!user })
    );
    return () => unregisterAuthObserver();
  }, []);

  return { auth, ...authState };
}

export default useAuth;
