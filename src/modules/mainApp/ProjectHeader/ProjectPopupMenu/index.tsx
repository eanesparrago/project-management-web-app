import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { firestore } from "api/firebase";
import { useAppDispatch } from "app/hooks";
import { setIsEditProjectInfoModalOpen } from "../projectHeaderSlice";

import { Button, Popover, Modal } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

function ProjectPopupMenu() {
  const { projectId } = useParams<{ projectId: string | undefined }>();
  const history = useHistory();
  const dispatch = useAppDispatch();

  async function deleteProject() {
    if (projectId) {
      await firestore.doc(`projects/${projectId}`).delete();
      history.push(`/app`);
    }
  }

  function warnDeleteProject() {
    Modal.confirm({
      title: "Delete this project?",
      cancelText: "Cancel",
      okText: "Delete",
      onOk: deleteProject,
      okButtonProps: { danger: true },
      closable: true,
    });
  }

  function openEditProjectDetails() {
    dispatch(setIsEditProjectInfoModalOpen(true));
  }

  const content = (
    <ScContent>
      <Button type="text" onClick={openEditProjectDetails} block>
        Edit project details
      </Button>

      <Button type="text" danger onClick={warnDeleteProject} block>
        Delete project
      </Button>
    </ScContent>
  );

  return (
    <Popover content={content} placement="bottomLeft" trigger="focus">
      <Button type="text" icon={<CaretDownOutlined />} />
    </Popover>
  );
}

const ScContent = styled.div``;

export default ProjectPopupMenu;
