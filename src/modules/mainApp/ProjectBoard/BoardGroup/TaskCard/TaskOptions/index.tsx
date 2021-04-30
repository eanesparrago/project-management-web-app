import { MouseEvent } from "react";

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

  function handleDeleteTask(event: MouseEvent<HTMLElement>) {
    event.stopPropagation();

    deleteTask(projectId, groupId, taskId);
  }

  const content = (
    <>
      <Button type="text" block danger onClick={handleDeleteTask}>
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
      <Button
        className={className}
        icon={<EllipsisOutlined />}
        onClick={(e) => e.stopPropagation()}
      />
    </Popover>
  );
}

export default TaskOptions;
