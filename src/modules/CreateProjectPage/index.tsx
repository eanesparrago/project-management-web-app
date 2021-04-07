import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { firestore } from "backend/firebase";
import collectIdsAndDocs from "utils/collectIdsAndDocs";

import { Button, Form, Typography, Input } from "antd";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";

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

  async function onFinish(values: CreateProjectForm) {
    const project = await createProject(values);

    history.push(`/app/${project.id}`);
  }

  return (
    <S.CreateProjectPage>
      <div className="CreateProjectPage__header-block">
        <Button icon={<ArrowLeftOutlined />} onClick={onBack} />
        <Button icon={<CloseOutlined />} onClick={onBack} />
      </div>

      <div className="CreateProjectPage__main-block">
        <Title level={2}>New Project</Title>

        <Form
          className="CreateProjectPage__Form"
          size="large"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Project name"
            name="title"
            rules={[
              { required: true, message: "Please input the project name!" },
            ]}
          >
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
        </Form>
      </div>
    </S.CreateProjectPage>
  );
}

const S = {} as any;

S.CreateProjectPage = styled.div`
  .CreateProjectPage__header-block {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

  .CreateProjectPage__main-block {
    padding-left: 4rem;
  }

  .CreateProjectPage__Form {
    width: 24rem;
  }
`;

export default CreateProjectPage;
