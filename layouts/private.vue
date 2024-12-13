<template>
  <div class="flex items-start w-full bg-[#f1f1f173] gap-4">
    <SidebarMenuPrivate />
    <div class="flex w-full flex-col flex-1">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { adminTk } from '~/utils/globals'
import SidebarMenuPrivate from '~/components/SidebarMenuPrivate.vue'
export default {
  name: 'PrivateLayout',
  components: { SidebarMenuPrivate },
  data() {
    return {
      adminTk,
    }
  },
  methods: {
    checkLogged() {
      if (process.client) {
        const token = localStorage?.getItem('yt-fb-cc-qq')
        if (token && token === this.adminTk) {
          this.$router.push('/admin/hh/categories/lists')
        } else {
          this.$router.push('/admin/hh/login')
        }
      }
    },
  },
  created() {
    this.checkLogged()
  },
}
</script>

<style lang="scss" scoped></style>
