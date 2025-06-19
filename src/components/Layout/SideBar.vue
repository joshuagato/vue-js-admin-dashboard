<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SideBar"
})
</script>

<template>
  <section id="side-bar">
    <section id="side-bar-top">
      <article class="menu-item"><img src="../../assets/side-menu/users-solid%201.png" /><span>Users</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/video-solid%202.png" /><span>Bookings</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/user-graduate-solid 1.png" /><span>Academics</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/wallet-solid 1.png" /><span>Finance</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/user-graduate-solid 1.png" /><span>Academy</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/user-graduate-solid 1.png" /><span>Schools</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/bullhorn-solid 1.png" /><span>Marketing</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/message-solid 1.png" /><span>Messages</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/envelope-solid 2.png" /><span>Emails</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/robot-solid 1.png" /><span>Support</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/paintbrush-solid 1.png" /><span>Design</span></article>
      <article class="menu-item"><img src="../../assets/side-menu/star-solid 17.png" /><span>Reviews</span></article>
    </section>

    <section id="side-bar-bottom">
      <article class="menu-item"><img src="../../assets/side-menu/right-from-bracket-solid 1.png" /></article>
    </section>
  </section>
</template>

<style scoped lang="scss">
#side-bar {
  width: 172px;
  height: calc(100vh - 73px);
  background-color: #0C7334;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  #side-bar-top {
    .menu-item:first-child {
      padding-top: 34px;
    }
  }

  #side-bar-bottom {
    .menu-item {
      justify-content: center;
    }
  }
}
</style>