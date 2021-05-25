import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';
import CounterHooks from './pages/counter-hooks';
import CounterClass from './pages/counter-class';
import Books from './pages/books';
import Expanses from './pages/expanses';
import AuthPage from './pages/auth';
import * as route from './paths';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={route.HOME_PATH} exact>
          <Home />
        </Route>

        <Route path={route.USERS_PATH}>
          <Users />
        </Route>

        <Route path={route.COUNTER_BOOKS_PATH}>
          <CounterHooks initialValue={0} />
        </Route>

        <Route path={route.COUNTER_CLASS_PATH}>
          <CounterClass initialValue={0} />
        </Route>

        <Route path={route.EXPANSES_PATH}>
          <Expanses />
        </Route>

        <Route path={route.BOOKS_PATH}>
          <Books initialAmount={10} />
        </Route>

        <Route path={route.AUTH_PATH}>
          <AuthPage />
        </Route>

        <Redirect to={route.HOME_PATH} />
      </Switch>
    </>
  );
};
