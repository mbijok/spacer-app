<template>
  <ul>
    <li v-for="item in props.items" :key="item.data[0].nasa_id">
      <p>{{ item.data[0].title }}</p>
    </li>
  </ul>
</template>

<script setup>
/** Get properties from parent component */
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
});
</script>
