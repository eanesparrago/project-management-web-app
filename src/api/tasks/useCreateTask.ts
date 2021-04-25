import { useState } from "react";
import { firestore } from "api/firebase";
import { message } from "antd";
import { LexoRank } from "lexorank";

type TaskData = {
  title: string;
  description?: string;
};

function useCreateTask() {
  const [isLoading, setIsLoading] = useState(false);

  async function createTask(
    projectId: string,
    groupId: string,
    taskData: TaskData
  ) {
    setIsLoading(true);

    const newTaskData = {
      ...taskData,
      createdAt: new Date(),
      isComplete: false,
      rank: LexoRank.middle().toString(),
    };

    try {
      await firestore
        .collection(`/projects/${projectId}/groups/${groupId}/tasks`)
        .add(newTaskData);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      message.error("Error creating task");
    } finally {
      setIsLoading(false);
    }
  }

  return { createTask, isCreateTaskLoading: isLoading };
}

export default useCreateTask;
