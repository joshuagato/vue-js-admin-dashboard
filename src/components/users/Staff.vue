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

      <article class="mid-section">
        <h1 class="heading">Total Number: {{'200'}}</h1>
        <FilterCard
            class="filter-card" filter-title="All Accounts"
            filter-option1="Option 1" filter-option2="Option 2"
            filter-option3="Option 3"
        />
      </article>

      <article class="table-section">
        <table>
          <thead>
            <tr>
              <th style="width: 100px">ID NO</th>
              <th>Full Name</th>
              <th>Department</th>
              <th>Role</th>
              <th style="width: 140px">Date Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 100px">VT002123</td>
              <td>Karen Okyere</td>
              <td>Tech</td>
              <td>Technical Agent</td>
              <td style="width: 140px">23/09/2023</td>
              <td>
                <button class="view-more">View Staff</button>
                <button class="activate">Activate</button>
                <button class="deactivate">Deactivate</button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
#staff-container {
  .top-section {
    display: flex;
  }

  .bottom-section {
    max-width: 1400px;
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

    .mid-section {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .heading {
        font-size: 18px;
        font-weight: 700;
        margin-left: 54px;
      }

      .filter-card {
        margin-right: 66px;
      }
    }

    .table-section {
      margin-left: 54px;

      th {
        font-weight: 700;
        font-size: 18px;
        width: 220px;
        text-align: left;
      }

      td {
        font-weight: 400;
        font-size: 14px;
        width: 220px;
        text-align: left;
      }

      tbody {
        td {
          &:last-child {
            width: 320px;
            display: flex;
            justify-content: space-between;

            button {
              font-weight: 500;
              font-size: 14px;
              border-radius: 5px;
              width: 100px;
              height: 34px;
              border: none;
              cursor: pointer;
            }

            .view-more {
              background-color: #DADADA;
            }

            .activate {
              background-color: #9CFFC5;
            }

            .deactivate {
              background-color: #FE9E9E;
            }
          }
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