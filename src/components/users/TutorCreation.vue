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
import CheckBox from "../inputs/CheckBox.vue";
import OneComponentRow from "../containers/OneComponentRow.vue";
import DropDownDouble from "../inputs/DropDownDouble.vue";
import CheckBoxesContainer from "../containers/CheckBoxesContainer.vue";
import EmptySpaceDivider from "../headers/EmptySpaceDivider.vue";
import SubHeading from "../headers/SubHeading.vue";
import Paragraph from "../headers/Paragraph.vue";
import HeadingAndParagraph from "../headers/HeadingAndParagraph.vue";

const options = [
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
  { label: "IT Support", value: "IT Support" },
];

</script>

<template>
<div id="tutor-creation-container" class="fade-in">
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

  <OneComponentRow two-one>
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

  <TwoComponentsRow two-one>
    <FileInput id="profilePicture" label="Upload Profile Picture" />
  </TwoComponentsRow>

  <TwoComponentsRow>
    <CheckBoxesContainer heading="Select Subject(s)">
      <CheckBox id="biology" label="Biology" />
      <CheckBox id="chemistry" label="Chemistry" />
      <CheckBox id="communityHealth" label="Community Health" />
      <CheckBox id="crs" label="Christian Religious Studies" />
      <CheckBox id="cs" label="Computer Science" />
      <CheckBox id="english" label="English" />
      <CheckBox id="mathematics" label="Mathematics" />
      <CheckBox id="science" label="Science" />
    </CheckBoxesContainer>

    <CheckBoxesContainer heading="Select Level(s)">
      <CheckBox id="belowTen" label="10 Years & Below" />
      <CheckBox id="elevenPlus" label="11 Plus" />
      <CheckBox id="thirteenPlus" label="13 Plus" />
      <CheckBox id="bece" label="BECE" />
      <CheckBox id="gcse" label="GCSE" />
      <CheckBox id="novDec" label="NOVDEC" />
    </CheckBoxesContainer>
  </TwoComponentsRow>

  <EmptySpaceDivider />

  <!-- Select Your Availability -->
  <SubHeading text="Select Your Availability" />
  <Paragraph>Please indicate when you’re available for lessons such as Inperson Lessons, Private Lessons, Academy and
    School Opportunity.</Paragraph>

  <TwoComponentsRow two-one>
    <div class="checkboxes-container">
      <article>
        <h4>Job</h4>
        <label for="private">Private Lesson</label>
        <label for="inPerson">InPerson Lesson</label>
        <label for="academy">Academy Lesson</label>
        <label for="school">School Opportunities</label>
      </article>
      <article>
        <h4>Your Availability</h4>
        <input type="checkbox" id="private">
        <input type="checkbox" id="inPerson">
        <input type="checkbox" id="academy">
        <input type="checkbox" id="school">
      </article>
    </div>
  </TwoComponentsRow>

  <EmptySpaceDivider />

  <TwoComponentsRow>
    <CheckBoxesContainer heading="Select Qualification">
      <CheckBox id="aLevel" label="A Level Certificate" />
      <CheckBox id="aLevelProof" label="A Level Proof of Enrolment" />
      <CheckBox id="associateDegree" label="Associate Degree Certificate (College/ Technical School)" />
      <CheckBox id="associateDegreeProof" label="Associate Degree Proof of Enrolment (College/ Technical School)" />
      <CheckBox id="bachelor" label="Bachelor’s Degree Certificate" />
      <CheckBox id="master" label="Masters Certificate" />
      <CheckBox id="phd" label="PHD Certificate" />
    </CheckBoxesContainer>
  </TwoComponentsRow>

  <EmptySpaceDivider />

  <TwoComponentsRow two-one>
    <FileInput id="proofOfQualification" label="Proof of Qualification" />
    <TextInput id="currentPosition" label="Current Position" />
  </TwoComponentsRow>

  <EmptySpaceDivider />

  <OneComponentRow>
    <div>
      <h5>Your Experience</h5>
      <textarea id="experience"></textarea>
    </div>
  </OneComponentRow>

  <EmptySpaceDivider />

  <OneComponentRow two-one>
    <HeadingAndParagraph heading="Video Profile"
                         paragraph="Video Profile associated with your profile. Take a 2 Mins video in either Landscape or Portrait and
      upload it here. Make it count! Don’t worry, you can change it any time."
    />
  </OneComponentRow>

  <!--  Work here-->

  <EmptySpaceDivider />

  <!--  Short bio Section-->
  <OneComponentRow two-one>
    <HeadingAndParagraph heading="Short bio"
                         paragraph="Write in two sentences, a short bio describing yourself"
    />
  </OneComponentRow>

  <OneComponentRow two-one>
    <textarea id="bio" class="other-text-areas" placeholder="My name is Laura and I am a masters student at King's College London. I was the Deputy Head Girl
at my high school in Surrey and received the science scholarship from the years 2013-2015."></textarea>
  </OneComponentRow>

  <EmptySpaceDivider />

  <!--  About Me Section-->
  <OneComponentRow two-one>
    <HeadingAndParagraph
        heading="About Me"
        paragraph="Introduce yourself to students! What sets you apart? Share your passion for your
        field of study and explain how you can help students grow and succeed. (Max 1500 characters)"
    />
  </OneComponentRow>

  <OneComponentRow two-one>
    <textarea id="about" class="other-text-areas" placeholder="My name is Laura and I am a masters student at King's College London. I was the Deputy Head Girl at my high school in Surrey and received the science scholarship from the years 2013-2015. Following this, I completed my undergraduate degree at the University of Toronto with a distinction in Biochemistry, Pharmacology and Spanish. I am pursuing my masters degree in Clinical Pharmacology, as I am deeply interested in improving how patients manage therapies. However, when I attended high school, I had thoroughly enjoyed going to my Biology and Chemistry classes. Many students find these subjects particularly overwhelming due to the fact that there is simply too much information to learn all at once. In order to achieve As at both IGCSE and A Level Biology, I had come up with a few ways to make what may seem to be a terrifyingly difficult subject much easier to handle. I am a firm believer in repetition being the motherhood of learning, therefore with all my teaching slides I begin with a recap of what was learnt last week. By reinforcing this knowledge frequently, the long biological and chemical processes will all of a sudden become second nature to you! I am very open to adapting my teaching techniques to suit each student as I am aware that every student has a different way of learning. With my strong knowledge of the curriculum (as I had completed it not too long ago) and my passion for the sciences I truly believe that we can get these As together!"></textarea>
  </OneComponentRow>

  <EmptySpaceDivider />

  <!--  About My Session Section-->
  <OneComponentRow two-one>
    <HeadingAndParagraph
        heading="About My Session"
        paragraph="Write in two sentences, a short bio describing yourself"
    />
  </OneComponentRow>

  <OneComponentRow two-one>
    <textarea id="session" class="other-text-areas" placeholder="My name is Laura and I am a masters student at King's College London. I was the Deputy Head Girl at my high school in Surrey and received the science scholarship from the years 2013-2015. Following this, I completed my undergraduate degree at the University of Toronto with a distinction in Biochemistry, Pharmacology and Spanish. I am pursuing my masters degree in Clinical Pharmacology, as I am deeply interested in improving how patients manage therapies. However, when I attended high school, I had thoroughly enjoyed going to my Biology and Chemistry classes. Many students find these subjects particularly overwhelming due to the fact that there is simply too much information to learn all at once. In order to achieve A*s at both IGCSE and A Level Biology, I had come up with a few ways to make what may seem to be a terrifyingly difficult subject much easier to handle. I am a firm believer in repetition being the motherhood of learning, therefore with all my teaching slides I begin with a recap of what was learnt last week"></textarea>
  </OneComponentRow>

  <EmptySpaceDivider />

  <!-- Submit Button -->
  <CreateEntityButton title="Create Tutor" />
</div>
</template>

<style scoped lang="scss">
#tutor-creation-container {
  max-width: 1400px;
  height: calc(100vh - 50px - 73px);
  background-color: #FFFFFF;
  margin-top: 50px;
  margin-left: 40px;
  border-radius: 10px;
  overflow-y: scroll;

  h5 {
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 0;
    margin-bottom: 15px;
  }

  textarea {
    font-weight: 400;
    border-radius: 10px;
    resize: none;
    padding: 10px;
    font-size: 17px;
  }

  textarea#experience {
    width: 950px;
    height: 315px;
    border: 3px solid #716F6F;
  }

  textarea.other-text-areas {
    width: 1050px;
    border: 1px solid #EDEDED;
    background-color: #EDEDED;

    &::placeholder {
      font-size: 17px;
      padding-top: 30px;
      text-align: left;
      line-height: 31px;
    }
  }

  textarea#bio {
    height: 145px;
  }

  textarea#about {
    height: 550px;
  }

  textarea#session {
    height: 415px;
  }
}

.checkboxes-container {
  display: grid;
  grid-template-columns: 1fr 1fr;

  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h4 {
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 20px;
    }

    input, label {
      margin-bottom: 15px;
    }
  }
}
</style>