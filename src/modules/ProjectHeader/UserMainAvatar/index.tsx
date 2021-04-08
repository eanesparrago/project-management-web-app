import { auth } from "backend/firebase";

import { Avatar, Popover, Button } from "antd";

function UserMainAvatar({ ...rest }) {
  function onLogOut() {
    auth.signOut();
  }

  const content = (
    <>
      <Button type="text" block onClick={onLogOut}>
        Log Out
      </Button>
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
