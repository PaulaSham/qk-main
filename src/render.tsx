import React from 'react'
import ReactDom from 'react-dom'
import Login from './components/Login'
import MicroApp2Comp from './components/MicroApp2Comp'

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
      <MicroApp2Comp />
      <MicroApp2Comp />
      <div id="subapp-viewport" />
    </>
  )
}

export default function render({ loading }: IRender) {
  const container = document.getElementById('main')
  ReactDom.render(<Render loading={loading} />, container)
}
