import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from 'lib/store/slices/auth'
import { userReducer } from 'lib/store/slices/user'

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})
