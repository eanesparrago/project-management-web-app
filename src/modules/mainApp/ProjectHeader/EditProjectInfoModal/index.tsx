import { useParams } from 'react-router'

import { Modal, Form, Input, message } from 'antd'

import { firestore } from 'api/firebase'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import useProject from 'api/projects/useProject'
import {
  selectIsEditProjectInfoModalOpen,
  setIsEditProjectInfoModalOpen,
} from '../projectHeaderSlice'

const { TextArea } = Input

function EditProjectInfoModal() {
  const dispatch = useAppDispatch()
  const isEditProjectInfoModalOpen = useAppSelector(
    selectIsEditProjectInfoModalOpen,
  )
  const { projectId } = useParams<{ projectId: string }>()
  const { project } = useProject(projectId)

  function closeModal() {
    dispatch(setIsEditProjectInfoModalOpen(false))
  }

  async function updateProject(values: any) {
    const projectRef = firestore.doc(`projects/${projectId}`)
    projectRef.update(values)

    await message.success('Project updated')
  }

  return (
    <Modal
      visible={isEditProjectInfoModalOpen}
      title='Project Details'
      okText='Save'
      cancelText='Close'
      onCancel={closeModal}
      okButtonProps={{ htmlType: 'submit', form: 'editProjectDetails' }}
      destroyOnClose
    >
      {project && (
        <Form
          size='large'
          layout='vertical'
          id='editProjectDetails'
          onFinish={updateProject}
          initialValues={{
            title: project.title,
            description: project.description,
          }}
        >
          <Form.Item
            label='Project name'
            name='title'
            rules={[
              { required: true, message: 'Please input the project name!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label='Description' name='description'>
            <TextArea />
          </Form.Item>
        </Form>
      )}
    </Modal>
  )
}

export default EditProjectInfoModal
