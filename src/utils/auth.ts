import liff from '@line/liff'
import { auth } from 'lib/firebase/init'
import { verifyToken } from 'lib/api/auth'

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

export const signInWithFirebaseUser = async (
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

export interface AuthUser {
  uid: string
}

export const createAuthUser = (
  firebaseUser: firebase.default.User,
): AuthUser | null => {
  if (!firebaseUser || !firebaseUser.uid) {
    return null
  }
  return {
    uid: firebaseUser.uid,
  }
}

export const getAuthUser = async (
  user: firebase.default.User | null,
): Promise<AuthUser | null> => {
  const firebaseUser = await signInWithFirebaseUser(user)
  return createAuthUser(firebaseUser)
}
