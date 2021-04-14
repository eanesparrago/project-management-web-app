import styled from "styled-components";
import useAuth from "api/hooks/useAuth";
import useResendEmail from "./utils/useResendEmail";

import { Typography, Spin } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Logo from "components/Logo";
import LogoutButton from "components/LogoutButton";
import { PageBlock, HeaderBlock, ScTitle, MainBlock } from "../../../styles";

const { Text, Link } = Typography;

function VerifyEmailPage() {
  const { user, isAuthLoading } = useAuth();
  const {
    resendEmail,
    isResendEmailLoading,
    isResendEmailSuccess,
  } = useResendEmail();

  function renderEmail() {
    return isAuthLoading ? <Spin /> : user?.email;
  }

  function renderResendEmail() {
    if (isResendEmailLoading) return <Spin />;

    if (isResendEmailSuccess)
      return (
        <Typography.Text type="success">
          Email sent <CheckCircleFilled />
        </Typography.Text>
      );

    return <Link onClick={resendEmail}>Resend email</Link>;
  }

  return (
    <PageBlock>
      <HeaderBlock>
        <Logo />

        <ScLogoutButton />
      </HeaderBlock>

      <MainBlock>
        <ScTitle>Please verify your email address, {renderEmail()}</ScTitle>

        <Text>
          Complete your signup through the email we sent to your email address.
          Didn't receive an email? {renderResendEmail()}
        </Text>
      </MainBlock>
    </PageBlock>
  );
}

const ScLogoutButton = styled(LogoutButton)`
  margin-left: auto;
`;

export default VerifyEmailPage;
