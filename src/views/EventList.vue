<template>
  <div>
    <h1>Event List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      events: []
    }
  },
  components: { EventCard },
  created() {
    EventService.getEvents()
      .then(res => (this.events = res.data))
      .catch(err => console.log(`There was an error: ${err.response}`))
  }
}
</script>
