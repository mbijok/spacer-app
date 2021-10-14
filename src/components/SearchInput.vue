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
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

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
