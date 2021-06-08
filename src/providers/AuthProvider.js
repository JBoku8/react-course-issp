import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { autoLoginAction } from '../redux/actions/auth-actions'
export const authContext = React.createContext(null)

function AuthProviderComponent({ children }) {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLoginAction())
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
        signOut,
      }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProviderComponent
