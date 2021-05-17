import React, { useEffect } from 'react'
import actions from '../main/MicroAppStateActions'

const Login = () => {
  useEffect(() => {
    async function getUser() {
      setTimeout(() => {
        actions.setGlobalState({
          info: 10,
        })
      }, 1000)
    }

    getUser()
  }, [])

  return <div>login</div>
}

export default Login
