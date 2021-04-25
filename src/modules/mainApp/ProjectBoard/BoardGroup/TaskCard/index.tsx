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
      <ScCompleteButton isComplete={isComplete} />

      <ScText>{title}</ScText>
    </ScTaskCard>
  );
}

export const ScTaskCard = styled.div`
  display: flex;
  width: 100%;
  border-radius: ${(p) => p.theme.borderRadius.s};
  background-color: ${(p) => p.theme.color.white};
  padding: 0.75rem;
  padding-bottom: 1.5rem;
  ${(p) => p.theme.boxShadow["1"]}
  transition-property: box-shadow;
  transition-duration: 100ms;

  &:hover {
    ${(p) => p.theme.boxShadow["2"]}
  }
`;

const ScCompleteButton = styled(CompleteButton)`
  flex-shrink: 0;
`;

const ScText = styled(Text)`
  word-wrap: break-word;
  width: 85%;
  margin-top: 0.15rem;
`;

export default TaskCard;
