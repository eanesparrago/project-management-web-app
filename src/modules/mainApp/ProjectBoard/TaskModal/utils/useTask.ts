import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { firestore } from 'api/firebase'
import { Task } from 'api/tasks/useCreateTask'
import collectIdsAndDocs from 'api/utils/collectIdsAndDocs'

function useTask() {
  const { projectId, groupId, taskId } = useParams<{
    projectId: string
    groupId: string
    taskId: string
  }>()
  const [state, setState] = useState<{
    task: Task | null
    isLoading: boolean
  }>({
    task: null,
    isLoading: false,
  })

  useEffect(() => {
    setState(prevState => ({ ...prevState, isLoading: true }))

    const unsubscribe = firestore
      .doc(`projects/${projectId}/groups/${groupId}/tasks/${taskId}`)
      .onSnapshot(taskSnapshot => {
        const task = collectIdsAndDocs(taskSnapshot)

        setState({ task, isLoading: false })
      })

    return () => unsubscribe()
  }, [projectId, groupId, taskId])

  return { task: state.task, isTaskLoading: state.isLoading }
}

export default useTask
