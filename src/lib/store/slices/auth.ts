import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  authUserId: string | null
}

const initialState: State = {
  authUserId: null,
}

const createAuthUserId = (
  firebaseUser: firebase.default.User,
): string | null => {
  if (!firebaseUser || !firebaseUser.uid) {
    return null
  }
  return firebaseUser.uid
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuth(state, { payload }: PayloadAction<firebase.default.User>) {
      state.authUserId = createAuthUserId(payload)
    },
    setAuthUserId(state, { payload }: PayloadAction<string>) {
      state.authUserId = payload
    },
    clearAuth(state) {
      state.authUserId = null
    },
  },
})

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer
