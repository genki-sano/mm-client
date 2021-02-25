import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { AuthProvider } from 'contexts/AuthProvider'
import { PrivateRoute } from 'components/PrivateRoute'
import { IndexPage } from 'components/05_pages/IndexPage'

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={IndexPage} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}
