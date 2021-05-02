import { auth } from 'api/firebase'
import { useState } from 'react'
import { message } from 'antd'

function useResendEmail() {
  const [isLoading, setIsLoading] = useState(false)
  const [isResendEmailSuccess, setResendEmailSuccess] = useState(false)

  async function resendEmail() {
    try {
      setIsLoading(true)
      await auth.currentUser?.sendEmailVerification()

      setIsLoading(false)
      setResendEmailSuccess(true)
      message.info('Confirmation email sent')
    } catch (error) {
      console.error(error)

      setIsLoading(false)
      message.error(error.message)
    }
  }

  return { resendEmail, isResendEmailLoading: isLoading, isResendEmailSuccess }
}

export default useResendEmail
