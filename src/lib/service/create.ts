import { AppThunk } from 'lib/store'
import { actions } from 'lib/store/slices'
import { Category, UserType } from 'lib/store/slices/entities'
import { createPayment } from 'lib/api/payment'

export const onSubmit = (
  user: UserType,
  category: Category,
  price: number,
  date: Date,
  memo: string,
): AppThunk => async (dispatch) => {
  dispatch(actions.startCreateLoading())
  try {
    await createPayment(user, category, price, date, memo)
    dispatch(
      actions.setAlertMessage({
        type: 'success',
        text: '保存しました',
      }),
    )
  } catch (err) {
    dispatch(
      actions.setAlertMessage({
        type: 'error',
        text: 'エラーが発生しました',
      }),
    )
  } finally {
    dispatch(actions.endCreateLoading())
  }
}
