import { createSlice } from '@reduxjs/toolkit'

interface State {
  loading: boolean
}

const initialState: State = {
  loading: false,
}

const appCreateSlice = createSlice({
  name: 'app/create',
  initialState: initialState,
  reducers: {
    startCreateLoading(state) {
      state.loading = true
    },
    endCreateLoading(state) {
      state.loading = false
    },
  },
})

export const appCreateActions = appCreateSlice.actions
export const appCreateReducer = appCreateSlice.reducer
