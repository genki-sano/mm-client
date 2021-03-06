import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components/PrivateRoute'
import { IndexPage } from 'components/05_pages/IndexPage'
import { ListPage } from 'components/05_pages/ListPage'
import { signIn } from 'lib/service/auth'
import { setUser } from 'lib/service/user'

export const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(signIn())
    dispatch(setUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" component={IndexPage} exact />
        <PrivateRoute path="/list/:date" component={ListPage} />
      </Switch>
    </BrowserRouter>
  )
}
