import { AxiosPromise } from 'axios'
import axios from 'lib/api/axios'

export interface UserResponse {
  type: number
  name: string
  auth_user_id: string
}
interface GetAllUserResponse {
  users: UserResponse[]
}

export const getAllUser = (): AxiosPromise<GetAllUserResponse> => {
  return axios.get('api/users')
}
