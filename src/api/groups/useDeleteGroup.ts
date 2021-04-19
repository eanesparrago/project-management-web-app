import { message } from "antd";
import { firestore } from "api/firebase";

function useDeleteGroup() {
  async function deleteGroup(projectId: string, groupId: string) {
    try {
      const projectSnapshot = await firestore
        .doc(`projects/${projectId}`)
        .get();

      if (!projectSnapshot.exists) throw new Error("Project not found");

      const projectData = projectSnapshot.data();

      if (!projectData) throw new Error("No project data");

      await firestore.doc(`projects/${projectId}/groups/${groupId}`).delete();

      const groupOrder = projectData.groupOrder.filter(
        (_groupId: string) => groupId !== _groupId
      );

      await projectSnapshot.ref.update({
        groupOrder,
      });

      message.info("Group deleted");
    } catch (error) {
      console.error(error);
      message.error("Error deleting group");
    }
  }
  return { deleteGroup };
}

export default useDeleteGroup;
