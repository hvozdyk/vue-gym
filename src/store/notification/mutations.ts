import { MutationTree } from 'vuex'
import { NotificationState } from './types'
import { Notification } from '@/types/notification'

let nextId = 1

export const mutations: MutationTree<NotificationState> = {
  PUSH(state, payload: Notification) {
    state.notifications.push({
      ...payload,
      id: nextId++
    })
  },
  DELETE(state, payload: Notification) {
    state.notifications = state.notifications.filter(n => n.id !== payload.id)
  }
}
