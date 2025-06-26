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

const options = [
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
];

</script>

<template>
<div id="staff-creation-container" class="fade-in">
  <MainHeading text="Staff Info." />

  <FirstSubHeading text="Personal Info." />

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

  <ThreeComponentsRow>
    <DropDown id="gender" label="Select Gender" default-option="Select Gender" :options="options" model-value="Select Gender" />
    <DropDown id="maritalStatus" label="Select Marital Status" default-option="Select Marital Status" :options="options" model-value="Select Marital Status" />
  </ThreeComponentsRow>

  <!-- Emergency Contact Info. -->
  <DividingHeader text="Emergency Contact Info." />

  <ThreeComponentsRow>
    <TextInput id="ecFirstName" label="First Name" />
    <TextInput id="ecLastName" label="Last Name" />
    <TextInput id="relationship" label="Relationship" />
  </ThreeComponentsRow>

  <ThreeComponentsRow>
    <TelephoneInput id="contactNumber" label="Contact Number" />
    <EmailInput id="ecEmail" label="Email" />
  </ThreeComponentsRow>

  <!-- Identification and Legal Documents -->
  <DividingHeader text="Identification and Legal Documents" />

  <TwoComponentsRow>
    <DropDown id="idType" label="Select ID Type" default-option="Select ID Type" :options="options" model-value="Select ID Type" />
    <FileInput id="uploadID" label="Upload ID" />
  </TwoComponentsRow>

  <TwoComponentsRow>
    <FileInput id="uploadWorkPermit" label="Upload Work Permit/VISA" />
    <TextInput id="nationalInsuranceNumber" label="National Insurance No / SSNIT" />
  </TwoComponentsRow>

  <TwoComponentsRow>
    <TextInput id="tinNumber" label="TIN Number" />
  </TwoComponentsRow>

  <!-- Employment Documents -->
  <DividingHeader text="Employment Documents" />

  <TwoComponentsRow>
    <FileInput id="signedContractOfEmployment" label="Signed Contract of Employment" />
    <FileInput id="nonDisclosureAgreement" label="Non-disclosure Agreement (NDA)" />
  </TwoComponentsRow>

  <TwoComponentsRow>
    <FileInput id="intellectualPropertyAgreement" label="Intellectual property agreement" />
    <FileInput id="jobDescriptionConfirmation" label="Job description confirmation" />
  </TwoComponentsRow>

  <TwoComponentsRow>
    <FileInput id="backgroundCheck" label="Background check" />
  </TwoComponentsRow>

  <!-- Qualifications and Work Experience -->
  <DividingHeader text="Qualifications and Work Experience" />

  <TwoComponentsRow>
    <FileInput id="academicCertificated" label="Academic Certificates" />
    <FileInput id="cvResume" label="CV / Resume" />
  </TwoComponentsRow>

  <TwoComponentsRow>
    <FileInput id="proofOfPreviousEmployment" label="Proof of previous employment or reference letters" />
  </TwoComponentsRow>

  <!-- Compliance & Policy Acknowledgements -->
  <DividingHeader text="Compliance & Policy Acknowledgements" />

  <TwoComponentsRow>
    <FileInput id="acknowledgementOfCompanyPolicies" label="Acknowledgement of company policies" />
    <FileInput id="healthAndSafetyTrainingCompletion" label="Health & safety training completion" />
  </TwoComponentsRow>

  <TwoComponentsRow>
    <FileInput id="gdprOrDataProtectionConsent" label="GDPR / data protection consent" />
    <FileInput id="deiDeclarations" label="DEI Declarations" />
  </TwoComponentsRow>

  <!-- Benefits & Payroll Forms -->
  <DividingHeader text="Benefits & Payroll Forms" />

  <TwoComponentsRow>
    <FileInput id="pensionPlanForms" label="Pension or retirement plan forms" />
    <FileInput id="healthInsurance" label="Health insurance enrollment" />
  </TwoComponentsRow>

  <TwoComponentsRow>
    <FileInput id="selfServicePortal" label="Employee Self-service portal registration" />
    <FileInput id="directDepositAuthorization" label="Direct deposit authorization" />
  </TwoComponentsRow>

  <!-- Payment Method -->
  <DividingHeader text="Benefits & Payroll Forms" />

  <ThreeComponentsRow>
    <DropDown id="bankName" label="Bank Name" default-option="Select Bank" :options="options" model-value="Select Bank" />
    <TextInput id="accountNumber" label="Account No" />
    <TextInput id="accountName" label="Account Name" />
  </ThreeComponentsRow>

  <!-- Submit Button -->
  <CreateEntityButton title="Create Staff"/>
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
}
</style>