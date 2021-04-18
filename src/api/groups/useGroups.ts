import { firestore } from "api/firebase";
import collectIdsAndDocs from "api/utils/collectIdsAndDocs";
import { useEffect, useState } from "react";

function useGroups(projectId: string) {
  const [groups, setGroups] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = firestore
      .collection(`projects/${projectId}/groups`)
      .onSnapshot((snapshot) => {
        const groups = snapshot.docs.map(collectIdsAndDocs);

        setGroups(groups);
        setIsLoading(false);
      });

    return () => unsubscribe();
  }, [projectId]);

  return { groups, isGroupsLoading: isLoading };
}

export default useGroups;
