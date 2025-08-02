<template>
  <div class="p-6 bg-white rounded-lg shadow-lg flex-1">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold">Total Kalori Hari Ini</h2>
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
    <div class="flex items-center justify-between px-20">
      <div class="space-y-2">
        <div class="flex items-center mt-15">
          <div
            class="w-4 h-2 rounded mr-2"
            style="background-color: #fca5a5"
          ></div>
          <span>Masukan Kalori</span>
        </div>
        <div class="flex items-center">
          <div
            class="w-4 h-2 rounded mr-2"
            style="background-color: #fdba74"
          ></div>
          <span>Kalori Terbakar</span>
        </div>
        <div class="flex items-center">
          <div
            class="w-4 h-2 rounded mr-2"
            style="background-color: #6ee7b7"
          ></div>
          <span>Sisa Kalori</span>
        </div>
      </div>
      <div class="relative w-40 h-40">
        <div
          class="absolute inset-0 rounded-full border-8 border-gray-700"
        ></div>
        <div
          class="absolute inset-0 rounded-full border-8 border-yellow-500"
          style="clip: rect(0px, 80px, 80px, 0px); transform: rotate(180deg)"
        ></div>
        <div
          class="absolute inset-0 rounded-full border-8 border-orange-500"
          style="clip: rect(0px, 80px, 40px, 0px); transform: rotate(180deg)"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <span class="text-3xl font-bold">396</span>
            <span class="block text-sm text-gray-400">KALORI</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
