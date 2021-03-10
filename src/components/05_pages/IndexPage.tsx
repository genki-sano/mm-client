import React from 'react'
import { RootState, useSelector } from 'lib/store'

export const IndexPage: React.FC = () => {
  const { authUserId } = useSelector((store: RootState) => store.auth)
  const { woman, man } = useSelector((store: RootState) => store.user)

  return (
    <div>
      <div>{authUserId || 'エラー'}</div>
      <div>{woman?.name || '読込中...'}</div>
      <div>{man?.name || '読込中...'}</div>
    </div>
  )
}
