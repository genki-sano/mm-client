import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllUser, UserResponse } from 'lib/api/user'
import { AppThunk } from 'lib/store'

const womanType = 1
const manType = 2

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

const { setWoman, setMan, clearUser } = userSlice.actions

export const setUser = (): AppThunk => async (dispatch) => {
  try {
    const res = await getAllUser()
    const users = res.data.users

    users.forEach((user: UserResponse) => {
      if (user.type === womanType) {
        dispatch(setWoman(user))
      }
      if (user.type === manType) {
        dispatch(setMan(user))
      }
    })
  } catch (err) {
    console.error(err)
    clearUser()
  }
}

export const userReducer = userSlice.reducer
