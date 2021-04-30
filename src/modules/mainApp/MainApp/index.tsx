import styled from "styled-components";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import MainSidebar from "../MainSidebar";
import ProjectHeader from "../ProjectHeader";
import ProjectBoard from "../ProjectBoard";
import ProfileSettingsModal from "../ProfileSettingsModal";

function MainApp() {
  const { path } = useRouteMatch();

  return (
    <PageBlock>
      <MainSidebar />

      <MainBlock>
        <Route path={`${path}/:projectId?`}>
          <ProjectHeader />
        </Route>

        <Switch>
          <Route path={`${path}/:projectId`}>
            <ScProjectBoard />
          </Route>

          <Route path="*">
            <div>
              HEY
              {/* TODO: Add UI */}
            </div>
          </Route>
        </Switch>
      </MainBlock>

      <ProfileSettingsModal />
    </PageBlock>
  );
}

const PageBlock = styled.div`
  display: flex;
`;

const MainBlock = styled.div`
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  overflow: hidden;
`;

const ScProjectBoard = styled(ProjectBoard)`
  flex-grow: 1;
`;

export default MainApp;
