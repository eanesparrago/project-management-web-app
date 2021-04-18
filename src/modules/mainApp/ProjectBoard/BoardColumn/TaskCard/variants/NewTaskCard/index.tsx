import { useEffect, useRef } from "react";

import { Input } from "antd";
import { ScTaskCard } from "../../index";
import CompleteButton from "../../CompleteButton";

type NewTaskCardProps = {
  handleSetIsCreatingNewTask: (isCreatingNewTask: boolean) => void;
};

function NewTaskCard({ handleSetIsCreatingNewTask }: NewTaskCardProps) {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []); 

  function onBlur() {
    handleSetIsCreatingNewTask(false);
  }

  return (
    <ScTaskCard>
      <CompleteButton isComplete={false} />

      <Input
        placeholder="Write a task name"
        bordered={false}
        ref={inputRef}
        onBlur={onBlur}
      />
    </ScTaskCard>
  );
}

export default NewTaskCard;
