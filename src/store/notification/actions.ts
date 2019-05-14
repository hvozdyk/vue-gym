import { ActionTree } from 'vuex'
import { NotificationState } from './types'
import { RootState } from '../types'
import { Notification } from '@/types/notification'

export const actions: ActionTree<NotificationState, RootState> = {
  add({ commit }, notification: Notification) {
    commit('PUSH', notification)
  },
  remove({ commit }, notificationToRemove: Notification) {
    commit('DELETE', notificationToRemove)
  }
}
