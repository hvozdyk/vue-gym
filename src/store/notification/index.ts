import { NotificationState } from './types'
import { Module } from 'vuex'
import { RootState } from '../types'
import { mutations } from './mutations'
import { actions } from './actions'

export const namespaced: boolean = true

export const state: NotificationState = {
  notifications: []
}

export const notification: Module<NotificationState, RootState> = {
  namespaced,
  state,
  mutations,
  actions
}
