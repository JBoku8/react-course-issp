import { valueExists, getValue } from '../../utils/localStorage'
import { AUTH_TOKEN } from '../../utils/constants'
import { AUTO_LOGIN } from '../action-types/auth-types'
import { setAuthUserAction } from '../actions'

export const autoLoginMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== AUTO_LOGIN) {
      next(action)
    } else {
      if (valueExists(AUTH_TOKEN)) {
        const token = getValue(AUTH_TOKEN)
        dispatch(setAuthUserAction(token))
      }
    }
  }

export default autoLoginMiddleware
