import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "backend/firebase";
import collectIdsAndDocs from "utils/collectIdsAndDocs";

import { Button, Form, Typography, Input, FormProps } from "antd";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import { FunctionComponent } from "react";

const { Title } = Typography;
const { TextArea } = Input;

type CreateProjectForm = {
  title: string;
  description: string | undefined;
};

async function createProject(projectData: CreateProjectForm) {
  const docRef = await firestore.collection("projects").add(projectData);
  const doc = await docRef.get();
  const newProject = collectIdsAndDocs(doc);

  return newProject;
}

function CreateProjectPage() {
  const history = useHistory();

  function onBack() {
    history.goBack();
  }

  async function onFinish({ title, description }: CreateProjectForm) {
    const projectData = {
      title,
      description,
      user: {
        uid: auth.currentUser?.uid,
      },
    };

    const project = await createProject(projectData);

    history.push(`/app/${project.id}`);
  }

  return (
    <>
      <HeaderBlock>
        <Button type="text" icon={<ArrowLeftOutlined />} onClick={onBack} />
        <Button type="text" icon={<CloseOutlined />} onClick={onBack} />
      </HeaderBlock>

      <MainBlock>
        <Title level={2}>New Project</Title>

        <ScForm
          className="CreateProjectPage__Form"
          size="large"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item label="Project name" name="title">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              Create project
            </Button>
          </Form.Item>
        </ScForm>
      </MainBlock>
    </>
  );
}

const HeaderBlock = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const MainBlock = styled.div`
  padding-left: 4rem;
`;

const ScForm: FunctionComponent<FormProps> = styled(Form)`
  width: 24rem;
`;

export default CreateProjectPage;
