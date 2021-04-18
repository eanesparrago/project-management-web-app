import { useState } from "react";

function useIsCreatingNewTask() {
  return useState(false);
}

export default useIsCreatingNewTask;
