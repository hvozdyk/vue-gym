<template>
  <div>
    <h1>Event List for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <div class="pagination">
      <template v-if="page !== 1">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="next"
          >Prev</router-link
        >
      </template>
      <template v-if="hasNextPage">
        <router-link
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="prev"
          >Next</router-link
        >
      </template>
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: { EventCard },
  created() {
    this.perPage = 3
    this.$store.dispatch('event/fetchEvents', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.event.eventsTotal > this.page * 3
    },
    ...mapState(['event', 'eventsTotal', 'user'])
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}
a {
  margin: 0 10px;
}
</style>
