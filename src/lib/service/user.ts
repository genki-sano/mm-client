import { getAllUser, UserResponse } from 'lib/api/user'
import { AppThunk } from 'lib/store'
import { actions } from 'lib/store/slices'
import { NormalizedUsers, User, UserType } from 'lib/store/slices/entities'
import { getItem, setItem } from 'lib/util/sessionStorage'

export const WOMAN_TYPE = 1
export const MAN_TYPE = 2

const SESSION_KEY_USERS = 'users'

export const getAuthUser = (
  users: NormalizedUsers | null,
  authUserId: string | null,
): UserType | null => {
  if (!users || !authUserId) {
    return null
  }
  if (users.woman.authUserId === authUserId) {
    return 'woman'
  }
  if (users.man.authUserId === authUserId) {
    return 'man'
  }
  return null
}

export const createUserType = (type: number): UserType => {
  if (type === WOMAN_TYPE) {
    return 'woman'
  }
  if (type === MAN_TYPE) {
    return 'man'
  }
  throw new Error('不正なユーザータイプです。')
}

export const createUser = (item: UserResponse): User => {
  return {
    type: createUserType(item.type),
    name: item.name,
    authUserId: item.auth_user_id,
  }
}

const isValid = (items: any | null): boolean => {
  if (!items) {
    return false
  }

  const woman = items.woman
  const man = items.man
  if (!woman || !man) {
    return false
  }

  const userTypes = ['man', 'woman']
  if (
    userTypes.indexOf(woman.type) === -1 ||
    userTypes.indexOf(man.type) === -1
  ) {
    return false
  }

  if (typeof woman.name !== 'string' || typeof man.name !== 'string') {
    return false
  }

  if (
    typeof woman.authUserId !== 'string' ||
    typeof man.authUserId !== 'string'
  ) {
    return false
  }

  return true
}

interface NormalizedSchema {
  entities: NormalizedUsers
}

const normalize = (items: UserResponse[]): NormalizedSchema => {
  const users = {} as { [id: number]: User }
  items.forEach((item) => {
    users[item.type] = createUser(item)
  })

  if (!users[WOMAN_TYPE] || !users[MAN_TYPE]) {
    throw new Error('必要なユーザーがありません。')
  }

  return {
    entities: {
      woman: users[WOMAN_TYPE],
      man: users[MAN_TYPE],
    },
  }
}

export const setUser = (): AppThunk => async (dispatch) => {
  const items = getItem(SESSION_KEY_USERS)
  if (isValid(items)) {
    dispatch(actions.setUsers(items))
    dispatch(actions.endUsersLoading())
    return
  }

  try {
    const res = await getAllUser()
    const { entities } = normalize(res.data.users)

    if (entities) {
      dispatch(actions.setUsers(entities))
      setItem(SESSION_KEY_USERS, entities)
    }
  } catch (err) {
    console.error(err)
    actions.clearUsers()
  } finally {
    dispatch(actions.endUsersLoading())
  }
}
