import liff from '@line/liff'

const config = {
  liffId: process.env.REACT_APP_LIFF_ID,
}

export const liffApp = {
  init(): Promise<void> {
    const liffId = config.liffId || ''
    return liff.init({ liffId })
  },
  login(loginConfig?: { redirectUri?: string }): void {
    return liff.login(loginConfig)
  },
  isLoggedIn(): boolean {
    return liff.isLoggedIn()
  },
  getAccessToken(): string | null {
    return liff.getAccessToken()
  },
}
