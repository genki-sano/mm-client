import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import jaLocale from 'date-fns/locale/ja'
import { DateFnsUtils } from 'lib/util/date'
import { PrivateRoute } from 'components/PrivateRoute'
import { CreatePage } from 'components/05_pages/CreatePage'
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
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={IndexPage} />
          <PrivateRoute path="/list/:date" exact component={ListPage} />
          <PrivateRoute path="/add" exact component={CreatePage} />
        </Switch>
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  )
}
