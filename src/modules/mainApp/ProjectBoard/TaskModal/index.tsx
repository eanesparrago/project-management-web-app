import styled from "styled-components";
import { Modal } from "antd";
import CompleteButton from "../components/CompleteButton";
import TaskDescription from "./TaskDescription";
import TaskTitle from "./TaskTitle";

import { useHistory } from "react-router";
import useTask from "./utils/useTask";

function TaskModal() {
  const history = useHistory();
  const { task } = useTask();

  function handleCancel() {
    history.goBack();
  }

  if (!task) return null;

  return (
    <Modal
      visible={true}
      footer={null}
      onCancel={handleCancel}
      destroyOnClose
      title={
        <TitleBlock>
          <CompleteButton isComplete={task.isComplete} size="large" />
          <TaskTitle title={task.title} />
        </TitleBlock>
      }
    >
      <TaskDescription description={task.description} />
    </Modal>
  );
}

const TitleBlock = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 !important;
  }

  > *:not(:last-child) {
    margin-right: 0.5rem !important;
  }
`;

export default TaskModal;
