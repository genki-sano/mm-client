import React, { createContext, useEffect, useState } from 'react'
import { auth } from 'lib/firebase/init'
import { AuthUser, getAuthUser } from 'utils/auth'

interface Context {
  authUser: AuthUser | null
}

const AuthContext = createContext<Context>({
  authUser: null,
})

const AuthProvider: React.FC = ({ children }) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      try {
        const currentAuthUser = await getAuthUser(user)
        setAuthUser(currentAuthUser)
      } catch (err) {
        console.error(err.message)
        setAuthUser(null)
      } finally {
        setLoading(false)
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authUser: authUser,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
