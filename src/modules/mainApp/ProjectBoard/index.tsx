import useGroups from "api/groups/useGroups";
import { useParams } from "react-router";
import styled from "styled-components";
import BoardGroup from "./BoardGroup";
import AddGroupInput from "./AddGroupInput";

function ProjectBoard({ ...rest }) {
  const { projectId } = useParams<{ projectId: string }>();
  const { groups } = useGroups(projectId);

  return (
    <ScProjectBoard {...rest}>
      {groups &&
        groups.map((group) => (
          <BoardGroup key={group.id} title={group.title} />
        ))}

      <AddGroupInput />
    </ScProjectBoard>
  );
}

const ScProjectBoard = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${(p) => p.theme.color.grey.light};
  display: flex;
  overflow-x: auto;
`;

export default ProjectBoard;
