import { useState } from "react";
import { message } from "antd";
import { firestore } from "api/firebase";

type UpdateTaskData = {
  title?: string;
  description?: string;
  isComplete?: boolean;
};

function useUpdateTask() {
  const [isLoading, setIsLoading] = useState(false);

  async function updateTask(
    projectId: string,
    groupId: string,
    taskId: string,
    taskData: UpdateTaskData
  ) {
    try {
      setIsLoading(true);

      await firestore
        .doc(`projects/${projectId}/groups/${groupId}/tasks/${taskId}`)
        .update(taskData);
    } catch (error) {
      console.error(error);
      message.error("Error updating task");
    } finally {
      setIsLoading(false);
    }
  }

  return { updateTask, isUpdateTaskLoading: isLoading };
}

export default useUpdateTask;
