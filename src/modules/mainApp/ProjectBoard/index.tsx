import styled from "styled-components";
import BoardColumn from "./BoardColumn";

function ProjectBoard({ ...rest }) {
  return (
    <ScProjectBoard {...rest}>
      <BoardColumn />
    </ScProjectBoard>
  );
}

const ScProjectBoard = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${(p) => p.theme.color.grey.light};
`;

export default ProjectBoard;
