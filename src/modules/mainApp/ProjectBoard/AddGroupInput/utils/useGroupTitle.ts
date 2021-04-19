import { ChangeEvent, useState } from "react";

function useGroupTitle() {
  const [groupTitle, setGroupTitle] = useState("");

  function onGroupTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setGroupTitle(e.target.value.trim());
  }

  function clearGroupTitle() {
    setGroupTitle("");
  }

  return { groupTitle, onGroupTitleChange, clearGroupTitle };
}

export default useGroupTitle;
