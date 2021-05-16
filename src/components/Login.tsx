import React, { useEffect } from 'react'
import actions from '../MicroAppStateActions'

const Login = () => {
  useEffect(() => {
    async function getUser() {
      let user = 9
      setTimeout(() => {
        user = 10
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
