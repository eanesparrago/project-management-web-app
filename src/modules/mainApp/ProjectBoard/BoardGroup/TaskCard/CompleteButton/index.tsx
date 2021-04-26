import styled from "styled-components";
import { Button, Tooltip } from "antd";
import { CheckCircleOutlined, CheckCircleFilled } from "@ant-design/icons";

type CompleteButtonProps = {
  isComplete: boolean;
  className?: string;
  onClick?: () => void;
};

function CompleteButton({
  isComplete,
  className,
  onClick,
}: CompleteButtonProps) {
  const icon = isComplete ? <CompleteIcon /> : <IncompleteIcon />;

  return (
    <Tooltip
      className={className}
      title="Mark task complete"
      mouseEnterDelay={1}
    >
      <Button type="text" icon={icon} onClick={onClick} />
    </Tooltip>
  );
}

const CompleteIcon = () => <ScCheckCircleFilled />;

const ScCheckCircleFilled = styled(CheckCircleFilled)`
  color: ${(p) => p.theme.color.green.primary};
`;

const IncompleteIcon = () => <ScCheckCircleOutlined />;

const ScCheckCircleOutlined = styled(CheckCircleOutlined)`
  &:hover {
    color: ${(p) => p.theme.color.green.primary};
  }
`;

export default CompleteButton;
