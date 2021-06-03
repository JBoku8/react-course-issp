import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getValue, valueExists } from '../utils'
import { AUTH_TOKEN } from '../utils/constants'
import { setAuthUserAction } from '../redux/actions/auth-actions'
export const authContext = React.createContext(null)

function AuthProviderComponent ({ children }) {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (valueExists(AUTH_TOKEN)) {
      const token = getValue(AUTH_TOKEN)
      setUser(token)
      dispatch(setAuthUserAction(token))
    }
  }, [dispatch])

  const signIn = (data) => {
    setUser(data)
  }
  const signOut = () => {
    setUser(null)
  }

  return (
    <authContext.Provider
      value={{
        user,
        signIn,
        signOut
      }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProviderComponent
