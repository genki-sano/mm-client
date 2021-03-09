import { getAllUser } from 'lib/api/user'
import { AppThunk } from 'lib/store'
import { actions } from 'lib/store/slices'

const womanType = 1
const manType = 2

export const setUser = (): AppThunk => async (dispatch) => {
  try {
    const res = await getAllUser()
    const users = res.data.users

    users.forEach((user) => {
      if (user.type === womanType) {
        dispatch(actions.setWoman(user))
      }
      if (user.type === manType) {
        dispatch(actions.setMan(user))
      }
    })
  } catch (err) {
    console.error(err)
    actions.clearUser()
  }
}
