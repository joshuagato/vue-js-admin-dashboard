<script setup lang="ts">
import DisplayCard from "../DisplayCard.vue";
import FilterCard from "../FilterCard.vue";
import SummaryCardsRow from "../containers/SummaryCardsRow.vue";
import Student from "./Student.vue";

const staffList = [
  { id: 'VT002123', parentName: 'Karen Okyere', student: 'Yaa Okyere', role: 'Mathematics', dateCreated: '23/09/2023' },
  { id: 'VT002123', parentName: 'Karen Okyere', student: 'Yaa Okyere', role: 'Mathematics', dateCreated: '23/09/2023' },
  { id: 'VT002123', parentName: 'Karen Okyere', student: 'Yaa Okyere', role: 'Mathematics', dateCreated: '23/09/2023' },
  { id: 'VT002123', parentName: 'Karen Okyere', student: 'Yaa Okyere', role: 'Mathematics', dateCreated: '23/09/2023' },
  { id: 'VT002123', parentName: 'Karen Okyere', student: 'Yaa Okyere', role: 'Mathematics', dateCreated: '23/09/2023' },
  { id: 'VT002123', parentName: 'Karen Okyere', student: 'Yaa Okyere', role: 'Mathematics', dateCreated: '23/09/2023' },
  { id: 'VT002123', parentName: 'Karen Okyere', student: 'Yaa Okyere', role: 'Mathematics', dateCreated: '23/09/2023' },
  { id: 'VT002123', parentName: 'Karen Okyere', student: 'Yaa Okyere', role: 'Mathematics', dateCreated: '23/09/2023' },
]

</script>

<template>
  <article id="parent-container" class="fade-in">
    <section class="top-section">
      <FilterCard class="filter-card" filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
    </section>

    <section class="middle-section">
      <SummaryCardsRow>
        <DisplayCard :data-figure="124" data-text="Total Parent" />
        <DisplayCard :data-figure="124" data-text="Active Parent" />
        <DisplayCard :data-figure="124" data-text="Deactivated Parent" />
        <DisplayCard :data-figure="124" data-text="Linked Parent" />
      </SummaryCardsRow>

      <SummaryCardsRow>
        <DisplayCard :data-figure="124" data-text="Unlinked Parent" />
      </SummaryCardsRow>
    </section>

    <section class="bottom-section">
      <article class="head-section">
        <h1 class="heading">{{'Parent'}}</h1>
        <router-link to="/users/create-staff">{{'Create Parent'}}</router-link>
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
              <th>Parent Name</th>
              <th>Student</th>
              <th>Subjects</th>
              <th style="width: 140px">Date Created</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="staff in staffList">
              <td style="width: 100px">{{staff.id}}</td>
              <td>{{staff.parentName}}</td>
              <td>{{ staff.student }}</td>
              <td>{{staff.role}}</td>
              <td style="width: 140px">{{staff.dateCreated}}</td>
              <td>
                <button class="view-account">View Account</button>
                <button class="link">Link Child</button>
                <button class="edit">Edit</button>
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
#parent-container {
  max-width: 100%;
  height: calc(100vh - 73px);
  overflow-y: scroll;

  .top-section {
    max-width: 1400px;
    display: flex;
    justify-content: flex-end;

    .filter-card {
      margin-top: 30px;
      margin-left: 45px;
    }
  }

  .middle-section {
    max-width: 1400px;
  }

  .bottom-section {
    max-width: 1450px;
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
              width: 430px;
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

              .view-account {
                background-color: #DADADA;
              }

              .link {
                background-color: #FFB110A1;
              }

              .edit {
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