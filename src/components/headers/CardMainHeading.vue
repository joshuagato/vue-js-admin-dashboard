<script setup lang="ts">
defineProps({
  text: String
})
</script>

<template>
  <div class="card-main-heading-container">
    <h1 class="card-main-heading">{{text}}</h1>
  </div>
</template>

<style scoped lang="scss">
.card-main-heading-container {
  //margin-top: 45px;
  //margin-left: 80px;

  .main-heading {
    font-weight: 700;
    font-size: 30px;
  }
}
</style>