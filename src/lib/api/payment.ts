import { AxiosPromise } from 'axios'
import qs from 'qs'
import axios from 'lib/api/axios'
import { MAN_TYPE, WOMAN_TYPE } from 'lib/service/user'
import { Category, UserType } from 'lib/store/slices/entities'
import { zeroPadding } from 'lib/util/number'

export interface PaymentResponse {
  id: number
  user_id: number
  date: string
  price: number
  category: string
  memo: string
}
interface GetPaymentByDateResponse {
  payments: PaymentResponse[]
}

export const getPaymentByDate = (
  date: Date,
): AxiosPromise<GetPaymentByDateResponse> => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1

  const options = {
    params: {
      date: `${y}-${zeroPadding(m, 2)}`,
    },
  }
  return axios.get('api/payments', options)
}

export const createPayment = (
  user: UserType,
  category: Category,
  price: number,
  date: Date,
  memo: string,
): AxiosPromise<GetPaymentByDateResponse> => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()

  const data = {
    userType: user === 'man' ? MAN_TYPE : WOMAN_TYPE,
    category: category,
    price: price,
    date: `${y}-${zeroPadding(m, 2)}-${zeroPadding(d, 2)}`,
    memo: memo,
  }
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  return axios.post('api/payments', qs.stringify(data), config)
}
