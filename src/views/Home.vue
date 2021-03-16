<template>
  <section class="home">
    <table-app :selected="false"></table-app>
    <nav-tab></nav-tab>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import TableApp from "../components/Table.vue";
import NavTab from "../components/Navtab.vue";

export default Vue.extend({
  components: {
    "table-app": TableApp,
    "nav-tab": NavTab
  }
});
</script>

<style scoped></style>
