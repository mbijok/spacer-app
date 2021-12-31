<template>
  <div
    :id="id"
    class="
      group
      aspect-square
      grid
      shadow-xl
      hover:scale-105
      transition-transform
      transform-gpu
      overflow-hidden
      cursor-pointer
    "
    :key="id"
  >
    <img
      :src="image"
      :alt="title"
      class="row-[1/2] col-[1/2] object-cover h-full w-full"
    />
    <p
      class="
        row-[1/2]
        col-[1/2]
        place-self-end
        bg-gradient-to-t
        from-black
        text-white
        font-normal
        py-8
        px-2
        h-min
        w-full
        translate-y-full
        group-hover:translate-y-0
        transition-transform
      "
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
