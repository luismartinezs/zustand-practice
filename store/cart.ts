import produce, { type Immutable } from 'immer'
import { create } from 'zustand'
import { v4 as uuid } from 'uuid'

type Item = {
  id: string
  name: string
  price: number
  amount: number
}

type CartState = Immutable<{
  items: Item[]
  addItem: (item: Omit<Item, 'amount'>) => void
  removeItem: (id: string) => void
}>

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: item => set(produce<CartState>(state => {
    const indexOfMatchingItem = state.items.findIndex(el => el.id === item.id)

    if (indexOfMatchingItem !== -1) {
      state.items[indexOfMatchingItem].amount += 1
    } else {
      state.items.push({ ...item, amount: 1 })
    }
  })),
  removeItem: id => set(produce<CartState>(state => {
    state.items = state.items.filter(item => item.id !== id)
  }))
}))

export const useFullPrice = () => {
  return useCartStore(state => (state.items.reduce((acc, item) => acc + item.price * item.amount, 0)).toFixed(2))
}