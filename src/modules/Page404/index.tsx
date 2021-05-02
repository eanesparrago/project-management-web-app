import styled from 'styled-components'
import { Button, Typography } from 'antd'
import cheemsDoge from 'assets/cheems-doge.png'
import { useHistory } from 'react-router'

const { Title } = Typography

function Page404() {
  const history = useHistory()

  function goHome() {
    history.push('/')
  }

  return (
    <ScPage404>
      <ScCheemsDogeImg src={cheemsDoge} alt='' />

      <Title>404</Title>

      <Button type='primary' onClick={goHome} size='large'>
        Go back home
      </Button>
    </ScPage404>
  )
}

const ScPage404 = styled.div`
  text-align: center;
  padding-top: 4rem;

  > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`

const ScCheemsDogeImg = styled.img`
  width: 16rem;
`

export default Page404
