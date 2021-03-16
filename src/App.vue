<template>
  <div id="app">
    <header-app>
      <searchbar slot="searchbar"></searchbar>
      <navbar slot="menu"></navbar>
    </header-app>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Navbar from "./components/Navbar.vue";

export default Vue.extend({
  components: {
    navbar: Navbar,
    "header-app": Header,
    searchbar: Search
  }
});
</script>

<style lang="scss">
@import "./styles/color";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
