import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { auth } from 'lib/firebase/init'
import { AppThunk } from 'lib/store'
import { AuthUser, signInWithFirebaseUser, createAuthUser } from 'utils/auth'

interface SetAuthPayload {
  firebaseUser: firebase.default.User
}
interface State {
  authUser: AuthUser | null
}

const initialState: State = {
  authUser: null,
}

const userSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuth(state, action: PayloadAction<SetAuthPayload>) {
      state.authUser = createAuthUser(action.payload.firebaseUser)
    },
    clearAuth(state) {
      state.authUser = null
    },
  },
})

const { setAuth, clearAuth } = userSlice.actions

export const signIn = (): AppThunk => async (dispatch) => {
  auth.onAuthStateChanged(async (user) => {
    try {
      const firebaseUser = await signInWithFirebaseUser(user)
      dispatch(setAuth({ firebaseUser }))
    } catch (error) {
      console.error(error.message)
    }
  })
}

export const logout = (): AppThunk => async (dispatch) => {
  auth.signOut()
  dispatch(clearAuth())
}

export const authReducer = userSlice.reducer
