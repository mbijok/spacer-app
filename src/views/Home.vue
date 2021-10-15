<template>
  <div
    class="flex flex-col min-h-[calc(100vh-2rem)] justify-center text-center"
  >
    <HeroImage />
    <Claim />
    <SearchInput v-model="searchValue" @input="handleInput" />
    <ListItems :items="items" />
  </div>
</template>

<script setup>
/** Import vue objects */
import { ref } from 'vue';

/** Import components */
import HeroImage from '../components/HeroImage.vue';
import Claim from '../components/Claim.vue';
import SearchInput from '../components/SearchInput.vue';
import ListItems from '../components/ListItems.vue';

/** Import helper packages */
import axios from 'axios';
import debounce from 'lodash.debounce';

/** Set reactive consts */
const searchValue = ref('');
const items = ref([]);

/** Get response from API */
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
