import { Draggable } from 'react-beautiful-dnd'
import styled, { css } from 'styled-components'
import { Typography } from 'antd'
import CompleteButton from '../../components/CompleteButton'
import TaskOptions from './TaskOptions'

import { useHistory, useParams, useRouteMatch } from 'react-router'
import useIsShowingTaskOptions from './utils/useIsShowingTaskOptions'
import useUpdateTask from 'api/tasks/useUpdateTask'
import { MouseEvent } from 'react'

const { Text } = Typography

type TaskCardProps = {
  title: string
  isComplete: boolean
  groupId: string
  taskId: string
  index: number
}

function TaskCard({
  title,
  isComplete,
  groupId,
  taskId,
  index,
  ...rest
}: TaskCardProps) {
  const { updateTask } = useUpdateTask()
  const { projectId } = useParams<{ projectId: string }>()
  const {
    isShowingTaskOptions,
    showTaskOptions,
    hideTaskOptions,
  } = useIsShowingTaskOptions()
  const history = useHistory()
  const { url } = useRouteMatch()

  function toggleComplete(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    updateTask(projectId, groupId, taskId, { isComplete: !isComplete })
  }

  function goToTask() {
    history.push(`${url}/${groupId}/${taskId}`)
  }

  return (
    <Draggable key={taskId} draggableId={taskId} index={index}>
      {(provided, snapshot) => {
        return (
          <ScTaskCard
            role='button'
            $isComplete={isComplete}
            onMouseOver={showTaskOptions}
            onMouseLeave={hideTaskOptions}
            onClick={goToTask}
            style={{ ...provided.draggableProps.style }}
            $isDragging={snapshot.isDragging}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            {...rest}
          >
            <ScCompleteButton
              isComplete={isComplete}
              onClick={toggleComplete}
            />

            <ScText>{title}</ScText>

            {isShowingTaskOptions && (
              <ScTaskOptions groupId={groupId} taskId={taskId} />
            )}
          </ScTaskCard>
        )
      }}
    </Draggable>
  )
}

export const ScTaskCard = styled.div<{
  $isComplete?: boolean
  $isDragging?: boolean
}>`
  display: flex;
  width: 100%;
  border-radius: ${p => p.theme.borderRadius.s};
  background-color: ${p => p.theme.color.white};
  padding: 0.75rem;
  padding-bottom: 1.5rem;
  ${p => p.theme.boxShadow['1']}
  transition-property: box-shadow;
  transition-duration: 100ms;
  cursor: pointer;
  position: relative;
  user-select: none;

  &:hover {
    ${p => p.theme.boxShadow['2']}
  }

  ${p =>
    p.$isComplete === true &&
    css`
      opacity: 0.7;
    `}

  ${p =>
    p.$isDragging === true &&
    css`
      border: 1px solid ${p => p.theme.color.primary.base};
    `}
`

const ScCompleteButton = styled(CompleteButton)`
  flex-shrink: 0;
`

const ScText = styled(Text)`
  word-wrap: break-word;
  width: 85%;
  margin-top: 0.15rem;
`

const ScTaskOptions = styled(TaskOptions)`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`

export default TaskCard
