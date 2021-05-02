import { useState } from 'react'
import { LexoRank } from 'lexorank'
import { useParams } from 'react-router'
import { firestore } from 'api/firebase'
import collectIdsAndDocs from 'api/utils/collectIdsAndDocs'
import { message } from 'antd'
import { Task } from 'api/tasks/useCreateTask'

function useMoveTask() {
  const [isLoading, setIsLoading] = useState(false)
  const { projectId } = useParams<{ projectId: string }>()

  async function moveTask(
    sourceIndex: number,
    sourceTaskId: string,
    sourceGroupId: string,
    destinationIndex: number | null | undefined,
    destinationGroupId: string | null | undefined,
  ) {
    if (!(typeof destinationIndex === 'number') || !destinationGroupId) return
    setIsLoading(true)

    try {
      const taskSnapshot = firestore.doc(
        `projects/${projectId}/groups/${sourceGroupId}/tasks/${sourceTaskId}`,
      )
      const taskDoc = await taskSnapshot.get()
      const task = collectIdsAndDocs(taskDoc)
      const destinationGroupTasksDoc = firestore
        .collection(`projects/${projectId}/groups/${destinationGroupId}/tasks`)
        .orderBy('rank')

      // If same group
      if (sourceGroupId === destinationGroupId) {
        // Do nothing if didn't change position
        if (sourceIndex === destinationIndex) return

        const groupTasksSnapshot = await destinationGroupTasksDoc.get()
        const groupTasks = groupTasksSnapshot.docs.map(collectIdsAndDocs)
        const newRank = getNewRank(sourceIndex, destinationIndex, groupTasks)
        await taskSnapshot.update({ rank: newRank })
        return
      }

      // If to different group
      if (sourceGroupId !== destinationGroupId) {
        const groupTasksSnapshot = await destinationGroupTasksDoc.get()
        const groupTasks = groupTasksSnapshot.docs.map(collectIdsAndDocs)
        const newRank = getNewRank(
          sourceIndex,
          destinationIndex,
          groupTasks,
          true,
        )

        const { id, ...oldTask } = task
        const movedTask = { ...oldTask, rank: newRank }

        // Add task to destination group and delete from source group
        await firestore
          .collection(
            `projects/${projectId}/groups/${destinationGroupId}/tasks`,
          )
          .add(movedTask)
        await taskSnapshot.delete()
      }
    } catch (error) {
      console.error(error)
      message.error('Error updating task')
    } finally {
      setIsLoading(false)
    }
  }

  return { moveTask, isMoveTaskLoading: isLoading }
}

export default useMoveTask

function getNewRank(
  sourceIndex: number,
  destinationIndex: number,
  tasks: Task[],
  isDifferentGroup?: boolean,
) {
  // New rank
  if (!tasks.length) {
    return LexoRank.middle().toString()
  }

  // First
  if (destinationIndex === 0) {
    return LexoRank.parse(tasks[0].rank).genPrev().toString()
  }

  // Last in same group
  if (!isDifferentGroup && destinationIndex === tasks.length - 1) {
    return LexoRank.parse(tasks[tasks.length - 1].rank)
      .genNext()
      .toString()
  }

  // Last in a different group
  if (isDifferentGroup && destinationIndex === tasks.length) {
    return LexoRank.parse(tasks[tasks.length - 1].rank)
      .genNext()
      .toString()
  }

  // Middle
  const tasksCopy = [...tasks]

  if (!isDifferentGroup) {
    tasksCopy.splice(sourceIndex, 1)
  }

  const previousRank = LexoRank.parse(tasksCopy[destinationIndex - 1].rank)
  const nextRank = LexoRank.parse(tasksCopy[destinationIndex].rank)
  return previousRank.between(nextRank).toString()
}
