<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed"
  >
    <!-- ↑ -->
    <a-back-top />
  </button>
</template>

<script>
export default {
  name: "ScrollToTop",
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
      this.isVisible = window.scrollY > 150
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
