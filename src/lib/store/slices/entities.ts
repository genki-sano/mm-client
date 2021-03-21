import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserType = 'woman' | 'man'

export type Category =
  | '食費'
  | '日用品'
  | '家具・家電'
  | '交通費'
  | '趣味'
  | '交際費'
  | '教養・教育'
  | '健康・医療'
  | '住宅'
  | '水道・光熱費'
  | '通信費'
  | '自動車'
  | '金融'
  | '税金'
  | 'その他'

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
  category: Category
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
