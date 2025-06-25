<script setup lang="ts">
defineProps({
  heading: String
})
</script>

<template>
  <section class="checkbox-section">
    <h3 class="checkbox-section-heading">{{ heading }}</h3>
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.checkbox-section {
  .checkbox-section-heading {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 25px;
  }
}
</style>