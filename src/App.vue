<script setup>
import Layout from './components/Layout.vue';
</script>

<template>
  <div>
    <Layout />
  </div>
</template>

<style lang="css" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
