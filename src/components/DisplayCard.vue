<script setup lang="ts">

defineProps({
  dataFigure: Number,
  dataText: String
})
</script>

<template>
  <article class="data-card">
    <span class="data-figure">{{ dataFigure }}</span>
    <span class="data-text">{{ dataText }}</span>
  </article>
</template>

<style scoped lang="scss">
.data-card {
  width: 273px;
  height: 134px;
  background-color: #FFF;
  border-radius: 10px;
  margin-top: 34px;
  margin-left: 34px;
  text-align: center;

  .data-figure {
    font-size: 60px;
    padding-top: 18px;
  }

  .data-text {
    font-size: 14px;
    margin-top: 12px;
  }

  .data-figure, .data-text {
    display: block;
    font-weight: 500;
  }
}
</style>