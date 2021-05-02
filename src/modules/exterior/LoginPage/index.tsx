import { signInWithGoogle } from 'api/firebase'
import { Link, useHistory } from 'react-router-dom'

import { Button, Divider, Typography } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import {
  ScForgotPasswordButton,
  PageBlock,
  ScCard,
  ScLoginForm,
  ScLogo,
  SignUpBlock,
} from './styles'

function LoginPage() {
  const history = useHistory()

  function onLoginWithGoogle() {
    signInWithGoogle()
  }

  function onGoToForgotPassword() {
    history.push('/forgot-password')
  }

  return (
    <PageBlock>
      <ScCard>
        <ScLogo />

        <Button
          size='large'
          block
          icon={<GoogleOutlined />}
          onClick={onLoginWithGoogle}
        >
          Login with Google
        </Button>

        <Divider />

        <ScLoginForm />

        <ScForgotPasswordButton
          type='text'
          block
          onClick={onGoToForgotPassword}
        >
          Forgot your password?
        </ScForgotPasswordButton>

        <SignUpBlock>
          <Typography.Text>
            Don't have an account?{' '}
            <Link to='/create-account' component={Typography.Link}>
              Sign up
            </Link>
            <Typography.Link></Typography.Link>
          </Typography.Text>
        </SignUpBlock>
      </ScCard>
    </PageBlock>
  )
}

export default LoginPage
