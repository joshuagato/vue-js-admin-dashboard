<script setup lang="ts">
import { ref, watch } from 'vue';

// Define the interface for a File (which extends Blob).
// This is the correct type to expect from a file input.
interface FileWithMetadata extends File {}

const props = defineProps({
  id: String,
  label: String,
  modelValue: {
    type: Object as () => FileWithMetadata | null, // Use a function for object types in props
    default: null,
  },
})

// Declare the 'update:modelValue' event.
// The event payload will be the selected File or null.
const emit = defineEmits<{
  (e: 'update:modelValue', value: FileWithMetadata | null): void
}>()

// Create an internal reactive variable to hold the selected file.
// Initialize it with the prop's value.
const internalFile = ref<FileWithMetadata | null>(props.modelValue);

/**
 * Handles the change event on the file input.
 * Extracts the selected file(s) and updates the internal state.
 * @param event The native change event from the input element.
 */
const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
  if (target.files && target.files.length > 0) {
    // If multiple files are allowed, you'd handle target.files differently (e.g., set internalFile.value = Array.from(target.files))
    internalFile.value = target.files[0] as FileWithMetadata; // Get the first selected file
  } else {
    internalFile.value = null; // No file selected
  }
};

// Watch for changes to the internalFile (when a file is selected or deselected)
watch(internalFile, (newValue) => {
  // Emit the 'update:modelValue' event with the new File or null.
  // The parent component's v-model will catch this.
  emit('update:modelValue', newValue);
});

// Watch for changes to the modelValue prop itself (if the parent updates it programmatically)
watch(() => props.modelValue, (newPropValue) => {
  // Update internalFile only if the prop's value is different from the current internal state
  // This prevents infinite loops if the value is already in sync.
  if (newPropValue !== internalFile.value) {
    internalFile.value = newPropValue;
  }
}, { deep: true }); // Use deep: true if the File object itself could be mutated (less common for File)


</script>

<template>
  <article class="file-input">
    <label class="label" :for="id">{{label}}</label>
    <input :id="id" @change="onFileChange" type="file">
  </article>
</template>

<style scoped lang="scss">
.file-input {
  display: flex;
  flex-direction: column;

  .label {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  input {
    //width: 465px;
    height: 68px;
    padding-left: 15px;
    padding-top: 18px;
    border-radius: 10px;
    border: 3px solid #716F6F;
    outline: none;
    font-size: 18px;
  }
}
</style>