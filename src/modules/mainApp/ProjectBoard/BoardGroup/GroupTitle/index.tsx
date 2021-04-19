import { useParams } from "react-router-dom";
import useUpdateGroup from "api/groups/useUpdateGroup";

import { Typography } from "antd";

const { Title } = Typography;

type GroupTitleProps = {
  title: string;
  groupId: string;
};

function GroupTitle({ title, groupId, ...rest }: GroupTitleProps) {
  const { updateGroup } = useUpdateGroup();
  const { projectId } = useParams<{ projectId: string }>();

  function onChange(value: string) {
    const newValue = value ? value : "Untitled group";

    updateGroup(projectId, groupId, { title: newValue });
  }

  return (
    <Title ellipsis level={4} editable={{ onChange }} {...rest}>
      {title}
    </Title>
  );
}

export default GroupTitle;
