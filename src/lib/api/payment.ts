import { AxiosPromise } from 'axios'
import axios from 'lib/api/axios'

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
  const formatDate = y + '-' + zeroPadding(m, 2)

  const options = {
    params: {
      date: formatDate,
    },
  }
  return axios.get('api/payments', options)
}

const zeroPadding = (num: number, len: number) => {
  return (Array(len).join('0') + num).slice(-len)
}
