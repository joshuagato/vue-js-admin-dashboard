<script setup lang="ts">

</script>

<template>
  <div class="three-component-row">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.three-component-row {
  margin-left: 80px;
  margin-bottom: 40px;
  width: calc(100% - 80px - 80px);
  display: flex;
  justify-content: space-between;
}
</style>