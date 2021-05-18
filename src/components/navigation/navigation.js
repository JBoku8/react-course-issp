import { NavLink } from 'react-router-dom';
import * as routes from '../../paths';

export function Navigation() {
  return (
    <nav className="nav nav-pills nav-fill mt-3">
      <NavLink className="nav-link" to={routes.HOME_PATH} exact>
        Home
      </NavLink>

      <NavLink className="nav-link" to={routes.USERS_PATH}>
        Users
      </NavLink>

      <NavLink className="nav-link" to={routes.COUNTER_BOOKS_PATH}>
        Counter Hooks
      </NavLink>

      <NavLink className="nav-link" to={routes.COUNTER_CLASS_PATH}>
        Counter Class
      </NavLink>

      <NavLink className="nav-link" to={routes.EXPANSES_PATH}>
        Expanses
      </NavLink>

      <NavLink className="nav-link" to={routes.BOOKS_PATH}>
        Books
      </NavLink>
      <NavLink className="nav-link" to={routes.AUTH_PATH}>
        Auth
      </NavLink>
    </nav>
  );
}
