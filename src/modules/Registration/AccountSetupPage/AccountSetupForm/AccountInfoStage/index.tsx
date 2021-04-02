import React from "react";

import { Typography, Space, Input, Form, Button } from "antd";

const { Title, Text } = Typography;

function AccountInfoStage() {
  return (
    <Space direction="vertical" size="large">
      <Title>Welcome to Asana Clone!</Title>

      <Text type="secondary">You're signing up as email@example.com</Text>

      <Form layout="vertical">
        <Form.Item label="What's your full name?" name="fullName">
          <Input size="large"></Input>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          extra="Password must be 8 characters or longer."
        >
          <Input.Password size="large"></Input.Password>
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary">
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
