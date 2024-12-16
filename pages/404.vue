<template>
  <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="text-center">
      <h1 class="text-9xl font-extrabold text-gray-900">404</h1>
      <p class="text-2xl md:text-3xl font-semibold text-gray-600 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p class="mt-4 text-gray-500">
        It looks like the page you were trying to reach is not available.
      </p>
      <div class="mt-6">
        <nuxt-link
          to="/"
          class="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Go Back Home
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	layout: "empty"
}
</script>

<style lang="scss" scoped></style>
