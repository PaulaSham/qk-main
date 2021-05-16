// 让子应用像组件一样使用
import React, { useRef } from 'react'
import { loadMicroApp } from 'qiankun'

// const MicroApp2Comp = () => {
//   const ref = useRef(null)
//   return <div ref={ref} />
// }

class MicroApp2Comp extends React.Component {
  containerRef: any = React.createRef()
  microApp: any = null

  componentDidMount() {
    this.microApp = loadMicroApp({
      name: 'qkm',
      entry: '//localhost:3001',
      container: this.containerRef.current as HTMLElement,
      props: { brand: 'qiankun' },
    })
  }
  render() {
    return <div ref={this.containerRef} />
  }
}

export default MicroApp2Comp
