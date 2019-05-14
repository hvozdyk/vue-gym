import { Event } from '@/types/event'

export interface EventState {
  events: Event[]
  eventsTotal: number
  event: Event | null
  perPage: number
}
