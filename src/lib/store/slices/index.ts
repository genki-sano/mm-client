import { combineReducers } from '@reduxjs/toolkit'
import { authActions, authReducer } from 'lib/store/slices/auth'
import { userActions, userReducer } from 'lib/store/slices/user'
import { uiActions, uiReducer } from 'lib/store/slices/ui'

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  ui: uiReducer,
})

export const actions = {
  ...authActions,
  ...userActions,
  ...uiActions,
}
