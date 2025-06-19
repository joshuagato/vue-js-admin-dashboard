<script lang="ts">
import {defineComponent} from 'vue'
import TopBar from "./Layout/TopBar.vue";
import SideBar from "./Layout/SideBar.vue";

export default defineComponent({
  name: "Layout",
  components: {SideBar, TopBar}
})
</script>

<template>
  <div id="main-layout">
    <TopBar />

    <SideBar />
  </div>
</template>

<style lang="scss" scoped>

</style>