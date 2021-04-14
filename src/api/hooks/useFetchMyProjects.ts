import { firestore, auth } from "api/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

function useFetchMyProjects() {
  const [user] = useAuthState(auth);

  return useCollectionData(
    user && firestore.collection("projects").where("user.uid", "==", user?.uid),
    { idField: "id" }
  );
}

export default useFetchMyProjects;
