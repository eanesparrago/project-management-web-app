import { Typography } from "antd";

import useUpdateTask from "api/tasks/useUpdateTask";
import { useParams } from "react-router";

const { Title } = Typography;

type TaskTitleProps = {
  title: string;
};

function TaskTitle({ title }: TaskTitleProps) {
  const { updateTask } = useUpdateTask();
  const { projectId, groupId, taskId } = useParams<{
    projectId: string;
    groupId: string;
    taskId: string;
  }>();

  function handleChange(value: string) {
    updateTask(projectId, groupId, taskId, { title: value });
  }

  return (
    <Title level={4} editable={{ onChange: handleChange }}>
      {title}
    </Title>
  );
}

export default TaskTitle;
