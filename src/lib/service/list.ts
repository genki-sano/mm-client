import { getPaymentByDate, PaymentResponse } from 'lib/api/payment'
import { AppThunk } from 'lib/store'
import { actions } from 'lib/store/slices'
import {
  NormalizedPaymentIds,
  NormalizedTotals,
} from 'lib/store/slices/app/list'
import { NormalizedPayments } from 'lib/store/slices/entities'
import { createUserType } from 'lib/service/user'
import moment from 'moment'

interface Result {
  paymentIds: NormalizedPaymentIds
  totals: NormalizedTotals
}
interface NormalizedSchema {
  entities: NormalizedPayments
  result: Result
}

const normalize = (data: PaymentResponse[]): NormalizedSchema => {
  const entities = {} as NormalizedPayments
  const paymentIds = {} as NormalizedPaymentIds
  const totals = {
    woman: {
      amounts: 0,
    },
    man: {
      amounts: 0,
    },
  }

  data.forEach((payment: PaymentResponse) => {
    const userType = createUserType(payment.user_id)
    const formatDate = moment(payment.date, 'YYYY/MM/DD').format('YYYY/MM/DD')

    entities[payment.id] = {
      id: payment.id,
      userType: userType,
      category: payment.category,
      price: payment.price,
      date: formatDate,
      memo: payment.memo,
    }

    if (!paymentIds[formatDate]) {
      paymentIds[formatDate] = [payment.id]
    } else {
      paymentIds[formatDate].push(payment.id)
    }

    totals[userType]['amounts'] += payment.price
  })

  const result = {
    paymentIds,
    totals,
  }
  return { entities, result }
}

export const fetchList = (date: Date): AppThunk => async (dispatch) => {
  dispatch(actions.startListLoading())
  try {
    const res = await getPaymentByDate(date)
    const { entities, result } = normalize(res.data.payments)

    dispatch(actions.setPayments(entities))
    dispatch(actions.setPaymentIds(result.paymentIds))
    dispatch(actions.setTotals(result.totals))
  } catch (err) {
    console.error(err)
  } finally {
    dispatch(actions.endListLoading())
  }
}
