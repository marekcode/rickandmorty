<template>
  <BaseSvg
    :name="'search-icon'"
    :width="24"
    :height="24"
    fill="none"
    :class="[selected ? `is-selected` : ``]"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M19 13H5v-2h14v2z" />
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
