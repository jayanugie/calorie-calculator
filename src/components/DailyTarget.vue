<template>
  <div class="bg-dark-gray p-6 rounded-lg shadow-lg">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold text-white">Target Harian</h2>
      <svg
        class="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM11 11h2v6h-2zm0-4h2v2h-2z"
        />
      </svg>
    </div>
    <div class="space-y-4">
      <div>
        <div class="flex justify-between text-sm text-gray-400 mb-1">
          <span>648 of 751</span>
          <span>Batas Kalori</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2.5">
          <div class="bg-red-500 h-2.5 rounded-full" style="width: 86%"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between text-sm text-gray-400 mb-1">
          <span>648 of 751</span>
          <span>Target Pembakaran</span>
        </div>
        <div class="w-full bg-gray-700 rounded-full h-2.5">
          <div class="bg-green-500 h-2.5 rounded-full" style="width: 60%"></div>
        </div>
      </div>
      <button class="text-sm text-white flex items-center">
        Ubah Target
        <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM11 11h2v6h-2zm0-4h2v2h-2z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
