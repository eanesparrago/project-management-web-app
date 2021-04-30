import { message } from "antd";
import { firestore } from "api/firebase";

type GroupData = {
  title: string;
};

function useCreateGroup() {
  async function createGroup(projectId: string, groupData: GroupData) {
    try {
      const newGroupData = { ...groupData, createdAt: new Date() };

      await firestore
        .collection(`projects/${projectId}/groups`)
        .add(newGroupData);
    } catch (error) {
      console.error(error);
      message.error("Error creating group");
    }
  }
  return { createGroup };
}

export default useCreateGroup;
