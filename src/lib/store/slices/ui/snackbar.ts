import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AlertType = 'success' | 'error'

interface State {
  isOpen: boolean
  alertType: AlertType | null
  alertText: string
}

const initialState: State = {
  isOpen: false,
  alertType: null,
  alertText: '',
}

const snackbarSlice = createSlice({
  name: 'ui/snackbar',
  initialState: initialState,
  reducers: {
    openSnackbar(state) {
      state.isOpen = true
    },
    closeSnackbar(state) {
      state.isOpen = false
      state.alertType = null
      state.alertText = ''
    },
    setAlertMessage(
      state,
      { payload }: PayloadAction<{ type: AlertType; text: string }>,
    ) {
      state.isOpen = true
      state.alertType = payload.type
      state.alertText = payload.text
    },
  },
})

export const uiSnackbarActions = snackbarSlice.actions
export const uiSnackbarReducer = snackbarSlice.reducer
