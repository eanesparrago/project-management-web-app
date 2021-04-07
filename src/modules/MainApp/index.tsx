import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import MainSidebar from "modules/MainSidebar";
import ProjectHeader from "modules/ProjectHeader";
import ProjectBoard from "modules/ProjectBoard";

function MainApp() {
  const { path } = useRouteMatch();

  return (
    <S.MainApp>
      <MainSidebar />

      <main className="MainApp__main-block">
        <Route path={`${path}/:projectId?`}>
          <ProjectHeader />
        </Route>

        <Switch>
          <Route path={`${path}/:projectId`}>
            <S.ProjectBoard />
          </Route>
        </Switch>
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
