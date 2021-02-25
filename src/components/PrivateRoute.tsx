import React, { useContext } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { AuthContext } from 'contexts/AuthProvider'
import { ErrorPage } from 'components/05_pages/ErrorPage'

const PrivateRoute: React.FC<RouteProps> = ({ component, ...options }) => {
  const { authUser } = useContext(AuthContext)
  const Component = authUser ? component : ErrorPage

  return <Route {...options} component={Component} />
}

export { PrivateRoute }
