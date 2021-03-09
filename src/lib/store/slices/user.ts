import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserResponse } from 'lib/api/user'

interface User {
  name: string
  authUserId: string
}
interface State {
  woman: User | null
  man: User | null
}

const initialState: State = {
  woman: null,
  man: null,
}

const createUser = (item: UserResponse): User => {
  return {
    name: item.name,
    authUserId: item.auth_user_id,
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setWoman(state, { payload }: PayloadAction<UserResponse>) {
      state.woman = createUser(payload)
    },
    setMan(state, { payload }: PayloadAction<UserResponse>) {
      state.man = createUser(payload)
    },
    clearUser(state) {
      state.woman = null
      state.man = null
    },
  },
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
