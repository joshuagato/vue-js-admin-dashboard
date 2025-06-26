<script setup lang="ts">
import TextInput from "../../inputs/TextInput.vue";
import EmailInput from "../../inputs/EmailInput.vue";
import ThreeComponentsRow from "../../containers/ThreeComponentsRow.vue";
import TelephoneInput from "../../inputs/TelephoneInput.vue";
import PasswordInput from "../../inputs/PasswordInput.vue";
import DateInput from "../../inputs/DateInput.vue";
import DropDown from "../../inputs/DropDown.vue";
import DividingHeader from "../../headers/DividingHeader.vue";
import FirstSubHeading from "../../headers/FirstSubHeading.vue";
import FileInput from "../../inputs/FileInput.vue";
import TwoComponentsRow from "../../containers/TwoComponentsRow.vue";
import CreateEntityButton from "../../buttons/CreateEntityButton.vue";
import MainHeading from "../../headers/MainHeading.vue";
import MainAndFirstHeading from "../../headers/MainAndFirstHeading.vue";
import CheckBox from "../../inputs/CheckBox.vue";
import OneComponentRow from "../../containers/OneComponentRow.vue";

const options = [
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
];

</script>

<template>
<div id="student-creation-container" class="fade-in">
  <MainAndFirstHeading text="Student Info." />

  <ThreeComponentsRow>
    <TextInput id="firstName" label="First Name" />
    <TextInput id="lastName" label="Last Name" />
    <TextInput id="username" label="Username" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <EmailInput id="email" label="Email" />
    <PasswordInput id="password" label="Password" />
    <PasswordInput id="confirmPassword" label="Confirm Password" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <TelephoneInput id="phoneNumber" label="Phone Number" />
    <DateInput id="dateOfBirth" label="Date of Birth" />
    <DropDown id="gender" label="Select Gender" default-option="Select Gender" :options="options" model-value="Select Gender" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <TextInput id="country" label="Country of Residence" />
    <DropDown id="curriculum" label="Select Curriculum" default-option="Select Curriculum" :options="options" model-value="Select Curriculum" />
    <DropDown id="studentType" label="Select Student Type" default-option="Select Student Type" :options="options" model-value="Select Student Type" />
  </ThreeComponentsRow>

  <!-- Learning Preferences -->
  <DividingHeader text="Learning Preferences" />
  <OneComponentRow>
    <DropDown id="whenLessons" label="When do you want to have lessons" default-option="Select" :options="options" model-value="Select" />
  </OneComponentRow>
  <OneComponentRow>
    <DropDown id="howContacted" label="How to be contacted" default-option="Select" :options="options" model-value="Select" />
  </OneComponentRow>
  <OneComponentRow>
    <DropDown id="howHeard" label="How did you hear about us" default-option="Select" :options="options" model-value="Select" />
  </OneComponentRow>

  <!-- Additional Info. -->
  <DividingHeader text="Additional Info." />
  <OneComponentRow>
    <DropDown id="isParent" label="Are you a Parent" default-option="Yes" :options="options" model-value="Yes" />
  </OneComponentRow>

  <!-- Parent Info. -->
  <DividingHeader text="Parent Info." />
  <ThreeComponentsRow>
    <TextInput id="parFirstName" label="First Name" />
    <TextInput id="parLastName" label="Last Name" />
    <TelephoneInput id="parPhoneNumber" label="Phone Number" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <EmailInput id="email" label="Email" />
    <PasswordInput id="password" label="Password" />
  </ThreeComponentsRow>

  <!-- Submit Button -->
  <CreateEntityButton title="Create Student" />
</div>
</template>

<style scoped lang="scss">
#student-creation-container {
  max-width: 1400px;
  height: calc(100vh - 50px - 73px);
  background-color: #FFFFFF;
  margin-top: 50px;
  margin-left: 40px;
  border-radius: 10px;
  overflow-y: scroll;
}
</style>