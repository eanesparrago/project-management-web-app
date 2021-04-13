import { auth } from "api/firebase";
import { useState } from "react";
import { message } from "antd";
import config from "utils/config";

function useSendPasswordResetEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recipientEmailAddress, setRecipientEmailAddress] = useState<
    string | null
  >(null);

  async function sendPasswordResetEmail(emailAddress: string) {
    setIsLoading(true);

    try {
      await auth.sendPasswordResetEmail(emailAddress, {
        url: `${config.APP_URL}/login`,
        handleCodeInApp: true,
      });

      setIsLoading(false);
      setIsSuccess(true);
      setRecipientEmailAddress(emailAddress);
      message.success("Password reset email sent");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      message.error(error.message);
    }
  }

  return {
    sendPasswordResetEmail,
    isSendPasswordResetEmailLoading: isLoading,
    isSendPasswordResetEmailSuccess: isSuccess,
    recipientEmailAddress,
  };
}

export default useSendPasswordResetEmail;
