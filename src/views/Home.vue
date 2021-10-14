<template>
  <div>
    <div class="search flex align-center text-center flex-col">
      <HeroImage />
      <Claim />
      <SearchInput v-model="searchValue" @input="handleInput" />

      <ul>
        <li v-for="item in items" :key="item.data[0].nasa_id">
          <p>{{ item.data[0].title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeroImage from '../components/HeroImage.vue';
import Claim from '../components/Claim.vue';
import SearchInput from '../components/SearchInput.vue';

import axios from 'axios';
import debounce from 'lodash.debounce';

const searchValue = ref('');
const items = ref([]);

const api_url = 'https://images-api.nasa.gov/search';

const handleInput = debounce(() => {
  axios
    .get(`${api_url}?q=${searchValue.value}&media_type=image`)
    .then((response) => {
      items.value = response.data.collection.items;
    })
    .catch((error) => {
      console.log(error);
    });
}, 500);
</script>
