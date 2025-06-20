<script setup lang="ts">
import DisplayCard from "../DisplayCard.vue";
import FilterCard from "../FilterCard.vue";

</script>

<template>
  <article id="staff-container">
    <DisplayCard :data-figure="124" data-text="Total Staff" />
    <DisplayCard :data-figure="12" data-text="Active Staff" />
    <DisplayCard :data-figure="12" data-text="Deactivated Staff" />

    <FilterCard filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
  </article>
</template>

<style scoped lang="scss">
#staff-container {
  display: flex;


}


</style>