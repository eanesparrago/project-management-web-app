import { ChangeEvent, useState } from 'react'

import { Input } from 'antd'

import { useParams } from 'react-router'
import { firestore } from 'api/firebase'

const { TextArea } = Input

type TaskDescriptionProps = {
  description?: string
}

function TaskDescription({ description }: TaskDescriptionProps) {
  const [localDescription, setLocalDescription] = useState(description)
  const { projectId, groupId, taskId } = useParams<{
    projectId: string
    groupId: string
    taskId: string
  }>()

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setLocalDescription(event.target.value)
  }

  function updateDescription() {
    firestore
      .doc(`projects/${projectId}/groups/${groupId}/tasks/${taskId}`)
      .update({ description: localDescription })
  }

  return (
    <TextArea
      placeholder='Add more detail to this task...'
      bordered={false}
      rows={4}
      value={localDescription}
      onChange={handleChange}
      onBlur={updateDescription}
    />
  )
}

export default TaskDescription
