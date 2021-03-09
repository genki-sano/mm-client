import { createSlice } from '@reduxjs/toolkit'

interface State {
  loading: boolean
}

const initialState: State = {
  loading: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    startLoading(state) {
      state.loading = true
    },
    endLoading(state) {
      state.loading = false
    },
  },
})

export const uiActions = uiSlice.actions

export const uiReducer = uiSlice.reducer
