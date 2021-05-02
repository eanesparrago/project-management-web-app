import { useAppDispatch } from 'app/hooks'
import localStorage from 'utils/localStorage'
import { setStage, setFullName } from '../../accountSetupPageSlice'

import { Typography, Space, Input, Form, Button } from 'antd'
import { useMemo } from 'react'

const { Title, Text } = Typography

type AccountInfoForm = {
  fullName: string
}

function AccountInfoStage() {
  const dispatch = useAppDispatch()

  function onFinish(values: AccountInfoForm) {
    dispatch(setFullName(values.fullName))

    dispatch(setStage('aboutYourself'))
  }

  const emailAddress = useMemo(() => localStorage.get('emailAddress'), [])

  return (
    <Space direction='vertical' size='large'>
      <Title>Welcome to Asana Clone!</Title>

      {emailAddress && (
        <Text type='secondary'>You're setting up as {emailAddress}</Text>
      )}

      <Form layout='vertical' name='accountInfoStage' onFinish={onFinish}>
        <Form.Item
          label="What's your full name?"
          name='fullName'
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input size='large'></Input>
        </Form.Item>

        <Form.Item>
          <Button size='large' type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}

export default AccountInfoStage
