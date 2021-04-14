import useAuth from "api/hooks/useAuth";
import { useHistory } from "react-router";

import { Button } from "antd";

function LogoutButton({ ...rest }) {
  const { auth, isAuthLoading } = useAuth();
  const history = useHistory();

  function onLogOut() {
    auth.signOut();
    history.push("/login");
  }

  return (
    <Button type="text" onClick={onLogOut} loading={isAuthLoading} {...rest}>
      Log out
    </Button>
  );
}

export default LogoutButton;
