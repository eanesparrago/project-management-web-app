import styled from "styled-components";
import { Button, Tooltip } from "antd";
import { CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons";

type CompleteButtonProps = {
  isComplete: boolean;
};

function CompleteButton({ isComplete }: CompleteButtonProps) {
  const icon = isComplete ? <CompleteIcon /> : <InCompleteIcon />;

  return (
    <Tooltip title="Mark task complete" mouseEnterDelay={1}>
      <Button type="text" icon={icon} />
    </Tooltip>
  );
}

const CompleteIcon = () => <ScCheckCircleFilled />;

const ScCheckCircleFilled = styled(CheckCircleFilled)`
  color: ${(p) => p.theme.color.green.primary};
`;

const InCompleteIcon = () => <CheckCircleOutlined />;

export default CompleteButton;
