import { verifyToken } from 'lib/api/auth'
import { firebaseApp } from 'lib/external/firebase'
import { liffApp } from 'lib/external/liff'
import { AppThunk } from 'lib/store'
import { actions } from 'lib/store/slices'

const getLiffAccessToken = async (): Promise<string | null> => {
  await liffApp.init()
  const isLoggedIn = await liffApp.isLoggedIn()
  if (!isLoggedIn) {
    await liffApp.login({})
  }
  const accessToken = await liffApp.getAccessToken()
  return accessToken
}

const signInWithCustomToken = async (
  token: string,
): Promise<firebase.default.User> => {
  const res = await firebaseApp.signInWithCustomToken(token)
  if (!res.user) {
    throw new Error('カスタムトークンでのログインに失敗しました。')
  }
  return res.user
}

const signInWithFirebaseUser = async (
  user: firebase.default.User | null,
): Promise<firebase.default.User> => {
  if (user) {
    return user
  }
  const accessToken = await getLiffAccessToken()
  if (!accessToken) {
    throw new Error('アクセストークンを取得できませんでした。')
  }
  const result = await verifyToken(accessToken)
  const firebaseUser = await signInWithCustomToken(result.data.token)
  return firebaseUser
}

export const signIn = (): AppThunk => async (dispatch) => {
  firebaseApp.onAuthStateChanged(async (user) => {
    const host = document.location.hostname
    if (host === 'localhost' || host === '127.0.0.1') {
      dispatch(actions.setAuthUserId('local'))
      dispatch(actions.endAuthLoading())
      return
    }
    try {
      const firebaseUser = await signInWithFirebaseUser(user)
      dispatch(actions.setAuthUserIdByFirebaseUser(firebaseUser))
    } catch (error) {
      console.error(error.message)
      dispatch(actions.clearAuthUserId())
    } finally {
      dispatch(actions.endAuthLoading())
    }
  })
}

export const logout = (): AppThunk => async (dispatch) => {
  firebaseApp.signOut()
  dispatch(actions.clearAuthUserId())
}
