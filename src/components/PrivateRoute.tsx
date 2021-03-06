import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { ErrorPage } from 'components/05_pages/ErrorPage'
import { LoadingPage } from 'components/05_pages/LoadingPage'
import { RootState, useSelector } from 'lib/store'

const PrivateRoute: React.FC<RouteProps> = ({ component, ...options }) => {
  const { authUserId, loading } = useSelector(
    (store: RootState) => store.appAuth,
  )

  if (loading) {
    return <Route {...options} component={LoadingPage} />
  }
  if (!authUserId) {
    return <Route {...options} component={ErrorPage} />
  }

  return <Route {...options} component={component} />
}

export { PrivateRoute }
