import styled from "styled-components";

import { Typography } from "antd";
import ProjectPopupMenu from "./ProjectPopupMenu";
import EditProjectDetailsModal from "./EditProjectDetailsModal";
import UserMainAvatar from "./UserMainAvatar";

const { Title } = Typography;

function ProjectHeader() {
  return (
    <S.ProjectHeader>
      <Title className="ProjectHeader__Title" level={3}>
        [Project title]
      </Title>

      <ProjectPopupMenu />

      <EditProjectDetailsModal />

      <S.UserMainAvatar />
    </S.ProjectHeader>
  );
}

const S = {} as any;

S.ProjectHeader = styled.div`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${(p) => p.theme.color.grey.medium};
  display: flex;
  align-items: flex-start;

  .ProjectHeader__Title {
    margin-right: 0.5rem;
  }
`;

S.UserMainAvatar = styled(UserMainAvatar)`
  margin-left: auto;
`;

export default ProjectHeader;
