<template>
  <nav class="navbar">
    <router-link to="/">All Characters</router-link>
    <router-link to="/favorites">Favorites</router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "../styles/color";

.navbar {
  padding: 30px;
  text-align: left;

  a {
    color: $secondary;
    font-weight: bold;
    margin: 0 35px;
    text-decoration: none;

    &.router-link-exact-active {
      border-bottom: 3px solid $primary;
      color: $primary;
      padding-bottom: 4px;
    }
  }
}
</style>
