import React, { useContext } from 'react'
import { AuthContext } from 'contexts/AuthProvider'

export const ErrorPage: React.FC = () => {
  const { authError } = useContext(AuthContext)

  return (
    <div>
      <p>{authError || 'エラー'}</p>
    </div>
  )
}
