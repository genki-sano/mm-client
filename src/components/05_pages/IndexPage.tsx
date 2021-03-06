import React, { useContext } from 'react'
import { AuthContext } from 'contexts/AuthProvider'

export const IndexPage: React.FC = () => {
  const { authUser } = useContext(AuthContext)

  return (
    <div>
      <p>こんにちは {authUser ? authUser.uid : '未ログイン'} さん </p>
    </div>
  )
}
