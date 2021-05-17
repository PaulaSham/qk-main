// import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { registerMicroApps, setDefaultMountApp, start } from 'qiankun'
import render from './main/render'

render({ loading: true })

const loader = (loading: boolean) => {
  render({ loading })
}

registerMicroApps([
  {
    name: 'qkm', // app name registered
    entry: '//localhost:3001',
    container: '#subapp-viewport',
    loader,
    activeRule: '/qkm',
  },
])
// setDefaultMountApp('/qkm')
start()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
