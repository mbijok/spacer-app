<template>
  <div>
    <input
      class="
        text-red-500 text-2xl text-center
        font-medium
        placeholder-white/50
        focus:border-white
        border-b-2 border-white/50
        outline-none
        bg-transparent
        w-9/12
        sm:w-3/5
        md:w-1/2
        p-2
        transition-[border-color]
        duration-500
      "
      :class="{ 'text-green-700 bg-gray-100': inputNotEmpty }"
      name="search"
      placeholder="e.g. moon"
      type="text"
      v-model="searchValue"
    />
    <p class="bg-black">
      Results for "{{ modelValue }}" [{{ inputNotEmpty }}] [{{ searchValue }}]
    </p>
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
  inputNotEmpty: {
    type: Boolean,
    default: false,
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
