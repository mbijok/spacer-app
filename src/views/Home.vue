<template>
  <div :class="{ 'text-black': appStage === 1 }">
    <MainMenu />
  </div>
  <div
    :class="[
      { 'italic ': appStage === 1 },
      'flex flex-col min-h-[calc(100vh-2rem)] justify-center text-center',
    ]"
  >
    <HeroImage :inputNotEmpty="appStage === 1" />
    <Claim v-if="appStage === 0" />
    <SearchInput
      v-model="searchValue"
      @input="handleInput"
      :inputNotEmpty="appStage === 1"
    />
    <Loader v-if="appStage === 0 && loading" />
    <div v-if="items && !loading && appStage === 1">
      <ListItems
        v-for="item in items"
        :item="item"
        :key="item.data[0].nasa_id"
      />
    </div>
  </div>
</template>

<script setup>
/** Import vue objects */
import { ref } from 'vue';

/** Import components */
import MainMenu from '../components/MainMenu.vue';
import HeroImage from '../components/HeroImage.vue';
import Claim from '../components/Claim.vue';
import SearchInput from '../components/SearchInput.vue';
import Loader from '../components/Loader.vue';
import ListItems from '../components/ListItems.vue';

/** Import helper packages */
import axios from 'axios';
import debounce from 'lodash.debounce';

/** Set reactive consts */
const appStage = ref(0);
const loading = ref(false);
const searchValue = ref('');
const items = ref([]);

/** Get response from API */
const api_url = 'https://images-api.nasa.gov/search';
const handleInput = debounce(() => {
  loading.value = true;
  if (searchValue.value != '') {
    axios
      .get(`${api_url}?q=${searchValue.value}&media_type=image`)
      .then((response) => {
        items.value = response.data.collection.items;
        loading.value = false;
        appStage.value = 1;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    appStage.value = 0;
    loading.value = false;
    items.value = [];
  }
}, 500);
</script>
