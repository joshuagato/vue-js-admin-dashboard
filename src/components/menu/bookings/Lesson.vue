<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import { useRoute } from 'vue-router';

import DisplayCard from "../../DisplayCard.vue";
import FilterCard from "../../FilterCard.vue";
import SummaryCardsRow from "../../containers/SummaryCardsRow.vue";
import SearchInput from "../../inputs/SearchInput.vue";

const list = [
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am' },
]

const pendingList = [
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am', status: 'Unpaid' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am', status: 'Unpaid' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am', status: 'Payment Failed' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am', status: 'Payment Failed' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am', status: 'Unpaid' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am', status: 'Unpaid' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am', status: 'Payment Failed' },
  { id: 'VT29373', tutor: 'Hannah Quante', students: 'Karen Osei', subjects: 'Science', dateTime: 'Mon, 02/02/2025 T 10:00am', status: 'Unpaid' },
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

const isLessonsHomePath = computed(() => route.path === '/bookings/lessons');
const isUpcomingPath = computed(() => route.path === '/bookings/lessons/upcoming');
const isPendingPath = computed(() => route.path === '/bookings/lessons/pending');
const isLivePath = computed(() => route.path === '/bookings/lessons/live');
const isCancelledPath = computed(() => route.path === '/bookings/lessons/cancelled');
const isCompletedPath = computed(() => route.path === '/bookings/lessons/completed');

let isPendingPathBooleanValue = ref(false);

const dynamicWidthStyle = computed(() => {
  if (isPendingPathBooleanValue.value) {
    return {
      width: '1500px'
    };
  } else {
    return {
      width: '1400px'
    };
  }
});

watch(() => route.path, (newValue, oldValue) => {
  isPendingPathBooleanValue.value = newValue === '/bookings/lessons/pending';
  console.log(newValue, isPendingPathBooleanValue)
});

</script>

<template>
  <article id="parent-container" class="fade-in">
    <section class="top-section" :style="dynamicWidthStyle">
      <FilterCard class="filter-card" filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
    </section>

    <section class="middle-section" :style="dynamicWidthStyle">
      <SummaryCardsRow>
        <DisplayCard :data-figure="124" data-text="Total Lessons" />
        <DisplayCard :data-figure="124" data-text="Upcoming Lessons" />
        <DisplayCard :data-figure="124" data-text="Pending Lessons" />
        <DisplayCard :data-figure="124" data-text="Completed Lessons" />
        <DisplayCard :data-figure="124" data-text="Cancelled Lessons" />
      </SummaryCardsRow>
    </section>

    <section class="bottom-section" :style="dynamicWidthStyle">
      <article class="head-section">
        <div class="menu-items">
          <router-link :class="{'active-border': isUpcomingPath || isLessonsHomePath}" @click="handleClick" to="/bookings/lessons/upcoming">
            {{'Upcoming Lesson'}}
          </router-link>
          <router-link :class="{'active-border': isPendingPath}" @click="handleClick" to="/bookings/lessons/pending">
            {{'Pending Lessons'}}
          </router-link>
          <router-link :class="{'active-border': isLivePath}" @click="handleClick" to="/bookings/lessons/live">
            {{'Live Lessons'}}
          </router-link>
          <router-link :class="{'active-border': isCancelledPath}" @click="handleClick" to="/bookings/lessons/cancelled">
            {{'Cancelled Lessons'}}
          </router-link>
          <router-link :class="{'active-border': isCompletedPath}" @click="handleClick" to="/bookings/lessons/completed">
            {{'Completed Lessons'}}
          </router-link>
        </div>
        <SearchInput class="fade-in" v-if="!isLessonsHomePath && !isUpcomingPath" id="searchLesson" placeholder="Search lesson.." />
        <router-link class="fade-in" v-if="isLessonsHomePath || isUpcomingPath" to="/bookings/create-lesson">{{'Create Lesson'}}</router-link>
      </article>

      <hr />

      <article class="mid-section">
        <h1 class="heading">Total Number: {{'200'}}</h1>
        <FilterCard
            class="filter-card" filter-title="All Data"
            filter-option1="Option 1" filter-option2="Option 2"
            filter-option3="Option 3"
        />
      </article>

      <article class="table-section">
        <table>
          <thead>
            <tr>
              <th style="width: 100px">ID NO</th>
              <th>Tutor</th>
              <th>Students</th>
              <th>Subjects</th>
              <th v-if="!isCompletedPath" style="width: 140px">Date/Time</th>
              <th v-if="isPendingPath">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="isLessonsHomePath || isUpcomingPath" class="fade-in" v-for="{id, tutor, students, subjects, dateTime} in list">
              <td style="width: 100px">{{id}}</td>
              <td>{{tutor}}</td>
              <td>{{ students }}</td>
              <td>{{subjects}}</td>
              <td style="width: 140px">
                <span>{{dateTime.split('T')[0]}}</span>
                <span>{{dateTime.split('T')[1]}}</span>
              </td>
              <td>
                <button class="view-account">View More</button>
                <button class="edit">Message</button>
                <button class="deactivate">Edit</button>
              </td>
            </tr>

            <tr v-if="isPendingPath" class="fade-in pending" v-for="{id, tutor, students, subjects, dateTime, status} in pendingList">
              <td style="width: 100px">{{ id }}</td>
              <td>{{ tutor }}</td>
              <td>{{ students }}</td>
              <td>{{subjects}}</td>
              <td style="width: 140px">
                <span>{{dateTime.split('T')[0]}}</span>
                <span>{{dateTime.split('T')[1]}}</span>
              </td>
              <td>
                <label class="status"
                       :class="{'unpaid': status === 'Unpaid', 'payment-failed': status === 'Payment Failed' }"
                >
                  {{ status }}
                </label>
              </td>
              <td>
                <button class="request">Request Payment</button>
                <button class="view-account">View More</button>
              </td>
            </tr>

            <tr v-if="isLivePath" class="fade-in" v-for="{id, tutor, students, subjects, dateTime} in list">
              <td style="width: 100px">{{id}}</td>
              <td>{{tutor}}</td>
              <td>{{ students }}</td>
              <td>{{subjects}}</td>
              <td style="width: 140px">
                <span>{{dateTime.split('T')[0]}}</span>
                <span>{{dateTime.split('T')[1]}}</span>
              </td>
              <td>
                <button class="view-account">View More</button>
                <button class="join">Join</button>
                <button class="reschedule">Reschedule</button>
              </td>
            </tr>

            <tr v-if="isCompletedPath" class="fade-in completed" v-for="{id, tutor, students, subjects} in list">
              <td style="width: 100px">{{id}}</td>
              <td>{{tutor}}</td>
              <td>{{ students }}</td>
              <td>{{subjects}}</td>
              <td>
                <button class="recording">View Recording</button>
                <button class="refund">Refund</button>
                <button class="view-account">View Report</button>
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
    //max-width: 1500px;
    display: flex;
    justify-content: flex-end;

    .filter-card {
      margin-top: 30px;
      margin-left: 45px;
    }
  }

  .middle-section {
    //max-width: 1400px;
  }

  .bottom-section {
    //max-width: 1500px;
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
          width: 135px;
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

      th {
        font-weight: 700;
        font-size: 18px;
        width: 220px;
        text-align: left;
      }

      tr {
        //display: flex;
        //align-items: center;
        //height: 50px;
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
              //justify-content: space-between;
              align-items: center;
              height: 50px;

              button {
                font-weight: 500;
                font-size: 14px;
                border-radius: 5px;
                padding: 8px 15px 8px 15px;
                //width: 100px;
                //height: 34px;
                border: none;
                cursor: pointer;
              }

              .view-account {
                background-color: #DADADA;
              }

              .link {
                background-color: #FFB110A1;
              }

              .edit, .request, .join, .recording {
                background-color: #9CFFC5;
              }

              .deactivate, .reschedule, .refund {
                background-color: #FE9E9E;
              }
            }
          }
        }

        tr.pending {
          td {
            label {
              display: inline-block;
              font-weight: 500;
              font-size: 14px;
              border-radius: 5px;
              padding: 8px 15px 8px 15px;

              &.unpaid {
                background-color: #FE9E9E;
              }

              &.payment-failed {
                background-color: #FFEAD2;
              }
            }

            &:last-child {
              width: 250px;
            }
          }
        }

        tr.completed {
          td {
            label {
              display: inline-block;
              font-weight: 500;
              font-size: 14px;
              border-radius: 5px;
              padding: 8px 15px 8px 15px;

              &.unpaid {
                background-color: #FE9E9E;
              }

              &.payment-failed {
                background-color: #FFEAD2;
              }
            }

            &:last-child {
              width: 330px;
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