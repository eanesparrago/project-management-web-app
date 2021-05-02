import useSignIn from './utils/useSignIn'

import { Form, Input, Button } from 'antd'

type LoginFormData = {
  emailAddress: string
  password: string
}

function LoginForm({ ...rest }) {
  const { signIn, isLoading } = useSignIn()

  async function onFinish({ emailAddress, password }: LoginFormData) {
    await signIn(emailAddress, password)
  }

  return (
    <Form layout='vertical' {...rest} onFinish={onFinish}>
      <Form.Item
        label='Email address'
        name='emailAddress'
        rules={[
          { required: true, message: 'Please input your email address!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type='primary' block htmlType='submit' loading={isLoading}>
        Log in
      </Button>
    </Form>
  )
}

export default LoginForm
