import styled from 'styled-components'

interface LogoProps {
  className?: string;
}

function Logo({ ...rest }: LogoProps) {
  return <S.Logo {...rest}>Asana Clone</S.Logo>;
}

const S = {} as any;

S.Logo = styled.div`
  white-space: nowrap;
`

export default Logo;
