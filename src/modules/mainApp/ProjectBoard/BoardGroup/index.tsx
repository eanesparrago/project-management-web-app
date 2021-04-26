import styled from "styled-components";
import { Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import GroupTitle from "./GroupTitle";
import TaskCard from "./TaskCard";
import NewTaskCard from "./TaskCard/variants/NewTaskCard";
import MoreActionsButton from "./MoreActionsButton";

import { useParams } from "react-router-dom";
import useHover from "./utils/useHover";
import useIsCreatingNewTask from "./utils/useIsCreatingNewTask";
import useTasks from "api/tasks/useTasks";

type BoardGroupProps = {
  title: string;
  groupId: string;
};

function BoardGroup({ title, groupId }: BoardGroupProps) {
  const { isHovered, onHover, onHoverEnd } = useHover();
  const { projectId } = useParams<{ projectId: string }>();
  const [isCreatingNewTask, setIsCreatingNewTask] = useIsCreatingNewTask();
  const { tasks } = useTasks(projectId, groupId);

  function onStartCreateTask() {
    setIsCreatingNewTask(true);
  }

  return (
    <ScBoardGroup $isHovered={isHovered}>
      <HeaderBlock onMouseLeave={onHoverEnd} onMouseEnter={onHover}>
        <ScGroupTitle title={title} groupId={groupId} />

        <HeaderButtonsBlock>
          <Tooltip title="Add task">
            <Button
              type="text"
              icon={<PlusOutlined />}
              onClick={onStartCreateTask}
            />
          </Tooltip>

          <MoreActionsButton groupId={groupId} />
        </HeaderButtonsBlock>
      </HeaderBlock>

      <TasksBlock>
        {isCreatingNewTask && (
          <ScNewTaskCard
            handleSetIsCreatingNewTask={setIsCreatingNewTask}
            groupId={groupId}
          />
        )}

        <InnerTasksBlock>
          {tasks &&
            tasks.map((task) => (
              <TaskCard
                key={task.id}
                taskId={task.id}
                groupId={groupId}
                title={task.title}
                isComplete={task.isComplete}
              />
            ))}
        </InnerTasksBlock>
      </TasksBlock>
    </ScBoardGroup>
  );
}

const ScBoardGroup = styled.div<{ $isHovered: boolean }>`
  flex-shrink: 0;
  width: 22rem;
  padding: 0.75rem 1rem;
  border-radius: ${(p) => p.theme.borderRadius.s};
  transition-property: box-shadow;
  transition-duration: 100ms;
  display: flex;
  flex-flow: column nowrap;

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

const ScGroupTitle = styled(GroupTitle)`
  flex-grow: 1;
`;

const TasksBlock = styled.div`
  overflow-y: auto;
  padding: 0.5rem;
  margin: -0.5rem;
`;

const ScNewTaskCard = styled(NewTaskCard)`
  margin-bottom: 0.75rem;
`;

const InnerTasksBlock = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;

  > *:not(:first-child) {
    margin-bottom: 0.75rem;
  }
`;

export default BoardGroup;
