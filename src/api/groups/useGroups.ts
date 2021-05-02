import firebase from 'firebase'
import { firestore } from 'api/firebase'
import collectIdsAndDocs from 'api/utils/collectIdsAndDocs'
import { useEffect, useState } from 'react'

function useGroups(projectId: string) {
  const [state, setState] = useState<{
    groups: firebase.firestore.DocumentData[] | null
    isLoading: boolean
  }>({ groups: null, isLoading: false })

  useEffect(() => {
    setState({ groups: null, isLoading: true })

    const unsubscribe = firestore
      .collection(`projects/${projectId}/groups`)
      .orderBy('createdAt')
      .onSnapshot(groupsSnapshot => {
        const groups = groupsSnapshot.docs.map(collectIdsAndDocs)

        setState({ groups, isLoading: false })
      })

    return () => unsubscribe()
  }, [projectId])

  return { groups: state.groups, isGroupsLoading: state.isLoading }
}

export default useGroups
