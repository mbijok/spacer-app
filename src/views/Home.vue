<template>
  <div
    :class="[
      { italic: appStep === 1 },
      'flex flex-col min-h-[calc(100vh-2rem)] justify-center text-center',
    ]"
  >
    <HeroImage :inputNotEmpty="appStep === 1" />
    <Claim v-if="appStep === 0" />
    <SearchInput
      v-model="searchValue"
      @input="handleInput"
      :inputNotEmpty="appStep === 1"
    />
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
const appStep = ref(0);
const loading = ref(false);
const searchValue = ref('');
const items = ref([]);

/** Get response from API */
const api_url = 'https://images-api.nasa.gov/search';
const handleInput = debounce(() => {
  loading.value = true;
  axios
    .get(`${api_url}?q=${searchValue.value}&media_type=image`)
    .then((response) => {
      items.value = response.data.collection.items;
      loading.value = false;
      appStep.value = 1;
    })
    .catch((error) => {
      console.log(error);
    });
}, 500);
</script>
