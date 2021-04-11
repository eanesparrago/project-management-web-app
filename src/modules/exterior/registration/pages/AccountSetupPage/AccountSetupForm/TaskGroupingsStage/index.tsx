import { Typography, Space, Form, Button, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { useAppDispatch } from "app/hooks";
import { setStage, setTaskGroupings } from "../../accountSetupPageSlice";

const { Title } = Typography;

function TaskGroupingsStage() {
  const dispatch = useAppDispatch();

  function onBack() {
    dispatch(setStage("projectTasks"));
  }

  function onFinish({
    grouping1,
    grouping2,
    grouping3,
  }: {
    grouping1: string;
    grouping2: string;
    grouping3: string;
  }) {
    dispatch(setTaskGroupings([grouping1, grouping2, grouping3]));
  }

  return (
    <Space direction="vertical" size="large">
      <Space align="start">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={onBack}
        ></Button>

        <Title level={3}>
          How would you group these tasks into sections or stages?
        </Title>
      </Space>

      <Form
        layout="vertical"
        initialValues={{
          grouping1: "To do",
          grouping2: "Doing",
          grouping3: "Done",
        }}
        onFinish={onFinish}
      >
        <Form.Item name="grouping1">
          <Input type="text" size="large"></Input>
        </Form.Item>

        <Form.Item name="grouping2">
          <Input type="text" size="large"></Input>
        </Form.Item>

        <Form.Item name="grouping3">
          <Input type="text" size="large"></Input>
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}

export default TaskGroupingsStage;
