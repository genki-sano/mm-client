import {
  configureStore,
  ThunkAction,
  Action,
  ConfigureStoreOptions,
} from '@reduxjs/toolkit'
import { rootReducer } from 'lib/store/slices'

export const createStore = (preloadedState?: PreloadedState) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
  })

export type RootState = ReturnType<typeof rootReducer>
export type PreloadedState = ConfigureStoreOptions<RootState>['preloadedState']
export type AppDispatch = ReturnType<typeof createStore>['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
