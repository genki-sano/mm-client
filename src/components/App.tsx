import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components/PrivateRoute'
import { IndexPage } from 'components/05_pages/IndexPage'
import { signIn } from 'lib/store/slices/auth'
import { setUser } from 'lib/store/slices/user'

export const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(signIn())
    dispatch(setUser())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  )
}
