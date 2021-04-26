import styled from "styled-components";
import BoardGroup from "./BoardGroup";
import AddGroupInput from "./AddGroupInput";
import useProjectBoardGroups from "./utils/useProjectBoardGroups";

function ProjectBoard({ ...rest }) {
  const { projectBoardGroups } = useProjectBoardGroups();

  return (
    <ScProjectBoard {...rest}>
      {projectBoardGroups &&
        projectBoardGroups.map((group) => (
          <BoardGroup key={group.id} groupId={group.id} title={group.title} />
        ))}

      <AddGroupInput />
    </ScProjectBoard>
  );
}

const ScProjectBoard = styled.div`
  padding: 0.5rem 1rem 0 1rem;
  background-color: ${(p) => p.theme.color.grey.light};
  display: flex;
  overflow-x: auto;
`;

export default ProjectBoard;
