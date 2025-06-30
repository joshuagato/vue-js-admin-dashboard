<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import { useRoute } from 'vue-router';

import DisplayCard from "../../DisplayCard.vue";
import FilterCard from "../../FilterCard.vue";
import SummaryCardsRow from "../../containers/SummaryCardsRow.vue";
import SearchInput from "../../inputs/SearchInput.vue";
import CardMainHeading from "../../headers/CardMainHeading.vue";
import Popup from "../../containers/Popup.vue";

const list = [
  { jobID: '01', clientManager: 'Karen Onah', client: 'Environmental Studies', students: 'Hannah Opoku', date: '12/03/2025 ', duration: '3 months', location: 'LX C2 Alaye Street, Accra' },
  { jobID: '01', clientManager: 'Karen Onah', client: 'Environmental Studies', students: 'Hannah Opoku', date: '12/03/2025 ', duration: '3 months', location: 'LX C2 Alaye Street, Accra' },
  { jobID: '01', clientManager: 'Karen Onah', client: 'Environmental Studies', students: 'Hannah Opoku', date: '12/03/2025 ', duration: '3 months', location: 'LX C2 Alaye Street, Accra' },
  { jobID: '01', clientManager: 'Karen Onah', client: 'Environmental Studies', students: 'Hannah Opoku', date: '12/03/2025 ', duration: '3 months', location: 'LX C2 Alaye Street, Accra' },
  { jobID: '01', clientManager: 'Karen Onah', client: 'Environmental Studies', students: 'Hannah Opoku', date: '12/03/2025 ', duration: '3 months', location: 'LX C2 Alaye Street, Accra' },
  { jobID: '01', clientManager: 'Karen Onah', client: 'Environmental Studies', students: 'Hannah Opoku', date: '12/03/2025 ', duration: '3 months', location: 'LX C2 Alaye Street, Accra' },
  { jobID: '01', clientManager: 'Karen Onah', client: 'Environmental Studies', students: 'Hannah Opoku', date: '12/03/2025 ', duration: '3 months', location: 'LX C2 Alaye Street, Accra' },
  { jobID: '01', clientManager: 'Karen Onah', client: 'Environmental Studies', students: 'Hannah Opoku', date: '12/03/2025 ', duration: '3 months', location: 'LX C2 Alaye Street, Accra' },
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

const isJobsHomePath = computed(() => route.path === '/bookings/jobs');
const isPendingPath = computed(() => route.path === '/bookings/jobs/pending');
const isActivePath = computed(() => route.path === '/bookings/jobs/active');
const isPausedPath = computed(() => route.path === '/bookings/jobs/paused');
const isCompletedPath = computed(() => route.path === '/bookings/jobs/completed');

const popUp = ref(false);

const handlePopUp = (event: MouseEvent) => popUp.value = !popUp.value;

</script>

<template>
  <article id="parent-container" class="fade-in">
    <section class="top-section">
      <CardMainHeading text="In Person Jobs" />
      <FilterCard class="filter-card" filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
    </section>

    <section class="middle-section">
      <SummaryCardsRow>
        <DisplayCard :data-figure="124" data-text="Total Jobs" />
        <DisplayCard :data-figure="124" data-text="Active Jobs" />
        <DisplayCard :data-figure="124" data-text="Pending Jobs" />
        <DisplayCard :data-figure="124" data-text="Paused Jobs" />
        <DisplayCard :data-figure="124" data-text="Completed Jobs" />
      </SummaryCardsRow>
    </section>

    <section class="bottom-section">
      <article class="head-section">
        <div class="menu-items">
          <router-link :class="{'active-border': isPendingPath || isJobsHomePath}" @click="handleClick" to="/bookings/jobs/pending">
            {{'Pending Jobs'}}
          </router-link>
          <router-link :class="{'active-border': isActive}" @click="handleClick" to="/bookings/jobs/active">
            {{'Active Jobs'}}
          </router-link>
          <router-link :class="{'active-border': isPausedPath}" @click="handleClick" to="/bookings/jobs/paused">
            {{'Paused Jobs'}}
          </router-link>
          <router-link :class="{'active-border': isCompletedPath}" @click="handleClick" to="/bookings/jobs/completed">
            {{'Completed Jobs'}}
          </router-link>
        </div>
        <SearchInput class="fade-in" v-if="!isJobsHomePath && !isPendingPath" id="searchLesson" placeholder="Search lesson.." />
        <router-link class="fade-in" v-if="isJobsHomePath || isPendingPath" to="/bookings/create-job">{{'Create Job'}}</router-link>
      </article>

      <hr />

      <article class="mid-section">
        <h1 class="heading">Total Number: {{'200'}}</h1>
        <FilterCard
            class="filter-card" filter-title="All Jobs"
            filter-option1="Option 1" filter-option2="Option 2"
            filter-option3="Option 3"
        />
      </article>

      <article class="table-section">
        <Popup v-if="popUp" :handlePopUp="handlePopUp" />
        <table>
          <thead>
            <tr>
              <th style="width: 100px">Job ID</th>
              <th>Client Manager</th>
              <th>Client</th>
              <th>Students</th>
              <th style="width: 140px">Date/Time</th>
              <th>Duration</th>
              <th style="width: 300px">Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="isJobsHomePath || isPendingPath" class="fade-in" v-for="{jobID, clientManager, client, students, date, duration, location} in list">
              <td style="width: 100px">{{jobID}}</td>
              <td>{{clientManager}}</td>
              <td>{{ client }}</td>
              <td>{{students}}</td>
              <td style="width: 140px">{{date}}</td>
              <td>{{duration}}</td>
              <td style="width: 300px">{{location}}</td>
              <td>
                <button class="view-account" @click="handlePopUp">View More</button>
              </td>
            </tr>

            <tr v-if="isActivePath" class="fade-in" v-for="{jobID, clientManager, client, students, date, duration, location} in list">
              <td style="width: 100px">{{jobID}}</td>
              <td>{{clientManager}}</td>
              <td>{{ client }}</td>
              <td>{{students}}</td>
              <td style="width: 140px">{{date}}</td>
              <td>{{duration}}</td>
              <td style="width: 300px">{{location}}</td>
              <td>
                <button class="view-account" @click="handlePopUp">View More</button>
              </td>
            </tr>

            <tr v-if="isPausedPath" class="fade-in" v-for="{jobID, clientManager, client, students, date, duration, location} in list">
              <td style="width: 100px">{{jobID}}</td>
              <td>{{clientManager}}</td>
              <td>{{ client }}</td>
              <td>{{students}}</td>
              <td style="width: 140px">{{date}}</td>
              <td>{{duration}}</td>
              <td style="width: 300px">{{location}}</td>
              <td>
                <button class="view-account" @click="handlePopUp">View More</button>
              </td>
            </tr>

            <tr v-if="isCompletedPath" class="fade-in" v-for="{jobID, clientManager, client, students, date, duration, location} in list">
              <td style="width: 100px">{{jobID}}</td>
              <td>{{clientManager}}</td>
              <td>{{ client }}</td>
              <td>{{students}}</td>
              <td style="width: 140px">{{date}}</td>
              <td>{{duration}}</td>
              <td style="width: 300px">{{location}}</td>
              <td>
                <button class="view-account" @click="handlePopUp">View More</button>
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

  .top-section, .middle-section, .bottom-section {
    transition: width 0.3s ease-in-out;
  }

  .top-section {
    max-width: 1400px;
    margin-left: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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

        a {
          display: inline-block;
          text-align: center;
          font-weight: 500;
          font-size: 15px;
          width: 180px;
          height: 30px;
          margin-bottom: -1.5px;

          &:link, &:visited {
            color: #000;
          }
        }
      }

      &>a, .search-input {
        font-size: 14px;
        margin-right: 50px;
      }

      #searchLesson, a {
        width: 160px;
        margin-right: 20px;
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

        span {
          line-height: 23px;
        }
      }

      tbody {
        tr {
          td {
            border-bottom: 1px solid #D9D9D9;

            &:last-child {
              width: 320px;
              display: flex;
              gap: 10px;
              align-items: center;
              height: 50px;

              button {
                font-weight: 500;
                font-size: 14px;
                border-radius: 5px;
                padding: 8px 15px 8px 15px;
                border: none;
                cursor: pointer;
              }

              .view-account {
                background-color: #DADADA;
              }

              .link {
                background-color: #FFB110A1;
              }

              .edit, .request, .join, .recording, .assign {
                background-color: #9CFFC5;
              }

              .deactivate, .reschedule, .refund {
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