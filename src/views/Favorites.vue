<template>
  <section class="favorites">
    <tableApp :selected="true"></tableApp>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import TableApp from "../components/Table.vue";

export default Vue.extend({
  components: {
    tableApp: TableApp
  }
});
</script>

<style scoped></style>
