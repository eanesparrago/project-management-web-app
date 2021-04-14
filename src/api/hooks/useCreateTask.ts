import { useState } from "react";
import { firestore } from "api/firebase";
import { message } from "antd";

type TaskData = {};

function useCreateTask() {
  const [isLoading, setIsLoading] = useState(false);

  async function createTask(projectId: string, taskData: TaskData) {
    setIsLoading(true);

    try {
      await firestore.collection(`/projects/${projectId}/tasks`).add(taskData);
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
