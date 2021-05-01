import { useEffect, useState } from "react";
import firebase from "firebase";
import { firestore } from "api/firebase";
import collectIdsAndDocs from "api/utils/collectIdsAndDocs";

function useProject(projectId?: string) {
  const [state, setState] = useState<{
    project: firebase.firestore.DocumentData | null;
    isLoading: boolean;
  }>({
    isLoading: false,
    project: null,
  });

  useEffect(() => {
    if (!projectId) return;

    setState((prevState) => ({ ...prevState, isLoading: true }));

    const unsubscribe = firestore.doc(`projects/${projectId}`).onSnapshot(
      (projectSnapshot) => {
        const projectData = collectIdsAndDocs(projectSnapshot);

        setState({ isLoading: false, project: projectData });
      },
      (error) => {
        console.error(error);
        setState((prevState) => ({ ...prevState, isLoading: false }));
      }
    );

    return () => unsubscribe();
  }, [projectId]);

  return { project: state.project, isProjectLoading: state.isLoading };
}

export default useProject;
