<template>
  <div class="bg-dark-gray p-6 rounded-lg shadow-lg">
    <h2 class="text-white text-xl font-semibold mb-4">Recipe Of The Day</h2>
    <div
      v-if="isLoading"
      class="flex justify-center items-center h-20 text-white"
    >
      <p>Memuat resep...</p>
    </div>
    <div v-else-if="recipe" class="flex items-center space-x-4">
      <a :href="recipe.recipe_url" target="_blank">
        <h3 class="font-bold text-yellow-500">{{ recipe.recipe_name }}</h3>
        <p
          class="text-sm text-gray-400 line-clamp-3"
          v-html="recipe.recipe_description"
        ></p>
      </a>
    </div>
    <div v-else class="text-white text-center">
      <p>Gagal memuat resep. Silakan coba lagi.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const recipe = ref(null);
const isLoading = ref(true);

const API_URL = "/api/rest/recipe/v2"; // proxy path
const API_KEY_FATSECRET = localStorage.getItem("fatsecret_token") || "";

const getRandomRecipeId = () => {
  return Math.floor(Math.random() * 1000) + 1;
};

const fetchRecipe = async (recipeId) => {
  isLoading.value = true;
  try {
    const response = await axios.get(API_URL, {
      params: {
        recipe_id: recipeId,
        format: "json",
      },
      headers: {
        Authorization: `Bearer ${API_KEY_FATSECRET}`,
      },
    });

    if (response.data && response.data.recipe) {
      recipe.value = response.data.recipe;
    } else {
      recipe.value = null;
    }
  } catch (error) {
    console.error("Gagal mengambil data resep:", error);
    recipe.value = null;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  const randomId = getRandomRecipeId();
  fetchRecipe(randomId);
});
</script>
