import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "api/firebase";
import { message } from "antd";

function useCreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  async function createUser(emailAddress: string, password: string) {
    try {
      setIsLoading(true);

      const { user } = await auth.createUserWithEmailAndPassword(
        emailAddress,
        password
      );

      if (!user) return;

      await user.sendEmailVerification({
        url: "http://localhost:3000/login", // TODO
        handleCodeInApp: true,
      });

      setIsLoading(false);
      history.push("/app");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      message.error(error.message);
    }
  }

  return { createUser, isLoading };
}

export default useCreateUser;
