import { FunctionComponent, PropsWithChildren } from "react";
import styled from "styled-components";

type MainLayoutProps = PropsWithChildren<{
  className?: string;
  as?: string;
}>;

function MainLayout({ children, ...rest }: MainLayoutProps) {
  return <ScMainLayout {...rest}>{children}</ScMainLayout>;
}

const ScMainLayout: FunctionComponent = styled.div`
  padding-left: 6rem;

  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export default MainLayout;
