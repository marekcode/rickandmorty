<template>
  <BaseSvg
    :name="'search-icon'"
    :width="24"
    :height="24"
    fill="none"
    :class="[selected ? `is-selected` : ``]"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </BaseSvg>
</template>

<script lang="ts">
import Vue from "vue";
import BaseSvg from "../BaseSvg.vue";

export default Vue.extend({
  components: {
    BaseSvg: BaseSvg
  },
  props: {
    selected: {
      type: Boolean,
      required: false
    }
  }
});
</script>
