import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserType = 'woman' | 'man'
export interface User {
  type: UserType
  name: string
  authUserId: string
}
export interface NormalizedUsers {
  woman: User
  man: User
}

export interface Payment {
  id: number
  userType: UserType
  category: string
  price: number
  date: string
  memo: string
}
export interface NormalizedPayments {
  [id: number]: Payment
}

interface State {
  users: NormalizedUsers | null
  payments: NormalizedPayments | null
}

const initialState: State = {
  users: null,
  payments: null,
}

const entitiesSlice = createSlice({
  name: 'entities',
  initialState: initialState,
  reducers: {
    setUsers(state, { payload }: PayloadAction<NormalizedUsers>) {
      state.users = payload
    },
    clearUsers(state) {
      state.users = null
    },
    setPayments(state, { payload }: PayloadAction<NormalizedPayments>) {
      state.payments = payload
    },
    clearPayments(state) {
      state.payments = null
    },
  },
})

export const entitiesActions = entitiesSlice.actions
export const entitiesReducer = entitiesSlice.reducer
