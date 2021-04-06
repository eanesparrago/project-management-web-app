import styled from "styled-components";

import MainSidebar from "modules/MainSidebar";
import ProjectHeader from "modules/ProjectHeader";
import ProjectBoard from "modules/ProjectBoard";

function MainApp() {
  return (
    <S.MainApp>
      <MainSidebar />

      <main className="MainApp__main-block">
        <ProjectHeader />

        <S.ProjectBoard />
      </main>
    </S.MainApp>
  );
}

const S = {} as any;

S.MainApp = styled.div`
  display: flex;

  .MainApp__main-block {
    height: 100vh;
    flex-grow: 1;
    display: flex;
    flex-flow: column;
  }
`;

S.ProjectBoard = styled(ProjectBoard)`
  flex-grow: 1;
`;

export default MainApp;
