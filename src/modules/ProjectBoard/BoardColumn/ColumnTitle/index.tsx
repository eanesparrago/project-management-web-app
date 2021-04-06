import { Typography } from "antd";

const { Title } = Typography;

function ColumnTitle({ ...rest }) {
  return (
    <Title level={4} editable {...rest}>
      To Do
    </Title>
  );
}

const S = {} as any;

export default ColumnTitle;
