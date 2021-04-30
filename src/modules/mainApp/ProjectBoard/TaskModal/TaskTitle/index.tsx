import { Typography } from "antd";

const { Title } = Typography;

type TaskTitleProps = {
  title: string;
};

function TaskTitle({ title }: TaskTitleProps) {
  return <Title level={4} editable>{title}</Title>;
}

export default TaskTitle;
