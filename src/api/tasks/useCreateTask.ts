import { useState } from 'react'
import { message } from 'antd'
import { LexoRank } from 'lexorank'
import { firestore } from 'api/firebase'
import collectIdsAndDocs from 'api/utils/collectIdsAndDocs'

type CreateTaskData = {
  title: string
  description?: string
}

export type Task = {
  title: string
  description?: string
  createdAt: string
  isComplete: boolean
  rank: string
}

function useCreateTask() {
  const [isLoading, setIsLoading] = useState(false)

  async function createTask(
    projectId: string,
    groupId: string,
    taskData: CreateTaskData,
  ) {
    setIsLoading(true)

    try {
      const tasksSnapshot = await firestore
        .collection(`/projects/${projectId}/groups/${groupId}/tasks`)
        .orderBy('rank')
        .get()
      const tasks = tasksSnapshot.docs.map(collectIdsAndDocs)
      const rank = getRank(tasks)

      const newTaskData = {
        ...taskData,
        createdAt: new Date(),
        isComplete: false,
        rank,
      }

      await firestore
        .collection(`/projects/${projectId}/groups/${groupId}/tasks`)
        .add(newTaskData)

      setIsLoading(false)
    } catch (error) {
      console.error(error)
      message.error('Error creating task')
    } finally {
      setIsLoading(false)
    }
  }

  return { createTask, isCreateTaskLoading: isLoading }
}

function getRank(tasks: Task[]) {
  if (!tasks.length) {
    return LexoRank.middle().toString()
  }

  const latestTask = tasks[0]
  const parsedRank = LexoRank.parse(latestTask.rank)
  const nextRank = parsedRank.genPrev().toString()

  return nextRank
}

export default useCreateTask
