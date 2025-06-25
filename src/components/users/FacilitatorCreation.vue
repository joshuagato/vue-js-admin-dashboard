<script setup lang="ts">
import TextInput from "../inputs/TextInput.vue";
import EmailInput from "../inputs/EmailInput.vue";
import ThreeComponentsRow from "../containers/ThreeComponentsRow.vue";
import TelephoneInput from "../inputs/TelephoneInput.vue";
import PasswordInput from "../inputs/PasswordInput.vue";
import DateInput from "../inputs/DateInput.vue";
import DropDown from "../inputs/DropDown.vue";
import TwoComponentsRow from "../containers/TwoComponentsRow.vue";
import DividingHeader from "../headers/DividingHeader.vue";
import FirstSubHeading from "../headers/FirstSubHeading.vue";
import FileInput from "../inputs/FileInput.vue";
import CreateEntityButton from "../buttons/CreateEntityButton.vue";
import MainHeading from "../headers/MainHeading.vue";
import MainAndFirstHeading from "../headers/MainAndFirstHeading.vue";
import CheckBox from "../inputs/CheckBox.vue";
import OneComponentRow from "../containers/OneComponentRow.vue";

const options = [
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
];

</script>

<template>
<div id="facilitator-creation-container" class="fade-in">
  <MainAndFirstHeading text="Facilitator Info." />

  <ThreeComponentsRow>
    <TextInput id="firstName" label="First Name" />
    <TextInput id="lastName" label="Last Name" />
    <TextInput id="username" label="Username" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <EmailInput id="email" label="Email" />
    <TelephoneInput id="phoneNumber" label="Phone Number" />
    <PasswordInput id="password" label="Password" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <PasswordInput id="confirmPassword" label="Confirm Password" />
    <DropDown id="facilitatorType" label="Select Facilitator Type" default-option="Select" :options="options" model-value="Select" />
    <DropDown id="schoolAcademyType" label="Select School / Academy" default-option="Select" :options="options" model-value="Select" />
  </ThreeComponentsRow>

  <!-- Submit Button -->
  <CreateEntityButton title="Create Facilitator" />
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
}
</style>