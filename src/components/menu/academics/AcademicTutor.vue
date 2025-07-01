<script setup lang="ts">
import {computed, ref} from "vue";
import {useRoute} from "vue-router";

import DisplayCard from "../../DisplayCard.vue";
import FilterCard from "../../FilterCard.vue";
import SummaryCardsRow from "../../containers/SummaryCardsRow.vue";


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

const chart = ref(null); // To hold the chart instance
const options = ref({ // Use ref for the entire options object
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2",
  title: {
    text: "Lesson Trends"
  },
  axisX:{
    title: "Month ⟶",
    valueFormatString: "YYYY",
    labelTextAlign: "center",
    labelAngle: 0
  },
  axisY: {
    title: "Completed Lessons ⟶",
    // valueFormatString: "##,##,##"
  },
  data: [{
    type: "line",
    dataPoints: [
      { label: "Jan", y: 20 },
      { label: "Feb", y: 50 },
      { label: "Mar", y: 30 },
      { label: "Apr", y: 70 },
      { label: "May", y: 40 },
      { label: "Jun", y: 30 },
      { label: "Jul", y: 10 },
      { label: "Aug", y: 80 },
      { label: "Sep", y: 12.5 },
      { label: "Oct", y: 11.5 },
      { label: "Nov", y: 10.5 },
      { label: "Dec", y: 10 }
    ]
  }]
});

</script>

<template>
  <article id="parent-container" class="fade-in">

    <section class="top-section">
      <section class="first-section">
        <FilterCard class="filter-card" filter-title="All Data" filter-option1="Option 1" filter-option2="Option 2" filter-option3="Option 3" />
      </section>
      <hr />
      <section class="second-section">
        <CanvasJSChart :options="options" @chart-ref="chart" :styles="{width: '80%', height: '490'}"/>
      </section>
    </section>

    <section class="bottom-section">
      <SummaryCardsRow>
        <DisplayCard :data-figure="124" data-text="Total Tutor SignUps" />
        <DisplayCard :data-figure="124" data-text="Active Tutors" />
        <DisplayCard :data-figure="124" data-text="Pending Tutors" />
        <DisplayCard :data-figure="124" data-text="Tutor Interviews" />
      </SummaryCardsRow>
      <SummaryCardsRow>
        <DisplayCard :data-figure="124" data-text="Total Student Signup" />
        <DisplayCard :data-figure="124" data-text="Pending Requests" />
        <DisplayCard :data-figure="124" data-text="Pending Lessons" />
        <DisplayCard :data-figure="124" data-text="Refunded Lessons" />
      </SummaryCardsRow>
      <SummaryCardsRow>
        <DisplayCard :data-figure="124" data-text="Upcoming Lessons" />
        <DisplayCard :data-figure="124" data-text="Completed Lessons" />
      </SummaryCardsRow>
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
    height: calc(100vh - 50px - 134px - 34px - 73px);
    background-color: #FFFFFF;
    margin-top: 50px;
    margin-left: 40px;
    border-radius: 10px;
    font-family: Inter, sans-serif;

    .first-section {
      display: flex;
      justify-content: flex-end;

      .filter-card {
        margin-top: 20px;
        margin-right: 50px;
        margin-bottom: 16px;
      }
    }

    .second-section {
      margin-top: 80px;
      display: grid;
      place-items: center;
    }

    hr {
      border: 1px solid #D9D9D9;
      border-radius: 5px;
    }
  }

  .bottom-section {
    max-width: 1400px;
  }

}

.active-border {
  border-bottom: 3px solid #0C7334;
}
</style>