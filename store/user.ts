import { create } from 'zustand'
import produce, { type Immutable } from 'immer'

type UserState = Immutable<{
  email: string
  password: string
  isLoggedIn: boolean
  login: ({ email, password }: {
    email: string
    password: string
  }) => void
  logout: () => void
}>

export const useUserStore = create<UserState>((set) => ({
  email: '',
  password: '',
  isLoggedIn: false,
  login: ({ email, password }) => set(produce(
    state => {
      state.email = email
      state.password = password
      state.isLoggedIn = true
    }
  )
  ),
  logout: () => set(
    produce(
      state => {
        state.email = ''
        state.password = ''
        state.isLoggedIn = false
      }
    )
  ),
}))