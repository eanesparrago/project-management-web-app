import { useState } from "react";

function useIsShowingTaskOptions() {
  const [state, setState] = useState(false);

  function showTaskOptions() {
    setState(true);
  }

  function hideTaskOptions() {
    setState(false);
  }

  return { isShowingTaskOptions: state, showTaskOptions, hideTaskOptions };
}

export default useIsShowingTaskOptions;
