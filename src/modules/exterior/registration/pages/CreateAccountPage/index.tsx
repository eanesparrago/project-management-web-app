import useCreateUser from './utils/useCreateUser'

import { Input, Form, Button } from 'antd'
import Logo from 'components/Logo'
import {
  ScTitle,
  ScForm,
  HeaderBlock,
  PageBlock,
  MainBlock,
} from '../../../styles'

type CreateAccountForm = {
  emailAddress: string
  password: string
}

function CreateAccountPage() {
  const { createUser, isLoading } = useCreateUser()

  async function onFinish({ emailAddress, password }: CreateAccountForm) {
    await createUser(emailAddress, password)
  }

  return (
    <PageBlock>
      <HeaderBlock>
        <Logo />
      </HeaderBlock>

      <MainBlock>
        <ScTitle>Create your Asanaol v1 account</ScTitle>

        <ScForm size='large' onFinish={onFinish} layout='vertical'>
          <Form.Item
            label='Email address'
            name='emailAddress'
            rules={[
              { required: true, message: 'Please input your email address!' },
              { type: 'email', message: 'Email is not a valid email' },
            ]}
          >
            <Input data-testid='emailInput' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 8, message: 'Password must be 8 characters or longer!' },
            ]}
          >
            <Input.Password data-testid='passwordInput' />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              block
              loading={isLoading}
              data-testid='submitBtn'
            >
              Create your account
            </Button>
          </Form.Item>
        </ScForm>
      </MainBlock>
    </PageBlock>
  )
}

export default CreateAccountPage
