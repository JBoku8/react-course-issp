import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { useDispatch } from 'react-redux'
import { EXPANSES_PATH } from '../../../paths'
import { storeValue } from '../../../utils'

import { login } from '../../../services'
import { AUTH_TOKEN } from '../../../utils/constants'
import { setAuthUserAction } from '../../../redux/actions'

export const SignIn = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { handleSubmit, register, reset } = useForm()

  const onSubmit = async (data) => {
    const loggedIn = await login(data)
    if (loggedIn) {
      storeValue(AUTH_TOKEN, loggedIn.token)
      dispatch(setAuthUserAction(loggedIn.token))
      history.replace(EXPANSES_PATH)
    }
    reset()
  }

  return (
    <div className="row">
      <h2 className="text-center text-primary">Sign in</h2>

      <div className="col-6 mx-auto shadow p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              defaultValue="eve.holt@reqres.in"
              {...register('email', {
                required: true
              })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              defaultValue="cityslicka"
              {...register('password', {
                required: true
              })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
