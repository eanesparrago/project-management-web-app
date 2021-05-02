import { useState } from 'react'

function useIsCreatingNewGroup() {
  const [isCreatingNewGroup, setIsCreatingNewGroup] = useState(false)

  function startCreatingNewGroup() {
    setIsCreatingNewGroup(true)
  }

  function endCreatingNewGroup() {
    setIsCreatingNewGroup(false)
  }

  return { isCreatingNewGroup, startCreatingNewGroup, endCreatingNewGroup }
}

export default useIsCreatingNewGroup
