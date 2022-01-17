<template>
  <div
    class="bg-image-url fixed z-[-1] inset-0 bg-no-repeat bg-bottom bg-cover after:absolute after:contents after:inset-0 after:bg-black/30 transition-opacity duration-300"
    :class="{ 'opacity-0': props.appState }"
  ></div>
</template>

<script setup>
/** Get properties from parent component */
const props = defineProps({
  appState: {
    type: Boolean,
    default: false,
  },
});
</script>
