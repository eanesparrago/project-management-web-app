import { Typography } from "antd";

const { Text } = Typography;

type TaskDescriptionProps = {
  description?: string;
};

function TaskDescription({ description }: TaskDescriptionProps) {
  return (
    <span>
      <Text editable>
        {description ? (
          description
        ) : (
          <Text type="secondary">Add more detail to this task...</Text>
        )}
      </Text>
    </span>
  );
}

export default TaskDescription;
