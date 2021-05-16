import { initGlobalState, MicroAppStateActions } from 'qiankun'

const state = {
  info: 1,
}

const actions: MicroAppStateActions = initGlobalState(state)

actions.onGlobalStateChange((state, prev) => {
  console.log('global change', state, prev)
})

export default actions
