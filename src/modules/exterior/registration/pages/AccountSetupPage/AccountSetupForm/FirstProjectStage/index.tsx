import { Typography, Space, Form, Button, Input } from "antd";

import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  setStage,
  setProjectName,
  selectProjectName,
} from "../../accountSetupPageSlice";

const { Title } = Typography;

function FirstProjectStage() {
  const dispatch = useAppDispatch();
  const projectName = useAppSelector(selectProjectName);

  function onFinish(values: { projectName: string }) {
    dispatch(setProjectName(values.projectName));
    dispatch(setStage("projectTasks"));
  }

  return (
    <Space direction="vertical" size="large">
      <Title>Let's set up your first project</Title>

      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          projectName,
        }}
      >
        <Form.Item
          label="What's something you and your team are currently working on?"
          name="projectName"
          rules={[
            {
              required: true,
              message: "Please input your project name!",
            },
          ]}
        >
          <Input type="text" placeholder="e.g. Brand Redesign Campaign"></Input>
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

export default FirstProjectStage;
