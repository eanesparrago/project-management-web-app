import styled from "styled-components";

import { Typography } from "antd";
import CompleteButton from "./CompleteButton";

const { Text } = Typography;

type TaskCardProps = {
  title: string;
  isComplete: boolean;
};

function TaskCard({ title, isComplete, ...rest }: TaskCardProps) {
  return (
    <ScTaskCard role="button" {...rest}>
      <CompleteButton isComplete={isComplete} />

      <Text>{title}</Text>
    </ScTaskCard>
  );
}

export const ScTaskCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: ${(p) => p.theme.borderRadius.s};
  background-color: ${(p) => p.theme.color.white};
  padding: 0.75rem;
  ${(p) => p.theme.boxShadow["1"]}
  transition-property: box-shadow;
  transition-duration: 100ms;

  &:hover {
    ${(p) => p.theme.boxShadow["2"]}
  }
`;

export default TaskCard;
