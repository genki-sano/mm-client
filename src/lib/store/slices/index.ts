import { combineReducers } from '@reduxjs/toolkit'
import { entitiesActions, entitiesReducer } from 'lib/store/slices/entities'
import { appAuthActions, appAuthReducer } from 'lib/store/slices/app/auth'

export const rootReducer = combineReducers({
  appAuth: appAuthReducer,
  entities: entitiesReducer,
})

export const actions = {
  ...appAuthActions,
  ...entitiesActions,
}
