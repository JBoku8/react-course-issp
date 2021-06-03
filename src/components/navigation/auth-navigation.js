import { Link } from 'react-router-dom'
import { SIGN_UP_PATH, SIGN_IN_PATH } from '../../paths'

export const AuthNavigation = () => {
  return (
    <ul className="nav nav-tabs mb-4">
      <li className="nav-item">
        <Link className="nav-link active" to={SIGN_IN_PATH}>
          Sign In
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={SIGN_UP_PATH}>
          Sign Up
        </Link>
      </li>
    </ul>
  )
}
