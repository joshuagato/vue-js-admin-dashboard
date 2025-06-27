<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  id: String,
  placeholder: String,
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
  <article class="search-input">
    <input :id="id" v-model="internalValue" :placeholder="placeholder" type="search">
  </article>
</template>

<style scoped lang="scss">
.search-input {
  input {
    //width: 160px;
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    border: 1px solid #D1D3D4;
    background-color: #EDEDED;
    outline: none;
    font-size: 18px;
  }
}
</style>