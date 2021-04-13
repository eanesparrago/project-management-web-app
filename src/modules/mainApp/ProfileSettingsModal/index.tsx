import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  selectIsProfileSettingsModalOpen,
  setIsProfileSettingsModalOpen,
} from "../mainAppSlice";
import useCurrentUser from "api/hooks/useCurrentUser";
import useUpdateUser from "./utils/useUpdateUser";

import { Modal, Form, Input, Spin } from "antd";
import PhotoUpload from "./PhotoUpload";

export type ProfileSettingsFormData = {
  fullName: string;
};

function ProfileSettingsModal() {
  const dispatch = useAppDispatch();
  const [currentUser, isCurrentUserLoading] = useCurrentUser();
  const isProfileSettingsModalOpen = useAppSelector(
    selectIsProfileSettingsModalOpen
  );
  const { updateUser, isUpdateUserLoading } = useUpdateUser();

  function onClose() {
    dispatch(setIsProfileSettingsModalOpen(false));
  }

  function renderForm() {
    if (!currentUser || isCurrentUserLoading) {
      return <Spin />;
    }

    const currentUserData = currentUser.data();

    const initialValues = {
      fullName: currentUserData?.profile.fullName,
    };

    return (
      <Form
        size="large"
        layout="vertical"
        id="profileSettings"
        onFinish={updateUser}
        initialValues={initialValues}
      >
        <Form.Item label="Your photo">
          <PhotoUpload />
        </Form.Item>

        <Form.Item
          label="Your full name"
          name="fullName"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    );
  }

  return (
    <Modal
      visible={isProfileSettingsModalOpen}
      title="My Profile Settings"
      okText="Save"
      cancelText="Close"
      onCancel={onClose}
      okButtonProps={{
        htmlType: "submit",
        form: "profileSettings",
        loading: isUpdateUserLoading,
      }}
      destroyOnClose
    >
      {renderForm()}
    </Modal>
  );
}

export default ProfileSettingsModal;
