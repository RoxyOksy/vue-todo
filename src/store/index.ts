import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { ITodo } from '@/components/types'
import { v4 as uuid } from 'uuid'
import { IStore } from '@/store/types'

Vue.use(Vuex)

const store: StoreOptions<IStore> = {
  state: {
    data: [
      {
        id: uuid(),
        title: 'Create ToDo using Vue',
        done: true
      }, {
        id: uuid(),
        title: 'Learn Vuex',
        done: false
      }
    ]
  },
  mutations: {
    addTask (state, task: ITodo) {
      state.data.push(task)
    },
    deleteTask (state, id: string): void {
      const index = state.data.findIndex(todo => todo.id === id)
      index > -1
        ? state.data.splice(index, 1)
        : new Error('Invalid index')
    },
    completeTask (state, id: string) {
      const index = state.data.findIndex(todo => todo.id === id)
      index > -1
        ? state.data[index].done = !state.data[index].done
        : new Error('Invalid index')
    }
  },
  actions: {
    addTask (context, task: ITodo) {
      context.commit('addTask', task)
    },
    deleteTask (context, id: string) {
      context.commit('deleteTask', id)
    },
    completeTask (context, id: string) {
      context.commit('completeTask', id)
    }
  },
  getters: {
    todos (state: IStore): ITodo[] {
      return state.data
    }
  },
  modules: {
  }
}

export default new Vuex.Store<IStore>(store)
