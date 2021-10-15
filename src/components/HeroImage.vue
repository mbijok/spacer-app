<template>
  <div
    class="
      bg-hero-image
      fixed
      -z-1
      inset-0
      bg-no-repeat bg-bottom bg-cover
      after:absolute after:contents after:inset-0 after:bg-black/30
    "
    :class="{ 'darkw lol': inputNotEmpty }"
  ></div>
</template>

<script setup>
/** Get properties from parent component */
const props = defineProps({
  inputNotEmpty: {
    type: Boolean,
    default: false,
  },
});
</script>
