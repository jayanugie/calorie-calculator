<template>
  <div class="bg-custom-beige">
    <div class="flex h-screen">
      <Sidebar />
      <main class="flex-1 p-6 space-y-6 overflow-y-auto lg:px-40">
        <header class="flex items-center justify-between pb-4">
          <div>
            <h1 class="text-2xl font-bold">Halo, {{ username }}</h1>
            <p class="text-gray-400">
              Anda dapat memantau aktivitas Anda di sini
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <SearchCalory />
            <button
              disabled
              class="bg-yellow-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Edit Profil
            </button>
          </div>
        </header>

        <div class="flex space-x-6">
          <TotalCalory />
          <Calendar />
        </div>

        <div class="flex space-x-6">
          <div class="w-1/3 space-y-6">
            <DailyTarget />
            <RecipeOfTheDay />
          </div>

          <YourActivities />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import SearchCalory from "../components/SearchCalory.vue";
import TotalCalory from "../components/TotalCalory.vue";
import Calendar from "../components/Calendar.vue";
import DailyTarget from "../components/DailyTarget.vue";
import RecipeOfTheDay from "../components/RecipeOfTheDay.vue";
import YourActivities from "../components/YourActivities.vue";

export default {
  name: "DashboardView",
  components: {
    Sidebar,
    SearchCalory,
    TotalCalory,
    Calendar,
    DailyTarget,
    RecipeOfTheDay,
    YourActivities,
  },
  data() {
    return {
      username: localStorage.getItem("username").match(/^[^@]+/)[0] || "User",
    };
  },
};
</script>
