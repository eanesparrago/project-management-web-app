import styled from "styled-components";

import { Typography } from "antd";

const { Title } = Typography;

function ProjectHeader() {
  return (
    <S.ProjectHeader>
      <Title level={3}>Project 1</Title>
    </S.ProjectHeader>
  );
}

const S = {} as any;

S.ProjectHeader = styled.div`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${(p) => p.theme.color.grey};
`;

export default ProjectHeader;
