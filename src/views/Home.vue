<template>
  <div :class="{ 'dark:bg-slate-800': appLoading || appState === 1 }">
    <BackgroundImage :appState="appLoading || appState === 1" />
    <MainMenu :appState="appLoading || appState === 1" />
    <div
      :class="[
        {
          'justify-center ': !appLoading && appState === 0,
          'justify-start ': appLoading || appState === 1,
        },
        'text-center flex flex-col min-h-[calc(100vh-2rem)]',
      ]"
    >
      <Header v-if="!appLoading && appState === 0" />
      <SearchInput
        v-model="searchValue"
        @input="handleInput"
        :emptyInput="!appLoading && appState === 0"
      />
      <Loader v-if="appLoading && appState === 0" />
      <div
        v-if="items && !appLoading && appState === 1"
        class="
          grid
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          2xl:grid-cols-5
          gap-6
          m-12
        "
      >
        <ListItems
          v-if="items"
          v-for="item in items"
          :item="item"
          :key="item.data[0].nasa_id"
          @click="handleModalOpen(item)"
        />
      </div>
      <div
        v-if="Object.keys(items).length === 0 && !appLoading && appState === 1"
      >
        No results :( But try something else!
      </div>
      <Modal
        v-if="modalOpen"
        :item="modalItem"
        @closeModal="modalOpen = false"
      />
    </div>
  </div>
</template>

<script setup>
/** Import vue objects */
import { ref } from 'vue';

/** Import components */
import BackgroundImage from '../components/BackgroundImage.vue';
import MainMenu from '../components/MainMenu.vue';
import Header from '../components/Header.vue';
import SearchInput from '../components/SearchInput.vue';
import Loader from '../components/Loader.vue';
import ListItems from '../components/ListItems.vue';
import Modal from '../components/Modal.vue';

/** Import helper packages */
import axios from 'axios';
import debounce from 'lodash.debounce';

/** Set reactive consts */
const appState = ref(0);
const appLoading = ref(false);
const searchValue = ref('');
const items = ref([]);
const modalOpen = ref(false);
const modalItem = ref([]);

/** Get response from API */
const api_url = 'https://images-api.nasa.gov/search';
const handleInput = debounce(() => {
  appLoading.value = true;
  if (searchValue.value != '') {
    axios
      .get(`${api_url}?q=${searchValue.value}&media_type=image`)
      .then((response) => {
        items.value = response.data.collection.items;
        appLoading.value = false;
        appState.value = 1;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    items.value = [];
    appLoading.value = false;
    appState.value = 0;
  }
}, 500);

/** Handle Modal */
const handleModalOpen = (item) => {
  modalOpen.value = true;
  modalItem.value = item;
};
</script>
