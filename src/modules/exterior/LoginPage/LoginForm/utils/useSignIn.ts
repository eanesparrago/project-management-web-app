import { useHistory } from "react-router";
import { useState } from "react";
import { auth } from "backend/firebase";
import { message } from "antd";

function useSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function signIn(emailAddress: string, password: string) {
    setIsLoading(true);

    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        emailAddress,
        password
      );

      setIsLoading(false);

      if (userCredential.user?.emailVerified) {
        // TODO: go to /account-setup if not yet set up, go to /app if already set up
        history.push("/account-setup");
      } else {
        history.push("/verify-email");
      }
    } catch (error) {
      setIsLoading(false);
      message.error("The username or password is not correct.");
    }
  }

  return { signIn, isLoading };
}

export default useSignIn;
