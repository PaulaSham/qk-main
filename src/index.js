import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
// import reportWebVitals from './reportWebVitals'
import { registerMicroApps, start } from 'qiankun'

// const render = (appContent, loading) => {
//   const container = document.getElementById('main')
//   ReactDOM.render(
//     <div dangerouslySetInnerHTML={{ __html: appContent }} />,
//     container,
//   )
// }

registerMicroApps([
  {
    name: 'qkm', // app name registered
    entry: '//localhost:3001',
    container: '#main',
    activeRule: '/qkm',
    // render,
  },
  // {
  //   name: 'vue app',
  //   entry: { scripts: ['//localhost:7100/main.js'] },
  //   container: '#yourContainer2',
  //   activeRule: '/yourActiveRule2',
  // },
])

start()

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
