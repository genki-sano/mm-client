import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { auth } from 'lib/firebase/init'
import { AppDispatch } from 'lib/store'
import { signInWithFirebaseUser, createAuthUserId } from 'utils/auth'

interface SetAuthPayload {
  firebaseUser: firebase.default.User
}
interface State {
  authUserId: string | null
}

const initialState: State = {
  authUserId: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuth(state, action: PayloadAction<SetAuthPayload>) {
      state.authUserId = createAuthUserId(action.payload.firebaseUser)
    },
    setAuthUserId(state, action: PayloadAction<string>) {
      state.authUserId = action.payload
    },
    clearAuth(state) {
      state.authUserId = null
    },
  },
})

const { setAuth, setAuthUserId, clearAuth } = authSlice.actions

export const signIn = () => async (dispatch: AppDispatch) => {
  const host = document.location.hostname
  if (host === 'localhost' || host === '127.0.0.1') {
    dispatch(setAuthUserId('temp'))
    return
  }

  auth.onAuthStateChanged(async (user) => {
    try {
      const firebaseUser = await signInWithFirebaseUser(user)
      dispatch(setAuth({ firebaseUser }))
    } catch (error) {
      console.error(error.message)
    }
  })
}

export const logout = () => async (dispatch: AppDispatch) => {
  auth.signOut()
  dispatch(clearAuth())
}

export const authReducer = authSlice.reducer
