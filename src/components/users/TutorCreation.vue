<script setup lang="ts">
import TextInput from "../inputs/TextInput.vue";
import EmailInput from "../inputs/EmailInput.vue";
import ThreeComponentsRow from "../containers/ThreeComponentsRow.vue";
import TelephoneInput from "../inputs/TelephoneInput.vue";
import PasswordInput from "../inputs/PasswordInput.vue";
import DateInput from "../inputs/DateInput.vue";
import DropDown from "../inputs/DropDown.vue";
import DividingHeader from "../headers/DividingHeader.vue";
import FirstSubHeading from "../headers/FirstSubHeading.vue";
import FileInput from "../inputs/FileInput.vue";
import TwoComponentsRow from "../containers/TwoComponentsRow.vue";
import CreateEntityButton from "../buttons/CreateEntityButton.vue";
import MainHeading from "../headers/MainHeading.vue";
import MainAndFirstHeading from "../headers/MainAndFirstHeading.vue";
import DropDownLong from "../inputs/DropDownLong.vue";
import OneComponentRow from "../containers/OneComponentRow.vue";
import DropDownDouble from "../inputs/DropDownDouble.vue";

const options = [
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
];

</script>

<template>
<div id="facilitator-creation-container" class="fade-in">
  <MainAndFirstHeading text="Tutor Info." />

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

  <TwoComponentsRow one-two>
    <TextInput id="country" label="Country of Residence" />
    <DropDown id="criminalConvictions" label="Do you have any Criminal Conviction ?" default-option="Select" :options="options" model-value="Select" />
  </TwoComponentsRow>

  <OneComponentRow>
    <DropDown id="heardAboutUs" label="How did you hear about us" default-option="Select" :options="options" model-value="Select" />
  </OneComponentRow>

  <!-- Accreditation & Verification -->
  <TwoComponentsRow>
    <FileInput id="uploadResume" label="Upload Resume" />
    <FileInput id="uploadPassportID" label="Upload Passport / ID" />
  </TwoComponentsRow>

  <!-- References -->
  <DividingHeader text="References" />

  <ThreeComponentsRow>
    <TextInput id="nameofReference1" label="Name of Reference 1" />
    <TextInput id="ref1Role" label="Role" />
    <TextInput id="ref1Institution" label="Institution" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <EmailInput id="ref1Email" label="Email" />
    <TelephoneInput id="ref1PhoneNumber" label="Phone Number" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <TextInput id="nameofReference2" label="Name of Reference 2" />
    <TextInput id="ref2Role" label="Role" />
    <TextInput id="ref2Institution" label="Institution" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <EmailInput id="ref2Email" label="Email" />
    <TelephoneInput id="ref2PhoneNumber" label="Phone Number" />
  </ThreeComponentsRow>

  <!-- Bio & Profile Info. -->
  <DividingHeader text="Bio & Profile Info." />

  <!-- Submit Button -->
  <CreateEntityButton title="Create Tutor" />
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