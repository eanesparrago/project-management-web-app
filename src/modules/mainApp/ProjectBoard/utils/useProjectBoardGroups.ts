import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useProject from "api/projects/useProject";
import useGroups from "api/groups/useGroups";

function useProjectBoardGroups() {
  const { projectId } = useParams<{ projectId: string }>();
  const { project, isProjectLoading } = useProject(projectId);
  const { groups, isGroupsLoading } = useGroups(projectId);
  const prevProjectRef = useRef<typeof project>(null);
  const [projectBoardGroups, setProjectBoardGroups] = useState<typeof groups>(
    null
  );

  useEffect(() => {
    if (!project || !groups) return;

    // Make sure project is latest before updating
    // Prevents UI flashing of misordered groups
    if (prevProjectRef.current === project) {
      return;
    }
    prevProjectRef.current = project;

    // Sort groups by project.groupOrder
    const groupOrder = project.groupOrder;
    const order: { [id: string]: number } = {};

    groupOrder.forEach((groupId: string, index: number) => {
      order[groupId] = index;
    });

    const sortedGroups = groups
      .slice()
      .sort((groupA, groupB) => order[groupA.id] - order[groupB.id]);

    console.log("setProjectBoardGroups");

    setProjectBoardGroups(sortedGroups);
  }, [project, groups, setProjectBoardGroups]);

  return {
    projectBoardGroups,
    isProjectBoardGroupsLoading: isProjectLoading || isGroupsLoading,
  };
}

export default useProjectBoardGroups;
