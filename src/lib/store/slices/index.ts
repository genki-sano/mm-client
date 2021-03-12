import { combineReducers } from '@reduxjs/toolkit'
import { entitiesActions, entitiesReducer } from 'lib/store/slices/entities'
import { appAuthActions, appAuthReducer } from 'lib/store/slices/app/auth'
import { appListActions, appListReducer } from 'lib/store/slices/app/list'

export const rootReducer = combineReducers({
  appAuth: appAuthReducer,
  appList: appListReducer,
  entities: entitiesReducer,
})

export const actions = {
  ...appAuthActions,
  ...appListActions,
  ...entitiesActions,
}
