<script setup lang="ts">
defineProps({
  text: String
})
</script>

<template>
  <div class="heading-container">
    <h3 class="sub-heading">{{text}}</h3>
  </div>
</template>

<style scoped lang="scss">
.heading-container {

  margin-top: 80px;
  margin-left: 80px;
  margin-bottom: 21px;

  .sub-heading {
    font-weight: 700;
    font-size: 19px;
  }
}
</style>