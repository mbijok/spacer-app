<template>
  <div
    @click.prevent.self="closeModal()"
    :class="[
      {
        'opacity-0 ': modalIsOpen == false,
        'opacity-100 ': modalIsOpen == true,
      },
      'transition-opacity delay-[10ms] duration-300',
    ]"
    class="fixed inset-0 z-10 flex items-start justify-center overflow-y-auto bg-black/90 py-12"
  >
    <div
      class="flex min-h-fit max-w-5xl flex-col bg-gray-50 p-8 dark:bg-stone-900"
    >
      <header class="flex items-start justify-between">
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <button @click="[$emit('closeModal'), unlockBody()]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </header>

      <p>{{ description }}</p>
      <img :src="image" :alt="title" />
      <p>{{ image }}</p>
    </div>
  </div>
</template>

<script setup>
/** Import vue objects */
import { ref } from 'vue';

/** Get properties from paretnt component */
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});

/** Set reactive consts */
const modalIsOpen = ref(false);

/** Set variables */
const title = props.item.data[0].title;
const description = props.item.data[0].description;
const image = props.item.links[0].href;

/** Set helper functions */
const lockBody = () => {
  let scrollbarWidth = window.innerWidth - document.body.clientWidth + 'px';
  document.body.classList.add('overflow-hidden');
  document.body.style.paddingInlineEnd = scrollbarWidth;
};
const unlockBody = () => {
  document.body.classList.remove('overflow-hidden');
  document.body.style.paddingInlineEnd = 0;
};
const modalToggle = () => {
  modalIsOpen.value = true;
};
setTimeout(() => {
  modalToggle();
  lockBody();
}, 10);

const emit = defineEmits(['closeModal']);
const closeModal = () => {
  modalIsOpen.value = false;
  setTimeout(() => {
    unlockBody();
    emit('closeModal');
  }, 300);
};
</script>
