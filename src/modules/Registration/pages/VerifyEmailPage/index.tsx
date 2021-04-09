import styled from "styled-components";
import { useHistory } from "react-router";
import useAuth from "utils/useAuth";

import { Typography, message, Button, Spin } from "antd";
import Logo from "components/Logo";
import MainLayout from "../../layouts/MainLayout";

const { Title, Text, Link } = Typography;

function VerifyEmailPage() {
  const history = useHistory();
  const { auth, user, isLoading } = useAuth();

  function onResendEmail() {
    // TODO

    message.info("Confirmation email sent");
  }

  function onLogOut() {
    auth.signOut();
    history.push("/login");
  }

  const email = isLoading ? <Spin /> : user?.email;

  return (
    <S.VerifyEmailPage>
      <header className="VerifyEmailPage__header-block">
        <Logo />

        <Button type="text" onClick={onLogOut}>
          Log out
        </Button>
      </header>

      <MainLayout as="main">
        <Title className="VerifyEmailPage__Title">
          Please verify your email address, {email}
        </Title>

        <Text>
          Complete your signup through the email we sent to your email address.
          Didn't receive an email?{" "}
          <Link onClick={onResendEmail}>Resend email</Link>.
        </Text>
      </MainLayout>
    </S.VerifyEmailPage>
  );
}

const S = {} as any;

S.VerifyEmailPage = styled.div`
  .VerifyEmailPage__header-block {
    padding: 1.5rem 2rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
  }

  .VerifyEmailPage__Title {
    margin-bottom: 3rem;
  }

  .VerifyEmailPage__Form {
    width: 32rem;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: 100%;
    }
  }
`;

export default VerifyEmailPage;
