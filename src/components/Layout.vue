<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Layout"
})
</script>

<template>
  <div id="main-layout">
    <section id="top-bar">
      <article id="left-side">
        <img class="logo-img" src="/virtutor-logo.png" alt="Virtutor Logo">
      </article>
      <article id="right-side">
        <img class="small-icon" src="../assets/bell-solid 2.png" alt="Bell solid">
        <img class="small-icon" src="../assets/circle-question-solid 1.png" alt="Circle question solid">
      </article>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#top-bar {
  width: 100%;
  height: 73px;
  background-color: #0C7334;
  display: flex;
  justify-content: space-between;

  #left-side {
    .logo-img {
      width: 47px;
      height: 47px;
    }
  }

  #right-side {

    .small-icon {
      width: 20px;
      height: 20px;
      margin-inline: 10px;
    }
  }
}
</style>