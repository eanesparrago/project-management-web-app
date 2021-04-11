import styled from "styled-components";
import useSendPasswordResetEmail from "./utils/useSendPasswordResetEmail";

import { Typography, Input, Form, Button } from "antd";
import Logo from "components/Logo";
import MainLayout from "components/layouts/MainLayout";

const { Title, Text } = Typography;

type ForgotPasswordFormData = {
  emailAddress: string;
};

function ForgotPasswordPage() {
  const {
    sendPasswordResetEmail,
    isSendPasswordResetEmailLoading,
    isSendPasswordResetEmailSuccess,
    recipientEmailAddress,
  } = useSendPasswordResetEmail();

  async function onFinish({ emailAddress }: ForgotPasswordFormData) {
    await sendPasswordResetEmail(emailAddress);
  }

  function renderForm() {
    if (isSendPasswordResetEmailSuccess) {
      return (
        <>
          <Title className="ForgotPasswordPage__Title">
            Instructions sent!
          </Title>

          <Text>
            Instructions for resetting your password have been sent to{" "}
            <Text strong>{recipientEmailAddress}</Text>.
          </Text>
        </>
      );
    }

    return (
      <>
        <Title className="ForgotPasswordPage__Title">Forgot password?</Title>
        <Form
          className="ForgotPasswordPage__Form"
          size="large"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Email address"
            name="emailAddress"
            rules={[
              { required: true, message: "Please input your email address!" },
              { type: "email", message: "Email is not a valid email" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={isSendPasswordResetEmailLoading}
            >
              Send me instructions
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }

  return (
    <S.ForgotPasswordPage>
      <header className="ForgotPasswordPage__header-block">
        <Logo />
      </header>

      <MainLayout as="main">{renderForm()}</MainLayout>
    </S.ForgotPasswordPage>
  );
}

const S = {} as any;

S.ForgotPasswordPage = styled.div`
  .ForgotPasswordPage__header-block {
    padding: 1.5rem 2rem;
    margin-bottom: 4rem;
  }

  .ForgotPasswordPage__main-block {
    padding-left: 6rem;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .ForgotPasswordPage__Title {
    margin-bottom: 3rem;
  }

  .ForgotPasswordPage__Form {
    width: 32rem;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: 100%;
    }
  }
`;

export default ForgotPasswordPage;
