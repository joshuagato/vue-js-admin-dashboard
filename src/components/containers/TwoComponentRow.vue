<script setup lang="ts">

</script>

<template>
  <div class="two-component-row">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.two-component-row {
  margin-left: 80px;
  margin-bottom: 40px;
  width: calc(100% - 80px - 80px);
  //display: flex;
  //justify-content: space-between;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}
</style>