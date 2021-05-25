import { useEffect } from 'react'
import { useDispatch } from 'lib/hooks'
import { signIn } from 'lib/service/auth'
import { setUser } from 'lib/service/user'
import { Router } from 'routes/Router'

export const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(signIn())
    dispatch(setUser())
  }, [dispatch])

  return <Router />
}
