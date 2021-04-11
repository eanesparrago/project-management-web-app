import styled from "styled-components";
import { signInWithGoogle } from "backend/firebase";
import { Link, useHistory } from "react-router-dom";

import { Card, Button, Divider, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import Logo from "components/Logo";
import LoginForm from "./LoginForm";

function LoginPage() {
  const history = useHistory();

  function onLoginWithGoogle() {
    signInWithGoogle();
  }

  function onGoToForgotPassword() {
    history.push("/forgot-password");
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

        <Divider />

        <S.LoginForm />

        <Button
          className="LoginPage__forgotPassword-Button"
          type="text"
          block
          onClick={onGoToForgotPassword}
        >
          Forgot your password?
        </Button>

        <div className="LoginPage__signUp-block">
          <Typography.Text>
            Don't have an account?{" "}
            <Link to="/create-account" component={Typography.Link}>
              Sign up
            </Link>
            <Typography.Link></Typography.Link>
          </Typography.Text>
        </div>
      </Card>
    </S.LoginPage>
  );
}

const S = {} as any;

S.LoginPage = styled.div`
  background-color: ${(p) => p.theme.color.grey.medium};
  min-height: 100vh;
  padding-top: 6rem;

  .LoginPage__login-Card {
    width: 24rem;
    margin: 0 auto;
  }

  .LoginPage__Logo {
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .LoginPage__forgotPassword-Button {
    margin-bottom: 1.5rem;
  }

  .LoginPage__signUp-block {
    text-align: center;
  }
`;

S.LoginForm = styled(LoginForm)`
  margin-bottom: 0.5rem;
`;

export default LoginPage;
