<template>
  <div
    :id="id"
    class="group grid aspect-square transform-gpu cursor-pointer overflow-hidden shadow-xl transition-transform hover:scale-105 focus:scale-105 active:scale-105"
    :key="id"
  >
    <img
      :src="image"
      :alt="title"
      class="col-[1/2] row-[1/2] h-full w-full object-cover"
    />
    <p
      class="col-[1/2] row-[1/2] h-min w-full translate-y-full place-self-end bg-gradient-to-t from-black py-8 px-2 font-normal text-white transition-transform group-hover:translate-y-0"
    >
      {{ title }}
    </p>
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

const id = props.item.data[0].nasa_id;
const image = props.item.links[0].href;
let title = props.item.data[0].title;
title.length > 64 ? (title = title.substring(0, 64) + '...') : '';
</script>
