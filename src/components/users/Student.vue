<script setup lang="ts">
import DisplayCard from "../DisplayCard.vue";
import FilterCard from "../FilterCard.vue";
import SearchInput from "../inputs/SearchInput.vue";

const staffList = [
  { id: 'VT002123', fullName: 'Karen Okyere', parent: 'Yaa Okyere', subjects: 'Mathematics', curriculum: 'BECE' },
  { id: 'VT002123', fullName: 'Karen Okyere', parent: 'Yaa Okyere', subjects: 'Mathematics', curriculum: 'BECE' },
  { id: 'VT002123', fullName: 'Karen Okyere', parent: 'Yaa Okyere', subjects: 'Mathematics', curriculum: 'BECE' },
  { id: 'VT002123', fullName: 'Karen Okyere', parent: 'Yaa Okyere', subjects: 'Mathematics', curriculum: 'BECE' },
  { id: 'VT002123', fullName: 'Karen Okyere', parent: 'Yaa Okyere', subjects: 'Mathematics', curriculum: 'BECE' },
  { id: 'VT002123', fullName: 'Karen Okyere', parent: 'Yaa Okyere', subjects: 'Mathematics', curriculum: 'BECE' },
  { id: 'VT002123', fullName: 'Karen Okyere', parent: 'Yaa Okyere', subjects: 'Mathematics', curriculum: 'BECE' },
  { id: 'VT002123', fullName: 'Karen Okyere', parent: 'Yaa Okyere', subjects: 'Mathematics', curriculum: 'BECE' },
]

</script>

<template>
  <article id="student-container" class="fade-in">
    <section class="top-section">
      <FilterCard filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
    </section>

    <div class="middle-section">
      <article class="row">

      </article>
      <article class="row">
        <DisplayCard :data-figure="124" data-text="Total Students" />
        <DisplayCard :data-figure="124" data-text="Active Students" />
        <DisplayCard :data-figure="124" data-text="Deactivated Students" />
        <DisplayCard :data-figure="124" data-text="Private Students" />
      </article>
      <article class="row">
        <DisplayCard :data-figure="124" data-text="Active Private Students" />
        <DisplayCard :data-figure="124" data-text="Deactivated Private Students" />
        <DisplayCard :data-figure="124" data-text="InPerson Students" />
        <DisplayCard :data-figure="124" data-text="Active InPerson Students" />
      </article>
      <article class="row">
        <DisplayCard :data-figure="124" data-text="Deactivated InPerson Students" />
        <DisplayCard :data-figure="124" data-text="Academy Students" />
        <DisplayCard :data-figure="124" data-text="Active Academy Students" />
        <DisplayCard :data-figure="124" data-text="Deactivated Academy Students" />
      </article>
      <article class="row">
        <DisplayCard :data-figure="124" data-text="School Opportunity" />
        <DisplayCard :data-figure="124" data-text="Active School Opportunity" />
        <DisplayCard :data-figure="124" data-text="Deactivated School Opportunity" />
      </article>
    </div>

    <section class="bottom-section">
      <article class="head-section">
        <h1 class="heading">{{'Student'}}</h1>
        <router-link to="/users/create-student">{{'Create Student'}}</router-link>
      </article>

      <hr />

      <article class="mid-section">
        <h1 class="heading">Total Number: {{'200'}}</h1>

        <div class="filters-section">
          <FilterCard
              filter-title="All Accounts"
              filter-option1="Option 1"
              filter-option2="Option 2"
              filter-option3="Option 3"
          />
          <SearchInput id="searchStudent" placeholder="Search Student.." />
        </div>
      </article>

      <article class="table-section">
        <table>
          <thead>
            <tr>
              <th style="width: 100px">ID NO</th>
              <th>Full Name</th>
              <th>Parent</th>
              <th>Subjects</th>
              <th style="width: 140px">Curriculum</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="staff in staffList">
              <td style="width: 100px">{{staff.id}}</td>
              <td>{{staff.fullName}}</td>
              <td>{{ staff.parent }}</td>
              <td>{{staff.subjects}}</td>
              <td style="width: 140px">{{staff.curriculum}}</td>
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
#student-container {
  max-width: 100%;
  height: calc(100vh - 50px - 73px);
  overflow-y: scroll;

  .top-section {
    max-width: 1400px;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-bottom: 45px;
  }

  .middle-section {
    max-width: 1400px;

    .row {
      width: 100%;
      display: flex;
    }
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
        margin-bottom: 30px;
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
      height: 40px;
      margin-top: 15px;
      margin-bottom: 50px;

      .heading {
        font-size: 18px;
        font-weight: 700;
        margin-left: 54px;
      }

      .filters-section {
        height: 40px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-right: 65px;
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
        tr {
          td {
            border-bottom: 1px solid #D9D9D9;
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
    }

    hr {
      height: 2px;
      color: #D9D9D9;
      background-color: #D9D9D9;
    }
  }
}


</style>