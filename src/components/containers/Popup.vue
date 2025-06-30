<script setup lang="ts">
import {ref} from "vue";

defineProps({
  handlePopUp: {
    type: Function,
    required: true
  }
})

const handleClick = () => {}
</script>

<template>
  <section id="backdrop" @click.stop="handlePopUp">
    <section id="popup-content" @click.stop="handleClick">
      <h2 class="heading">Job Page</h2>

      <h4 class="sub-heading">Job Details</h4>
      <table class="table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Client</th>
            <th>Subject</th>
            <th>Level</th>
            <th>Curriculum</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paul Osah</td>
            <td>Hannah Kantey</td>
            <td>Maths</td>
            <td>A Level</td>
            <td>A Level</td>
            <td>Accra</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
        <tr>
          <th>Start Date</th>
          <th>Session Value (GHC)</th>
          <th>Expense (GHC)</th>
          <th style="width: 400px">Session Description</th>
          <th>Submission Status</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>12/03/2025</td>
          <td>2000</td>
          <td>200</td>
          <td style="width: 400px">This first year IB Student recently changed subjects and has missed 6 months of ESS Learning</td>
          <td><label class="pending">Pending</label></td>
        </tr>
        </tbody>
      </table>

      <div class="buttons-section">
        <button class="assign">Assign Tutor</button>
        <button class="paused">Paused Job</button>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
#backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  #popup-content {
    width: 1260px;
    height: 767px;
    background-color: #FFF;
    padding-left: 30px;
    padding-right: 30px;

    .heading {
      text-align: center;
      margin-top: 25px;
      margin-bottom: 35px;
      font-size: 25px;
      font-weight: 500;
    }

    .sub-heading {
      font-size: 21px;
      font-weight: 500;
      margin-bottom: 40px;
    }

    table {
      margin-bottom: 145px;

      thead {
        tr {
          th {
            font-weight: 700;
            font-size: 18px;
            width: 200px;
            text-align: left;
            border-bottom: 2px solid #D9D9D9;
          }
        }
      }

      tbody {
        tr {
          td {
            padding-top: 15px;
            font-weight: 500;
            font-size: 18px;
            width: 200px;
            text-align: left;
          }

          label {
            display: inline-block;
            font-weight: 500;
            font-size: 14px;
            border-radius: 5px;
            padding: 8px 15px 8px 15px;

            &.pending {
              background-color: #FE9E9E;
            }
          }
        }
      }
    }

    .buttons-section {
      display: flex;
      gap: 35px;
      justify-content: flex-end;

      button {
        font-weight: 500;
        font-size: 14px;
        border-radius: 5px;
        padding: 8px 15px 8px 15px;
        border: none;
        cursor: pointer;

        &.assign {
          background-color: #9CFFC5;
        }

        &.paused {
          background-color: #FE9E9E;
        }
      }
    }
  }
}
</style>