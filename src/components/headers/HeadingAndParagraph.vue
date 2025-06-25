<script setup lang="ts">
defineProps({
  heading: String,
  paragraph: String,
})
</script>

<template>
  <div class="heading-and-paragraph-container">
    <h3 class="heading">{{heading}}</h3>
    <p class="paragraph">{{paragraph}}</p>
  </div>
</template>

<style scoped lang="scss">
.heading-and-paragraph-container {
  display: flex;
  flex-direction: column;
  gap: 25px;

  .heading {
    font-weight: 700;
    font-size: 20px;
  }

  .paragraph {
    font-weight: 500;
    font-size: 17px;
  }
}
</style>