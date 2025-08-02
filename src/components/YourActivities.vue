<template>
  <div class="w-2/3 bg-white p-6 rounded-lg shadow-lg">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Aktivitas Anda</h2>
      <button
        class="flex items-center text-sm text-white bg-yellow-500 px-4 py-2 rounded-full font-semibold"
      >
        Aktivitas Baru
        <svg class="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
          />
        </svg>
      </button>
    </div>
    <div class="space-y-4 overflow-y-auto max-h-72`">
      <div v-if="isLoading" class="text-center text-gray-500">
        <p>Memuat daftar aktivitas...</p>
      </div>

      <div v-else-if="error" class="text-center text-red-500">
        <p>Gagal memuat data: {{ error }}</p>
      </div>

      <div
        v-else-if="activities.length === 0"
        class="text-center text-gray-500"
      >
        <p>Tidak ada aktivitas yang tercatat.</p>
      </div>

      <div
        v-else
        v-for="activity in activities"
        :key="activity.activity_id"
        class="flex items-center space-x-4 p-4 bg-custom-beige rounded-lg shadow"
      >
        <div
          class="w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 4a1 1 0 011-1h1a1 1 0 011 1v1h2v14h-6V7h2V6zM11 6v1h2V6H11zm0 2v10h2V8H11z"
            />
          </svg>
        </div>

        <div class="flex-1">
          <h3 class="font-bold">{{ activity.name }}</h3>
          <p class="text-sm text-gray-400">
            {{ new Date(activity.createdAt).toLocaleDateString() }}
          </p>
        </div>

        <div class="text-right">
          <span class="block text-sm font-bold text-green-500">
            Total Kalori: {{ activity.caloriesBurned }} kkal
          </span>
          <a href="#" class="text-gray-400 hover:text-white">...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const activities = ref([]);
const isLoading = ref(true);
const error = ref(null);

const BEARER_TOKEN = localStorage.getItem("caloriecalc_token") || "";
const API_BASE_URL = "http://localhost:2528";

const fetchActivities = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const response = await axios.get(`${API_BASE_URL}/api/activity/list`, {
      params: {
        pages: 1,
        limit: 5,
      },
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    if (response.data && response.data.data && response.data.data.list) {
      activities.value = response.data.data.list;
    } else {
      activities.value = [];
    }
  } catch (err) {
    console.error("Gagal mengambil data aktivitas:", err);
    error.value = err.message || "Terjadi kesalahan saat memuat data.";
    activities.value = [];
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchActivities);
</script>
