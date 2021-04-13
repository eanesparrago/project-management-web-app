import { useState } from "react";
import { useHistory } from "react-router";
import { useAppSelector } from "app/hooks";
import { selectAccountSetupInfo } from "../../accountSetupPageSlice";
import { firestore } from "api/firebase";
import useAuth from "utils/useAuth";

import { message } from "antd";

function useSetupAccount() {
  const accountSetupInfo = useAppSelector(selectAccountSetupInfo);
  const { user } = useAuth();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  async function setupAccount() {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);

    try {
      setIsLoading(true);

      await userRef.update({
        isActivated: true,
        profile: accountSetupInfo.profileInfo,
      });

      setIsLoading(false);

      history.push("/app");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      message.error("Error updating user");
    }
  }

  return { setupAccount, isSetupAccountLoading: isLoading };
}

export default useSetupAccount;
