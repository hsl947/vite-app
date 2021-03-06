import { reactive, provide, inject, readonly } from 'vue'
import state from './state'

export const stateSymbol = Symbol('state')
export const createState = () => {
  const states = reactive(state)
  const increment = () => { states.userName = 'εε­εδΊ' }

  return { increment, state: readonly(states) }
}

export const useState: any = () => inject(stateSymbol)
export const provideState = () => provide(
  stateSymbol,
  createState()
)
