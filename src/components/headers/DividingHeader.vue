<script setup lang="ts">
defineProps({
  text: String,
})
</script>

<template>
  <div class="heading-container">
    <h2 class="heading">{{text}}</h2>
  </div>
</template>

<style scoped lang="scss">
.heading-container {
  margin-left: 80px;
  margin-bottom: 40px;
  margin-top: 100px;

  .heading {
    font-weight: 700;
    font-size: 19px;
  }
}
</style>