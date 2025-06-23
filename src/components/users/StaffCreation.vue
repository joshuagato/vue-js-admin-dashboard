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

const options = [
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
];

</script>

<template>
<div id="staff-creation-container" class="fade-in">
  <h1 class="heading">{{'Staff Info.'}}</h1>

  <h3 class="sub-heading">{{'Personal Info.'}}</h3>

  <ThreeComponentsRow>
    <TextInput id="firstName" label="First Name" />
    <TextInput id="lastName" label="Last Name" />
    <EmailInput id="email" label="Email" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <TelephoneInput id="phoneNumber" label="Phone Number" />
    <DropDown id="role" label="Select Role" default-option="Select Role" :options="options" model-value="Select Role" />
    <DropDown id="department" label="Select Department" default-option="Select Department" :options="options" model-value="Select Department" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <PasswordInput id="password" label="Password" />
    <TextInput id="country" label="Country of Residence" />
    <DateInput id="dateOfBirth" label="Date of Birth" />
  </ThreeComponentsRow>

  <TwoComponentsRow>
    <DropDown id="gender" label="Select Gender" default-option="Select Gender" :options="options" model-value="Select Gender" />
    <DropDown id="maritalStatus" label="Select Marital Status" default-option="Select Marital Status" :options="options" model-value="Select Marital Status" />
  </TwoComponentsRow>

  <DividingHeader text="Emergency Contact Info." />
</div>
</template>

<style scoped lang="scss">
#staff-creation-container {
  max-width: 1400px;
  height: calc(100vh - 50px - 73px);
  background-color: #FFFFFF;
  margin-top: 50px;
  margin-left: 40px;
  border-radius: 10px;
  overflow-y: scroll;

  .heading {
    margin-top: 45px;
    margin-left: 80px;
    font-weight: 700;
    font-size: 23px;
  }

  .sub-heading {
    font-weight: 700;
    font-size: 19px;
    margin-top: 80px;
    margin-left: 80px;
    margin-bottom: 21px;
  }


}
</style>