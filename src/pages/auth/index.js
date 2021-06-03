import { Switch, Route, Redirect } from 'react-router'

import { SignIn } from './sign-in'
import { SignUp } from './sign-up'
import { AuthNavigation } from '../../components/navigation'

import { SIGN_IN_PATH, SIGN_UP_PATH } from '../../paths'

const AuthPage = () => {
  return (
    <>
      <AuthNavigation />

      <Switch>
        <Route path={SIGN_IN_PATH}>
          <SignIn />
        </Route>

        <Route path={SIGN_UP_PATH}>
          <SignUp />
        </Route>

        <Redirect to={SIGN_IN_PATH} />
      </Switch>
    </>
  )
}

export default AuthPage
