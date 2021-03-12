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

interface State {
  users: NormalizedUsers | null
}

const initialState: State = {
  users: null,
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
  },
})

export const entitiesActions = entitiesSlice.actions
export const entitiesReducer = entitiesSlice.reducer
