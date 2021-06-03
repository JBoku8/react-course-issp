import { Redirect } from 'react-router'
import { AUTH_TOKEN } from '../utils/constants'
import { valueExists } from '../utils/localStorage'

export const withAuth = (Component) => {
  const WithAuthProtected = (props) => {
    if (!valueExists(AUTH_TOKEN)) {
      return <Redirect to="/" />
    }

    return <Component {...props} />
  }

  return WithAuthProtected
}
