<template>
  <div class="h-screen bg-gray-100 relative flex items-center justify-center">
    <div class="flex w-6xl mx-auto items-center justify-center bg-gray-100">
      <div class="centered-card bg-white">
        <div class="hidden md:flex md:w-4/5 flex-col p-8 text-white relative">
          <div class="background-image-container">
            <img
              src="../assets/images/running-man.png"
              alt="Running man"
              class="object-cover h-full w-full"
            />
            />
            <div class="image-overlay"></div>
          </div>
          <h2
            class="text-2xl lg:text-3xl font-bold mb-4 text-center z-10 mt-14"
          >
            Basal Metabolic Rate Anda :
          </h2>
          <p
            class="text-2xl lg:text-3xl font-extrabold text-yellow-300 text-center z-10"
          >
            1,660 kalori/hari
          </p>
        </div>

        <div
          class="w-full md:w-1/2 p-8 lg:p-10 flex flex-col justify-start overflow-y-auto bg-custom-beige"
        >
          <div class="mb-6 text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start mb-4">
              <img
                src="../assets/images/calorie-tracker.png"
                alt="calorie tracker logo"
                class="w-44"
              />
            </div>
            <h2
              class="text-2xl font-bold text-gray-800 mt-6 mb-2 text-center md:text-left"
            >
              Buat akun baru
            </h2>
          </div>

          <form class="space-y-4">
            <div>
              <label
                for="fullName"
                class="block text-sm font-medium text-gray-700"
                >Nama</label
              >
              <input
                v-model="fullName"
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Masukkan nama anda"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                for="height"
                class="block text-sm font-medium text-gray-700"
                >Tinggi Badan</label
              >
              <input
                v-model="height"
                type="text"
                id="height"
                name="height"
                placeholder="Masukkan tinggi badan anda"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                for="weight"
                class="block text-sm font-medium text-gray-700"
                >Berat Badan</label
              >
              <input
                v-model="weight"
                type="text"
                id="weight"
                name="weight"
                placeholder="Masukkan berat badan anda"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label for="dob" class="block text-sm font-medium text-gray-700"
                >Tanggal Lahir</label
              >
              <div class="relative mt-1">
                <input
                  v-model="dob"
                  type="date"
                  id="dob"
                  name="dob"
                  placeholder="dd-mm-yyyy"
                  class="block w-full px-3 py-2 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <input
                v-model="email"
                type="email"
                id="email_reg"
                name="email_reg"
                placeholder="Masukkan Email"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                for="password_reg"
                class="block text-sm font-medium text-gray-700"
                >Buat Password</label
              >
              <div class="relative mt-1">
                <input
                  v-model="password"
                  type="password"
                  id="password_reg"
                  name="password_reg"
                  placeholder="Masukkan password baru anda"
                  class="block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <span
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  <svg
                    class="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div class="pt-2">
              <label class="block text-sm font-medium text-gray-700"
                >Gender:</label
              >
              <div class="mt-1 flex space-x-4">
                <div class="flex items-center">
                  <input
                    v-model="gender"
                    id="gender_pria"
                    name="gender"
                    type="radio"
                    value="Male"
                    class="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                  />
                  <label for="gender_pria" class="ml-2 block text-gray-900">
                    Pria
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    v-model="gender"
                    id="gender_wanita"
                    name="gender"
                    type="radio"
                    value="Female"
                    class="focus:ring-orange-500 h-4 w-4 text-orange-600 border-gray-300"
                  />
                  <label for="gender_wanita" class="ml-2 block text-gray-900">
                    Wanita
                  </label>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <button
                @click.prevent="handleRegister"
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Register
              </button>
            </div>
          </form>

          <div class="mt-10 text-center text-xs text-gray-500">
            &copy; Calorie Tracker 2025
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterView",
  data() {
    return {
      fullName: "",
      height: "",
      weight: "",
      dob: "",
      email: "",
      password: "",
      gender: "",
    };
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post(
          `${this.API_BASE_URL}/api/auth/register`,
          {
            fullName: this.fullName,
            height: this.height,
            weight: this.weight,
            dob: this.dob,
            email: this.email,
            password: this.password,
            username: this.email,
            gender: this.gender,
          }
        );
        const responseData = response.data.meta_data;
        if (responseData.status !== 200) {
          alert(responseData.message);
          return;
        } else {
          alert(responseData.message);
          this.$router.push("/");
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
