<script setup lang="ts">
import DisplayCard from "../../DisplayCard.vue";
import FilterCard from "../../FilterCard.vue";
import SummaryCardsRow from "../../containers/SummaryCardsRow.vue";
import {computed} from "vue";
import {useRoute} from "vue-router";

const list = [
  { id: 'VT29373', name: 'Karen Osei', subjects: 'Science', curriculum: 'ICGCE', date: '23/02/2024' },
  { id: 'VT29373', name: 'Karen Osei', subjects: 'Science', curriculum: 'ICGCE', date: '23/02/2024' },
  { id: 'VT29373', name: 'Karen Osei', subjects: 'Science', curriculum: 'ICGCE', date: '23/02/2024' },
  { id: 'VT29373', name: 'Karen Osei', subjects: 'Science', curriculum: 'ICGCE', date: '23/02/2024' },
  { id: 'VT29373', name: 'Karen Osei', subjects: 'Science', curriculum: 'ICGCE', date: '23/02/2024' },
  { id: 'VT29373', name: 'Karen Osei', subjects: 'Science', curriculum: 'ICGCE', date: '23/02/2024' },
  { id: 'VT29373', name: 'Karen Osei', subjects: 'Science', curriculum: 'ICGCE', date: '23/02/2024' },
  { id: 'VT29373', name: 'Karen Osei', subjects: 'Science', curriculum: 'ICGCE', date: '23/02/2024' },
]

const handleClick = (event: MouseEvent) => {
  // const clickedElement = event.target as HTMLElement;
  const clickedElement = event.currentTarget as HTMLElement;

  const parent = clickedElement.parentNode;
  const siblings = parent.children;

  // Loop through all siblings and remove the 'active-border' class
  for (let i = 0; i < siblings.length; i++) {
    const sibling = siblings[i] as HTMLElement; // Cast to HTMLElement
    if (sibling.classList.contains('active-border')) {
      sibling.classList.remove('active-border');
    }
  }

  // Add the 'active-border' class to the clicked element
  clickedElement.classList.add('active-border');
}

const route = useRoute();

const isTutorsHomePath = computed(() => route.path === '/users/tutors');
const isPendingPath = computed(() => route.path === '/users/tutors/pending');

</script>

<template>
  <article id="parent-container" class="fade-in">
    <section class="top-section">
      <FilterCard class="filter-card" filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
    </section>

    <section class="middle-section">
      <SummaryCardsRow>
        <DisplayCard :data-figure="124" data-text="Total Tutors" />
        <DisplayCard :data-figure="124" data-text="Active Tutors" />
        <DisplayCard :data-figure="124" data-text="Deactivated Tutors" />
        <DisplayCard :data-figure="124" data-text="Pending Tutors" />
      </SummaryCardsRow>
    </section>

    <section class="bottom-section">
      <article class="head-section">
        <div class="menu-items">
          <router-link :class="{'active-border': isTutorsHomePath}" @click="handleClick" to="/users/tutors">
            {{'Tutors'}}
          </router-link>
          <router-link :class="{'active-border': isPendingPath}" @click="handleClick" to="/users/tutors/pending">
            {{'Pending Tutors'}}
          </router-link>
        </div>
        <router-link to="/users/create-tutor">{{'Create Tutor'}}</router-link>
      </article>

      <hr />

      <article class="mid-section">
<!--        <h1 class="heading">Total Number: {{'200'}}</h1>-->
        <FilterCard
            class="filter-card" filter-title="All Tutors"
            filter-option1="Option 1" filter-option2="Option 2"
            filter-option3="Option 3"
        />
      </article>

      <article class="table-section">
        <table>
          <thead>
            <tr>
              <th style="width: 100px">ID NO</th>
              <th>Tutor's Name</th>
              <th>Subjects</th>
              <th>Curriculum</th>
              <th style="width: 140px">Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="{id, name, subjects, curriculum, date} in list">
              <td style="width: 100px">{{id}}</td>
              <td>{{name}}</td>
              <td>{{ subjects }}</td>
              <td>{{curriculum}}</td>
              <td style="width: 140px">{{date}}</td>
              <td>
                <button class="view-account">View Account</button>
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
          //border-bottom: 3px solid #0C7334;

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
      justify-content: flex-end;
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

.active-border {
  border-bottom: 3px solid #0C7334;
}
</style>