import axios, { AxiosPromise } from 'axios'
import { Event } from '@/types/event'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getEvents(perPage: number, page: number): AxiosPromise<Event[]> {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
  },
  getEvent(id: number): AxiosPromise<Event> {
    return apiClient.get('/events/' + id)
  },
  postEvent(event: Event): AxiosPromise<Event> {
    return apiClient.post('/events', event)
  }
}
