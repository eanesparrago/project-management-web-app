import styled from "styled-components";

import { Typography } from "antd";

import CompleteButton from "./CompleteButton";

const { Text } = Typography;

function ColumnCard({ ...rest }) {
  return (
    <S.ColumnCard role="button" {...rest}>
      <CompleteButton />

      <Text>Task 1</Text>
    </S.ColumnCard>
  );
}

const S = {} as any;

S.ColumnCard = styled.div`
  display: block;
  width: 100%;
  border-radius: 8px;
  background-color: ${(p) => p.theme.color.white};
  padding: 0.75rem;
  ${(p) => p.theme.boxShadow["1"]}
  transition-property: box-shadow;
  transition-duration: 100ms;

  &:hover {
    ${(p) => p.theme.boxShadow["2"]}
  }
`;

export default ColumnCard;
