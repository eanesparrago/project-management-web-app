import { useParams } from "react-router-dom";
import useCreateTask from "api/hooks/useCreateTask";
import useHover from "./utils/useHover";
import useIsCreatingNewTask from "./utils/useIsCreatingNewTask";

import styled from "styled-components";
import { Button, Tooltip } from "antd";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
import ColumnTitle from "./ColumnTitle";
import TaskCard from "./TaskCard";
import NewTaskCard from "./TaskCard/variants/NewTaskCard";
import useProjectTasks from "api/hooks/useProjectTasks";

function BoardColumn() {
  const { isHovered, onHover, onHoverEnd } = useHover();
  const { projectId } = useParams<{ projectId: string }>();
  const { createTask, isCreateTaskLoading } = useCreateTask();
  const [isCreatingNewTask, setIsCreatingNewTask] = useIsCreatingNewTask();
  const { projectTasks } = useProjectTasks(projectId);

  function onStartCreateTask() {
    setIsCreatingNewTask(true);
  }

  return (
    <ScBoardColumn $isHovered={isHovered}>
      <HeaderBlock onMouseLeave={onHoverEnd} onMouseEnter={onHover}>
        <ScColumnTitle />

        <HeaderButtonsBlock>
          <Tooltip title="Add task">
            <Button
              type="text"
              icon={<PlusOutlined />}
              onClick={onStartCreateTask}
              loading={isCreateTaskLoading}
            />
          </Tooltip>

          <Tooltip title="More actions">
            <Button type="text" icon={<EllipsisOutlined />} />
          </Tooltip>
        </HeaderButtonsBlock>
      </HeaderBlock>

      <TasksBlock>
        {isCreatingNewTask && (
          <NewTaskCard handleSetIsCreatingNewTask={setIsCreatingNewTask} />
        )}

        {projectTasks &&
          projectTasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              isComplete={task.isComplete}
            />
          ))}
      </TasksBlock>
    </ScBoardColumn>
  );
}

const ScBoardColumn = styled.div<{ $isHovered: boolean }>`
  width: 20rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition-property: box-shadow;
  transition-duration: 100ms;

  ${(p) => p.$isHovered && p.theme.boxShadow["1"]}
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const HeaderButtonsBlock = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const ScColumnTitle = styled(ColumnTitle)`
  flex-grow: 1;
`;

const TasksBlock = styled.div`
  > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

export default BoardColumn;
