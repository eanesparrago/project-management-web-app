// TODO: Use this UI for resetting the password instead of Firebase default

import styled from "styled-components";
import useUpdatePassword from "./utils/useUpdatePassword";

import { Input, Form, Button } from "antd";
import Logo from "components/Logo";
import { MainBlock } from "../../../styles";

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

function ResetPasswordPage() {
  const { updatePassword, isUpdatePasswordLoading } = useUpdatePassword();

  async function onFinish({ password }: ResetPasswordFormData) {
    await updatePassword(password);
  }

  return (
    <S.ResetPasswordPage>
      <header className="ResetPasswordPage__header-block">
        <Logo />
      </header>

      <MainBlock>
        <Form
          className="ResetPasswordPage__Form"
          size="large"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Password"
            name="password"
            hasFeedback
            rules={[
              { required: true, message: "Please input your new password!" },
              { min: 8, message: "Password must be 8 characters or longer!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              { min: 8, message: "Password must be 8 characters or longer!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={isUpdatePasswordLoading}
            >
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </MainBlock>
    </S.ResetPasswordPage>
  );
}

const S = {} as any;

S.ResetPasswordPage = styled.div`
  .ResetPasswordPage__header-block {
    padding: 1.5rem 2rem;
    margin-bottom: 4rem;
  }

  .ResetPasswordPage__main-block {
    padding-left: 6rem;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .ResetPasswordPage__Title {
    margin-bottom: 3rem;
  }

  .ResetPasswordPage__Form {
    width: 32rem;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: 100%;
    }
  }
`;

export default ResetPasswordPage;
