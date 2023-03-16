import { create } from 'zustand'
import produce from 'immer'
import { v4 as uuid } from 'uuid'

type Task = {
  id: string
  title: string
  description: string
  completed: boolean
}

type TasksState = {
  tasks: Task[]
  add: (task: Omit<Task, 'completed' | 'id'>) => void
  remove: (id: string) => void
  toggle: (id: string) => void
}

export const useTasksStore = create<TasksState>((set) => ({
  tasks: [],
  add: (task) => {
    set(produce((draft) => {
      draft.tasks.push({ ...task, id: uuid(), completed: false })
    }))
  },
  remove: (id) => {
    set(produce<TasksState>((draft) => {
      draft.tasks = draft.tasks.filter((task) => task.id !== id)
    }))
  },
  toggle: (id) => {
    set(produce<TasksState>((draft) => {
      const task = draft.tasks.find((task) => task.id === id)
      if (task) {
        task.completed = !task.completed
      }
    }))
  }
}))