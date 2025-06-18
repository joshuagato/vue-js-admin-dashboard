<script lang="ts">
import {defineComponent} from 'vue'
import TopBar from "./Layout/TopBar.vue";

export default defineComponent({
  name: "Layout",
  components: {TopBar}
})
</script>

<template>
  <div id="main-layout">
    <TopBar />
  </div>
</template>

<style lang="scss" scoped>

</style>