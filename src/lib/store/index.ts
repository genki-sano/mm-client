import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { rootReducer } from 'lib/store/slices'

export const store = configureStore({
  reducer: rootReducer,
})

export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector

export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
