import { useAppDispatch } from 'app/hooks'
import { setIsProfileSettingsModalOpen } from 'modules/mainApp/mainAppSlice'
import cheemsDoge from 'assets/cheems-doge.png'

import { Avatar, Popover, Button } from 'antd'
import LogoutButton from 'components/LogoutButton'
import useCurrentUser from 'api/hooks/useCurrentUser'

function UserMainAvatar({ ...rest }) {
  const dispatch = useAppDispatch()
  const [currentUser] = useCurrentUser()

  function onMyProfileSettingsClick() {
    dispatch(setIsProfileSettingsModalOpen(true))
  }

  const content = (
    <>
      <Button type='text' onClick={onMyProfileSettingsClick} block>
        My Profile Settings...
      </Button>
      <LogoutButton block />
    </>
  )

  const src = currentUser?.data()?.photoURL || cheemsDoge

  return (
    <Popover content={content} placement='bottomRight' trigger='focus'>
      <button {...rest}>
        <Avatar src={src} />
      </button>
    </Popover>
  )
}

export default UserMainAvatar
