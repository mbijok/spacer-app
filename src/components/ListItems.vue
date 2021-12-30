<template>
  <div
    :id="id"
    class="group aspect-square grid border-4 overflow-hidden cursor-pointer"
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
        from-black/75
        via-black/75
        text-white
        font-semibold
        pt-8
        pb-2
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
const title = props.item.data[0].title;
const image = props.item.links[0].href;
</script>
