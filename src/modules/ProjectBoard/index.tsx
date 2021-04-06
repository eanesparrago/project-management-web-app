import styled from "styled-components";

import BoardColumn from "./BoardColumn";

function ProjectBoard({ ...rest }) {
  return (
    <S.ProjectBoard {...rest}>
      <BoardColumn />
    </S.ProjectBoard>
  );
}

const S = {} as any;

S.ProjectBoard = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${(p) => p.theme.color.grey.light};
`;

export default ProjectBoard;
