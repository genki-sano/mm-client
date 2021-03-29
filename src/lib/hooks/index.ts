import {
  TypedUseSelectorHook,
  useDispatch as rawUseDispatch,
  useSelector as rawUseSelector,
} from 'react-redux'
import { RootState, AppDispatch } from 'lib/store'

// @see https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useDispatch = () => rawUseDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector
