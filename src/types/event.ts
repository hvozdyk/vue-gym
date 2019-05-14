import { User } from './user'

export interface Event {
  id: number
  user: User
  category: string
  organizer: User
  title: string
  description: string
  location: string
  date: string
  time: string
  attendees: User[]
}
