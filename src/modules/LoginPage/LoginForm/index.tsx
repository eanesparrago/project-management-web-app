import { Form, Input, Button } from "antd";

function LoginForm({ ...rest }) {
  return (
    <Form layout="vertical" {...rest}>
      <Form.Item
        label="Email address"
        name="emailAddress"
        rules={[
          { required: true, message: "Please input your email address!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" block htmlType="submit">
        Log in
      </Button>
    </Form>
  );
}

export default LoginForm;
