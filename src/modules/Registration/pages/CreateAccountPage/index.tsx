import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "app/hooks";
import { setEmailAddress } from "../../registrationSlice";
import useCreateUserWithEmailAndPassword from "./utils/useCreateUserWithEmailAndPassword";

import { Typography, Input, Form, Button, message } from "antd";
import Logo from "components/Logo";
import MainLayout from "../../layouts/MainLayout";

const { Title } = Typography;

type CreateAccountForm = {
  emailAddress: string;
  password: string;
};

function CreateAccountPage() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const {
    createUserWithEmailAndPassword,
    isLoading,
  } = useCreateUserWithEmailAndPassword();

  async function onFinish({ emailAddress, password }: CreateAccountForm) {
    dispatch(setEmailAddress(emailAddress));

    try {
      await createUserWithEmailAndPassword(emailAddress, password);

      history.push("/verify-email");
    } catch (error) {
      console.error(error);
      message.error(error.message);
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

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 8, message: "Password must be 8 characters or longer!" },
            ]}
          >
            <Input.Password />
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
