<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div class="create-button-container">
    <button class="create-button">{{title}}</button>
  </div>
</template>

<style scoped lang="scss">
.create-button-container {
  margin-left: 80px;
  margin-top: 125px;
  margin-bottom: 50px;
  width: calc(100% - 80px - 80px);
  display: flex;
  justify-content: flex-end;

  .create-button {
    border: none;
    background-color: #9CFFC5;
    width: 215px;
    height: 62px;
    font-size: 23px;
    font-weight: 500;
  }
}
</style>