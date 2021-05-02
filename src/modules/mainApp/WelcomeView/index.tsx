import styled from 'styled-components'
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

function WelcomeView() {
  return (
    <ScWelcomeView>
      <Title>Welcome to Asanaol v1</Title>

      <Link to='/create-project'>
        <Button type='primary' size='large'>
          Create a Project
        </Button>
      </Link>
    </ScWelcomeView>
  )
}

const ScWelcomeView = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  text-align: center;
`

export default WelcomeView
