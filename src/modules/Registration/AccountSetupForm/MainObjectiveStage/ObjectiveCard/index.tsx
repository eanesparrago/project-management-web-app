import { ReactElement } from "react";

import { Space, Typography, Card } from "antd";

const { Text } = Typography;

interface ObjectiveCardProps {
  title: string;
  body: string;
  icon: ReactElement;
}

function ObjectiveCard({ title, body, icon }: ObjectiveCardProps) {
  return (
    <Card hoverable>
      <Space size="middle" align="start">
        {icon}

        <Space direction="vertical">
          <Text strong>{title}</Text>

          <Text>{body}</Text>
        </Space>
      </Space>
    </Card>
  );
}

export default ObjectiveCard;
