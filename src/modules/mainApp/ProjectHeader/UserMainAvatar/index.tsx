import { useAppDispatch } from "app/hooks";
import { setIsProfileSettingsModalOpen } from "modules/mainApp/mainAppSlice";

import { Avatar, Popover, Button } from "antd";
import LogoutButton from "components/LogoutButton";

function UserMainAvatar({ ...rest }) {
  const dispatch = useAppDispatch();

  function onMyProfileSettingsClick() {
    dispatch(setIsProfileSettingsModalOpen(true));
  }

  const content = (
    <>
      <Button type="text" onClick={onMyProfileSettingsClick} block>
        My Profile Settings...
      </Button>
      <LogoutButton block />
    </>
  );

  return (
    <Popover content={content} placement="bottomRight" trigger="focus">
      <button {...rest}>
        <Avatar />
      </button>
    </Popover>
  );
}

export default UserMainAvatar;
