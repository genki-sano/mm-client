import { Switch } from 'react-router-dom'
import { PrivateRoute } from 'routes/PrivateRoute'
import { PublicRoute } from 'routes/PublicRoute'
import { CreatePage } from 'components/05_pages/Create'
import { IndexPage } from 'components/05_pages/Index'
import { ListPage } from 'components/05_pages/List'
import { NotFoundPage } from 'components/05_pages/Error/NotFound'

export const Router: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={IndexPage} />
      <PrivateRoute path="/list/:date" exact component={ListPage} />
      <PrivateRoute path="/add" exact component={CreatePage} />
      <PublicRoute component={NotFoundPage} />
    </Switch>
  )
}
