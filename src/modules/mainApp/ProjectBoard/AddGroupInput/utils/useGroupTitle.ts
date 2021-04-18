import  { ChangeEvent, useState } from "react";

function useGroupTitle() {
  const [groupTitle, setGroupTitle] = useState("");

  function onGroupTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setGroupTitle(e.target.value.trim());
  }

  return {groupTitle, onGroupTitleChange};
}

export default useGroupTitle;
