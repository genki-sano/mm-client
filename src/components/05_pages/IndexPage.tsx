import React from 'react'
import { RootState, useSelector } from 'lib/store'

export const IndexPage: React.FC = () => {
  const { authUserId } = useSelector((store: RootState) => store.appAuth)
  const users = useSelector((store: RootState) => store.entities.users)

  return (
    <div>
      <div>{authUserId || 'エラー'}</div>
      <div>{users ? users.woman.name : '読込中...'}</div>
      <div>{users ? users.man.name : '読込中...'}</div>
    </div>
  )
}
