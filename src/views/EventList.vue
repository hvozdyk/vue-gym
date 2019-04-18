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
import store from '@/store/store'

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1
  store
    .dispatch('event/fetchEvents', {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: { EventCard },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next)
  },
  computed: {
    hasNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage
    },
    ...mapState(['event', 'user'])
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
