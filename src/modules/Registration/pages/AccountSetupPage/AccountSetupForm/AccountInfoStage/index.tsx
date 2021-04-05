import { Typography, Space, Input, Form, Button } from "antd";

import { useAppDispatch } from "app/hooks";
import {
  setStage,
  setFullName,
  setPassword,
} from "../../accountSetupPageSlice";

const { Title, Text } = Typography;

interface AccountInfoForm {
  fullName: string;
  password: string;
}

function AccountInfoStage() {
  const dispatch = useAppDispatch();

  function onFinish(values: AccountInfoForm) {
    dispatch(setFullName(values.fullName));
    dispatch(setPassword(values.password));

    dispatch(setStage("aboutYourself"));
  }

  return (
    <Space direction="vertical" size="large">
      <Title>Welcome to Asana Clone!</Title>

      <Text type="secondary">You're signing up as email@example.com</Text>

      <Form layout="vertical" name="accountInfoStage" onFinish={onFinish}>
        <Form.Item
          label="What's your full name?"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input size="large"></Input>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must be 8 characters or longer!" },
          ]}
        >
          <Input.Password size="large"></Input.Password>
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Text>
        Wrong account? <Typography.Link>Log in</Typography.Link> instead.
      </Text>
    </Space>
  );
}

export default AccountInfoStage;
