<template>
  <div>
    <p
      :class="[
        {
          'text-white': emptyInput,
          'text-black dark:text-white': !emptyInput,
        },
        'mb-3 mx-10',
      ]"
    >
      Type anything space-related to start:
    </p>
    <input
      :class="[
        {
          'text-white bg-transparent placeholder-white/50 focus-within:border-white border-b-2 border-white/50':
            emptyInput,
        },
        {
          'text-black dark:text-white bg-transparent dark:bg-stone-800 focus-within:border-black dark:focus-within:border-white border-b-2 border-black/25 dark:border-white/50':
            !emptyInput,
        },
        'text-4xl text-center font-medium outline-none w-9/12 sm:w-3/5 md:w-1/2 p-2 transition-[border-color] duration-300',
      ]"
      v-model="searchValue"
      name="search"
      placeholder="e.g. moon"
      type="text"
    />
  </div>
</template>

<script setup>
/** Import vue objects */
import { computed } from 'vue';

/** Get properties from parent component */
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  emptyInput: {
    type: Boolean,
    default: true,
  },
});

/** Update variable and emit to parent */
const searchValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
const emit = defineEmits(['update:modelValue']);
</script>
