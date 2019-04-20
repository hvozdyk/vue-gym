<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <select
      :value="value"
      @change="updateValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === value"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
import { baseFormFieldMixin } from '@/mixins/baseFormFieldMixin'

export default {
  mixins: [baseFormFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
