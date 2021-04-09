import { useState } from "react";
import { auth } from "backend/firebase";

function useSendSignInLinkToEmail() {
  const [isLoading, setIsLoading] = useState(false);

  async function sendSignInLinkToEmail(emailAddress: string) {
    try {
      setIsLoading(true);

      await auth.sendSignInLinkToEmail(emailAddress, {
        url: "http://localhost:3000/account-setup",
        handleCodeInApp: true,
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return { isLoading, sendSignInLinkToEmail };
}

export default useSendSignInLinkToEmail;
