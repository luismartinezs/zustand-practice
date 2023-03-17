import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import produce, { type Immutable } from 'immer'
import { v4 as uuid } from 'uuid'

type Message = {
  id: string
  sender: string
  timestamp: number
  message: string
}

type Chat = {
  id: string
  messages: Message[]
}

type ChatState = Immutable<{
  chats: Chat[],
  initNewChat: (id: string) => void
  addMessageToChat: ({ chatId, message }: {
    chatId: string
    message: Omit<Message, 'id' | 'timestamp'>
  }) => void
}>

const store: StateCreator<ChatState> = (set) => ({
  chats: [],
  initNewChat: (id) => set(produce<ChatState>(state => {
    state.chats.push({ id, messages: [] })
  })),
  addMessageToChat: ({ chatId, message }) => set(produce<ChatState>(
    state => {
      const chat = state.chats.find(chat => chat.id === chatId)
      if (chat) {
        chat.messages.push({ ...message, id: uuid(), timestamp: Date.now() })
      }
    }
  ))
})

export const useChatStore = create(devtools(persist(store, {
  name: 'chat-storage',
})))

export const useGetChatById = (chatId: string | undefined) => {
  return useChatStore(state => state.chats.find(chat => chat.id === chatId))
}