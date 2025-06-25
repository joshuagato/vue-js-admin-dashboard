<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  twoOne: { type: Boolean, default: false },
  oneTwo: { type: Boolean, default: false },
})

const gridStyle = computed(() => {
  let columns = '';

  if (props.oneTwo) {
    // If 'oneTwo' is true, set columns to 1fr 2fr
    columns = '1fr 2fr';
  } else if (props.twoOne) {
    // If 'oneTwoTwo' is false but 'twoOne' is true, set columns to 2fr 1fr
    columns = '2fr 1fr';
  } else {
    // Default fallback if neither prop is true
    // You might want a different default, e.g., '1fr 1fr' for two equal columns
    columns = '1fr 1fr'; // Default to two equal columns
    console.warn("Neither 'oneTwoTwo' nor 'twoOne' props are true. Using default '1fr 1fr'.");
  }

  // Return the style object. Vue automatically converts camelCase 'gridTemplateColumns'
  // to kebab-case 'grid-template-columns' in the actual CSS.
  return {
    gridTemplateColumns: columns
  };
});
</script>

<template>
  <div class="two-component-row" :style="gridStyle">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.two-component-row {
  margin-left: 80px;
  margin-bottom: 40px;
  width: calc(100% - 80px - 80px);
  display: grid;
  gap: 40px;
}
</style>