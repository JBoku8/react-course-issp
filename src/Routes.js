import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'

import Spinner from './components/spinner'
import * as route from './paths'

const Users = React.lazy(() => import('./pages/users'))
const Books = React.lazy(() => import('./pages/books'))
const Expanses = React.lazy(() => import('./pages/expanses'))
const AuthPage = React.lazy(() => import('./pages/auth'))
const Products = React.lazy(() => import('./pages/products'))
const CounterHooks = React.lazy(() => import('./pages/counter-hooks'))
const CounterClass = React.lazy(() => import('./pages/counter-class'))

export const Routes = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
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

          <Route path={route.PRODUCTS_PATH}>
            <Products />
          </Route>

          <Route path={route.AUTH_PATH}>
            <AuthPage />
          </Route>

          <Redirect to={route.HOME_PATH} />
        </Switch>
      </Suspense>
    </>
  )
}
