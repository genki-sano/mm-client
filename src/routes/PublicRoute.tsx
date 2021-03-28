import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

export const PublicRoute: React.FC<RouteProps> = ({
  component,
  ...options
}) => {
  return <Route component={component} {...options} />
}
