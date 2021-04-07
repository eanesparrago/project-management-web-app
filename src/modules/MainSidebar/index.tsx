import { useEffect, useState } from "react";
import { firestore } from "backend/firebase";

import styled from "styled-components";
import { Menu } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import Logo from "components/Logo";

const { SubMenu } = Menu;

type Project = {
  id: string;
  title: string;
  description: string;
  user: {
    uid: string;
    displayName: string;
  };
};

function MainSidebar({ ...rest }) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function getProjects() {
      const snapshot = await firestore.collection("projects").get();

      const projects = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];

      setProjects(projects);
    }

    getProjects();
  }, []);

  return (
    <S.Menu
      defaultOpenKeys={["projects"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={false}
      {...rest}
    >
      <div className="MainSidebar__header-block">
        <Logo />
      </div>

      <SubMenu key="projects" icon={<UnorderedListOutlined />} title="Projects">
        {projects.map((project) => (
          <Menu.Item key={project.id}>{project.title}</Menu.Item>
        ))}
      </SubMenu>
    </S.Menu>
  );
}

const S = {} as any;

S.Menu = styled(Menu)`
  width: 16rem;
  height: 100vh;

  .MainSidebar__header-block {
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;

    > * {
      line-height: normal;
    }
  }
`;

export default MainSidebar;
