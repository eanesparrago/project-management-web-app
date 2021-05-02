import { message } from 'antd'
import { firestore } from 'api/firebase'
import { useState } from 'react'

function useDeleteTask() {
  const [isLoading, setIsLoading] = useState(false)

  async function deleteTask(
    projectId: string,
    groupId: string,
    taskId: string,
  ) {
    try {
      setIsLoading(true)

      await firestore
        .doc(`projects/${projectId}/groups/${groupId}/tasks/${taskId}`)
        .delete()

      message.info('Task deleted')
    } catch (error) {
      console.log(error)
      message.error('Error deleting task')
    } finally {
      setIsLoading(false)
    }
  }

  return { deleteTask, isDeleteTaskLoading: isLoading }
}

export default useDeleteTask
