<template>
  <div>
    <!-- li v-for="item in props.items" :key="item.data[0].nasa_id" -->
    <p class="text-xl">{{ title }}</p>
    <p>{{ description }}</p>
    <img :src="image" :alt="title" />
    <p>{{ image }}</p>
  </div>
</template>

<script setup>
/** Get properties from parent component */
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});

const title = props.item.data[0].title;
const description = props.item.data[0].description;
const image = props.item.links[0].href;
</script>
