import { Typography, Space, Form, Button, Input } from "antd";
import { CheckCircleOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  selectProjectName,
  selectProjectTasks,
  setStage,
  setProjectTasks,
} from "../../../registrationSlice";

const { Title } = Typography;

function ProjectTasksStage() {
  const dispatch = useAppDispatch();
  const projectName = useAppSelector(selectProjectName);
  const projectTasks = useAppSelector(selectProjectTasks);

  function onBack() {
    dispatch(setStage("firstProject"));
  }

  function onFinish({
    task1,
    task2,
    task3,
  }: {
    task1: string;
    task2: string;
    task3: string;
  }) {
    dispatch(setProjectTasks([task1, task2, task3]));
    dispatch(setStage("taskGroupings"));
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
          What are a few tasks that you have to do for {projectName}?
        </Title>
      </Space>

      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={
          projectTasks
            ? {
                task1: projectTasks[0],
                task2: projectTasks[1],
                task3: projectTasks[2],
              }
            : undefined
        }
      >
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
          <Button size="large" type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}

export default ProjectTasksStage;
