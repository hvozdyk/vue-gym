<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
    <pre> {{ getEventById(1) }}</pre>
    <p>Total: {{ catLength }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['catLength', 'getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style lang="scss" scoped></style>
