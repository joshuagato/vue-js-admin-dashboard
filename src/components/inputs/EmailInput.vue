<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  id: String,
  label: String,
  modelValue: String,
})

const internalValue = ref(props.modelValue);

// - Declare the 'update:modelValue' event
const emit = defineEmits(['update:modelValue'])

// Watch for changes to the internalValue
watch(internalValue, (newValue) => {
  // When internalValue changes, emit the 'update:modelValue' event
  // with the new value. The parent component's v-model will catch this.
  emit('update:modelValue', newValue)
})

// Optionally, watch for changes to the modelValue prop itself.
// This is important if the parent updates modelValue programmatically
// and the internal input should reflect that external change.
watch(() => props.modelValue, (newPropValue) => {
  if (newPropValue !== internalValue.value) { // Prevent infinite loop if already in sync
    internalValue.value = newPropValue;
  }
});

</script>

<template>
  <article class="email-input">
    <label class="label" :for="id">{{label}}</label>
    <input :id="id" v-model="internalValue" type="email">
  </article>
</template>

<style scoped lang="scss">
.email-input {
  display: flex;
  flex-direction: column;

  .label {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  input {
    //width: 350px;
    height: 68px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    border: 3px solid #716F6F;
    outline: none;
    font-size: 18px;
  }
}
</style>