import { Typography, Space, Form, Button, Input } from "antd";

const { Title } = Typography;

function FirstProjectStage() {
  return (
    <Space direction="vertical" size="large">
      <Title>Let's set up your first project</Title>

      <Form layout="vertical">
        <Form.Item
          label="What's something you and your team are currently working on?"
          name="projectName"
        >
          <Input type="text" placeholder="e.g. Brand Redesign Campaign"></Input>
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}

export default FirstProjectStage;
