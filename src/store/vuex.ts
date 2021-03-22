import { createStore } from 'vuex'
import state from './state'

interface State {
  userName: string
}

export default createStore({
  state(): State {
    return state
  }
})
