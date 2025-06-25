<script setup lang="ts">

defineProps({
  id: String,
  label: String,
})

</script>

<template>
  <article class="checkbox">
    <input :id="id" type="checkbox" :value="label" />
    <label :for="id">{{ label }}</label>
  </article>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;

  label {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>