import { useState } from "react";
import { storage } from "api/firebase";
import useCurrentUser from "api/hooks/useCurrentUser";
import validateFile from "./utils/validateFile";

import { message, Spin, Upload } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

function PhotoUpload() {
  const [currentUser, isCurrentUserLoading] = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);

  function beforeUpload(file: File) {
    return validateFile(file);
  }

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  if (isCurrentUserLoading) {
    return <Spin />;
  }
  
  const currentUserData = currentUser?.data();
  const photoURL = currentUserData?.photoURL;

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      showUploadList={false}
      beforeUpload={beforeUpload}
      customRequest={({ file }) => {
        // No access to the parameter type for this function...
        // So cannot be moved to separate function

        if (!currentUser) return false;

        if (!(file instanceof File)) return;

        setIsLoading(true);

        storage
          .ref()
          .child("user-profiles")
          .child(currentUser.id)
          .child(file.name)
          .put(file)
          .then((response) => {
            message.success("User photo updated");
            return response.ref.getDownloadURL();
          })
          .then((photoURL) => currentUser?.ref.update({ photoURL }))
          .catch((error) => {
            console.error(error);
            message.error("Error occurred updating user photo");
          })
          .finally(() => {
            setIsLoading(false);
          });
      }}
    >
      {photoURL ? (
        <img src={photoURL} alt="avatar" style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
}

export default PhotoUpload;
