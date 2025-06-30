<script setup lang="ts">
import TextInput from "../../inputs/TextInput.vue";
import EmailInput from "../../inputs/EmailInput.vue";
import ThreeComponentsRow from "../../containers/ThreeComponentsRow.vue";
import TelephoneInput from "../../inputs/TelephoneInput.vue";
import PasswordInput from "../../inputs/PasswordInput.vue";
import DateInput from "../../inputs/DateInput.vue";
import DropDown from "../../inputs/DropDown.vue";
import TwoComponentsRow from "../../containers/TwoComponentsRow.vue";
import DividingHeader from "../../headers/DividingHeader.vue";
import FirstSubHeading from "../../headers/FirstSubHeading.vue";
import FileInput from "../../inputs/FileInput.vue";
import CreateEntityButton from "../../buttons/CreateEntityButton.vue";
import MainHeading from "../../headers/MainHeading.vue";
import MainAndFirstHeading from "../../headers/MainAndFirstHeading.vue";
import CheckBox from "../../inputs/CheckBox.vue";
import OneComponentRow from "../../containers/OneComponentRow.vue";
import EmptySpaceDivider from "../../headers/EmptySpaceDivider.vue";
import SubHeading from "../../headers/SubHeading.vue";

const options = [
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
];

</script>

<template>
<div id="facilitator-creation-container" class="fade-in">
  <MainAndFirstHeading text="Job Info." />

  <ThreeComponentsRow>
    <TextInput id="clientManager" label="Client Manager" />
    <TextInput id="jobCreation" label="Job Creation" />
    <DropDown id="level" label="Select Level" default-option="Select Level" :options="options" model-value="Select Level" />
  </ThreeComponentsRow>

  <TwoComponentsRow two-one>
    <TextInput id="schedule" label="Schedule" />
  </TwoComponentsRow>

  <OneComponentRow two-one>
    <TextInput id="jobNotes" label="Job Notes" />
  </OneComponentRow>

  <ThreeComponentsRow>
    <TextInput id="location" label="Location" />
    <DateInput id="startDate" label="Start Date" />
    <DateInput id="endDate" label="End Date" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <TextInput id="sessionValue" label="Session Value" />
    <TextInput id="additionalCost" label="Additional Cost" />
    <TextInput id="tutorCharges" label="Tutor Charges" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <TextInput id="transportCost" label="Transport Cost" />
  </ThreeComponentsRow>

  <OneComponentRow>
    <h3 class="sub-heading">Please Note that the values above are per hour</h3>
  </OneComponentRow>

  <OneComponentRow two-one>
    <TextInput id="sessionDescription" label="Session Description" />
  </OneComponentRow>


  <!-- Submit Button -->
  <CreateEntityButton title="Create Job" />
</div>
</template>

<style scoped lang="scss">
#facilitator-creation-container {
  max-width: 1400px;
  height: calc(100vh - 50px - 73px);
  background-color: #FFFFFF;
  margin-top: 50px;
  margin-left: 40px;
  border-radius: 10px;
  overflow-y: scroll;

  .sub-heading {
    font-weight: 700;
    font-size: 20px;
    margin-top: 55px;
    margin-bottom: 45px;
  }
}
</style>