import { isMatch } from 'date-fns'
import { getPaymentByDate, PaymentResponse } from 'lib/api/payment'
import { AppThunk } from 'lib/store'
import { actions } from 'lib/store/slices'
import {
  NormalizedPaymentIds,
  NormalizedTotals,
} from 'lib/store/slices/app/list'
import { Category, NormalizedPayments } from 'lib/store/slices/entities'
import { createUserType } from 'lib/service/user'

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
    // 不正な形式で帰ってくるものは取得しない
    if (!isMatch(payment.date, 'yyyy/MM/dd')) {
      return
    }
    const userType = createUserType(payment.user_id)

    entities[payment.id] = {
      id: payment.id,
      userType: userType,
      category: payment.category as Category,
      price: payment.price,
      date: payment.date,
      memo: payment.memo,
    }

    if (!paymentIds[payment.date]) {
      paymentIds[payment.date] = [payment.id]
    } else {
      paymentIds[payment.date].push(payment.id)
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
    dispatch(actions.clearPayments())
    dispatch(actions.clearList())
  } finally {
    dispatch(actions.endListLoading())
  }
}
