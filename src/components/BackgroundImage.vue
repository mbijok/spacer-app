<template>
  <div
    class="bg-image-url w-screen fixed z-[-1] brightness-50 inset-0 bg-no-repeat bg-bottom bg-cover transition-[filter] duration-[600ms]"
    :class="{ 'brightness-200 dark:brightness-[.2] grayscale': props.appState }"
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
