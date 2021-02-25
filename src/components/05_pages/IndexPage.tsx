import React, { useContext } from 'react'
import { AuthContext } from 'contexts/AuthProvider'

export const IndexPage: React.FC = () => {
  const { authUser } = useContext(AuthContext)

  return (
    <div>
      <p>こんにちは {authUser ? authUser.displayName : '未ログイン'} さん </p>
    </div>
  )
}
