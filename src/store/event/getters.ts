import { GetterTree } from 'vuex'
import { RootState } from '@/store/types'
import { EventState } from './types'

export const getters: GetterTree<EventState, RootState> = {
  getEventById: state => (id: number) => {
    return state.events.find(event => event.id === id)
  }
}
