import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { ErrorPage } from 'components/05_pages/ErrorPage'
import { RootState, useSelector } from 'lib/store'

const PrivateRoute: React.FC<RouteProps> = ({ component, ...options }) => {
  const { authUserId } = useSelector((store: RootState) => store.auth)
  const Component = authUserId ? component : ErrorPage

  return <Route {...options} component={Component} />
}

export { PrivateRoute }
