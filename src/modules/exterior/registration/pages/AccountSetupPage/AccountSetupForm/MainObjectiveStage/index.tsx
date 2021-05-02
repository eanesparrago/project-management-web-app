import { useState } from 'react'

import { Typography, Space, Button } from 'antd'
import ObjectiveCard from './ObjectiveCard'
import {
  FlagOutlined,
  BarChartOutlined,
  ProfileOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'

import { useAppDispatch } from 'app/hooks'
import {
  setStage,
  setMainObjective as setRegistrationMainObjective,
  MainObjective,
} from '../../accountSetupPageSlice'

const { Title, Text } = Typography

function MainObjectiveStage() {
  const dispatch = useAppDispatch()
  const [mainObjective, setMainObjective] = useState<MainObjective>(null)

  function onObjectiveSelect(objective: MainObjective) {
    setMainObjective(objective)
  }

  function onContinue() {
    dispatch(setRegistrationMainObjective(mainObjective))
    dispatch(setStage('firstProject'))
  }

  function onSkip() {
    dispatch(setRegistrationMainObjective(null))
    dispatch(setStage('firstProject'))
  }

  function getIsActive(objective: MainObjective) {
    return mainObjective === objective
  }

  return (
    <Space direction='vertical' size='large'>
      <Title>What's your main objective in Asana Clone?</Title>

      <Text type='secondary'>
        Your choice here won't limit what you can do in Asana Clone.
      </Text>

      <Space size='middle' direction='vertical'>
        <ObjectiveCard
          title='Goal management'
          body='Set strategic goals and align my organization in support of our mission'
          icon={<FlagOutlined />}
          handleClick={onObjectiveSelect}
          value='goalManagement'
          isActive={getIsActive('goalManagement')}
        ></ObjectiveCard>

        <ObjectiveCard
          title='Portfolio and workload management'
          body="Monitor my team's key initiatives and progress in one centralized view"
          icon={<BarChartOutlined />}
          handleClick={onObjectiveSelect}
          value='portfolioAndWorkloadManagement'
          isActive={getIsActive('portfolioAndWorkloadManagement')}
        ></ObjectiveCard>

        <ObjectiveCard
          title='Project and process management'
          body='Plan projects, coordinate tasks, and hit deadlines'
          icon={<ProfileOutlined />}
          handleClick={onObjectiveSelect}
          value='projectAndProcessManagement'
          isActive={getIsActive('projectAndProcessManagement')}
        ></ObjectiveCard>

        <ObjectiveCard
          title='Personal task management'
          body='Organize to-dos and plan out my work day'
          icon={<CheckCircleOutlined />}
          handleClick={onObjectiveSelect}
          value='personalTaskManagement'
          isActive={getIsActive('personalTaskManagement')}
        ></ObjectiveCard>
      </Space>

      <Space>
        <Button type='primary' onClick={onContinue} disabled={!mainObjective}>
          Continue
        </Button>

        <Button type='text' onClick={onSkip}>
          I'm not sure yet
        </Button>
      </Space>
    </Space>
  )
}

export default MainObjectiveStage
