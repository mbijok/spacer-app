<template>
  <div class="flex flex-col">
    <input
      class="border-b-2 w-1/2 m-auto"
      name="search"
      type="text"
      v-model="searchValue"
    />
    <p>Results for "{{ modelValue }}"</p>
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
});

/** Update variable and emit (send) to parent */
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
