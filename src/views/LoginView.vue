<template>
  <div class="h-screen bg-gray-100 relative flex items-center justify-center">
    <div class="flex w-6xl mx-auto items-center justify-center bg-gray-100">
      <div class="centered-card bg-white">
        <div class="hidden md:block md:w-4/5">
          <img
            src="../assets/images/woman-eating.png"
            alt="Woman eating breakfast"
            class="object-cover h-full w-full"
          />
        </div>

        <div
          class="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-custom-beige"
        >
          <div class="mb-8 text-center md:text-left">
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
              Selamat Datang!
            </h2>
          </div>

          <form class="space-y-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Login</label
              >
              <input
                v-model="email"
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan Email"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <div class="relative mt-1">
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Masukkan password"
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

            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center">
                <input
                  v-model="rememberMe"
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label for="remember_me" class="ml-2 block text-gray-900">
                  Ingat saya
                </label>
              </div>
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500"
                >Lupa password?</a
              >
            </div>

            <div>
              <button
                @click.prevent="handleLogin"
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Sign In
              </button>
            </div>
          </form>

          <div class="mt-6 text-center text-sm">
            <p class="text-gray-600">
              Belum punya akun?
              <router-link
                to="/register"
                class="font-medium text-blue-600 hover:text-blue-500 ml-1"
                >Daftar disini</router-link
              >
            </p>
          </div>

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
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      error: null,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const loginResponse = await axios.post(
          `${this.API_BASE_URL}/api/auth/login`,
          {
            email: this.email,
            password: this.password,
          }
        );

        const responseData = loginResponse.data.meta_data;

        if (responseData.status !== 200) {
          alert(responseData.message);
          return;
        }

        alert(responseData.message);

        const fatsecretToken = await this.getFatSecretToken();

        localStorage.setItem("fatsecret_token", fatsecretToken);

        this.$router.push("/dashboard");
      } catch (err) {
        console.error("Login error:", err);
        this.error = "Gagal login. Silakan coba lagi.";
      }
    },

    async getFatSecretToken() {
      try {
        const response = await axios.post(
          "/auth/connect/token", // proxy path
          new URLSearchParams({
            grant_type: "client_credentials",
            client_id: "8b4d41fa4d164cae80ecf660e75d287b",
            client_secret: "2bae2af2808c4c8b971c6e2f686de17e",
            scope: "basic",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        return response.data.access_token;
      } catch (error) {
        console.error("Gagal mengambil token FatSecret:", error);
        return null;
      }
    },
  },
};
</script>
