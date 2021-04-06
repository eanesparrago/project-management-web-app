import styled from "styled-components";

import { Button, Tooltip } from "antd";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
import ColumnTitle from "./ColumnTitle";
import ColumnCard from "./ColumnCard";

import useHover from "./utils/useHover";

function BoardColumn() {
  const { isHovered, onHover, onHoverEnd } = useHover();

  return (
    <S.BoardColumn $isHovered={isHovered}>
      <div
        className="BoardColumn__header-block"
        onMouseLeave={onHoverEnd}
        onMouseEnter={onHover}
      >
        <S.ColumnTitle />

        <div className="BoardColumn__headerButtons-block">
          <Tooltip title="Add task">
            <Button type="link" icon={<PlusOutlined />} />
          </Tooltip>

          <Tooltip title="More actions">
            <Button type="link" icon={<EllipsisOutlined />} />
          </Tooltip>
        </div>
      </div>

      <ColumnCard />
    </S.BoardColumn>
  );
}

const S = {} as any;

S.BoardColumn = styled.div<{ $isHovered: boolean }>`
  width: 20rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition-property: box-shadow;
  transition-duration: 100ms;

  ${(p) => p.$isHovered && p.theme.boxShadow["1"]}

  .BoardColumn__header-block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    > *:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  .BoardColumn__headerButtons-block {
    display: flex;

    > *:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

S.ColumnTitle = styled(ColumnTitle)`
  flex-grow: 1;
`;

export default BoardColumn;
