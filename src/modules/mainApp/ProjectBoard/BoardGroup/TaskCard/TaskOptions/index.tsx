import { Button, Popover } from 'antd'
import { EllipsisOutlined } from '@ant-design/icons'

import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import useDeleteTask from 'api/tasks/useDeleteTask'

type TaskOptionsProps = {
  groupId: string
  taskId: string
  className?: string
}

function TaskOptions({ className, groupId, taskId }: TaskOptionsProps) {
  const { projectId } = useParams<{ projectId: string }>()
  const history = useHistory()
  const { url } = useRouteMatch()
  const { deleteTask } = useDeleteTask()

  function handleDeleteTask() {
    deleteTask(projectId, groupId, taskId)
  }

  function goToTask() {
    history.push(`${url}/${groupId}/${taskId}`)
  }

  const content = (
    <div onClick={event => event.stopPropagation()}>
      <Button type='text' block onClick={goToTask}>
        View task
      </Button>

      <Button type='text' block danger onClick={handleDeleteTask}>
        Delete task
      </Button>
    </div>
  )

  return (
    <Popover
      content={content}
      trigger='click'
      placement='bottomLeft'
      motion={undefined}
      overlayClassName='TaskOptions-overlay'
    >
      <Button
        className={className}
        icon={<EllipsisOutlined />}
        onClick={e => e.stopPropagation()}
      />
    </Popover>
  )
}

export default TaskOptions
