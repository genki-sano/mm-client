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

export const createAuthUserId = (
  firebaseUser: firebase.default.User,
): string | null => {
  if (!firebaseUser || !firebaseUser.uid) {
    return null
  }
  return firebaseUser.uid
}

export const getAuthUserId = async (
  user: firebase.default.User | null,
): Promise<string | null> => {
  const host = document.location.hostname
  if (host === 'localhost' || host === '127.0.0.1') {
    return 'U380b4e6dd7a8aa109080895fd992eef4'
  }

  const firebaseUser = await signInWithFirebaseUser(user)
  return createAuthUserId(firebaseUser)
}
