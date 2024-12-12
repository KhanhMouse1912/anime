<template>
  <div class="layout--default">
    <PublicHeader />
    <Nuxt :keep-alive-props="{ max: 5 }" />
    <PublicFooter />
    <SidebarMenuPublic />
  </div>
</template>

<script>
import PublicHeader from '~/components/PublicHeader.vue'
import PublicFooter from '~/components/PublicFooter.vue'
import SidebarMenuPublic from '~/components/SidebarMenuPublic.vue'
  export default {
    name: 'DefaultLayout',
    components: {
      PublicHeader,
      PublicFooter,
      SidebarMenuPublic
    },
  }
</script>

<style lang="scss" scoped>
.layout--default {
  overflow: hidden;
  max-width: 100vw;
}
</style>