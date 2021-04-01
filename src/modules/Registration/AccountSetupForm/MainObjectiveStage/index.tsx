import { Typography, Space, Button } from "antd";
import ObjectiveCard from "./ObjectiveCard";
import {
  FlagOutlined,
  BarChartOutlined,
  ProfileOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function MainObjectiveStage() {
  return (
    <Space direction="vertical" size="large">
      <Title>What's your main objective in Asana Clone?</Title>

      <Text type="secondary">
        Your choice here won't limit what you can do in Asana Clone.
      </Text>

      <Space size="middle" direction="vertical">
        <ObjectiveCard
          title="Goal management"
          body="Set strategic goals and align my organization in support of our mission"
          icon={<FlagOutlined />}
        ></ObjectiveCard>

        <ObjectiveCard
          title="Portfolio and workload management"
          body="Monitor my team's key initiatives and progress in one centralized view"
          icon={<BarChartOutlined />}
        ></ObjectiveCard>

        <ObjectiveCard
          title="Project and process management"
          body="Plan projects, coordinate tasks, and hit deadlines"
          icon={<ProfileOutlined />}
        ></ObjectiveCard>

        <ObjectiveCard
          title="Personal task management"
          body="Organize to-dos and plan out my work day"
          icon={<CheckCircleOutlined />}
        ></ObjectiveCard>
      </Space>

      <Space>
        <Button type="primary">Continue</Button>
        <Button type="text">I'm not sure yet</Button>
      </Space>
    </Space>
  );
}

export default MainObjectiveStage;
