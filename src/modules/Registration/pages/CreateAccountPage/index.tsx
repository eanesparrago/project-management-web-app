import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "app/hooks";
import { setEmailAddress } from "../../registrationSlice";

import { Typography, Input, Form, Button } from "antd";
import Logo from "components/Logo";
import MainLayout from "../../layouts/MainLayout";

const { Title } = Typography;

function CreateAccountPage() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  function onFinish({ emailAddress }: { emailAddress: string }) {
    dispatch(setEmailAddress(emailAddress));

    history.push("/verify-email");
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
            <Button type="primary" htmlType="submit" block>
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
