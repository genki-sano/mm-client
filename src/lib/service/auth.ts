import liff from '@line/liff'
import { verifyToken } from 'lib/api/auth'
import { auth } from 'lib/firebase/init'
import { AppThunk } from 'lib/store'
import { actions } from 'lib/store/slices'

const getLiffAccessToken = async (liffId: string): Promise<string | null> => {
  await liff.init({ liffId: liffId })
  const isLoggedIn = await liff.isLoggedIn()
  if (!isLoggedIn) {
    await liff.login({})
  }
  const accessToken = await liff.getAccessToken()
  return accessToken
}

const signInWithCustomToken = async (
  token: string,
): Promise<firebase.default.User> => {
  const res = await auth.signInWithCustomToken(token)
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
  const liffId = process.env.REACT_APP_LIFF_ID || ''
  const accessToken = await getLiffAccessToken(liffId)
  if (!accessToken) {
    throw new Error('アクセストークンを取得できませんでした。')
  }
  const result = await verifyToken(accessToken)
  const firebaseUser = await signInWithCustomToken(result.data.token)
  return firebaseUser
}

export const signIn = (): AppThunk => async (dispatch) => {
  auth.onAuthStateChanged(async (user) => {
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
  auth.signOut()
  dispatch(actions.clearAuthUserId())
}
