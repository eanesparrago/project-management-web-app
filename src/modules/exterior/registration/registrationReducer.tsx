import { combineReducers } from 'redux'
import accountSetupPageSlice from './pages/AccountSetupPage/accountSetupPageSlice'

export default combineReducers({
  accountSetupPage: accountSetupPageSlice,
})
