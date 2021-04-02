import { Typography, Space, Form, Button, Input } from "antd";
import { CheckCircleOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { Title } = Typography;

function ProjectTasksStage() {
  return (
    <Space direction="vertical" size="large">
      <Space align="start">
        <Button type="text" icon={<ArrowLeftOutlined />}></Button>

        <Title level={3}>
          What are a few tasks that you have to do for [project name]?
        </Title>
      </Space>

      <Form layout="vertical">
        <Form.Item name="task1">
          <Input
            type="text"
            placeholder="e.g. Schedule brainstorm"
            size="large"
            prefix={<CheckCircleOutlined />}
          ></Input>
        </Form.Item>

        <Form.Item name="task2">
          <Input
            type="text"
            placeholder="e.g. Create press outreach plan"
            size="large"
            prefix={<CheckCircleOutlined />}
          ></Input>
        </Form.Item>

        <Form.Item name="task3">
          <Input
            type="text"
            placeholder="e.g. Publish announcement blog"
            size="large"
            prefix={<CheckCircleOutlined />}
          ></Input>
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

export default ProjectTasksStage;
