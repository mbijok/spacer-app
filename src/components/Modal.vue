<template>
  <div class="absolute border-8 inset-x-36 bg-teal-100">
    <p class="text-xl">{{ title }}</p>
    <p>{{ description }}</p>
    <img :src="image" :alt="title" />
    <p>{{ image }}</p>
    <button @click="$emit('closeModal')">close</button>
  </div>
</template>

<script setup>
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
