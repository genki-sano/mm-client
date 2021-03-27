import { combineReducers } from '@reduxjs/toolkit'
import { entitiesActions, entitiesReducer } from 'lib/store/slices/entities'
import { appAuthActions, appAuthReducer } from 'lib/store/slices/app/auth'
import { appCreateActions, appCreateReducer } from 'lib/store/slices/app/create'
import { appListActions, appListReducer } from 'lib/store/slices/app/list'
import {
  uiSnackbarActions,
  uiSnackbarReducer,
} from 'lib/store/slices/ui/snackbar'

export const rootReducer = combineReducers({
  appAuth: appAuthReducer,
  appCreate: appCreateReducer,
  appList: appListReducer,
  entities: entitiesReducer,
  uiSnackbar: uiSnackbarReducer,
})

export const actions = {
  ...appAuthActions,
  ...appCreateActions,
  ...appListActions,
  ...entitiesActions,
  ...uiSnackbarActions,
}
