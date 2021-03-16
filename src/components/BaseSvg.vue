<template>
  <svg
    :aria-label="name"
    :class="[`svg-${name}`]"
    :height="`${height}px`"
    :viewBox="`0 0 ${width} ${height}`"
    :width="`${width}px`"
    role="presentation"
    :preserveAspectRatio="preserveAspectRatio"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Base-svg",
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: false,
      default: 24
    },
    height: {
      type: Number,
      required: false,
      default: 24
    },
    preserveAspectRatio: {
      type: String || undefined,
      required: false
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../styles/color";

svg {
  cursor: pointer;
  fill: $secondary;

  &.selected {
    fill: $primary;
  }
}
</style>
