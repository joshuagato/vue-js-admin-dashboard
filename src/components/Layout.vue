<script setup lang="ts">
import {computed} from 'vue';
import { useRoute } from 'vue-router';

import TopBar from "./Layout/TopBar.vue";
import SideBar from "./Layout/SideBar.vue";
import Home from "./Home.vue";
import Staff from "./menu/users/Staff.vue";
import Tutor from "./menu/users/Tutor.vue";
import StaffCreation from "./menu/users/StaffCreation.vue";
import Student from "./menu/users/Student.vue";
import StudentCreation from "./menu/users/StudentCreation.vue";
import Parent from "./menu/users/Parent.vue";
import ParentCreation from "./menu/users/ParentCreation.vue";
import Facilitators from "./menu/users/Facilitators.vue";
import FacilitatorCreation from "./menu/users/FacilitatorCreation.vue";
import TutorCreation from "./menu/users/TutorCreation.vue";
import Lesson from "./menu/bookings/Lesson.vue";
import FreeMeeting from "./menu/bookings/FreeMeeting.vue";
import Request from "./menu/bookings/Request.vue";
import Job from "./menu/bookings/Job.vue";
import JobCreation from "./menu/bookings/JobCreation.vue";

// Reactive reference to store the current URL
// const currentUrlObject = ref(window.location.pathname);
// const currentUrl = ref(currentUrlObject.value);
/* This does not work */

const route = useRoute();

// Computed properties to check for specific URL segments
const isHomePath = computed(() => route.path === '/');

// Users Menu Options
// const isTutorPath = computed(() => currentUrl.value.includes('/tutor')); // This does not work
const isTutorPath = computed(() => route.path.includes('/users/tutors'));
const isCreateTutorPath = computed(() => route.path.includes('/users/create-tutor'));

const isStaffPath = computed(() => route.path.includes('/users/staff'));
const isCreateStaffPath = computed(() => route.path.includes('/users/create-staff'));

const isStudentPath = computed(() => route.path.includes('/users/students'));
const isCreateStudentPath = computed(() => route.path.includes('/users/create-student'));

const isParentPath = computed(() => route.path.includes('/users/parents'));
const isCreateParentPath = computed(() => route.path.includes('/users/create-parent'));

const isFacilitatorPath = computed(() => route.path.includes('/users/facilitators'));
const isCreateFacilitatorPath = computed(() => route.path.includes('/users/create-facilitator'));

// Bookings Menu Options
const isLessonPath = computed(() => route.path.includes('/bookings/lessons'));
const isCreateLessonPath = computed(() => route.path.includes('/bookings/create-lesson'));

const isFreeMeetingPath = computed(() => route.path.includes('/bookings/free-meetings'));
const isRequestPath = computed(() => route.path.includes('/bookings/requests'));
const isJobPath = computed(() => route.path.includes('/bookings/jobs'));
const isCreateJobPath = computed(() => route.path.includes('/bookings/create-job'));
</script>

<template>
  <div id="main-layout">
    <TopBar />
    <SideBar />

    <section id="main-content-section">
      <Home v-if="isHomePath" />

      <Staff v-else-if="isStaffPath" />
      <StaffCreation v-else-if="isCreateStaffPath" />

      <Tutor v-else-if="isTutorPath" />
      <TutorCreation v-else-if="isCreateTutorPath" />

      <Student v-else-if="isStudentPath" />
      <StudentCreation v-else-if="isCreateStudentPath" />

      <Parent v-else-if="isParentPath" />
      <ParentCreation v-else-if="isCreateParentPath" />

      <Facilitators v-else-if="isFacilitatorPath" />
      <FacilitatorCreation v-else-if="isCreateFacilitatorPath" />

      <Lesson v-else-if="isLessonPath" />
      <FreeMeeting v-else-if="isFreeMeetingPath" />
      <Request v-else-if="isRequestPath" />
      <Job v-else-if="isJobPath" />
      <JobCreation v-else-if="isCreateJobPath" />

    </section>
  </div>
</template>

<style lang="scss" scoped>
#main-content-section {
  background-color: #EEFBF2;
  position: absolute;
  top: 73px;
  left: 172px;
  font-family: Inter, sans-serif;
  width: calc(100% - 172px);
  height: calc(100% - 73px);
}
</style>