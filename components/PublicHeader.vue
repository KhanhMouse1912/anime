<template>
  <header id="header">
    <div class="container">
      header
      <nuxt-link to="/">Homepage</nuxt-link>
      <nuxt-link to="facebook.com">Facebook</nuxt-link>
      <nuxt-link to="/videos/eh-adi-d2">Details Video</nuxt-link>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "PublicHeader",
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState({
        categories: (state) => state.categories,
      }),
    }
  }
</script>

<style lang="css" scoped>
#header {
  background: #2a2c31;
  height: 70px;
  padding: 0;
}
</style>