import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NormalizedPaymentIds {
  [date: string]: number[]
}

interface Total {
  amounts: number
}
export interface NormalizedTotals {
  woman: Total
  man: Total
}

interface State {
  loading: boolean
  paymentIds: NormalizedPaymentIds | null
  totals: NormalizedTotals | null
}

const initialState: State = {
  loading: false,
  paymentIds: null,
  totals: null,
}

const listSlice = createSlice({
  name: 'app/list',
  initialState: initialState,
  reducers: {
    startListLoading(state) {
      state.loading = true
    },
    endListLoading(state) {
      state.loading = false
    },
    setPaymentIds(state, { payload }: PayloadAction<NormalizedPaymentIds>) {
      state.paymentIds = payload
    },
    setTotals(state, { payload }: PayloadAction<NormalizedTotals>) {
      state.totals = payload
    },
  },
})

export const appListActions = listSlice.actions
export const appListReducer = listSlice.reducer
