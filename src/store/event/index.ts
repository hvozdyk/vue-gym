import { EventState } from './types'
import { Module } from 'vuex'
import { RootState } from '@/store/types'
import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

const namespaced: boolean = true

export const state: EventState = {
  events: [],
  eventsTotal: 0,
  event: null,
  perPage: 3
}

export const event: Module<EventState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
