<script setup lang="ts">
import DisplayCard from "./DisplayCard.vue";

</script>

<template>
  <article id="home-container" class="fade-in">
    <DisplayCard :data-figure="124" data-text="Student Signups" />
    <DisplayCard :data-figure="124" data-text="Upcoming Lessons" />
    <DisplayCard :data-figure="124" data-text="Total Tickets" />
  </article>
</template>

<style scoped lang="scss">
#home-container {
  display: flex;
}
</style>