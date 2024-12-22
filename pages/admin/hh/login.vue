<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
      <form @submit.prevent="handleLogin">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email Address</label
          >
          <input
            type="text"
            id="email"
            v-model="email"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
            required
          />
        </div>
        <!-- Password Input -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your password"
            required
          />
        </div>
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Login
        </button>
      </form>
      <p class="mt-6 text-center text-sm text-gray-600 mb-0">
        Don't have an account?
        <span class="text-indigo-600 hover:underline mb-0 cursor-pointer">Register here</span>
      </p>
    </div>
  </div>
</template>

<script>
import { adminE, adminP, adminTk } from '~/utils/globals';
export default {
  layout: 'private',
  name: 'LoginAdmin',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLogin() {
      if (!this.email || !this.password) {
        return
      }
      if (this.email === adminE && this.password === adminP) {
        localStorage.setItem('yt-fb-cc-qq', adminTk);
        this.$router.push('/admin/hh/categories');
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
