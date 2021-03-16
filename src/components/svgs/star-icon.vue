<template>
  <BaseSvg
    :name="'search-icon'"
    :width="24"
    :height="24"
    fill="none"
    :class="[selected ? `is-selected` : ``]"
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path
        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
      />
    </g>
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
