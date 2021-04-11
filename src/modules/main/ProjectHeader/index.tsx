import styled from "styled-components";

import { Typography } from "antd";
import ProjectPopupMenu from "./ProjectPopupMenu";
import EditProjectDetailsModal from "./EditProjectDetailsModal";
import UserMainAvatar from "./UserMainAvatar";

const { Title } = Typography;

function ProjectHeader() {
  return (
    <ScProjectHeader>
      <ScTitle level={3}>[Project title]</ScTitle>

      <ProjectPopupMenu />

      <EditProjectDetailsModal />

      <ScUserMainAvatar />
    </ScProjectHeader>
  );
}

const ScProjectHeader = styled.div`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${(p) => p.theme.color.grey.medium};
  display: flex;
  align-items: flex-start;
`;

const ScTitle = styled(Title)`
  margin-right: 0.5rem;
`;

const ScUserMainAvatar = styled(UserMainAvatar)`
  margin-left: auto;
`;

export default ProjectHeader;
