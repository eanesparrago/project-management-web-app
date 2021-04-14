import { firestore } from "api/firebase";
import collectIdsAndDocs from "api/utils/collectIdsAndDocs";
import { useEffect, useState } from "react";

function useProjectTasks(projectId: string) {
  const [projectTasks, setProjectTasks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = firestore
      .collection(`projects/${projectId}/tasks`)
      .onSnapshot((snapshot) => {
        const tasks = snapshot.docs.map(collectIdsAndDocs);

        setProjectTasks(tasks);
        setIsLoading(false);
      });

    return () => unsubscribe();
  }, [projectId]);

  return { projectTasks, isProjectTasksLoading: isLoading };
}

export default useProjectTasks;
