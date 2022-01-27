<template>
  <div>
    <p
      :class="[
        {
          'text-white': emptyInput,
          'text-black dark:text-white': !emptyInput,
        },
        'mx-10 mb-3',
      ]"
    >
      Type anything space-related to start:
    </p>
    <input
      :class="[
        {
          'border-b-2 border-white/50 bg-transparent text-white placeholder-white/50 focus-within:border-white':
            emptyInput,
        },
        {
          'dark:bg-zink-900 border-b-2 border-black/25 bg-transparent text-black focus-within:border-black dark:border-white/50 dark:text-white dark:focus-within:border-white':
            !emptyInput,
        },
        'w-9/12 p-2 text-center text-4xl font-medium outline-none transition-[border-color] duration-300 sm:w-3/5 md:w-1/2',
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
const emit = defineEmits(['update:modelValue']);
const searchValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});
</script>
