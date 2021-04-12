import { Avatar, Popover } from "antd";
import LogoutButton from "components/LogoutButton";

function UserMainAvatar({ ...rest }) {
  const content = (
    <>
      <LogoutButton />
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
