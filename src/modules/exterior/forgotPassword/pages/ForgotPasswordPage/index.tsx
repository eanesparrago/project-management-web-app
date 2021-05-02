import useSendPasswordResetEmail from './utils/useSendPasswordResetEmail'

import { Typography, Input, Form, Button } from 'antd'
import Logo from 'components/Logo'
import {
  PageBlock,
  HeaderBlock,
  MainBlock,
  ScForm,
  ScTitle,
} from '../../../styles'

const { Text } = Typography

type ForgotPasswordFormData = {
  emailAddress: string
}

function ForgotPasswordPage() {
  const {
    sendPasswordResetEmail,
    isSendPasswordResetEmailLoading,
    isSendPasswordResetEmailSuccess,
    recipientEmailAddress,
  } = useSendPasswordResetEmail()

  async function onFinish({ emailAddress }: ForgotPasswordFormData) {
    await sendPasswordResetEmail(emailAddress)
  }

  function renderForm() {
    if (isSendPasswordResetEmailSuccess) {
      return (
        <>
          <ScTitle>Instructions sent!</ScTitle>

          <Text>
            Instructions for resetting your password have been sent to{' '}
            <Text strong>{recipientEmailAddress}</Text>.
          </Text>
        </>
      )
    }

    return (
      <>
        <ScTitle>Forgot password?</ScTitle>

        <ScForm size='large' onFinish={onFinish} layout='vertical'>
          <Form.Item
            label='Email address'
            name='emailAddress'
            rules={[
              { required: true, message: 'Please input your email address!' },
              { type: 'email', message: 'Email is not a valid email' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              block
              loading={isSendPasswordResetEmailLoading}
            >
              Send me instructions
            </Button>
          </Form.Item>
        </ScForm>
      </>
    )
  }

  return (
    <PageBlock>
      <HeaderBlock>
        <Logo />
      </HeaderBlock>

      <MainBlock>{renderForm()}</MainBlock>
    </PageBlock>
  )
}

export default ForgotPasswordPage
