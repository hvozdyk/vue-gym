import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { user } from './user/index'
import { event } from './event/index'
import { notification } from './notification/index'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  modules: { user, event, notification }
}

export default new Vuex.Store<RootState>(store)
