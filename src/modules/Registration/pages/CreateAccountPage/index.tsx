import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "app/hooks";
import localStorage from "utils/localStorage";
import { setEmailAddress } from "../../registrationSlice";
import useSendSignInLinkToEmail from "./utils/useSendSignInLinkToEmail";
import checkIfEmailExists from "./utils/checkIfEmailExists";

import { Typography, Input, Form, Button, message } from "antd";
import Logo from "components/Logo";
import MainLayout from "../../layouts/MainLayout";

const { Title } = Typography;

function CreateAccountPage() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { sendSignInLinkToEmail, isLoading } = useSendSignInLinkToEmail();

  async function onFinish({ emailAddress }: { emailAddress: string }) {
    if (await checkIfEmailExists(emailAddress)) {
      history.push("/login");
      message.info("Email is already registered");
      return;
    }

    dispatch(setEmailAddress(emailAddress));

    try {
      await sendSignInLinkToEmail(emailAddress);

      // Put in localStorage for use in Account Setup after user clicks sign in link
      localStorage.set("emailAddress", emailAddress);

      history.push("/verify-email");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <S.CreateAccountPage>
      <header className="CreateAccountPage__header-block">
        <Logo />
      </header>

      <MainLayout as="main">
        <Title className="CreateAccountPage__Title">
          Create your Asana Clone account
        </Title>

        <Form
          className="CreateAccountPage__Form"
          size="large"
          onFinish={onFinish}
        >
          <Form.Item
            name="emailAddress"
            rules={[
              { required: true, message: "Please input your email address!" },
              { type: "email", message: "Email is not a valid email" },
            ]}
          >
            <Input placeholder="name@company.com" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Create your account
            </Button>
          </Form.Item>
        </Form>
      </MainLayout>
    </S.CreateAccountPage>
  );
}

const S = {} as any;

S.CreateAccountPage = styled.div`
  .CreateAccountPage__header-block {
    padding: 1.5rem 2rem;
    margin-bottom: 4rem;
  }

  .CreateAccountPage__main-block {
    padding-left: 6rem;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .CreateAccountPage__Title {
    margin-bottom: 3rem;
  }

  .CreateAccountPage__Form {
    width: 32rem;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: 100%;
    }
  }
`;

export default CreateAccountPage;
