<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TopBar"
})
</script>

<template>
  <section id="top-bar">
    <article id="left-side">
      <img class="logo-img" src="/virtutor-logo.png" alt="Virtutor Logo">
    </article>
    <article id="right-side">

      <!--   Question mark     -->
      <span class="small-icon"><img src="../../assets/circle-question-solid 1.png" alt="Circle question solid"></span>

      <img class="small-bar" src="../../assets/Rectangle%2085.png" alt="Bar">

      <!--   Notification bell     -->
      <span class="small-icon"><img src="../../assets/bell-solid 2.png" alt="Bell solid"></span>

      <img class="small-bar" src="../../assets/Rectangle%2085.png" alt="Bar">

      <section class="detail-section">
        <img class="user-image" src="/virtutor-admin-image.png" alt="Logged in user image">
        <span class="user-name">{{ 'VirtTutor Admin' }}</span>
        <img class="user-image-icon" src="../../assets/caret-down-solid.png" alt="Caret down">
      </section>
    </article>
  </section>
</template>

<style lang="scss" scoped>
#top-bar {
  width: 100%;
  height: 73px;
  background-color: #0C7334;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.25);

  #left-side {
    width: 172px;
    text-align: center;

    .logo-img {
      width: 47px;
      height: 47px;
    }
  }

  #right-side {

    .small-icon {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }

    .small-bar {
      margin-right: 20px;
    }

    .detail-section {
      display: inline-flex;
      align-items: center;
      margin-right: 20px;
      color: white;
    }

    .user-image {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    .user-name {
      font-family: Inter, sans-serif;
      font-size: 12px;
      font-weight: 500;
    }

    .user-image-icon, .user-name {
      margin-right: 10px;
    }
  }
}
</style>