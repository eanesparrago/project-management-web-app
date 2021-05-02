import styled from 'styled-components'
import { Modal } from 'antd'
import CompleteButton from '../components/CompleteButton'
import TaskDescription from './TaskDescription'
import TaskTitle from './TaskTitle'

import { useHistory, useParams } from 'react-router'
import useTask from './utils/useTask'
import useUpdateTask from 'api/tasks/useUpdateTask'

function TaskModal() {
  const history = useHistory()
  const { task } = useTask()
  const { projectId, groupId, taskId } = useParams<{
    projectId: string
    groupId: string
    taskId: string
  }>()
  const { updateTask } = useUpdateTask()

  function handleCancel() {
    history.goBack()
  }

  function toggleComplete() {
    updateTask(projectId, groupId, taskId, {
      isComplete: !task?.isComplete,
    })
  }

  if (!task) return null

  return (
    <Modal
      visible={true}
      footer={null}
      onCancel={handleCancel}
      destroyOnClose
      title={
        <TitleBlock>
          <CompleteButton
            isComplete={task.isComplete}
            size='large'
            onClick={toggleComplete}
          />
          <TaskTitle title={task.title} />
        </TitleBlock>
      }
    >
      <TaskDescription description={task.description} />
    </Modal>
  )
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
`

export default TaskModal
