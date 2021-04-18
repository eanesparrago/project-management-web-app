import { Typography } from "antd";

const { Title } = Typography;

type ColumnTitleProps = {
  title: string;
};

function ColumnTitle({ title, ...rest }: ColumnTitleProps) {
  return (
    <Title level={4} editable {...rest}>
      {title}
    </Title>
  );
}

export default ColumnTitle;
