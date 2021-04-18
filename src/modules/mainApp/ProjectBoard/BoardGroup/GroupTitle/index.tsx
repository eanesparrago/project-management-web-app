import { Typography } from "antd";

const { Title } = Typography;

type GroupTitleProps = {
  title: string;
};

function GroupTitle({ title, ...rest }: GroupTitleProps) {
  return (
    <Title level={4} editable {...rest}>
      {title}
    </Title>
  );
}

export default GroupTitle;
