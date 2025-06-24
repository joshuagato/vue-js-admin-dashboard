<script setup lang="ts">
import {computed} from 'vue';
import { useRoute } from 'vue-router';
import TopBar from "./Layout/TopBar.vue";
import SideBar from "./Layout/SideBar.vue";
import Home from "./Home.vue";
import Staff from "./users/Staff.vue";
import Tutor from "./users/Tutor.vue";
import StaffCreation from "./users/StaffCreation.vue";
import Student from "./users/Student.vue";
import StudentCreation from "./users/StudentCreation.vue";
import Parent from "./users/Parent.vue";
import ParentCreation from "./users/ParentCreation.vue";
import Facilitators from "./users/Facilitators.vue";

// Reactive reference to store the current URL
// const currentUrlObject = ref(window.location.pathname);
// const currentUrl = ref(currentUrlObject.value);
/* This does not work */

const route = useRoute();

// Computed properties to check for specific URL segments
const isHomePath = computed(() => route.path === '/');
// const isTutorPath = computed(() => currentUrl.value.includes('/tutor')); // This does not work
const isTutorPath = computed(() => route.path.includes('/users/tutor'));

const isStaffPath = computed(() => route.path.includes('/users/staff'));
const isCreateStaffPath = computed(() => route.path.includes('/users/create-staff'));

const isStudentPath = computed(() => route.path.includes('/users/students'));
const isCreateStudentPath = computed(() => route.path.includes('/users/create-student'));

const isParentPath = computed(() => route.path.includes('/users/parents'));
const isCreateParentPath = computed(() => route.path.includes('/users/create-parent'));

const isFacilitatorPath = computed(() => route.path.includes('/users/facilitators'));

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

      <Student v-else-if="isStudentPath" />
      <StudentCreation v-else-if="isCreateStudentPath" />

      <Parent v-else-if="isParentPath" />
      <ParentCreation v-else-if="isCreateParentPath" />

      <Facilitators v-else-if="isFacilitatorPath" />
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