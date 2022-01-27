<template>
  <div
    class="bg-image-url fixed inset-0 z-[-1] w-screen bg-cover bg-bottom bg-no-repeat brightness-50 transition-[filter] duration-[600ms]"
    :class="{ 'brightness-200 grayscale dark:brightness-[.2]': props.appState }"
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
