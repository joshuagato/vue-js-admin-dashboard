<script setup lang="ts">
import DisplayCard from "../DisplayCard.vue";
import FilterCard from "../FilterCard.vue";

</script>

<template>
  <article id="staff-container">
    <section class="top-section">
      <DisplayCard :data-figure="124" data-text="Total Staff" />
      <DisplayCard :data-figure="12" data-text="Active Staff" />
      <DisplayCard :data-figure="12" data-text="Deactivated Staff" />

      <FilterCard filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
    </section>

    <section class="bottom-section">
      <article class="head-section">
        <h1 class="heading">{{'Staff'}}</h1>
        <router-link to="">{{'Create Staff'}}</router-link>
      </article>
      <hr />

    </section>
  </article>
</template>

<style scoped lang="scss">
#staff-container {
  .top-section {
    display: flex;
  }

  .bottom-section {
    width: 1160px;
    height: calc(100vh - 50px - 134px - 34px - 73px);
    background-color: #FFFFFF;
    margin-top: 50px;
    margin-left: 40px;
    border-radius: 10px;
    font-family: Inter, sans-serif;

    .head-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .heading {
        font-size: 20px;
        font-weight: 600;
        padding-top: 28px;
        margin-bottom: 28px;
        margin-left: 45px;
      }

      a {
        width: 137px;
        height: 36px;
        border-radius: 5px;
        background-color: #0C7334;
        color: #FFF;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 14px;
        margin-right: 50px;

        &:link, &:visited {
          color: #FFF;
        }
      }
    }

    hr {
      height: 2px;
      color: #D9D9D9;
      background-color: #D9D9D9;
    }
  }
}


</style>