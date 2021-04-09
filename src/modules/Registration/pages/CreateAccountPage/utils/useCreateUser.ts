import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "backend/firebase";
import { message } from "antd";

function useCreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function createUser(emailAddress: string, password: string) {
    try {
      setIsLoading(true);

      const userCredential = await auth.createUserWithEmailAndPassword(
        emailAddress,
        password
      );

      await userCredential.user?.sendEmailVerification({
        url: "http://localhost:3000/login",
        handleCodeInApp: true,
      });

      setIsLoading(false);
      history.push("/verify-email");
    } catch (error) {
      setIsLoading(false);
      message.error(error.message);
    }
  }

  return { createUser, isLoading };
}

export default useCreateUser;
