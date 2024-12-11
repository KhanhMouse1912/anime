<template>
  <div>
    <PublicHeader />
    <Nuxt :keep-alive-props="{ max: 5 }" />
    <PublicFooter />
  </div>
</template>

<script>
import PublicHeader from '~/components/PublicHeader.vue'
import PublicFooter from '~/components/PublicFooter.vue'
  export default {
    name: 'DefaultLayout',
    components: {
      PublicHeader,
      PublicFooter
    },
  }
</script>

<style lang="scss" scoped>

</style>