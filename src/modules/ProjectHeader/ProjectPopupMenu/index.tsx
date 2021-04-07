import { useParams } from "react-router-dom";
import { firestore } from "backend/firebase";

import { Button, Popover, Modal } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

function ProjectPopupMenu() {
  const { projectId } = useParams<{ projectId: string | undefined }>();

  async function deleteProject() {
    if (projectId) {
      await firestore.doc(`projects/${projectId}`).delete();
    }
  }

  function onDeleteProjectWarn() {
    Modal.confirm({
      title: "Delete this project?",
      cancelText: "Cancel",
      okText: "Delete",
      onOk: deleteProject,
      okButtonProps: { danger: true },
      closable: true,
    });
  }

  const content = (
    <>
      <Button type="text" danger onClick={onDeleteProjectWarn}>
        Delete project
      </Button>
    </>
  );

  return (
    <Popover content={content} placement="bottomLeft" trigger="focus">
      <Button type="text" icon={<CaretDownOutlined />} />
    </Popover>
  );
}

export default ProjectPopupMenu;
