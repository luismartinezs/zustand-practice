import { create } from 'zustand'
import produce, { type Immutable } from 'immer'

type ArrayState = Immutable<{
  array: string[]
  add: (value: string) => void
  remove: (value: string) => void
}>

export const useArrayStore = create<ArrayState>(set => ({
  array: [],
  add: (value: string) => set(
    produce<ArrayState>(state => {
      state.array.push(value)
    })
  ),
  remove: (value: string) =>
    set(produce<ArrayState>(state => {
      state.array = state.array.filter(item => item !== value)
    })),
}))