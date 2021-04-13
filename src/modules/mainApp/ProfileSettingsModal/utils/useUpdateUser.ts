import { useState } from "react";
import { message } from "antd";
import useCurrentUser from "api/hooks/useCurrentUser";
import { ProfileSettingsFormData } from "../index";

function useUpdateUser() {
  const [currentUser] = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);

  async function updateUser({ fullName }: ProfileSettingsFormData) {
    if (!currentUser) return;

    setIsLoading(true);

    try {
      await currentUser.ref.update({
        "profile.fullName": fullName,
      });

      message.success("User updated");
    } catch (error) {
      console.error(error);
      message.error("Error updating user");
    } finally {
      setIsLoading(false);
    }
  }

  return { updateUser, isUpdateUserLoading: isLoading };
}

export default useUpdateUser;
