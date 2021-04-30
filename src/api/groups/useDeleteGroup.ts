import { message } from "antd";
import confirm from "antd/lib/modal/confirm";
import { firestore } from "api/firebase";

function useDeleteGroup() {
  async function deleteGroup(projectId: string, groupId: string) {
    try {
      const tasksSnapshot = await firestore
        .collection(`projects/${projectId}/groups/${groupId}/tasks`)
        .get();

      const groupRef = firestore.doc(`projects/${projectId}/groups/${groupId}`);

      const handleDeleteGroup = async () => {
        await groupRef.delete();
        message.info("Group deleted");
      };

      if (tasksSnapshot.size > 0) {
        confirm({
          title: "Are you sure you want to delete this group?",
          content: `This group contains ${tasksSnapshot.size} task(s).`,
          maskClosable: true,
          okText: "Delete group",
          okButtonProps: { danger: true },
          onOk: async () => await handleDeleteGroup(),
        });
        return;
      }

      await handleDeleteGroup();
    } catch (error) {
      console.error(error);
      message.error("Error deleting group");
    }
  }
  return { deleteGroup };
}

export default useDeleteGroup;
