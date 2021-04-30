import { KeyboardEvent, ChangeEvent, useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Input } from "antd";
import CompleteButton from "../../../../components/CompleteButton";
import { ScTaskCard } from "../../index";

import useCreateTask from "api/tasks/useCreateTask";
import { useParams } from "react-router";

const { TextArea } = Input;

type NewTaskCardProps = {
  handleSetIsCreatingNewTask: (isCreatingNewTask: boolean) => void;
  groupId: string;
  className?: string;
};

function NewTaskCard({
  handleSetIsCreatingNewTask,
  groupId,
  className,
}: NewTaskCardProps) {
  const textAreaRef = useRef<any>(null);
  const { createTask } = useCreateTask();
  const [taskTitle, setTaskTitle] = useState<string>("");
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    textAreaRef.current.focus();
  }, []);

  async function onBlur() {
    if (taskTitle) {
      await createTask(projectId, groupId, { title: taskTitle });
    }
    handleSetIsCreatingNewTask(false);
  }

  function onChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setTaskTitle(event.target.value);
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && taskTitle) {
      createTask(projectId, groupId, { title: taskTitle });

      process.nextTick(() => {
        setTaskTitle("");
      });
    }

    if (event.key === "Escape") {
      handleSetIsCreatingNewTask(false);
    }
  }

  return (
    <ScNewTaskCard className={className}>
      <CompleteButton isComplete={false} />

      <ScTextArea
        placeholder="Write a task name"
        bordered={false}
        ref={textAreaRef}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={taskTitle}
      />
    </ScNewTaskCard>
  );
}

const ScNewTaskCard = styled(ScTaskCard)`
  border: 1px solid ${(p) => p.theme.color.grey.dark};
`;

const ScTextArea = styled(TextArea)`
  resize: none;
`;

export default NewTaskCard;
