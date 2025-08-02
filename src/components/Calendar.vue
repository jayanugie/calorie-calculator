<template>
  <div class="w-1/3">
    <Calendar
      borderless
      class="shadow-lg rounded-lg"
      is-dark="false"
      :attributes="attrs"
      expanded
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Calendar } from "v-calendar";
import "v-calendar/style.css";

const attrs = ref([
  {
    highlight: true,
    dates: new Date(),
  },
]);
</script>
