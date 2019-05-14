import { UserState } from './types'
import { Module } from 'vuex'
import { RootState } from '../types'

export const state: UserState = {
  user: { id: 'abc123', name: 'Adam' }
}

export const user: Module<UserState, RootState> = {
  state
}
