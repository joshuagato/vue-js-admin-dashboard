<script setup lang="ts">
defineProps({
  text: String
})
</script>

<template>
  <div class="paragraph-container">
    <p class="paragraph"><slot></slot></p>
  </div>
</template>

<style scoped lang="scss">
.paragraph-container {
  margin-left: 80px;
  margin-bottom: 25px;

  .paragraph {
    font-weight: 500;
    font-size: 16px;
  }
}
</style>