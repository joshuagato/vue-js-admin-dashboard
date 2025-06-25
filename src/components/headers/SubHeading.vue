<script setup lang="ts">
defineProps({
  text: String
})
</script>

<template>
  <div class="sub-heading-container">
    <h3 class="sub-heading">{{text}}</h3>
  </div>
</template>

<style scoped lang="scss">
.sub-heading-container {
  margin-left: 80px;
  margin-bottom: 25px;

  .sub-heading {
    font-weight: 500;
    font-size: 20px;
  }
}
</style>