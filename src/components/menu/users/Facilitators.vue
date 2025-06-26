<script setup lang="ts">
import DisplayCard from "../../DisplayCard.vue";
import FilterCard from "../../FilterCard.vue";

const staffList = [
  { id: 'VT002123', facilitator: 'Kojo Kwabena', facilitatorType: 'School', school: 'Shooting Stars', totalStudents: 20, dateJoined: '23/09/2023' },
  { id: 'VT002123', facilitator: 'Kojo Kwabena', facilitatorType: 'School', school: 'Shooting Stars', totalStudents: 20, dateJoined: '23/09/2023' },
  { id: 'VT002123', facilitator: 'Kojo Kwabena', facilitatorType: 'School', school: 'Shooting Stars', totalStudents: 20, dateJoined: '23/09/2023' },
  { id: 'VT002123', facilitator: 'Kojo Kwabena', facilitatorType: 'School', school: 'Shooting Stars', totalStudents: 20, dateJoined: '23/09/2023' },
  { id: 'VT002123', facilitator: 'Kojo Kwabena', facilitatorType: 'School', school: 'Shooting Stars', totalStudents: 20, dateJoined: '23/09/2023' },
  { id: 'VT002123', facilitator: 'Kojo Kwabena', facilitatorType: 'School', school: 'Shooting Stars', totalStudents: 20, dateJoined: '23/09/2023' },
  { id: 'VT002123', facilitator: 'Kojo Kwabena', facilitatorType: 'School', school: 'Shooting Stars', totalStudents: 20, dateJoined: '23/09/2023' },
  { id: 'VT002123', facilitator: 'Kojo Kwabena', facilitatorType: 'School', school: 'Shooting Stars', totalStudents: 20, dateJoined: '23/09/2023' },
]

</script>

<template>
  <article id="staff-container" class="fade-in">
    <section class="top-section">
      <DisplayCard :data-figure="124" data-text="Total Facilitators" />
      <DisplayCard :data-figure="12" data-text="Active Facilitators" />
      <DisplayCard :data-figure="12" data-text="Deactivated Facilitators" />

      <FilterCard class="filter-card" filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
    </section>

    <section class="bottom-section">
      <article class="head-section">
        <div class="menu-items">
          <router-link to="/users/facilitators/schools">{{'Schools'}}</router-link>
          <router-link to="/users/facilitators/academy">{{'Academy'}}</router-link>
        </div>
        <router-link to="/users/create-facilitator">{{'Create Facilitator'}}</router-link>
      </article>

      <hr />

      <article class="mid-section">
        <h1 class="heading">Total Number: {{'200'}}</h1>
        <FilterCard
            class="filter-card" filter-title="All Schools"
            filter-option1="Option 1" filter-option2="Option 2"
            filter-option3="Option 3"
        />
      </article>

      <article class="table-section">
        <table>
          <thead>
            <tr>
              <th style="width: 100px">ID NO</th>
              <th>Facilitator</th>
              <th>Facilitator Type</th>
              <th>School</th>
              <th>Total Students</th>
              <th style="width: 140px">Date Joined</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="staff in staffList">
              <td style="width: 100px">{{staff.id}}</td>
              <td>{{staff.facilitator}}</td>
              <td>{{ staff.facilitatorType }}</td>
              <td>{{staff.school}}</td>
              <td>{{staff.totalStudents}}</td>
              <td style="width: 140px">{{staff.dateJoined}}</td>
              <td>
                <button class="view-more">View More</button>
                <button class="add">Add Student</button>
                <button class="edit">Edit</button>
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

    .filter-card {
      margin-top: 30px;
      margin-left: 45px;
    }
  }

  .bottom-section {
    max-width: 1500px;
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
      padding-left: 55px;

      .menu-items {
        margin-top: 35px;
        //margin-bottom: 15px;

        a {
          display: inline-block;
          text-align: center;
          font-weight: 500;
          font-size: 15px;
          width: 135px;
          height: 30px;
          margin-right: 20px;
          margin-bottom: -1.5px;
          //background-color: #716F6F;
          border-bottom: 3px solid #0C7334;

          &:link, &:visited {
            color: #000;
          }
        }
      }

      &>a {
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
      margin-top: 15px;
      margin-bottom: 50px;

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
      margin-right: 54px;

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

              .add {
                background-color: #FFB110A1;
              }

              .edit {
                background-color: #9CFFC5;
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