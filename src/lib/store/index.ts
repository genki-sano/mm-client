import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
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

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

export type PreloadedState = ConfigureStoreOptions<RootState>['preloadedState']
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
