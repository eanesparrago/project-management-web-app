import firebase from "firebase";
import { firestore } from "api/firebase";
import collectIdsAndDocs from "api/utils/collectIdsAndDocs";
import { useEffect, useState } from "react";

function useTasks(projectId: string, groupId: string) {
  const [state, setState] = useState<{
    tasks: firebase.firestore.DocumentData[] | null;
    isLoading: boolean;
  }>({ tasks: null, isLoading: false });

  useEffect(() => {
    setState({ tasks: null, isLoading: true });

    const unsubscribe = firestore
      .collection(`projects/${projectId}/groups/${groupId}/tasks`)
      .orderBy("rank")
      .onSnapshot((tasksSnapshot) => {
        const tasks = tasksSnapshot.docs.map(collectIdsAndDocs);

        setState({ tasks, isLoading: false });
      });

    return () => unsubscribe();
  }, [projectId, groupId]);

  return { tasks: state.tasks, isTasksLoading: state.isLoading };
}

export default useTasks;
