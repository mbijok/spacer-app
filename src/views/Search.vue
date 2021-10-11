<template>
  <div>
    <div class="search flex align-center text-center flex-col">
      <label for="search">Search</label>
      <input
        class="border-b-2 w-1/2 m-auto"
        name="search"
        v-model="searchValue"
        @input="handleInput"
      />
      <p>{{ searchValue }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchValue = ref('');

function handleInput() {
  console.log(searchValue.value);
}
</script>
