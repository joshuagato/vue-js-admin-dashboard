<script lang="ts">
import {defineComponent} from 'vue'
import TopBar from "./Layout/TopBar.vue";
import SideBar from "./Layout/SideBar.vue";
import DisplayCard from "./DisplayCard.vue";

export default defineComponent({
  name: "Layout",
  components: {SideBar, TopBar, DisplayCard}
})
</script>

<template>
  <div id="main-layout">
    <TopBar />
    <SideBar />

    <section id="main-content-section">
      <DisplayCard :data-figure="124" data-text="Student Signups" />
      <DisplayCard :data-figure="124" data-text="Upcoming Lessons" />
      <DisplayCard :data-figure="124" data-text="Total Tickets" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
#main-content-section {
  background-color: #EEFBF2;
  position: absolute;
  top: 73px;
  left: 172px;
  font-family: Inter, sans-serif;
  width: calc(100% - 172px);
  height: calc(100% - 73px);
  display: flex;
}
</style>