import React from 'react'
import { RootState, useSelector } from 'lib/store'

export const IndexPage: React.FC = () => {
  const { authUserId } = useSelector((store: RootState) => store.auth)

  return <div>{authUserId || 'エラー'}</div>
}
