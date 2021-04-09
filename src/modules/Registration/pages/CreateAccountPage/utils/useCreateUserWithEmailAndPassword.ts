import { useState } from "react";
import { auth } from "backend/firebase";

function useCreateUserWithEmailAndPassword() {
  const [isLoading, setIsLoading] = useState(false);

  async function createUserWithEmailAndPassword(
    emailAddress: string,
    password: string
  ) {
    try {
      setIsLoading(true);

      const userCredential = await auth.createUserWithEmailAndPassword(
        emailAddress,
        password
      );

      await userCredential.user?.sendEmailVerification({
        url: "http://localhost:3000/account-setup",
        handleCodeInApp: true,
      });

      await auth.signOut();

      setIsLoading(false);

      return userCredential;
    } catch (error) {
      setIsLoading(false);
      throw new Error(error);
    }
  }

  return { createUserWithEmailAndPassword, isLoading };
}

export default useCreateUserWithEmailAndPassword;
