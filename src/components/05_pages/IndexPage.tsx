import React, { useEffect } from 'react'
import { RootState, useSelector } from 'lib/store'
import { useDispatch } from 'react-redux'
import { fetchList } from 'lib/service/list'

export const IndexPage: React.FC = () => {
  const { authUserId } = useSelector((store: RootState) => store.appAuth)
  const users = useSelector((store: RootState) => store.entities.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchList(new Date()))
  }, [dispatch])

  return (
    <div>
      <div>{authUserId || 'エラー'}</div>
      <div>{users ? users.woman.name : '読込中...'}</div>
      <div>{users ? users.man.name : '読込中...'}</div>
    </div>
  )
}
