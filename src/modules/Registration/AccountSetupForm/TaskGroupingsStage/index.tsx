import { Typography, Space, Form, Button, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title } = Typography;

function TaskGroupingsStage() {
  return (
    <Space direction="vertical" size="large">
      <Space align="start">
        <Button type="text" icon={<ArrowLeftOutlined />}></Button>

        <Title level={3}>
          How would you group these tasks into sections or stages?
        </Title>
      </Space>

      <Form layout="vertical">
        <Form.Item name="grouping1">
          <Input type="text" size="large" defaultValue="To do"></Input>
        </Form.Item>

        <Form.Item name="grouping2">
          <Input type="text" size="large" defaultValue="Doing"></Input>
        </Form.Item>

        <Form.Item name="grouping3">
          <Input type="text" size="large" defaultValue="Done"></Input>
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

export default TaskGroupingsStage;
