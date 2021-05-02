import { combineReducers } from 'redux'
import authSlice from './authSlice'

const appReducer = combineReducers({
  auth: authSlice,
})

export default appReducer
