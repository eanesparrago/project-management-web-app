import { useState, useEffect } from "react";
import firebase from "firebase";
import { firestore } from "api/firebase";
import collectIdsAndDocs from "api/utils/collectIdsAndDocs";
import useAuth from "api/hooks/useAuth";

function useProjects() {
  const [state, setState] = useState<{
    projects: firebase.firestore.DocumentData[] | null;
    isLoading: boolean;
  }>({
    isLoading: false,
    projects: null,
  });
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    setState((prevState) => ({ ...prevState, isLoading: true }));

    const unsubscribe = firestore
      .collection("projects")
      .where("user.uid", "==", user?.uid)
      .orderBy("createdAt")
      .onSnapshot((projectsSnapshot) => {
        const projects = projectsSnapshot.docs.map(collectIdsAndDocs);

        setState({ isLoading: false, projects });
      });

    return () => unsubscribe();
  }, [user]);

  return { projects: state.projects, isProjectLoading: state.isLoading };
}

export default useProjects;
