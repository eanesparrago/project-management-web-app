import { MouseEvent } from 'react'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

import styled from 'styled-components'
import { Button, Tooltip } from 'antd'
import { CheckCircleOutlined, CheckCircleFilled } from '@ant-design/icons'

type CompleteButtonProps = {
  isComplete: boolean
  size?: SizeType
  className?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

function CompleteButton({
  isComplete,
  className,
  size,
  onClick,
}: CompleteButtonProps) {
  const icon = isComplete ? <CompleteIcon /> : <IncompleteIcon />

  return (
    <Tooltip
      className={className}
      title='Mark task complete'
      mouseEnterDelay={1}
    >
      <Button type='text' icon={icon} size={size} onClick={onClick} />
    </Tooltip>
  )
}

const CompleteIcon = () => <ScCheckCircleFilled />

const ScCheckCircleFilled = styled(CheckCircleFilled)`
  color: ${p => p.theme.color.green.primary};
`

const IncompleteIcon = () => <ScCheckCircleOutlined />

const ScCheckCircleOutlined = styled(CheckCircleOutlined)`
  &:hover {
    color: ${p => p.theme.color.green.primary};
  }
`

export default CompleteButton
