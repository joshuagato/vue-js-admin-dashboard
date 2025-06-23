<script setup lang="ts">
defineProps({
  text: String
})
</script>

<template>
  <div class="main-heading-container">
    <h1 class="main-heading">{{text}}</h1>
  </div>
</template>

<style scoped lang="scss">
.main-heading-container {
  margin-top: 65px;
  margin-bottom: 65px;
  margin-left: 80px;

  .main-heading {
    font-weight: 700;
    font-size: 23px;
  }
}
</style>