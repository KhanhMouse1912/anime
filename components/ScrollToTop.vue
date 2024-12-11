<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-lg"
  >
    ↑
  </button>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    handleScroll() {
      this.isVisible = window.scrollY > 300
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
button {
  transition: opacity 0.3s ease;
}
</style>
