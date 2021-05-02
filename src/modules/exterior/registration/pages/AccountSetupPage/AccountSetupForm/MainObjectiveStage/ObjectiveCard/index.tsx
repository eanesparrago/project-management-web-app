import { ReactElement } from 'react'
import styled, { css } from 'styled-components'

import { Space, Typography, Card } from 'antd'

import { MainObjective } from '../../../accountSetupPageSlice'

const { Text } = Typography

interface ObjectiveCardProps {
  title: string
  body: string
  icon: ReactElement
  handleClick: (mainObjective: MainObjective) => void
  value: MainObjective
  isActive?: boolean
}

function ObjectiveCard({
  title,
  body,
  icon,
  handleClick,
  value,
  isActive = false,
  ...rest
}: ObjectiveCardProps) {
  function onClick() {
    handleClick(value)
  }

  return (
    <ScButton onClick={onClick} aria-selected={isActive}>
      <ScCard hoverable $isActive={isActive} {...rest}>
        <Space size='middle' align='start'>
          {icon}

          <Space direction='vertical'>
            <Text strong>{title}</Text>

            <Text>{body}</Text>
          </Space>
        </Space>
      </ScCard>
    </ScButton>
  )
}

const ScButton = styled.button`
  width: 100%;
`

const ScCard = styled(Card)<{ $isActive: boolean }>`
  ${p =>
    p.$isActive &&
    css`
      border-color: ${p.theme.color.primary.base} !important;
    `}
`

export default ObjectiveCard
