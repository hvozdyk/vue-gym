import EventService from '@/services/EventService'
import { ActionTree } from 'vuex'
import { EventState } from './types'
import { RootState } from '@/store/types'
import { Event } from '@/types/event'

export const actions: ActionTree<EventState, RootState> = {
  createEvent({ commit, dispatch }, event: Event) {
    return EventService.postEvent(event)
      .then(() => {
        commit('ADD_EVENT', event)
        const notification = {
          type: 'success',
          message: 'Your event has been created!'
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating your event: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchEvents({ commit, dispatch, state }, { page }) {
    return EventService.getEvents(state.perPage, page)
      .then(res => {
        commit('SET_EVENTS_TOTAL', parseInt(res.headers['x-total-count']))
        commit('SET_EVENTS', res.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }
        dispatch('notification/add', notification, {
          root: true
        })
      })
  },
  fetchEvent({ commit, getters }, id: number) {
    const storedEvent = getters.getEventById(id)
    if (storedEvent) {
      commit('SET_EVENT', storedEvent)
      return storedEvent
    } else {
      return EventService.getEvent(id).then(res => {
        commit('SET_EVENT', res.data)
        return res.data
      })
    }
  }
}
