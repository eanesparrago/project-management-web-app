import styled from "styled-components";
import githubLogo from "assets/github-logo.png";

function ProjectInfo() {
  return (
    <ScProjectInfo>
      <a
        href="https://github.com/eanesparrago/asanaol"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div>Asanaol v1</div>
        <img src={githubLogo} alt="GitHub repo" />
      </a>
    </ScProjectInfo>
  );
}

const ScProjectInfo = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;

  a {
    display: flex;
    align-items: center;
    > *:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

export default ProjectInfo;
