import { message } from "antd";
import { firestore } from "api/firebase";

type GroupData = {
  title: string;
};

function useCreateGroup() {
  async function createGroup(projectId: string, groupData: GroupData) {
    try {
      const projectSnapshot = await firestore
        .doc(`projects/${projectId}`)
        .get();

      if (!projectSnapshot.exists) throw new Error("Project not found");

      const projectData = projectSnapshot.data();

      if (!projectData) throw new Error("No project data");

      const newGroupData = { ...groupData, createdAt: new Date() };

      const groupRef = await firestore
        .collection(`projects/${projectId}/groups`)
        .add(newGroupData);

      const groupOrder = projectData.groupOrder
        ? [...projectData.groupOrder, groupRef.id]
        : [groupRef.id];

      await projectSnapshot.ref.update({
        groupOrder,
      });
    } catch (error) {
      console.error(error);
      message.error("Error creating group");
    }
  }
  return { createGroup };
}

export default useCreateGroup;
