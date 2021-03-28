import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { ForbiddenPage } from 'components/05_pages/Error/Forbidden'
import { LoadingPage } from 'components/05_pages/Loading'
import { RootState, useSelector } from 'lib/store'

export const PrivateRoute: React.FC<RouteProps> = ({
  component,
  ...options
}) => {
  const { authUserId, loading } = useSelector(
    (store: RootState) => store.appAuth,
  )

  if (loading) {
    return <Route component={LoadingPage} {...options} />
  }
  if (!authUserId) {
    return <Route component={ForbiddenPage} {...options} />
  }

  return <Route component={component} {...options} />
}
