import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  isAuthChecked: boolean
  isUsersChecked: boolean
  authUserId: string | null
}

const initialState: State = {
  isAuthChecked: false,
  isUsersChecked: false,
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
  name: 'app/auth',
  initialState: initialState,
  reducers: {
    endAuthLoading(state) {
      state.isAuthChecked = true
    },
    endUsersLoading(state) {
      state.isUsersChecked = true
    },
    setAuthUserId(state, { payload }: PayloadAction<string>) {
      state.authUserId = payload
    },
    setAuthUserIdByFirebaseUser(
      state,
      { payload }: PayloadAction<firebase.default.User>,
    ) {
      state.authUserId = createAuthUserId(payload)
    },
    clearAuthUserId(state) {
      state.authUserId = null
    },
  },
})

export const appAuthActions = authSlice.actions
export const appAuthReducer = authSlice.reducer
