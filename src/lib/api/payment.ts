import { AxiosPromise } from 'axios'
import axios from 'lib/api/axios'
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
