import { message } from 'antd'
import { firestore } from 'api/firebase'

type GroupData = {
  title: string
}

function useUpdateGroup() {
  async function updateGroup(
    projectId: string,
    groupId: string,
    groupData: GroupData,
  ) {
    try {
      await firestore
        .doc(`projects/${projectId}/groups/${groupId}`)
        .update(groupData)
    } catch (error) {
      console.error(error)
      message.error('Error updating group')
    }
  }

  return { updateGroup }
}

export default useUpdateGroup
