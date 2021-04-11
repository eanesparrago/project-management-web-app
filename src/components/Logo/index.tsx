import styled from "styled-components";

type LogoProps = {
  className?: string;
};

function Logo({ ...rest }: LogoProps) {
  return <ScLogo {...rest}>Asana Clone</ScLogo>;
}

 
const ScLogo = styled.div`
  white-space: nowrap;
`;

export default Logo;
