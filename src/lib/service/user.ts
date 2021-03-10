import { getAllUser } from 'lib/api/user'
import { AppThunk } from 'lib/store'
import { actions } from 'lib/store/slices'
import { getItem, setItem } from 'lib/util/sessionStorage'

const WOMAN_TYPE = 1
const MAN_TYPE = 2

const SESSION_KEY_WOMAN = 'user_response_woman'
const SESSION_KEY_MAN = 'user_response_man'

export const setUser = (): AppThunk => async (dispatch) => {
  const woman = getItem(SESSION_KEY_WOMAN)
  const man = getItem(SESSION_KEY_MAN)
  if (woman && man) {
    dispatch(actions.setWoman(woman))
    dispatch(actions.setMan(man))
    return
  }
  try {
    const res = await getAllUser()

    res.data.users.forEach((user) => {
      if (user.type === WOMAN_TYPE) {
        dispatch(actions.setWoman(user))
        setItem(SESSION_KEY_WOMAN, user)
        return
      }
      if (user.type === MAN_TYPE) {
        dispatch(actions.setMan(user))
        setItem(SESSION_KEY_MAN, user)
        return
      }
    })
  } catch (err) {
    console.error(err)
    actions.clearUser()
  }
}
