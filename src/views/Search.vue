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

      <ul>
        <li v-for="item in results" :key="item.data[0].nasa_id">
          <p>{{ item.data[0].title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import debounce from 'lodash.debounce';

const api_url = 'https://images-api.nasa.gov/search';

const results = ref([]);

const searchValue = ref('');
const handleInput = debounce(() => {
  axios
    .get(`${api_url}?q=${searchValue.value}&media_type=image`)
    .then((response) => {
      results.value = response.data.collection.items;
    })
    .catch((error) => {
      console.log(error);
    });
}, 500);
</script>
