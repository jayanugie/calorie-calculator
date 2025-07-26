<template>
  <div class="p-6 max-w-4xl mx-auto space-y-6">
    <h1 class="text-2xl font-bold text-center">Calorie Tracker</h1>

    <!-- TABS -->
    <div class="flex space-x-4 justify-center">
      <button @click="activeTab = 'food'" :class="tabClass('food')">
        Food
      </button>
      <button @click="activeTab = 'exercise'" :class="tabClass('exercise')">
        Exercise
      </button>
    </div>

    <!-- FOOD TAB -->
    <div v-if="activeTab === 'food'" class="space-y-4">
      <h2 class="text-xl font-semibold">Add Food</h2>
      <input v-model="newFood.name" placeholder="Food name" class="input" />
      <input
        v-model.number="newFood.amount"
        type="number"
        placeholder="Amount (gr)"
        class="input"
      />
      <input
        v-model.number="newFood.calories"
        type="number"
        placeholder="Calories"
        class="input"
      />
      <button @click="addFood" class="btn">Add Food</button>

      <table class="table-auto w-full mt-4">
        <thead>
          <tr>
            <th>Food</th>
            <th>Amount</th>
            <th>Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(food, i) in foodLog" :key="i">
            <td>{{ food.name }}</td>
            <td>{{ food.amount }}</td>
            <td>{{ food.calories }}</td>
            <td><button @click="removeFood(i)">❌</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- EXERCISE TAB -->
    <div v-if="activeTab === 'exercise'" class="space-y-4">
      <h2 class="text-xl font-semibold">Add Exercise</h2>
      <input v-model="newExercise.name" placeholder="Activity" class="input" />
      <input
        v-model.number="newExercise.duration"
        type="number"
        placeholder="Duration (min)"
        class="input"
      />
      <input
        v-model.number="newExercise.calories"
        type="number"
        placeholder="Calories Burned"
        class="input"
      />
      <button @click="addExercise" class="btn">Add Exercise</button>

      <table class="table-auto w-full mt-4">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Duration</th>
            <th>Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ex, i) in exerciseLog" :key="i">
            <td>{{ ex.name }}</td>
            <td>{{ ex.duration }} min</td>
            <td>{{ ex.calories }}</td>
            <td><button @click="removeExercise(i)">❌</button></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SUMMARY -->
    <div class="mt-6 border-t pt-4 text-center">
      <p>
        🍔 Calories In: <strong>{{ totalCaloriesIn }} kcal</strong>
      </p>
      <p>
        🏃 Calories Out: <strong>{{ totalCaloriesOut }} kcal</strong>
      </p>
      <p>
        📊 Net:
        <strong :class="netCaloriesClass">{{ netCalories }} kcal</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "food",
      newFood: { name: "", amount: 0, calories: 0 },
      newExercise: { name: "", duration: 0, calories: 0 },
      foodLog: [],
      exerciseLog: [],
    };
  },
  computed: {
    totalCaloriesIn() {
      return this.foodLog.reduce((sum, f) => sum + f.calories, 0);
    },
    totalCaloriesOut() {
      return this.exerciseLog.reduce((sum, e) => sum + e.calories, 0);
    },
    netCalories() {
      return this.totalCaloriesIn - this.totalCaloriesOut;
    },
    netCaloriesClass() {
      return this.netCalories > 0 ? "text-red-600" : "text-green-600";
    },
  },
  methods: {
    addFood() {
      if (this.newFood.name && this.newFood.calories > 0) {
        this.foodLog.push({ ...this.newFood });
        this.newFood = { name: "", amount: 0, calories: 0 };
      }
    },
    removeFood(index) {
      this.foodLog.splice(index, 1);
    },
    addExercise() {
      if (this.newExercise.name && this.newExercise.calories > 0) {
        this.exerciseLog.push({ ...this.newExercise });
        this.newExercise = { name: "", duration: 0, calories: 0 };
      }
    },
    removeExercise(index) {
      this.exerciseLog.splice(index, 1);
    },
    tabClass(tab) {
      return this.activeTab === tab
        ? "bg-blue-500 text-white px-4 py-2 rounded"
        : "bg-gray-200 px-4 py-2 rounded";
    },
  },
};
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.btn {
  background-color: #4f46e5;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
}
</style>
