import { message } from "antd";
import { firestore } from "api/firebase";

function useDeleteGroup() {
  async function deleteGroup(projectId: string, groupId: string) {
    try {
      await firestore.doc(`projects/${projectId}/groups/${groupId}`).delete();

      message.info("Group deleted");
    } catch (error) {
      console.error(error);
      message.error("Error deleting group");
    }
  }
  return { deleteGroup };
}

export default useDeleteGroup;
