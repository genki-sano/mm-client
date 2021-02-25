import React, { createContext, useEffect, useState } from 'react'
import { auth } from 'lib/firebase/init'
import { AuthUser, getAuthUser } from 'utils/auth'

interface Context {
  authUser: AuthUser | null
  authError: string | null
}

const AuthContext = createContext<Context>({
  authUser: null,
  authError: null,
})

const AuthProvider: React.FC = ({ children }) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [authError, setAuthError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      try {
        const currentAuthUser = await getAuthUser(user)
        setAuthUser(currentAuthUser)
      } catch (err) {
        setAuthUser(null)
        setAuthError(err.stack)
      } finally {
        setLoading(false)
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authUser: authUser,
        authError: authError,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
