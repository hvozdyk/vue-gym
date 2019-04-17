<template>
  <div>
    <h1>Event List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <template v-if="page !== 1">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="next"
          >Prev</router-link
        >
      </template>
      <template v-if="eventsTotal > page * 3">
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
    this.$store.dispatch('fetchEvents', {
      perPage: this.perPage,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events', 'eventsTotal'])
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
