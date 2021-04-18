import { ReactNode } from "react";
import styled from "styled-components";

type EmptyTasksBlockProps = {
  children?: ReactNode;
};

function EmptyTasksBlock({ children }: EmptyTasksBlockProps) {
  return <ScEmptyTasksBlock>{children}</ScEmptyTasksBlock>;
}

const ScEmptyTasksBlock = styled.div`
  background-image: linear-gradient(
    to bottom,
    ${(p) => p.theme.color.grey.medium},
    ${(p) => p.theme.color.grey.light}
  );
  height: 100%;
  border-radius: ${(p) => p.theme.borderRadius.s};
  padding: 0.75rem;
`;

export default EmptyTasksBlock;
