import styled from 'styled-components'
import { Card, Button } from 'antd'
import Logo from 'components/Logo'
import LoginForm from './LoginForm'

export const PageBlock = styled.div`
  background-color: ${p => p.theme.color.grey.medium};
  min-height: 100vh;
  padding-top: 6rem;
`

export const ScCard = styled(Card)`
  width: 24rem;
  margin: 0 auto;
`

export const ScLogo = styled(Logo)`
  margin-bottom: 1.5rem;
  text-align: center;
`

export const ScForgotPasswordButton = styled(Button)`
  margin-bottom: 1.5rem;
`

export const ScLoginForm = styled(LoginForm)`
  margin-bottom: 0.5rem;
`

export const SignUpBlock = styled.div`
  text-align: center;
`
