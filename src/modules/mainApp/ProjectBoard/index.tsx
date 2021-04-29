import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import BoardGroup from "./BoardGroup";
import AddGroupInput from "./AddGroupInput";
import useProjectBoardGroups from "./utils/useProjectBoardGroups";
import useMoveTask from "./utils/useMoveTask";

function ProjectBoard({ ...rest }) {
  const { projectBoardGroups } = useProjectBoardGroups();
  const { moveTask } = useMoveTask();

  function handleDragEnd(result: DropResult) {
    moveTask(
      result.source.index,
      result.draggableId,
      result.source.droppableId,
      result.destination?.index,
      result.destination?.droppableId
    );
  }

  return (
    <ScProjectBoard {...rest}>
      <DragDropContext onDragEnd={handleDragEnd}>
        {projectBoardGroups &&
          projectBoardGroups.map((group) => (
            <BoardGroup key={group.id} groupId={group.id} title={group.title} />
          ))}
      </DragDropContext>

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
