import { useParams } from "react-router";
import { firestore } from "backend/firebase";
import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  selectIsEditProjectDetailsModalOpen,
  setIsEditProjectDetailsModalOpen,
} from "../projectHeaderSlice";

import { Modal, Form, Input, message } from "antd";

const { TextArea } = Input;

function EditProjectDetailsModal() {
  const dispatch = useAppDispatch();
  const isEditProjectDetailsModalOpen = useAppSelector(
    selectIsEditProjectDetailsModalOpen
  );
  const { projectId } = useParams<{ projectId: string }>();

  function onClose() {
    dispatch(setIsEditProjectDetailsModalOpen(false));
  }

  function onFinish(values: any) {
    const projectRef = firestore.doc(`projects/${projectId}`);
    projectRef.update(values);

    message.success("Project updated");
  }

  return (
    <Modal
      visible={isEditProjectDetailsModalOpen}
      title="Project Details"
      okText="Save"
      cancelText="Close"
      onCancel={onClose}
      okButtonProps={{ htmlType: "submit", form: "editProjectDetails" }}
      destroyOnClose
    >
      <Form
        size="large"
        layout="vertical"
        id="editProjectDetails"
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
      </Form>
    </Modal>
  );
}

export default EditProjectDetailsModal;
