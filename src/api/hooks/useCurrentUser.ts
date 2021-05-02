import { firestore, auth } from 'api/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument } from 'react-firebase-hooks/firestore'

function useCurrentUser() {
  const [user] = useAuthState(auth)

  return useDocument(user && firestore.doc(`users/${user.uid}`))
}

export default useCurrentUser
