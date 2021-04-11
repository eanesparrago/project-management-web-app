import styled from "styled-components";

import { Button, Tooltip } from "antd";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
import ColumnTitle from "./ColumnTitle";
import ColumnCard from "./ColumnCard";

import useHover from "./utils/useHover";

function BoardColumn() {
  const { isHovered, onHover, onHoverEnd } = useHover();

  return (
    <ScBoardColumn $isHovered={isHovered}>
      <HeaderBlock onMouseLeave={onHoverEnd} onMouseEnter={onHover}>
        <ScColumnTitle />

        <HeaderButtonsBlock>
          <Tooltip title="Add task">
            <Button type="text" icon={<PlusOutlined />} />
          </Tooltip>

          <Tooltip title="More actions">
            <Button type="text" icon={<EllipsisOutlined />} />
          </Tooltip>
        </HeaderButtonsBlock>
      </HeaderBlock>

      <ColumnCard />
    </ScBoardColumn>
  );
}

const ScBoardColumn = styled.div<{ $isHovered: boolean }>`
  width: 20rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition-property: box-shadow;
  transition-duration: 100ms;

  ${(p) => p.$isHovered && p.theme.boxShadow["1"]}
`;

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const HeaderButtonsBlock = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const ScColumnTitle = styled(ColumnTitle)`
  flex-grow: 1;
`;

export default BoardColumn;
