import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components/PrivateRoute'
import { IndexPage } from 'components/05_pages/IndexPage'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  )
}
