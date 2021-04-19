import { KeyboardEvent } from "react";
import { useParams } from "react-router";
import useCreateGroup from "api/groups/useCreateGroup";
import useIsCreatingNewGroup from "./utils/useIsCreatingNewGroup";
import useGroupTitle from "./utils/useGroupTitle";

import styled from "styled-components";
import { Typography, Input } from "antd";
import EmptyTasksBlock from "../components/EmptyTasksBlock";

const { Title } = Typography;

type AddGroupInputProps = {};

function AddGroupInput({ ...rest }: AddGroupInputProps) {
  const { projectId } = useParams<{ projectId: string }>();
  const { createGroup } = useCreateGroup();
  const { groupTitle, onGroupTitleChange, clearGroupTitle } = useGroupTitle();
  const {
    isCreatingNewGroup,
    startCreatingNewGroup,
    endCreatingNewGroup,
  } = useIsCreatingNewGroup();

  function onCreateGroup(isUntitled?: boolean) {
    if (groupTitle || isUntitled) {
      const title = groupTitle ? groupTitle : "Untitled group";

      createGroup(projectId, { title });
    }

    clearGroupTitle();
    endCreatingNewGroup();
  }

  function onInputBlur() {
    onCreateGroup();
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onCreateGroup(true);
    }

    if (event.key === "Escape") {
      endCreatingNewGroup();
    }
  }

  return (
    <ScAddGroupInput>
      {!isCreatingNewGroup && (
        <ScTitle
          level={4}
          type="secondary"
          {...rest}
          onClick={startCreatingNewGroup}
        >
          + Add group
        </ScTitle>
      )}

      {isCreatingNewGroup && (
        <>
          <ScInput
            placeholder="New group"
            onBlur={onInputBlur}
            autoFocus
            onChange={onGroupTitleChange}
            onKeyDown={onKeyDown}
          />

          <EmptyTasksBlock />
        </>
      )}
    </ScAddGroupInput>
  );
}

const ScAddGroupInput = styled.div`
  flex-shrink: 0;
  padding: 0.75rem 1rem;
  width: 20rem;
  display: flex;
  flex-flow: column;
`;

const ScTitle = styled(Title)`
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: ${(p) => p.theme.color.primary.base};
  }
`;

const ScInput = styled(Input)`
  margin-bottom: 1rem;
`;

export default AddGroupInput;
