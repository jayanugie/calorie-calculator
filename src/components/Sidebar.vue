<template>
  <aside class="w-20 flex flex-col items-center justify-between py-6 ml-10">
    <div>
      <div class="mb-10 text-center">
        <img
          src="../assets/images/calorie-tracker-logo.png"
          alt="calorie tracker logo"
          class="w-12 h-12 mx-auto"
        />
        <p class="font-semibold mt-1">Tracker</p>
      </div>
      <nav class="space-y-6">
        <router-link
          to="/dashboard"
          class="block p-3 text-white bg-light-gray-card rounded-full hover:bg-yellow-500 transition-colors"
        >
          <svg class="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </router-link>
      </nav>
    </div>
    <div class="text-center">
      <a
        href="#"
        class="block p-2 text-gray-400 hover:bg-light-gray-card hover:text-white rounded-lg transition-colors"
      >
        <svg class="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM9 12a3 3 0 106 0 3 3 0 00-6 0z"
          />
        </svg>
      </a>
    </div>
  </aside>
</template>
