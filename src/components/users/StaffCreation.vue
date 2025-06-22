<script setup lang="ts">
import TextInput from "../inputs/TextInput.vue";
import EmailInput from "../inputs/EmailInput.vue";

</script>

<template>
<div id="staff-creation-container">
  <h1 class="heading">{{'Staff Info.'}}</h1>

  <h3 class="sub-heading">{{'Personal Info.'}}</h3>

  <div class="three-component-row">
    <TextInput id="firstName" label="First Name" />
    <TextInput id="lastName" label="Last Name" />
    <EmailInput id="email" label="Email" />
  </div>
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

  .three-component-row {
    margin-left: 80px;
    width: calc(100% - 80px - 80px);
    display: flex;
    justify-content: space-between;
  }
}
</style>