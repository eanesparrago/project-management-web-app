import { KeyboardEvent, ChangeEvent, useEffect, useRef, useState } from "react";

import { Input } from "antd";
import { ScTaskCard } from "../../index";
import CompleteButton from "../../CompleteButton";

import useCreateTask from "api/tasks/useCreateTask";
import { useParams } from "react-router";

type NewTaskCardProps = {
  handleSetIsCreatingNewTask: (isCreatingNewTask: boolean) => void;
  groupId: string;
};

function NewTaskCard({
  handleSetIsCreatingNewTask,
  groupId,
}: NewTaskCardProps) {
  const inputRef = useRef<any>(null);
  const { createTask } = useCreateTask();
  const [taskTitle, setTaskTitle] = useState("");
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function onCreateTask() {
    createTask(projectId, groupId, { title: taskTitle });
  }

  function onBlur() {
    if (taskTitle) {
      onCreateTask();
      handleSetIsCreatingNewTask(false);
    }

    handleSetIsCreatingNewTask(false);
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && taskTitle) {
      setTaskTitle("");
      onCreateTask();
    }

    if (event.key === "Escape") {
      handleSetIsCreatingNewTask(false);
    }
  }

  return (
    <ScTaskCard>
      <CompleteButton isComplete={false} />

      <Input
        placeholder="Write a task name"
        bordered={false}
        ref={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={taskTitle}
      />
    </ScTaskCard>
  );
}

export default NewTaskCard;
