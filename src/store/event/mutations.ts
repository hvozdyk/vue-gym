import { MutationTree } from 'vuex'
import { EventState } from './types'
import { Event } from '@/types/event'

export const mutations: MutationTree<EventState> = {
  ADD_EVENT(state, payload: Event) {
    state.events.push(payload)
  },
  SET_EVENTS(state, payload: Event[]) {
    state.events = payload
  },
  SET_EVENTS_TOTAL(state, payload: number) {
    state.eventsTotal = payload
  },
  SET_EVENT(state, payload: Event) {
    state.event = payload
  }
}
