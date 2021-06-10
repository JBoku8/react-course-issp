import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'

import * as routes from '../../paths'
import { authSelector } from '../../redux/selectors'
import { setGuestUserAction } from '../../redux/actions'
import { logOut } from '../../services/auth'

export function Navigation() {
  const history = useHistory()
  const authorized = useSelector(authSelector)
  const dispatch = useDispatch()

  const onLogOut = async () => {
    await logOut()
    dispatch(setGuestUserAction())
    history.replace(routes.HOME_PATH)
  }

  const renderUserLinks = () => {
    if (!authorized) return null

    return (
      <>
        <NavLink className="nav-link" to={routes.EXPANSES_PATH}>
          Expanses
        </NavLink>

        <NavLink className="nav-link" to={routes.BOOKS_PATH}>
          Books
        </NavLink>

        <button className="btn btn-primary" onClick={onLogOut}>
          Log Out
        </button>
      </>
    )
  }

  const renderGuestLinks = () => {
    if (authorized) return null

    return (
      <>
        <NavLink className="nav-link" to={routes.AUTH_PATH}>
          Auth
        </NavLink>
      </>
    )
  }

  return (
    <nav className="nav nav-pills nav-fill">
      <NavLink className="nav-link" to={routes.HOME_PATH} exact>
        Home
      </NavLink>

      <NavLink className="nav-link" to={routes.USERS_PATH}>
        Users
      </NavLink>

      {/* <NavLink className="nav-link" to={routes.COUNTER_BOOKS_PATH}>
        Counter Hooks
      </NavLink>

      <NavLink className="nav-link" to={routes.COUNTER_CLASS_PATH}>
        Counter Class
      </NavLink> */}

      <NavLink className="nav-link" to={routes.PRODUCTS_PATH}>
        Products
      </NavLink>
      <NavLink className="nav-link" to={routes.REDUX_PRODUCTS_PATH}>
        Redux Products
      </NavLink>
      {renderGuestLinks()}
      {renderUserLinks()}
    </nav>
  )
}
