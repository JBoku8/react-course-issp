import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav nav-pills nav-fill mt-3">
      <NavLink className="nav-link" to="/" exact>
        Home
      </NavLink>

      <NavLink className="nav-link" to="/users">
        Users
      </NavLink>

      <NavLink className="nav-link" to="/counter-hooks">
        Counter Hooks
      </NavLink>

      <NavLink className="nav-link" to="/counter-class">
        Counter Class
      </NavLink>

      <NavLink className="nav-link" to="/expanses">
        Expanses
      </NavLink>

      <NavLink className="nav-link" to="/books">
        Books
      </NavLink>
    </nav>
  );
}

export default Navigation;
