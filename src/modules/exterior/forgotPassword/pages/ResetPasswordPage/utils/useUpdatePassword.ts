import { auth } from "api/firebase";
import { useState } from "react";
import { message } from "antd";

function useUpdatePassword() {
  const [isLoading, setIsLoading] = useState(false);

  async function updatePassword(password: string) {
    setIsLoading(true);

    try {
      console.log("auth.currentUser", auth.currentUser);
      await auth.currentUser?.updatePassword(password);
      setIsLoading(false);
      message.success("Password updated");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      message.error(error.message);
    }
  }

  return { updatePassword, isUpdatePasswordLoading: isLoading };
}

export default useUpdatePassword;
