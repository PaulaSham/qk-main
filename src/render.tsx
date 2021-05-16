import React from 'react'
import ReactDom from 'react-dom'
import Login from './components/Login'

interface IRender {
  loading: boolean
}

function Render(props: IRender) {
  const { loading } = props

  return (
    <>
      {loading && <h1>loading....</h1>}
      <div>always here</div>
      <Login />
      <div id="subapp-viewport" />
    </>
  )
}

export default function render({ loading }: IRender) {
  const container = document.getElementById('main')
  ReactDom.render(<Render loading={loading} />, container)
}
