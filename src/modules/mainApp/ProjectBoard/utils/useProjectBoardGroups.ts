import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProject from "api/projects/useProject";
import useGroups from "api/groups/useGroups";

function useProjectBoardGroups() {
  const { projectId } = useParams<{ projectId: string }>();
  const { project, isProjectLoading } = useProject(projectId);
  const { groups, isGroupsLoading } = useGroups(projectId);
  const [projectBoardGroups, setProjectBoardGroups] = useState<typeof groups>(
    null
  );

  useEffect(() => {
    if (!project || !groups) return;

    // Sort groups by project.groupOrder
    const groupOrder = project.groupOrder;
    const order: { [id: string]: number } = {};

    groupOrder.forEach((groupId: string, index: number) => {
      order[groupId] = index;
    });

    const sortedGroups = groups
      .slice()
      .sort((groupA, groupB) => order[groupA.id] - order[groupB.id]);

    setProjectBoardGroups(sortedGroups);
  }, [project, groups, setProjectBoardGroups]);

  return {
    projectBoardGroups,
    isProjectBoardGroupsLoading: isProjectLoading || isGroupsLoading,
  };
}

export default useProjectBoardGroups;
