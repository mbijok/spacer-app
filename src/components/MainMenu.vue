<template>
  <div
    :class="[
      {
        'text-black dark:text-white': props.appState,
        'text-white': !props.appState,
      },
      'flex h-24 items-center gap-4 pl-8 text-xl transition duration-300',
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
