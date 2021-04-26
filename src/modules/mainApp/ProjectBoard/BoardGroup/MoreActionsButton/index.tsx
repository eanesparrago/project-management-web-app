import { useParams } from "react-router";
import useDeleteGroup from "api/groups/useDeleteGroup";

import { Button, Popover, Tooltip } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

type MoreActionsButtonProps = {
  groupId: string;
};

function MoreActionsButton({ groupId }: MoreActionsButtonProps) {
  const { projectId } = useParams<{ projectId: string }>();
  const { deleteGroup } = useDeleteGroup();

  function onDelete() {
    deleteGroup(projectId, groupId);
  }

  const content = (
    <>
      <Button block onClick={onDelete}>
        Delete group
      </Button>
    </>
  );

  return (
    <Popover content={content} trigger="focus" placement="bottomLeft">
      <Tooltip title="More actions" trigger="hover">
        <Button type="text" icon={<EllipsisOutlined />} />
      </Tooltip>
    </Popover>
  );
}

export default MoreActionsButton;
