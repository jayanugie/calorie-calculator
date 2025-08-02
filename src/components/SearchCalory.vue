<template>
  <div class="relative">
    <input
      :disabled="disabledInput"
      type="text"
      v-model="searchQuery"
      @keyup.enter="performSearch"
      placeholder="Cari data kalori"
      class="bg-white shadow-lg placeholder-gray-400 rounded-lg py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-1 focus:ring-yellow-500"
    />
    <svg
      v-show="searchResults.length == 0"
      class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 30 30"
      @click="performSearch"
    >
      <path
        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
      ></path>
    </svg>
    <img
      @click="
        searchResults = [];
        searchQuery = '';
        hasSearched = false;
        disabledInput = false;
      "
      v-show="searchResults.length > 0"
      class="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
      src="../assets/icons/cross.png"
      alt="cross"
    />

    <div
      v-if="!isLoading && searchResults.length > 0"
      class="absolute w-full mt-2 bg-white shadow-lg rounded-lg max-h-64 overflow-y-auto z-10 p-2"
    >
      <ul>
        <li
          v-for="food in searchResults"
          :key="food.food_id"
          class="p-2 hover:bg-gray-100 cursor-pointer rounded-md"
        >
          <h3 class="font-semibold text-sm">{{ food.food_name }}</h3>
          <p class="text-gray-500 text-xs mt-0.5">
            {{ food.food_description }}
          </p>
          <a
            :href="food.food_url"
            target="_blank"
            class="text-xs text-yellow-600 hover:underline mt-2 inline-block"
          >
            Lihat Detail
          </a>
        </li>
      </ul>
    </div>

    <div
      v-if="isLoading"
      class="absolute w-full mt-2 bg-white shadow-lg rounded-lg p-4 z-10 text-center text-gray-500"
    >
      Mencari data...
    </div>

    <div
      v-if="!isLoading && searchResults.length === 0 && hasSearched"
      class="absolute w-full mt-2 bg-white shadow-lg rounded-lg p-4 z-10 text-center text-gray-500"
    >
      Tidak ada hasil ditemukan.
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const searchQuery = ref("");
const searchResults = ref([]);
const isLoading = ref(false);
const hasSearched = ref(false);
const disabledInput = ref(false);

const API_URL = "/api/rest/foods/search/v1"; // proxy path
const API_KEY_FATSECRET = localStorage.getItem("fatsecret_token") || "";

const performSearch = async () => {
  if (searchQuery.value.trim() === "") {
    searchResults.value = [];
    hasSearched.value = false;
    return;
  }

  isLoading.value = true;
  hasSearched.value = true;
  disabledInput.value = true;

  try {
    const response = await axios.get(API_URL, {
      params: {
        search_expression: searchQuery.value,
        format: "json",
      },
      headers: {
        Authorization: `Bearer ${API_KEY_FATSECRET}`,
      },
    });

    const foods = response.data?.foods?.food;
    searchResults.value = Array.isArray(foods) ? foods : [foods];
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data:", error);
    searchResults.value = [];
  } finally {
    isLoading.value = false;
  }
};
</script>
