import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from 'lib/store/slices/auth'

export const rootReducer = combineReducers({
  auth: authReducer,
})
