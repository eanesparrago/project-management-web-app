import { useHistory, useRouteMatch, NavLink } from "react-router-dom";

import styled from "styled-components";
import { Menu, MenuProps } from "antd";
import { UnorderedListOutlined, PlusOutlined } from "@ant-design/icons";
import Logo from "components/Logo";

import useProjects from "api/projects/useProjects";

const { SubMenu } = Menu;

function MainSidebar({ ...rest }) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const { projects } = useProjects();

  function goToCreateProject() {
    history.push("/create-project");
  }

  return (
    <ScMenu
      defaultOpenKeys={["projects"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={false}
      {...rest}
    >
      <HeaderBlock className="MainSidebar__header-block">
        <Logo />
      </HeaderBlock>

      <Menu.Item icon={<PlusOutlined />} onClick={goToCreateProject}>
        Create Project
      </Menu.Item>

      <SubMenu key="projects" icon={<UnorderedListOutlined />} title="Projects">
        {projects?.map((project) => (
          <Menu.Item key={project.id}>
            <NavLink to={`${url}/${project.id}`}>{project.title}</NavLink>
          </Menu.Item>
        ))}
      </SubMenu>
    </ScMenu>
  );
}

const ScMenu: typeof Menu = styled(Menu)<MenuProps>`
  flex-shrink: 0;
  width: 16rem;
  height: 100vh;
` as any;

const HeaderBlock = styled.div`
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;

  > * {
    line-height: normal;
  }
`;

export default MainSidebar;
