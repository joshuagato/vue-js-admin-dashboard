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

    <section id="side-bar">
      <article class="menu-item"><img src="../assets/side-menu/users-solid%201.png" /><span>Users</span></article>
      <article class="menu-item"><img src="../assets/side-menu/video-solid%202.png" /><span>Bookings</span></article>
      <article class="menu-item"><img src="../assets/side-menu/user-graduate-solid 1.png" /><span>Academics</span></article>
      <article class="menu-item"><img src="../assets/side-menu/wallet-solid 1.png" /><span>Finance</span></article>
      <article class="menu-item"><img src="../assets/side-menu/user-graduate-solid 1.png" /><span>Academy</span></article>
      <article class="menu-item"><img src="../assets/side-menu/user-graduate-solid 1.png" /><span>Schools</span></article>
      <article class="menu-item"><img src="../assets/side-menu/bullhorn-solid 1.png" /><span>Marketing</span></article>
      <article class="menu-item"><img src="../assets/side-menu/message-solid 1.png" /><span>Messages</span></article>
      <article class="menu-item"><img src="../assets/side-menu/envelope-solid 2.png" /><span>Emails</span></article>
      <article class="menu-item"><img src="../assets/side-menu/robot-solid 1.png" /><span>Support</span></article>
      <article class="menu-item"><img src="../assets/side-menu/paintbrush-solid 1.png" /><span>Design</span></article>
      <article class="menu-item"><img src="../assets/side-menu/star-solid 17.png" /><span>Reviews</span></article>

      <article class="menu-item"><img src="../assets/side-menu/right-from-bracket-solid 1.png" /></article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#side-bar {
  width: 172px;
  height: calc(100vh - 73px);
  background-color: #0C7334;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter, sans-serif;

  .menu-item {
    margin-bottom: 34px;
    padding-left: 22px;
    display: flex;
    align-items: center;

    img {
      margin-right: 18px;
      width: 25px;
      height: 25px;
    }
  }

  .menu-item:first-child {
    padding-top: 34px;
  }

  .menu-item:last-child {
    justify-content: center;
    margin-bottom: 0;
    padding-left: 0;
  }
}
</style>