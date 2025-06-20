<script setup lang="ts">

defineProps({
  filterTitle: String,
  filterOption1: String,
  filterOption2: String,
  filterOption3: String,
  filterOption4: String,
})
</script>

<template>
  <article id="filter-container">
    <img class="filter-image" src="../assets/filter-solid.png" alt="Filter image" />

    <div class="dropdown">
      <button class="dropbtn">
        <span>{{ filterTitle }}</span>
        <img class="filter-caret-image" src="../assets/caret-down-solid-black.png" alt="Caret down image" />
      </button>
      <div class="dropdown-content">
        <a href="#">{{ filterOption1 }}</a>
        <a href="#">{{ filterOption2 }}</a>
        <a href="#">{{ filterOption3 }}</a>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
#filter-container {
  margin-left: 54px;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;

  .filter-image {
    height: 28px;
    width: 30px;
    margin-right: 20px;
  }

  .dropbtn {
    background-color: #DADADA;
    color: #231F20;
    padding: 16px;
    font-size: 14px;
    font-weight: 500;
    font-family: Inter, sans-serif;
    border: none;
    cursor: pointer;
    width: 167px;
    height: 34px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: space-around;

    span {
      //padding-left: 5px;
      //margin-right: 35px;
    }
  }

  .dropdown {
    position: relative;
    display: inline-block;

    &:hover {
      .dropdown-content {
        display: block;
      }

      .dropbtn {
        background-color: #979797;
      }
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 167px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;

      &:hover {background-color: #f1f1f1}
    }
  }
}
</style>