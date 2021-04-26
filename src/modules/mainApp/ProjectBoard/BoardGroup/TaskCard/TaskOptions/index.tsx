import { Button, Popover } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import { useParams } from "react-router-dom";
import useDeleteTask from "api/tasks/useDeleteTask";

type TaskOptionsProps = {
  groupId: string;
  taskId: string;
  className?: string;
};

function TaskOptions({ className, groupId, taskId }: TaskOptionsProps) {
  const { projectId } = useParams<{ projectId: string }>();
  const { deleteTask } = useDeleteTask();

  function onDeleteTask() {
    deleteTask(projectId, groupId, taskId);
  }

  const content = (
    <>
      <Button block danger onClick={onDeleteTask}>
        Delete task
      </Button>
    </>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      placement="bottomLeft"
      motion={undefined}
      overlayClassName="TaskOptions-overlay"
    >
      <Button className={className} icon={<EllipsisOutlined />} />
    </Popover>
  );
}

export default TaskOptions;
