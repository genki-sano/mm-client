import { AxiosPromise } from 'axios'
import axios from 'lib/api/axios'

interface FirebaseTokenResponse {
  token: string
}

export const verifyToken = (
  accessToken: string,
): AxiosPromise<FirebaseTokenResponse> => {
  const options = {
    params: {
      token: accessToken,
    },
  }
  return axios.get('api/auth/verify', options)
}
