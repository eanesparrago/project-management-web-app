import styled from "styled-components";
import { signInWithGoogle } from "backend/firebase";

import { Card, Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Logo from "components/Logo";

function LoginPage() {
  function onLoginWithGoogle() {
    signInWithGoogle();
  }

  return (
    <S.LoginPage>
      <Card className="LoginPage__login-Card">
        <Logo className="LoginPage__Logo" />

        <Button
          size="large"
          block
          icon={<GoogleOutlined />}
          onClick={onLoginWithGoogle}
        >
          Login with Google
        </Button>
      </Card>
    </S.LoginPage>
  );
}

const S = {} as any;

S.LoginPage = styled.div`
  background-color: ${(p) => p.theme.color.grey.medium};
  min-height: 100vh;
  padding-top: 6rem;
  text-align: center;

  .LoginPage__login-Card {
    width: 24rem;
    margin: 0 auto;
  }

  .LoginPage__Logo {
    margin-bottom: 1.5rem;
  }
`;

export default LoginPage;
