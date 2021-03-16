<template>
  <header class="header">
    <div class="top">
      <img src="../assets/logo.png" alt="rick and morty logo" />
      <slot name="searchbar" />
    </div>
    <slot name="menu" />
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      logo: "../assets/logo.png"
    };
  }
});
</script>

<style land="scss" scoped>
.top {
  align-items: center;
  display: flex;
}

/*TODO - some sass errors dont allow me to paste this img into .top above, check it out later*/
img {
  margin: 30px;
  cursor: pointer;
}
</style>
