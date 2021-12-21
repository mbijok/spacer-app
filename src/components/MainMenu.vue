<template>
  <div
    :class="[
      {
        'text-black dark:text-white': props.appState,
        'text-white': !props.appState,
      },
      'transition duration-300 h-8',
    ]"
  >
    <router-link to="/">spacer</router-link> |
    <router-link to="/about">about</router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  appState: {
    type: Boolean,
    default: false,
  },
});
</script>
